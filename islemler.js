const toplama = (sayi1, sayi2) => {
  if (typeof sayi1 === "number" && typeof sayi2 === "number") {
    return sayi1 + sayi2;
  } else {
    throw new Error("sayi dışında veri girilemez");
  }
};

const cikarma = (sayi1, sayi2) => {
  if (typeof sayi1 === "number" && typeof sayi2 === "number") {
    return sayi1 - sayi2;
  } else {
    throw new Error("sayi dışında veri girilemez");
  }
};

const carpma = (sayi1, sayi2) => {
  if (typeof sayi1 === "number" && typeof sayi2 === "number") {
    return sayi1 * sayi2;
  } else {
    throw new Error("sayi dışında veri girilemez");
  }
};

const bolme = (sayi1, sayi2) => {
  if (typeof sayi1 === "number" && typeof sayi2 === "number") {
    if (sayi2 === 0) {
      return "Bölen 0 olamaz";
    } else {
      return sayi1 / sayi2;
    }
  } else {
    throw new Error("sayi dışında veri girilemez");
  }
};

const faktoriyel = (sayi) => {
  if (typeof sayi === "number") {
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
  throw new Error("sayi dışında veri girilemez");
};

const mutlak = (sayi) => {
  if (typeof sayi === 'number') {
    if (sayi<0) {
      return-sayi
    } else {
      return sayi
    }
  } else {
    throw new Error("Sayi girilmeli")
  }
}

module.exports = {
  toplama,
  cikarma,
  carpma,
  bolme,
  faktoriyel,
  mutlak,
};
