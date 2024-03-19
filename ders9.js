function faktoriyel1(sayi) {
  if (sayi < 0) {
    throw new Error("sayi 0 dan küçük olamaz");
  } else {
    let carpim = 1;
    for (let index = 1; index <= sayi; index++) {
      carpim = carpim * index;
    }
    return carpim;
  }
}
// console.log(faktoriyel1(5));

const faktoriyel2 = (sayi) => {
  if (sayi < 0) {
    throw new Error("sayi 0 dan küçük olamaz");
  } else {
    let carpim = 1;
    for (let index = 1; index <= sayi; index++) {
      carpim = carpim * index;
    }
    return carpim;
  }
};
// console.log(faktoriyel2(3));

const faktoriyel3 = function (sayi) {
  if (sayi < 0) {
    throw new Error("sayi 0 dan küçük olamaz");
  } else {
    let carpim = 1;
    for (let index = 1; index <= sayi; index++) {
      carpim = carpim * index;
    }
    return carpim;
  }
};
// console.log(faktoriyel3(6));

try {
  let sonuc = faktoriyel1(-6);
  console.log("hata oluşmadı", sonuc);
} catch (error) {
  console.log("hata oluştu", error.message);
} finally {
  console.log("faktöriyel fonksiyonu çalıştı");
}

try {
  let sonuc = faktoriyel2(-5);
  console.log("hata oluşmadı", sonuc);
} catch (error) {
  console.log("hata oluştu", error.message);
} finally {
  console.log("faktöriyel2 fonksiyonu çalıştı");
}

