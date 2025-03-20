
export class Fach {

    #fachTyp;
    #isLeistungsfach;
    #muendlichePruefung;
    #halbjahre;

    constructor(fachTyp, isLeistungsfach, muendlichePruefung, halbjahre){
        this.#fachTyp = fachTyp;
        this.#isLeistungsfach = leistungsfach;
        this.#muendlichePruefung = muendlichePruefung;
        this.#halbjahre = halbjahre;
    }
    
    get isLeistungsfach() {
        return this.#isLeistungsfach;
    }

    get muendlichePruefung(){
        return this.#muendlichePruefung;
    }

    get anzahlKurse(){
        return this.halbjahre.length;
    }

    get gesamtPunktzahl(){
        return this.#halbjahre.reduce((accumulator, currentValue) => accumulator + currentValue.note);
    }

    get mittelwertPunkte(){
        return this.gesamtPunktzahl()/this.isBelegt();
    }

    get belegteKurse(){
        return this.#halbjahre.reduce((accumulator, currentValue) => {
            if(currentValue.isBelegt()){
                return accumulator + 1;
            }
                return accumulator;
            }, 0);
    }

    get fachTyp(){
        return this.#fachTyp;
    }

    kurs(index){
        return this.#halbjahre[index];
    }


}