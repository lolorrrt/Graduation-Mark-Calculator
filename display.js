import { MoeglicheFaecher, Anforderungsbereiche, FachTyp, Kurs } from "./javascript/kurs.mjs";
var subj = document.getElementsByClassName("title");
var courseCredits = document.getElementsByClassName("course");

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

for (let i = 0; i < subj.length; i++) 
        createSubjectSelection(i);
for (let i = 0; i < courseCredits.length; i++)
    createCourseCreditSelection(i);
