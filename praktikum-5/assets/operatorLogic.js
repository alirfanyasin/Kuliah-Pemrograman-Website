  // IF
  let user = "admin";
  if (user === "admin") {
    console.log("Selamat datang admin...");
  }

  // IF ELSE
  let hari = "selasa";

  if (hari === "senin") {
    console.log("Saatnya kerja...");
  } else {
    console.log("Bukan hari senin...");
  }

  // SWITCH
  let nilai = 6;

  switch (nilai) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      console.log("Selama ini ngapain aja bro?");
      break;
    case 6:
    case 7:
    case 8:
      console.log("Belajar lebih giat lagi!");
      break;
    case 9:
    case 10:
      console.log("Pertahankan!");
      break;
    default:
      console.log("Masukkan angka 1 - 10");
  }

  // FOR
  for (let i = 100; i >= 0; i = i - 5) {
    console.log(i + " * 5 = " + i * 5);
  }

  // Menampilkan Array
  let siswa = ["Andri", "Joko", "Sukma", "Rina", "Sari"];

  for (let i = 0; i < 5; i++) {
    console.log(siswa[i]);
  }

  // Array Length
  let murid = ["Andri", "Joko", "Sukma", "Rina", "Sari"];
  let jumlah_murid = murid.length;

  console.log("Jumlah murid = " + jumlah_murid);

  for (let i = 0; i < jumlah_murid; i++) {
    console.log(murid[i]);
  }

  // FOR OF ARRAY
  let siswas = ["Andri", "Joko", "Sukma", "Rina", "Sari"];

  for (let i of siswas) {
    console.log(i);
  }