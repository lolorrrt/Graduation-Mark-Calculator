import {selection, subjectList} from "./selectionClass.mjs";
import {ElementCreator, subjectStructureAppender, semesterStructureAppender} from "./displayClass.mjs";
import { Kurs, MoeglicheFaecher} from "./kurs.mjs";
import { Fach } from "./faecher.mjs";

let button = document.getElementById("calcButton");

let titleElements = document.getElementsByClassName("subjectOptions");
let courseElements = document.getElementsByClassName("courseCreditOptions");

function initalizeDisplay() {
    let structureList = [new ElementCreator ("subject", "div"), new ElementCreator ("title", "div"), new ElementCreator ("grid", "div")];
    let subjectComponent = new subjectStructureAppender (structureList);

    subjectComponent.appendAll();
    subjectComponent.createSubjectSelection();

    let semester = new semesterStructureAppender(new ElementCreator ("course", "div"));
    semester.appendAll();
    semester.createCourseCreditSelection();

    button.addEventListener("click", function(){calculateOptimizedAverage(); displayOptimizedAverageAndScore();});
    return true;    
}

function checkForSelection(selectElement) {
    let listOfOptions = selectElement.childNodes;
    for (let i = 0; i < listOfOptions.length; i++) {
        if (selectElement.childNodes[i].selected)
            return i;
    }
}

async function courseList(){
    let courseObjects = [];
    for (let index = 0; index<courseElements.length; index++){
        let creditsSelected = checkForSelection(courseElements[index]);
        let isBelegt = true;
        let isUnterkurs = true;
        
        if(creditsSelected<2)
            isBelegt = false;
        else if (creditsSelected>5)
            isUnterkurs = false;
        
        courseObjects[index] = new Kurs (creditsSelected-1, isUnterkurs, isBelegt);

    }
    return courseObjects;
}

async function createSubjectList(){
    const courseObjects = await courseList();
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
        let semester = [courseObjects[4*index],courseObjects[4*index+1], courseObjects[4*index+2],courseObjects[4*index+3]];
        subjectObjects[index] = new Fach(FachTyp, isLeistungsfach, isMuendlich, semester);
    }

    let subjects = new subjectList (subjectObjects);
    return subjects;
}

async function calculateOptimizedScore(){
    const subjects = await createSubjectList();
    let selectionObject = new selection (subjects);

    return selectionObject.getOptimizedScore();
}

async function calculateOptimizedAverage(){
    const subjects = await createSubjectList();
    let selectionObject = new selection (subjects);

    return selectionObject.getOptimizedAverage();
}

async function displayOptimizedAverageAndScore() {
    const score = await calculateOptimizedScore();
    const average = await calculateOptimizedAverage();

    document.getElementById("points").innerHTML = `${score}/600`;
    document.getElementById("mark").innerHTML = `${average} Points`;
}

let initDisplayResult = new Promise(function(myResolve, myReject) {
    myResolve(initalizeDisplay());
    myReject(0);
});