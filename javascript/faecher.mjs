import { Kurs } from "./kurs.mjs";

export class Fach {

    #fachTyp;
    #isLeistungsfach;
    #muendlichePruefung;
    #halbjahre;

    constructor(fachTyp, isLeistungsfach, muendlichePruefung, halbjahre){
        this.#fachTyp = fachTyp;
        this.#isLeistungsfach = isLeistungsfach;
        this.#muendlichePruefung = muendlichePruefung;
        this.#halbjahre = halbjahre;
    }
    
    get fachTyp(){
        return this.#fachTyp;
    }

    get name(){
        return this.#fachTyp.name;
    }

    get isLeistungsfach() {
        return this.#isLeistungsfach;
    }

    get muendlichePruefung(){
        return this.#muendlichePruefung;
    }

    get anzahlKurse(){
        return this.#halbjahre.length;
    }

    get gesamtPunktzahl(){
        return this.#halbjahre.reduce((accumulator, currentValue) => {
            if(currentValue.isBelegt) {
                return accumulator + currentValue.note;
            }
            return accumulator;
        }, 0);
    }

    get mittelwertPunkte(){
        return this.gesamtPunktzahl/this.belegteKurseAmount;
    }

    get belegteKurseAmount(){
        return this.#halbjahre.reduce((accumulator, currentValue) => {
            if(currentValue.isBelegt){
                return accumulator + 1;
            }
                return accumulator;
            }, 0);
    }

    get belegteKurseList(){
        let result = [];
        for(let i = 0; i < this.#halbjahre.length; i++){
            if(this.#halbjahre[i].isBelegt){
                result.push(this.#halbjahre[i]);
            }
        }
        return result;
    }

    kurs(index){
        return this.#halbjahre[index];
    }

    removeCourse(index){
        this.#halbjahre[index] = new Kurs(-1, false, false);
    }

    copy() {
        return new Fach(
            this.#fachTyp.copy(),
            this.#isLeistungsfach,
            this.#muendlichePruefung,
            this.#halbjahre.map(halbjahr => halbjahr.copy ? halbjahr.copy() : { ...halbjahr })
        );
    }
}