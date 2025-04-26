import { Types } from "./kurs.mjs";

export class subjectList {
    #listSubjects = [];

    constructor(listSubjects){
        this.#listSubjects = listSubjects;
    }

    get listSubjects(){
        return this.#listSubjects;
    }

    addSubject(subject){
        return this.#listSubjects.push(subject);
    }

    get numberOfAllCourses(){
        let sum = 0;
        this.#listSubjects.forEach(subject=>{
            sum += subject.getAnzahlKurse;
        });
        return sum;
    }

    removeLastSubject(){
        return this.#listSubjects.pop();
    }

    updateSubject(index, subject){
        this.#listSubjects[index] = subject;
    }

    get sortedLKs(){
        let sortedLKs = [];
        this.#listSubjects.forEach((subject, index) => {
            if(subject.isLeistungsfach){
                sortedLKs.push(subject);
            }
        });
        sortedLKs = this.sortListByMittelwertPunkte(sortedLKs);
        return sortedLKs;
    }

    get sortedMuendlPruefs(){
        let sortedMuendlPruefs = [];
        this.#listSubjects.forEach((subject) => {
            if(subject.muendlichePruefung){
                sortedMuendlPruefs.push(subject);
            }
        });
        sortedMuendlPruefs = this.sortListByMittelwertPunkte(sortedMuendlPruefs);
        return sortedMuendlPruefs;
    }

    sortListByMittelwertPunkte(list){
        return list.sort(function (a, b) {
            return b.mittelwertPunkte - a.mittelwertPunkte;
        });
    }

    hasName(subject, name){
        return subject.fachTyp.name == name;
    }

    getFachByName(name){
        return this.#listSubjects.find((subject) => { return this.hasName(subject, name)});
    }

    getFachIndexByName(name){
        let index = this.#listSubjects.findIndex((subject) => { return this.hasName(subject, name)});
        return index;
    }

    getFaecherListByType(type){
        return this.#listSubjects.filter((fach) => fach.fachTyp.type == type);
    }

    getFaecherListByTypeNotLKOrMdlSorted(type){
        return this.sortListByMittelwertPunkte(this.getFaecherListByType(type).filter((fach) => !fach.isLeistungsfach && !fach.muendlichePruefung));
    }

    getFachNotLKOrMdl(name){
        let result = this.getFachByName(name);
        if(typeof result != "object"){
            return false;
        }else if(result.isLeistungsfach || result.muendlichePruefung) {
            return false;
        }
        return result;
    }

    removeCourseOfFach(name, courseIndex){
        const fachIndex = this.getFachIndexByName(name);
        if (fachIndex !== -1) {
            this.#listSubjects[fachIndex].removeCourse(courseIndex);
        }
    }

    copy() {
        // Erstelle eine neue Instanz von subjectList
        const copiedList = new subjectList([]);
        // Kopiere die Inhalte von #listSubjects
        copiedList.#listSubjects = this.#listSubjects.map(subject => {
            return subject.copy ? subject.copy() : { ...subject };
        });
        return copiedList;
    }
}

export class selection{

    #subjects;
    #scoreCourseList = [];
    #availableFaecherForScoring;

    constructor(listSubjects){
        this.#subjects = listSubjects;
        this.#availableFaecherForScoring = listSubjects.copy();
    }

    checkForError (){
        //check number of courses

        //check exam subjects
        //check necessary subjects 
    }

    printError(error){
        document.getElementById("score").innerHTML = `wrong selection of courses, error: ${error}`;
    }

    LKOrMdlHasType(type){
        let result = false;
        this.#subjects.sortedLKs.forEach((subject) => {
            if(subject.fachTyp.type == type){
                result = true;
            }
        });

        this.#subjects.sortedMuendlPruefs.forEach((subject) => {
            if(subject.fachTyp.type == type){
                result = true;
            }
        });
        return result;
    }

    addFachNotLKOrMdlToScoreList(name, courseAmount){
        let fachToAdd = this.#subjects.getFachNotLKOrMdl(name);
        if(fachToAdd != false) {
            let coursesOfFachToAdd = fachToAdd.belegteKurseList.sort(function (a, b) {b.note - a.note});
            for(let i = 0; i<coursesOfFachToAdd.length && i<courseAmount; i++){
                this.#scoreCourseList.push(coursesOfFachToAdd[i]);
                this.#availableFaecherForScoring.removeCourseOfFach(fachToAdd.name, i);
            }
        }
    }

    addCoursesOfSubjectToList(subject){
        let belegtCourseList = subject.belegteKurseList;
        for(let i = 0; i < belegtCourseList.length; i++){
            this.#scoreCourseList.push(belegtCourseList[i]);
            this.#availableFaecherForScoring.removeCourseOfFach(subject.name, i);
        }
    }

    addBestCoursesOfSubjectToList(subject, amountToAdd){
        if(subject.belegteKurseList == undefined)
            return;
        let sortedCourses = subject.belegteKurseList.sort(function (a, b) { return b.note - a.note});
        for(let i = 0; i<sortedCourses.length && i<amountToAdd; i++){
            this.#scoreCourseList.push(sortedCourses[i]);
            this.#availableFaecherForScoring.removeCourseOfFach(subject.name, i);
        }
    }

    getPointSum(){
        return this.#scoreCourseList.reduce((accumulator, course) => {
            return accumulator + course.note;
            }, 0);
    }

    calcScoreString(){
        return `${this.getPointSum()}/${this.#scoreCourseList.length*15}`;
    }

    calcScore(){
        return this.getPointSum()/this.#scoreCourseList.length;
    }

    fillTo48Courses(){
        // Get all belgete kurse
        let allLeftCourses = this.#availableFaecherForScoring.listSubjects.map(subject => subject.belegteKurseList).flat();

        // Sort the courses by their note
        allLeftCourses.sort((a, b) => b.note - a.note);

        // Add courses to the score list until it reaches 48
        for (let i = 0; i < allLeftCourses.length && this.#scoreCourseList.length < 48; i++) {
            this.#scoreCourseList.push(allLeftCourses[i]);
        }
    }

    prepareScoreList(){
        // Alle LKs zu den bewertenden Kursen hinzufügen
        this.addCoursesOfSubjectToList(this.#subjects.sortedLKs[0]);
        this.addCoursesOfSubjectToList(this.#subjects.sortedLKs[1]);
        this.addCoursesOfSubjectToList(this.#subjects.sortedLKs[2]);
        // Die zwei besten LKs nocheinmal hinzufügen
        this.addCoursesOfSubjectToList(this.#subjects.sortedLKs[0]);
        this.addCoursesOfSubjectToList(this.#subjects.sortedLKs[1]);

        // Alle Kurse der mündlichen Prüfungsfächer hinzufügen
        this.addCoursesOfSubjectToList(this.#subjects.sortedMuendlPruefs[0]);
        this.addCoursesOfSubjectToList(this.#subjects.sortedMuendlPruefs[1]);
        

        // Soweit nicht als Leistungsfach oder mündl. Prüfungsfach
        // 4 Kurse von der besten Fremdsprache
        if (!this.LKOrMdlHasType(Types.Fremdsprache))
            this.addCoursesOfSubjectToList(this.#subjects.getFaecherListByTypeNotLKOrMdlSorted(Types.Fremdsprache)[0]);
        // 4 Kurse von der besten Naturwissenschaft
        if (!this.LKOrMdlHasType(Types.Naturwissenschaft))
            this.addCoursesOfSubjectToList(this.#subjects.getFaecherListByTypeNotLKOrMdlSorted(Types.Naturwissenschaft)[0]);
        // 4 Kurse von Geschichte
        this.addFachNotLKOrMdlToScoreList("Geschichte", 4);
        // die Kurse von Geografie und GK
        this.addFachNotLKOrMdlToScoreList("Geografie", 4);
        this.addFachNotLKOrMdlToScoreList("Gemeinschaftskunde", 4);
        // 2 Kurse in BK oder Musik
        this.addBestCoursesOfSubjectToList(this.#subjects.getFaecherListByTypeNotLKOrMdlSorted(Types.Kuenstlerisch)[0], 2);

        this.fillTo48Courses();
    }

    getOptimizedScore(){
        this.prepareScoreList();
        return this.calcScoreString();
    }

    getOptimizedAverage(){
        this.prepareScoreList();
        return this.calcScore();
    }
}