
var arr = document.getElementsByClassName("title");
const faecher = ["Wählen Sie ein Fach aus", "Deutsch", "Englisch", "Französisch", "Latein", "Spanisch", "Kunst", "Musik", "Geschichte", "Gemeinschaftskunde", "Geografie", "Wirtschaft", "Religion", "Ethik", "Mathe", "Physik", "Chemie", "Biologie", "NWT", "Informatik", "Philosophie", "Psychologie", "Seminarkurs", "Sport"];

function createOptions(index) {
    const length = faecher.length;
    
    const options = [];
    const selectElement = document.createElement('select');
    selectElement.className = "options";
    
    for (let i = 0; i < length; i++) {
        options[i] = document.createElement('option');
        options[i].value = faecher[i];
        options[i].textContent = faecher[i];
        selectElement.appendChild(options[i]);
    }
    document.getElementsByClassName("title")[index].appendChild(selectElement);
}

for (let i = 0; i < arr.length; i++) {
        createOptions(i);
}
