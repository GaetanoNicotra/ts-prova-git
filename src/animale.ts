// Crea un file chiamato animale.ts e al suo interno costruisci una classe Animale che rappresenta un animale generico.
// La classe deve dichiarare tre proprietà con i loro tipi: nome, specie e verso.
// Il constructor deve riceverle come parametri tipizzati e salvarle sull'oggetto con this.
// La classe deve avere un metodo descrivi() che stampa in console una frase del tipo: "Mi chiamo Fido, sono un cane e faccio Bau".
// Una volta creata la classe, istanzia tre animali diversi usando new e chiama descrivi() su ognuno.


class Animale {
    nome: string;
    specie: string;
    verso: string;

    constructor(nome: string, specie: string, verso: string) {
        this.nome = nome;
        this.verso = verso;
        this.specie = specie;
    }

    descrivi() {
        return `Mi chiamo ${this.nome}, sono un ${this.specie} e faccio ${this.verso}`
    }
}

const animale1 = new Animale('Pippo', 'Cane', 'Bau');
console.log(animale1.descrivi())

const animale2 = new Animale('Tiro', 'Maiale', 'Oink');
console.log(animale2.descrivi())

const animale3 = new Animale('Mimmo', 'Gatto', 'Miao');
console.log(animale3.descrivi())


// Partendo dalla classe Animale dell'esercizio precedente, crea nello stesso file una nuova classe Cane che eredita da Animale usando extends.
// Cane deve aggiungere una proprietà in più: razza.
// Il constructor di Cane deve ricevere nome e razza.
// Cane deve avere un metodo aggiuntivo abbaia() che stampa in console: "Fido abbaia: Bau Bau!".
// Istanzia due cani con razze diverse e chiama su entrambi sia descrivi() che abbaia().

class Cane extends Animale {

    razza: string;

    constructor(nome: string, razza: string) {
        super(nome, "Cane", "Bau");
        this.razza = razza;
    }

    abbaia() {
        console.log(`${this.nome} abbaia: Bau Bau!`);
    }
}

const cane1 = new Cane('Alfio', 'Labrador');
console.log(cane1.descrivi())
console.log(cane1.abbaia())

const cane2 = new Cane('Giggi', 'Corgie');
console.log(cane2.descrivi())
console.log(cane2.abbaia())


