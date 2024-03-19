let sayilar = [1, 2, 3, 4, 5];
sayilar.sort((a, b) => a - b);

console.log(sayilar.sort((a, b) => a - b));
console.log(sayilar.reverse());

function toplama(a, b) {
  console.log(a + b);
}

toplama(5, 6);

function faktoriyel(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * faktoriyel(n - 1);
}

console.log(faktoriyel(5));

function diziToplam(dizi) {
  let toplam = 0;
  for (let index = 0; index < dizi.length; index++) {
    toplam = toplam + dizi[index];
  }
  return toplam
}
 console.log(diziToplam([1,2,3,4,5]));

function sayiListeleme(bas, bit) {
    for (let index = bas; index <= bit; index++) { 
        console.log(index);  
    }
}

sayiListeleme(3, 8)

function tekrarEdenleriSay(metin) {
    metinHarfleri = metin.split("")
    let x = metinHarfleri.join("")
    return metinHarfleri
}
console.log(tekrarEdenleriSay("selam"));