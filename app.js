const randomModule = require("./random");
const dairelslemModule = require("./daireIslem");
const getdataModule = require("./getdata");

let randomSayilar = randomModule.randomSayiUret(10, 200);
console.log("Random yarı çaplar", randomSayilar);
console.log("alanlar", dairelslemModule.alanHesapla(randomSayilar));
console.log("cevreler", dairelslemModule.cevreHesapla(randomSayilar));
getdataModule
  .fetchUsers()
  .then((data) => {
    for (let index = 0; index < data.length; index++) {
      console.log(data[index].firstName);
    }
  })
  .catch((err) => {
    console.log(err);
  });

