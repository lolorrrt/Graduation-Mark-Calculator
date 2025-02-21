
var subj = document.getElementsByClassName("title");
var courseCredits = document.getElementsByClassName("course");

const faecher = ["Wählen Sie ein Fach aus", "Deutsch", "Englisch", "Französisch", "Latein", "Spanisch", "Kunst", "Musik", "Geschichte", "Gemeinschaftskunde", "Geografie", "Wirtschaft", "Religion", "Ethik", "Mathe", "Physik", "Chemie", "Biologie", "NWT", "Informatik", "Philosophie", "Psychologie", "Seminarkurs", "Sport"];

function createSubjectSelection(index) {  
    const options = [];
    const selectElement = document.createElement('select');
    selectElement.className = "subjectOptions";
    
    for (let i = 0; i < faecher.length; i++) {
        options[i] = document.createElement('option');
        options[i].value = faecher[i];
        options[i].textContent = faecher[i];
        selectElement.appendChild(options[i]);
    }
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

for (let i = 0; i < subj.length; i++) {
        createSubjectSelection(i);
}
for (let i = 0; i < courseCredits.length; i++) {
    createCourseCreditSelection(i);
}
