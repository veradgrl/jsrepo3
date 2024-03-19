let sayilar = []
const randomSayiUret = (a, b) => {
    for (let index = 0; index < a; index++) {
      randomSayi = Math.floor(Math.random() * b) + 1;
      sayilar.push(randomSayi);
    }
    return sayilar;
  };

  module.exports = {
    randomSayiUret
  }