
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

}

export class selection{


    checkForError (){
        //check number of courses
        if (this.numberOfAllCourses()<42)
            return 0;

        //check exam subjects
        //check necessary subjects 
        Array.from(document.getElementsByClassName('title')).indexOf(fourth);
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