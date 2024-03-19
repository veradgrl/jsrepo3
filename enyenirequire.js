const ogrenciNotHesapla = (vizeNotlari, finalNotlari, vizeOran) => {
    for (let index = 0; index < vizeNotlari.length; index++) {
      ogrenciNot.push(
        vizeNotlari[index] * vizeOran + finalNotlari[index] * (1 - vizeOran)
      );
    }
  };

  module.exports = {
    ogrenciNotHesapla
  }