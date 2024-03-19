// function gunaydin(isim) {
//     console.log("merhaba", isim, "günaydın");
// }

// const gunaydin = function (isim) {
//     console.log("merhaba", isim, "günaydın");
// }

const gunaydin = (isim) => {
  if (typeof isim === "string") {
    return "Merhaba " + isim + " günaydın";
  } else {
    throw new Error("Metin girilmeli");
  }
};

const tunaydin = (isim) => {
  if (typeof isim === "string") {
    return "Merhaba " + isim + " tünaydın";
  } else {
    throw new Error("Metin girilmeli");
  }
};

const iyiAksamlar = (isim) => {
  if (typeof isim === "string") {
    return "Merhaba " + isim + " iyi akşamlar";
  } else {
    throw new Error("Metin girilmeli");
  }
};

const iyiGeceler = (isim) => {
  if (typeof isim === "string") {
    return "Merhaba " + isim + " iyi geceler";
  } else {
    throw new Error("Metin girilmeli");
  }
};

module.exports = {
  gunaydin,
  tunaydin,
  iyiAksamlar,
  iyiGeceler,
};
