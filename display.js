import { MoeglicheFaecher, Anforderungsbereiche, FachTyp, Kurs } from "./javascript/kurs.mjs";

class Parent{
    #divisionTypeStyle;

    constructor(divisionTypeStyle){
        this.#divisionTypeStyle = divisionTypeStyle;
    }

    initalize (){
        let possibleParentList = document.getElementsByClassName(this.#divisionTypeStyle);
        return possibleParentList;
    }
    
}
class ElementCreator {
    #divisionTypeStyle;
    #divisionTypeHtml;

    constructor(divisionTypeStyle, divisionTypeHtml) {
        this.#divisionTypeHtml = divisionTypeHtml;
        this.#divisionTypeStyle = divisionTypeStyle;
    }

    get divisionTypeHtml(){
        return this.#divisionTypeHtml;
    }
    get divisionTypeStyle(){
        return this.#divisionTypeStyle;
    }

}

class subjectStructureAppender{
    #listOfElements;
    constructor(listOfElements){
        this.#listOfElements = listOfElements;
    }

    createSubject(){
        let structureList = [];
        
        for (let i = 0; i<3;i++){
            let elem = document.createElement(this.#listOfElements[i].divisionTypeHtml);
            elem.className = this.#listOfElements[i].divisionTypeStyle;
            structureList[i] = elem;
        }
        structureList[0].append(structureList[1]);
        structureList[0].append(structureList[2]);
        return structureList[0];
    }

    createMaximumStructureList(count){
        let list = this.createSubject();
        let wholeSubjectList = [];

        for (let index = 0; index < count; index++)
            wholeSubjectList[index] = list.cloneNode(true);     
        return wholeSubjectList;
    }

    appendAll(){
        let elementList = this.createMaximumStructureList(12);
        for (let index = 0; index < 12; index++)
            calculationElement.appendChild(elementList[index]);          
    }

    createSubjectSelection() { 
        const titles = document.getElementsByClassName("title");
        for (let i = 0; i<12;i++){ 
        const selectElement = document.createElement('select');
        selectElement.className = "subjectOptions";
        const allFaecher = Object.values(MoeglicheFaecher);
            allFaecher.forEach((element) => {
                let newOption = document.createElement('option');
                newOption.value = element.name;
                newOption.textContent = element.name;
                selectElement.appendChild(newOption);
            });
            document.getElementsByClassName("title")[i].appendChild(selectElement);
        }
        
        }
        createCourseCreditSelection(index){
            const options = [];
            const selectElement = document.createElement('select');
            selectElement.className = "courseCreditOptions";
        
            let firstOption = document.createElement('option');
            firstOption.textContent = "Nicht belegt!";
            selectElement.appendChild(firstOption);
        
            for (let i = 0; i<16;i++){
                options[i] = document.createElement('option');
                options[i].value = i;
                options[i].textContent = `${i} Punkte`;
                selectElement.appendChild(options[i]);
            }
            document.getElementsByClassName("course")[index].appendChild(selectElement);
    }
}

const calculationElement = document.getElementsByClassName("calculation")[0];
let structureList = [new ElementCreator ("subject", "div"), new ElementCreator ("title", "div"), new ElementCreator ("grid", "div")];
let subjectComponent = new subjectStructureAppender (structureList);
subjectComponent.appendAll();
subjectComponent.createSubjectSelection();

class gridAppender{
    #course;
    constructor(course){
        this.#course = course;
    }

    createSingleSubjectGrid(){
        let courseList = [];
        for (let i = 0; i<4;i++)
            courseList[i] = this.#course;
        return courseList;
    } 
    appendSingle(count){
        let courseList = this.createSingleSubjectGrid();
        let semester = document.createElement(this.#course.divisionTypeHtml);
        semester.className = this.#course.divisionTypeStyle;
        courseList.forEach((element) =>{
            element = semester.cloneNode();
            document.getElementsByClassName("grid")[count].append(element);
        });
    }

    appendAll(){
        for (let i = 0; i< 12;i++)
            this.appendSingle(i);
    }

}

let semester = new gridAppender(new ElementCreator ("course", "div"));
semester.appendAll();
/*for (let i = 0; i<12;i++){
    subjectComponent.createSubjectSelection(i);
}*/
