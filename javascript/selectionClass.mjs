
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
        this.#listSubjects.forEach((subject) => {
            if(subject.isLeistungsfach){
                sortedLKs.push(subject);
            }
        });
        sortedLKs.sort(function (a, b) {
            return b.mittelwertPunkte - a.mittelwertPunkte;
        });
        return sortedLKs;
    }

    get bestLKs(){
        let LKs = this.sortedLKs;
        let points = [];
        LKs.forEach(element, index =>{
            points[index] = element.gesamtPunktzahl;
        })
        LKs.splice(points.indexOf(points.find(Math.min.apply(null, points))),1);
        return LKs;        
    }

    get sortedMuendlPruefs(){
        let sortedMuendlPruefs = [];
        this.#listSubjects.forEach((subject) => {
            if(subject.muendlichePruefung){
                sortedMuendlPruefs.push(subject);
            }
        });
        sortedMuendlPruefs.sort(function (a, b) {
            return b.mittelwertPunkte - a.mittelwertPunkte;
        });
        return sortedMuendlPruefs;
    }

    hasName(subject, name){
        return subject.fachTyp.name == name;
    }

    getFachByName(name){
        this.#listSubjects.find((subject) => { this.hasName(subject, name)});
    }

    getFachNotLKOrMdl(name){
        let result = this.getFachByName(name);
        if(result.isLeistungsfach || result.muendlichePruefung) {
            return false;
        }
        return result;
    }
}

export class selection{

    #subjects;
    #scoreCourseList = [];

    constructor(listSubjects){
        this.#subjects = listSubjects;
    }

    checkForError (){
        //check number of courses

        //check exam subjects
        //check necessary subjects 
    }

    printError(error){
        document.getElementById("score").innerHTML = `wrong selection of courses, error: ${error}`;
    }

    addFachNotLKOrMdlToScoreList(name){
        let fachToAdd = this.#subjects.getFachNotLKOrMdl(name);
        if(fachToAdd != false) {
            for(let kurs in fachToAdd.belegteKurse){
                this.#scoreCourseList.push(kurs);
            }
        }
    }

    addCoursesOfSubjectToList(subject){
        let belegtCourseList = subject.belegteKurseList;
        for(let i = 0; i < belegtCourseList.length; i++){
            this.#scoreCourseList.push(belegtCourseList[i]);
        }
    }

    getPointSum(){
        return this.#scoreCourseList.reduce((accumulator, course) => {
            return accumulator + course.note;
            }, 0);
    }

    calcScore(){
        return this.getPointSum()/this.#scoreCourseList.length;
    }

    getOptimizedScore(){
        let coursesForScoring = [];
        // Alle LKs zu den bewertenden Kursen hinzufügen
        this.addCoursesOfSubjectToList(this.#subjects.sortedLKs[0]);
        this.addCoursesOfSubjectToList(this.#subjects.sortedLKs[1]);
        this.addCoursesOfSubjectToList(this.#subjects.sortedLKs[2]);
        // Die zwei besten LKs nocheinmal hinzufügen
        this.addCoursesOfSubjectToList(this.#subjects.sortedLKs[0]);
        this.addCoursesOfSubjectToList(this.#subjects.sortedLKs[1]);

        // Alle Kurse der mündlichen Prüfungsfächer hinzufügen
        coursesForScoring.push(this.#subjects.sortedMuendlPruefs);
        

        

        

        // Soweit nicht als Leistungsfach oder mündl. Prüfungsfach
            // 4 Kurse von Deutsch
            // 4 Kurse von Mathematik
            // 4 Kurse von der besten Fremdsprache
            // 4 Kurse von der besten Naturwissenschaft
            // 4 Kurse von Geschichte
            // die Kurse von Geografie und GK
            // 2 Kurse in BK oder Musik

        // Auffüllen mit den besten Kursen der nicht hinzugefügten Fächern bis 40 Kurse
            return this.calcScore();
    }
}