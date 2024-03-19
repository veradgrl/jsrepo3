const toplama = (sayi1, sayi2) => {
  return sayi1 + sayi2;
};

const cikarma = (sayi1, sayi2) => {
  return sayi1 - sayi2;
};

const carpma = (sayi1, sayi2) => {
  return sayi1 * sayi2;
};

const bolme = (sayi1, sayi2) => {
  if (sayi2 === 0) {
    return "Bölen 0 olamaz";
  } else {
    return sayi1 / sayi2;
  }
};

const mod = (sayi1, sayi2) => {
  return sayi1 % sayi2;
};

let isim = "vera";

module.exports = {
  toplama,
  cikarma,
  carpma,
  bolme,
  isim,
};
