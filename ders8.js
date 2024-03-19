const mathModule = require('./math')

let sayi1 = 9 
let sayi2 = 5

let toplamSonucu = mathModule.toplama(sayi1, sayi2)
let cikarmaSonucu = mathModule.cikarma(sayi1, sayi2)
let carpmaSonucu = mathModule.carpma(sayi1, sayi2)
let bolmeSonucu = mathModule.bolme(sayi1, sayi2)
let isimm = mathModule.isim
console.log(toplamSonucu, cikarmaSonucu, carpmaSonucu,bolmeSonucu, isimm)
