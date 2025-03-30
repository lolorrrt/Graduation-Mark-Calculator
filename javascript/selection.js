//import "./javascript/display.js";
function initalizeSelection(){
    var selectionList = [];
    for (let i = 0; i<12; i++)
        selectionList[i] = document.getElementsByClassName("subject")[i];

    var selectionObject = new selection(selectionList);
    document.getElementById("score").innerHTML = "moin";
    return "selectionObject";
}
