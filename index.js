class ImeProizvodjaca {
    constructor(imeProizvodjaca) {
        this.imeProizvodjaca = imeProizvodjaca;
    }
}

class OtkupnoMesto extends ImeProizvodjaca {
    constructor(imeProizvodjaca, imeOtkupnogMesta) {
        super(imeProizvodjaca);
        this.imeOtkupnogMesta = imeOtkupnogMesta;
    }
}

class Proizvodjac extends ImeProizvodjaca {
    constructor(imeProizvodjaca, prezime, jmbg, telefon, poreskaIzjava, ugovor, povrsinaParcele, tekuciRacun) {
        super(imeProizvodjaca);
        this.prezime = prezime;
        this.jmbg = jmbg;
        this.telefon = telefon;
        this.poreskaIzjava = poreskaIzjava;
        this.ugovor = ugovor;
        this.povrsinaParcele = povrsinaParcele;
        this.tekuciRacun = tekuciRacun;
    }
}

class Voce {
    constructor(imeVoca, cenaPrvaKlasa, cenaDrugaKlasa, cenaTrecaKlasa) {
        this.imeVoca = imeVoca;
        this.cenaPrvaKlasa = cenaPrvaKlasa;
        this.cenaDrugaKlasa = cenaDrugaKlasa;
        this.cenaTrecaKlasa = cenaTrecaKlasa;
    }
}

class OtkupVoca extends ImeProizvodjaca {
    constructor(imeProizvodjaca, brojDokumenta, kolicinaPrveKlase, kolicinaDrugeKlase, kolicinaTreceKlase, kolicinaZaduzeneAmbalaze, kolicinaVraceneAmbalaze) {
        super(imeProizvodjaca);
        this.brojDokumenta = brojDokumenta;
        this.kolicinaPrveKlase = kolicinaPrveKlase;
        this.kolicinaDrugeKlase = kolicinaDrugeKlase;
        this.kolicinaTreceKlase = kolicinaTreceKlase;
        this.kolicinaZaduzeneAmbalaze = kolicinaZaduzeneAmbalaze;
        this.kolicinaVraceneAmbalaze = kolicinaVraceneAmbalaze;
    }
}

let rl = require('readline');

let prompts = rl.createInterface(process.stdin, process.stdout);

prompts.question('Ime otkupnog mesta? ', imeOtkupnogMesta => {

prompts.question('Ime proizvodjaca? ', imeProizvodjaca => {

prompts.question('Prezime proizvodjaca? ', prezimeProizvodjaca => {

prompts.question('JMBG proizvodjaca? ', jmbg => {

prompts.question('Telefon proizvodjaca? ', telefon => {

prompts.question('Poreska izjava proizvodjaca? ', poreskaIzjava => {

prompts.question('Ugovor proizvodjaca? ', ugovor => {
        
prompts.question('Povrsina parcele proizvodjaca? ', povrsinaParcele => {
        
prompts.question('Tekuci Racun proizvodjaca? ', tekuciRacun => {

prompts.question('Ime voca? ', imeVoca => {

prompts.question('Cena voca prva klasa? ', cenaPrvaKlasa => {
                
prompts.question('Cena voca druga klasa? ', cenaDrugaKlasa => {
                
prompts.question('Cena voca treca klasa? ', cenaTrecaKlasa => {

prompts.question('Broj dokumenta? ', brojDokumenta => {
        
prompts.question('Kolicina predatog voca prve klase? ', kolicinaPrveKlase => {
        
prompts.question('Kolicina predatog voca druge klase? ', kolicinaDrugeKlase => {
        
prompts.question('Kolicina predatog voca trece klase? ', kolicinaTreceKlase => {
                        
prompts.question('Kolicina zaduzene ambalaze? ', kolicinaZaduzeneAmbalaze => {
                        
prompts.question('Kolicina vracene ambalaze? ', kolicinaVraceneAmbalaze => {

    let otkupnoMesto = new OtkupnoMesto(imeProizvodjaca, imeOtkupnogMesta);
    let proizvodjac = new Proizvodjac(imeProizvodjaca, prezimeProizvodjaca, jmbg, telefon, poreskaIzjava, ugovor, povrsinaParcele, tekuciRacun);
    let voce = new Voce(imeVoca, cenaPrvaKlasa, cenaDrugaKlasa, cenaTrecaKlasa);
    let otkupVoca = new OtkupVoca(brojDokumenta, kolicinaPrveKlase, kolicinaDrugeKlase, kolicinaTreceKlase, kolicinaZaduzeneAmbalaze, kolicinaVraceneAmbalaze);

    let saldo = voce.cenaPrvaKlasa * otkupVoca.kolicinaPrveKlase + voce.cenaDrugaKlasa * otkupVoca.kolicinaDrugeKlase + voce.cenaTrecaKlasa * otkupVoca.kolicinaTreceKlase;
    let date = new Date();
    let message = '';
    message = '\n\n Pregled otkupa: ' +
        '\n\n Broj dokumenta ' + otkupVoca.brojDokumenta +
        '\n\n Kolicina predatog voca prve klase : ' + otkupVoca.kolicinaPrveKlase + 
        '\n\n Kolicina predatog voca druge klase : ' + otkupVoca.kolicinaDrugeKlase + 
        '\n\n Kolicina predatog voca trece klase : ' + otkupVoca.kolicinaTreceKlase +
        '\n\n Kolicina zaduzene ambalaze : ' + otkupVoca.kolicinaZaduzeneAmbalaze +
        '\n\n Kolicina vracene ambalaze : ' + otkupVoca.kolicinaVraceneAmbalaze +
        '\n\n Saldo za otkupno mesto : ' + saldo +
        '\n\n' + date + 'Otkup voca';

    console.log(message);
    process.exit();
         
});

});

});

});

});

});

});

});

});

});

});

});

});

});

});

});

});

});

});
