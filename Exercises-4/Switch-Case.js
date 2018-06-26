var hari = 21; var bulan = 1; var tahun = 1945;

if (hari > 31) {
    console.log("Input hari salah")
} else
if (hari < 1){
    console.log("Input hari salah")
}
if (bulan > 12) {
    console.log("Input bulan salah")
} else
if (bulan < 1){
    console.log("Input bulan salah")
}
if (tahun > 2200) {
    console.log("Input tahun salah")
} else
if (tahun < 1900){
    console.log("Input tahun salah")
}

switch(bulan) {
  case 1: { console.log(hari + ' Januari ' + tahun); break; }
  case 2: { console.log(hari + ' Februari ' + tahun); break; }
  case 3: { console.log(hari + ' Maret ' + tahun); break; }
  case 4: { console.log(hari + ' April ' + tahun); break; }
  case 5: { console.log(hari + ' Mei ' + tahun); break; }
  case 6: { console.log(hari + ' Juni ' + tahun); break; }  
  case 7: { console.log(hari + ' Juli ' + tahun); break; }
  case 8: { console.log(hari + ' Agustus ' + tahun); break; }
  case 9: { console.log(hari + ' September ' + tahun); break; }
  case 10: { console.log(hari + ' Oktober ' + tahun); break; }
  case 11: { console.log(hari + ' November ' + tahun); break; }
  case 12: { console.log(hari + ' Desember ' + tahun); break; }
  default : { console.log('Bulan tidak tersedia'); }
}
