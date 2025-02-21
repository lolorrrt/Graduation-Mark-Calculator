
const Anforderungsbereiche = {
    I:"I",
    II:"II",
    III:"III",
    Nichts: "Nichts"
}

const MoeglicheFaecher = {
    Deutsch: "Deutsch",
    Englisch: "Englisch",
    Franzoesisch: "Französisch",
    Latein: "Latein",
    Spanisch: "Spanisch",
    Kunst: "Kunst",
    Musik: "Musik",
    Geschichte: new FachTyp("Geschichte", 4, Anforderungsbereiche.II),
    Gemeinschaftskunde: "Gemeinschaftskunde",
    Geografie: "Geografie",
    Wirtschaft: "Wirtschaft",
    Religion: "Religion",
    Ethik: "Ethik",
    Mathe: "Mathe",
    Physik: "Physik",
    Chemie: "Chemie",
    Biologie: "Biologie",
    NWT: "NWT",
    Informatik: "Informatik",
    Philosophie: "Philosophie",
    Psychologie: "Psychologie",
    Seminarkurs: "Seminarkurs",
    Sport: "Sport",

}


class Kurs {

    #note;
    #isUnterkurs;
    #isBelegt;

    constructor(note, isUnterkurs, isBelegt){
        this.#note = note;
        this.#isUnterkurs = isUnterkurs;
        this.#isBelegt = isBelegt;
    }

    get note(){
        return this.#note;
    }

    get isUnterkurs(){
        return this.#isUnterkurs;
    }

    get isBelegt(){
        return this.#isBelegt;
    }
}

class FachTyp {
    
    #name;
    #pflichtanrechnung;
    #anforderungsbereich;

    constructor(name, pflichtanrechnung, anforderungsbereich){
        this.#name = name;
        this.#pflichtanrechnung = pflichtanrechnung;
        this.#anforderungsbereich = anforderungsbereich;
    }

    get name (){
        return this.#name;
    }

    get pflichtanrechnung (){
        return this.#pflichtanrechnung;
    }

    get anforderungsbereich (){
        return this.#anforderungsbereich;
    }
}

