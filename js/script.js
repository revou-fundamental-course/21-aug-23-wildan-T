// Modal
let modal = document.getElementById("modal");
let modalInput = document.getElementById("nama-user");

window.addEventListener("load", function () {
  modal.style.display = "block";
});

let closeButton = document.querySelector(".modal-submit");
closeButton.addEventListener("click", function () {
  let namaUser = modalInput.value;

  if (namaUser == "") {
    alert("Input tidak boleh kosong!");
  } else {
    document.getElementById("name").innerHTML = namaUser;
    document.getElementById("name2").innerHTML = namaUser;
    document.getElementById("name3").innerHTML = namaUser;
    modal.style.display = "none";
  }
});

// Form
let nameInput = document.getElementById("nama");
let tglLahirInput = document.getElementById("tgl-lahir");
let pesanInput = document.getElementById("pesan");
let jenisInput = document.getElementsByName("jenis");

document.getElementById("kirim").addEventListener("click", function () {
  let nama = nameInput.value;
  let tglLahir = tglLahirInput.value;
  let pesan = pesanInput.value;

  let jenis;

  for (let i = 0; i < jenisInput.length; i++) {
    if (jenisInput[i].checked) {
      jenis = jenisInput[i].value;
      break; // Keluar dari loop begitu nilai yang dipilih ditemukan
    }
  }

  if (nama == "" || tglLahir == "" || pesan == "" || jenis == "") {
    alert("Input harus terisi semua!");
  } else {
    document.getElementById("current-time").innerHTML = Date();
    document.getElementById("nama-output").innerHTML = nama;
    document.getElementById("tanggal-lahir").innerHTML = tglLahir;
    document.getElementById("pesan-output").innerHTML = pesan;
    document.getElementById("jenis-kelamin").innerHTML = jenis;
  }
});

//Slide
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var imgList = document.getElementsByClassName("slide");

  if (n > imgList.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = imgList.length;
  }

  for (i = 0; i < imgList.length; i++) {
    imgList[i].style.display = "none";
  }

  imgList[slideIndex - 1].style.display = "block";
}

setInterval(() => {
  plusDivs(1);
}, 3000);
