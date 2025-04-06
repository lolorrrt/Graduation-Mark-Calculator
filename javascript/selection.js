import {selection} from "./selectionClass.mjs";
import {ElementCreator, subjectStructureAppender, semesterStructureAppender} from "./displayClass.mjs";
import { Kurs, MoeglicheFaecher} from "./kurs.mjs";
import { Fach } from "./faecher.mjs";

let titleElements = document.getElementsByClassName("subjectOptions");
let courseElements = document.getElementsByClassName("courseCreditOptions");

/*function courseList(){
    let courseObjects = [];
    courseElements.forEach(element, index => {
        let note = "checkForSelection(element)"
        window.alert(note.substring(1,5))
        let isBelegt;
        let isUnterkurs = false;
        if (note == "Ni"){
            isBelegt = false;
            note = 0;
        }
        else
            isBelegt = true;
    
        if (note<5){
            isUnterkurs = true;
        }
        courseObjects[index] = new Kurs (note, isUnterkurs, isBelegt);
    
    });
    return courseObjects;
}*/
function createSubjectList(){
    let subjectObjects = [];
    const allFaecher = Object.values(MoeglicheFaecher);

    for (let index = 0; index<titleElements.length; index++){
        let FachTyp = allFaecher[checkForSelection(titleElements[index])];
        let isLeistungsfach = false;
        let isMuendlich = false;
        
        if (index <3)
            isLeistungsfach = true;
        else if (index <5)
            isMuendlich = true;

        subjectObjects[index] = new Fach(FachTyp, isLeistungsfach, isMuendlich, NaN);
    }
    return subjectObjects;
}


function initalizeDisplay() {
    let structureList = [new ElementCreator ("subject", "div"), new ElementCreator ("title", "div"), new ElementCreator ("grid", "div")];
    let subjectComponent = new subjectStructureAppender (structureList);

    subjectComponent.appendAll();
    subjectComponent.createSubjectSelection();

    let semester = new semesterStructureAppender(new ElementCreator ("course", "div"));
    semester.appendAll();
    return true;
        
}

function checkForSelection(selectElement) {
    let listOfOptions = selectElement.childNodes;
    for (let i = 0; i < listOfOptions.length; i++) {
        if (selectElement.childNodes[i].selected)
            return i;
    }
}

let myPromise = new Promise(function(myResolve, myReject) {
    myResolve(initalizeDisplay());
    myReject(0);
});

myPromise
    .then(function() {
        return new Promise(resolve => {
            setTimeout(function() {
                window.alert("test 1");
                resolve();
            }, 3000);
        });
    })
    .then(function() {window.alert(checkForSelection(courseElements[0]+ "test2"));})
    .then(function() {window.alert(createSubjectList())});