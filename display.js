import {ElementCreator, subjectStructureAppender, semesterStructureAppender} from "./javascript/displayClass.mjs";

let structureList = [new ElementCreator ("subject", "div"), new ElementCreator ("title", "div"), new ElementCreator ("grid", "div")];
let subjectComponent = new subjectStructureAppender (structureList);

subjectComponent.appendAll();
subjectComponent.createSubjectSelection();

let semester = new semesterStructureAppender(new ElementCreator ("course", "div"));
semester.appendAll();
semester.createCourseCreditSelection();