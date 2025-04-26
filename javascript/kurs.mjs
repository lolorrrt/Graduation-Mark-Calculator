

export class Kurs {

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

    copy(){
        return new Kurs(this.#note, this.#isUnterkurs, this.#isBelegt);
    }
}

export class FachTyp {
    
    #name;
    #type;
    #anforderungsbereich;

    constructor(name, type, anforderungsbereich){
        this.#name = name;
        this.#type = type;
        this.#anforderungsbereich = anforderungsbereich;
    }

    get name (){
        return this.#name;
    }

    get type (){
        return this.#type;
    }

    get anforderungsbereich (){
        return this.#anforderungsbereich;
    }

    copy(){
        return new FachTyp(this.#name, this.#type, this.#anforderungsbereich);
    }
}

export const Anforderungsbereiche = {
    I:"I",
    II:"II",
    III:"III",
    Nichts: "Nichts"
}

export const Types = {
    Muttersprache: "Muttersprache",
    Fremdsprache: "Fremdsprache",
    Kuenstlerisch: "Kuenstlerisch",
    Gesellschaftswissenschaft: "Gesellschaftswissenschaft",
    Naturwissenschaft: "Naturwissenschaft",
    Sonstiges: "Sonstiges"
}

export const MoeglicheFaecher = {
    Waehle: new FachTyp("Waehle", NaN, NaN),
    Deutsch: new FachTyp("Deutsch", Types.Muttersprache, Anforderungsbereiche.I),
    Englisch: new FachTyp("Englisch", Types.Fremdsprache, Anforderungsbereiche.I),
    Franzoesisch: new FachTyp("Franzoesisch", Types.Fremdsprache, Anforderungsbereiche.I),
    Latein: new FachTyp("Latein", Types.Fremdsprache, Anforderungsbereiche.I),
    Spanisch: new FachTyp("Spanisch", Types.Fremdsprache, Anforderungsbereiche.I),
    Kunst: new FachTyp("Kunst", Types.Kuenstlerisch, Anforderungsbereiche.I),
    Musik: new FachTyp("Musik", Types.Kuenstlerisch, Anforderungsbereiche.I),
    Geschichte: new FachTyp("Geschichte", Types.Gesellschaftswissenschaft, Anforderungsbereiche.II),
    Gemeinschaftskunde: new FachTyp("Gemeinschaftskunde", Types.Gesellschaftswissenschaft, Anforderungsbereiche.II),
    Geografie: new FachTyp("Geografie", Types.Gesellschaftswissenschaft, Anforderungsbereiche.II),
    Wirtschaft: new FachTyp("Wirtschaft", Types.Gesellschaftswissenschaft, Anforderungsbereiche.II),
    Religion: new FachTyp("Religion", Types.Gesellschaftswissenschaft, Anforderungsbereiche.II),
    Ethik: new FachTyp("Ethik", Types.Gesellschaftswissenschaft, Anforderungsbereiche.II),
    Mathe: new FachTyp("Mathe", Types.Naturwissenschaft, Anforderungsbereiche.III),
    Physik: new FachTyp("Physik", Types.Naturwissenschaft, Anforderungsbereiche.III),
    Chemie: new FachTyp("Chemie", Types.Naturwissenschaft, Anforderungsbereiche.III),
    Biologie: new FachTyp("Biologie", Types.Naturwissenschaft, Anforderungsbereiche.III),
    NWT: new FachTyp("NWT", Types.Naturwissenschaft, Anforderungsbereiche.III),
    Informatik: new FachTyp("Informatik", Types.Naturwissenschaft, Anforderungsbereiche.III),
    Philosophie: new FachTyp("Philosophie", Types.Sonstiges, Anforderungsbereiche.Nichts),
    Psychologie: new FachTyp("Psychologie", Types.Sonstiges, Anforderungsbereiche.Nichts),
    Seminarkurs: new FachTyp("Seminarkurs", Types.Sonstiges, Anforderungsbereiche.Nichts),
    Sport: new FachTyp("Sport", Types.Sonstiges, Anforderungsbereiche.Nichts),
    Geologie: new FachTyp("Geologie", Types.Sonstiges, Anforderungsbereiche.Nichts),
    Literatur: new FachTyp("Literatur", Types.Sonstiges, Anforderungsbereiche.Nichts)
}


