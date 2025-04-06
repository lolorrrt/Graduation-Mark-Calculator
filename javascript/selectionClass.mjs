
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

    sortCompareSubjects(a, b) {
        return b.mittelwertPunkte - a.mittelwertPunkte;
    }

    get sortedLKs(){
        let sortedLKs = [];
        this.#listSubjects.forEach((subject) => {
            if(subject.isLeistungsfach){
                sortedLKs.push(subject);
            }
        });
        sortedLKs.sort(sortCompareSubjects());
        return sortedLKs;
    }

    get sortedMuendlPruefs(){
        let sortedMuendlPruefs = [];
        this.#listSubjects.forEach((subject) => {
            if(subject.muendlichePruefung){
                sortedMuendlPruefs.push(subject);
            }
        });
        sortedMuendlPruefs.sort(sortCompareSubjects());
        return sortedMuendlPruefs;
    }

    hasName(subject, name){
        return subject.fachTyp.name == name;
    }

    getFachByName(name){
        this.#listSubjects.find((subject) => { this.hasName(subject, name)});
    }

}

export class selection{


    checkForError (){
        //check number of courses

        //check exam subjects
        //check necessary subjects 
    }

    printError(error){
        document.getElementById("score").innerHTML = `wrong selection of courses, error: ${error}`;
    }

    getOptimizedScore(){
        // Alle LKs zu den bewertenden Kursen hinzufügen
        // Die zwei besten LKs nocheinmal hinzufügen

        // Alle Kurse der mündlichen Prüfungsfächer hinzufügen

        // Soweit nicht als Leistungsfach oder mündl. Prüfungsfach
            // 4 Kurse von Deutsch
            // 4 Kurse von Mathematik
            // 4 Kurse von der besten Fremdsprache
            // 4 Kurse von der besten Naturwissenschaft
            // 4 Kurse von Geschichte
            // die Kurse von Geografie und GK
            // 2 Kurse in BK oder Musik

    }
}