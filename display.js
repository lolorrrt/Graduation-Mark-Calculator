import { MoeglicheFaecher, Anforderungsbereiche, FachTyp, Kurs } from "./javascript/kurs.mjs";
var subj = document.getElementsByClassName("title");
var courseCredits = document.getElementsByClassName("course");

const calculationElement = document.getElementById("calculation");
let subjects = createSubjects();

function createSubjects(){
    let subjects = [];
    for (let i = 0; i< 12;i++){
        subjects[i] = document.createElement("div");
        subjects[i].className = "subject";
        calculationElement.append(subjects[i]);
    }
    return subjects; 
}

function createTitleElements(){
    let titles = [];
    for (let i = 0; i< 12;i++){
        titles[i] = document.createElement("div");
        titles[i].className = "title";
        subjects[i].append(titles[i]);
    }
    return titles; 
}

function createGridElements(){
    let grids = [];
    for (let i = 0; i< 12;i++){
        grids[i] = document.createElement("div");
        grids[i].className = "grid";
        subjects[i].append(grids[i]);
    }
    return grids; 
}

function createCourseElements(){
    let subjectCourses = [];
    for (let j = 0; j<12;j++){
        for (let i = 0; i< 4;i++){
            subjectCourses[i] = document.createElement("div");
            subjectCourses[i].className = "course";
            grids[j].append(subjectCourses[i]);
        }
    }
    return grids; 
}

function createSubjectSelection(index) {  
    const selectElement = document.createElement('select');
    selectElement.className = "subjectOptions";
    const allFaecher = Object.values(MoeglicheFaecher);

    allFaecher.forEach((element) => {
        let newOption = document.createElement('option');
        newOption.value = element.name;
        newOption.textContent = element.name;
        selectElement.appendChild(newOption);
    });
    document.getElementsByClassName("title")[index].appendChild(selectElement);
}
function createCourseCreditSelection(index){
    const options = [];
    const selectElement = document.createElement('select');
    selectElement.className = "courseCreditOptions";

    for (let i = 0; i<16;i++){
        options[i] = document.createElement('option');
        options[i].value = i;
        options[i].textContent = `${i} Punkte`;
        selectElement.appendChild(options[i]);
    }
    document.getElementsByClassName("course")[index].appendChild(selectElement);
}
//createSubjects();
createTitleElements();
var grids = createGridElements();
createCourseElements();
for (let i = 0; i < subj.length; i++) 
        createSubjectSelection(i);
for (let i = 0; i < courseCredits.length; i++)
    createCourseCreditSelection(i);
