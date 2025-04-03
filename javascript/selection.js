import {selection} from "./selectionClass.mjs";
import {ElementCreator, subjectStructureAppender, semesterStructureAppender} from "./displayClass.mjs";

    function initalilizeDisplay() {
        let structureList = [new ElementCreator ("subject", "div"), new ElementCreator ("title", "div"), new ElementCreator ("grid", "div")];
        let subjectComponent = new subjectStructureAppender (structureList);

        subjectComponent.appendAll();
        subjectComponent.createSubjectSelection();

        let semester = new semesterStructureAppender(new ElementCreator ("course", "div"));
        semester.appendAll();
        return semester.createCourseCreditSelection();
        
    }

let myPromise = new Promise(function(myResolve, myReject) {
    myResolve(initalilizeDisplay());
    myReject(0);
});
let selectElement = document.getElementsByClassName("subjectOptions")[0];
myPromise
    .then(setTimeout(function() { window.alert("display initalized");}, 3000))
    .then(window.alert("test for correct order"));


function checkForSelection(selectElement){
    window.alert("test")
    let listOfOptions = selectElement.children();
    
    for (let i = 0; i<listOfOptions.length; i++){
        if (listOfOptions[i].selected)
            return listOfOptions[i];
    }
}
//checkForSelection(listOfSelectElements);