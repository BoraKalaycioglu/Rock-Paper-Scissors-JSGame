let oyuncuSayac = 0;
let bilgisayarSayac = 0;

function bilgisayarHamlesi (){
  return["Taş","Kağıt", "Makas"][Math.floor(Math.random() * 3)];
}

function tasHamlesi() {
  const hamle = bilgisayarHamlesi();
  if (hamle==="Kağıt") {
    bilgisayarSayac++;
    bilgisayarHamle.innerText = hamle;
    bilgisayar.innerText ="Bilgisayar: " + bilgisayarSayac;
    kazananKisi.innerText = "Kazanan Bilgisayar"
  } else if (hamle === "Makas") {
    oyuncuSayac++;
    bilgisayarHamle.innerText = hamle;
    oyuncu.innerText= "Oyuncu: " + oyuncuSayac;
    kazananKisi.innerText = "Kazanan oyuncu";
  }else {
    bilgisayarHamlesi.innerText = hamle;
    kazananKisi.innerText = "Berabere";
  }
}

function kagitHamlesi() {
  const hamle = bilgisayarHamlesi();
  if (hamle==="Taş") {
    oyuncuSayac++;
    bilgisayarHamle.innerText = hamle;
    oyuncu.innerText ="Bilgisayar: " + bilgisayarSayac;
    kazananKisi.innerText = "Kazanan Bilgisayar"
  } else if (hamle === "Makas") {
    oyuncuSayac++;
    bilgisayarHamle.innerText = hamle;
    oyuncu.innerText= "Oyuncu: " + oyuncuSayac;
    kazananKisi.innerText = "Kazanan oyuncu";

  }else {
    bilgisayarHamlesi.innerText = hamle;
    kazananKisi.innerText = "Berabere";
  }
}

function makasHamlesi() {
  const hamle = bilgisayarHamlesi();
  if (hamle==="Taş") {
    bilgisayarSayac++;
    bilgisayarHamle.innerText = hamle;
    bilgisayar.innerText ="Bilgisayar: " + bilgisayarSayac;
    kazananKisi.innerText = "Kazanan Bilgisayar"
  } else if (hamle === "Kağıt") {
    oyuncuSayac++;
    bilgisayarHamle.innerText = hamle;
    oyuncu.innerText= "Oyuncu: " + oyuncuSayac;
    kazananKisi.innerText = "Kazanan oyuncu";

  }else {
    bilgisayarHamlesi.innerText = hamle;
    kazananKisi.innerText = "Berabere";
  }
}

tas.addEventListener("click", tasHamlesi);
kagit.addEventListener("click", tasHamlesi)
makas.addEventListener("click", tasHamlesi)

