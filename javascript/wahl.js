class selection{

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

    removeSubject(subject){
        return this.#listSubjects.pop(subject);
    }

    updateSubject(index, subject){
        this.#listSubjects[index] = subject;
    }

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

    }
}