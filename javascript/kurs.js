
const Anforderungsbereiche = {
    I:"I",
    II:"II",
    III:"III",
    Nichts: "Nichts"
}

const MoeglicheFaecher = {
    Deutsch: new FachTyp("Deutsch", 4, Anforderungsbereiche.I),
    Englisch: new FachTyp("Englisch", 0, Anforderungsbereiche.I),
    Franzoesisch: new FachTyp("Franzoesisch", 0, Anforderungsbereiche.I),
    Latein: new FachTyp("Latein", 0, Anforderungsbereiche.I),
    Spanisch: new FachTyp("Spanisch", 0, Anforderungsbereiche.I),
    Kunst: new FachTyp("Kunst", 0, Anforderungsbereiche.I),
    Musik: new FachTyp("Musik", 0, Anforderungsbereiche.I),
    Geschichte: new FachTyp("Geschichte", 4, Anforderungsbereiche.II),
    Gemeinschaftskunde: new FachTyp("Gemeinschaftskunde", 2, Anforderungsbereiche.II),
    Geografie: new FachTyp("Geografie", 2, Anforderungsbereiche.II),
    Wirtschaft: new FachTyp("Wirtschaft", 4, Anforderungsbereiche.II),
    Religion: new FachTyp("Religion", 4, Anforderungsbereiche.II),
    Ethik: new FachTyp("Ethik", 4, Anforderungsbereiche.II),
    Mathe: new FachTyp("Mathe", 4, Anforderungsbereiche.III),
    Physik: new FachTyp("Physik", 4, Anforderungsbereiche.III),
    Chemie: new FachTyp("Chemie", 4, Anforderungsbereiche.III),
    Biologie: new FachTyp("Biologie", 4, Anforderungsbereiche.III),
    NWT: new FachTyp("NWT", 4, Anforderungsbereiche.III),
    Informatik: new FachTyp("Informatik", 4, Anforderungsbereiche.III),
    Philosophie: new FachTyp("Philosophie", 4, Anforderungsbereiche.Nichts),
    Psychologie: new FachTyp("Psychologie", 4, Anforderungsbereiche.Nichts),
    Seminarkurs: new FachTyp("Seminarkurs", 4, Anforderungsbereiche.Nichts),
    Sport: new FachTyp("Sport", 4, Anforderungsbereiche.Nichts),
    Geologie: new FachTyp("Geologie", 4, Anforderungsbereiche.Nichts),
    Literatur: new FachTyp("Literatur", 4, Anforderungsbereiche.Nichts)
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

