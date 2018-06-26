Newton Second Law

ALGORITMA
1. cari massa benda (kg)
  1.1 jika massa benda lebih dari 0 maka lanjut ke step 2
  1.2 jika massa benda kurang dari 0 maka lanjut ke step 1
2. cari percepatan benda (m/s2)
  2.1 jika percepatan benda lebih dari 0 maka lanjut ke step 3
  2.2 jika percepatan kurang dari 0 maka lanjut ke step 2
3. cari rumus resultan gaya (newton)
4. menghitung resultan gaya
5. hasil

PSEUDOCODE
store "massa" with value 600
store "percepatan" with value 2

if 'massa' or 'percepatan' <= 0 then
  display error 'ANGKA HARUS LEBIH DARI 0'
else
  store 'newton' set with calculate ('massa' * 'percepatan') / 2
  display "newton"
end if

JAVASCRIPT
var massa = 600;
var percepatan = 2;         

if (massa <= 0 || /* OR = || */ percepatan <= 0) {
    console.log('ANGKA HARUS LEBIH DARI 0')
} else {
var newton = (massa * percepatan);

console.log('Newton Second Law');
console.log('newton = ' + newton);
}
/*=================================================*/
Tahun Kabisat

ALGORITMA

1. Jika angka tahun itu habis dibagi 400, maka tahun itu sudah pasti tahun kabisat.
2. Jika angka tahun itu tidak habis dibagi 400 tetapi habis dibagi 100, maka tahun itu sudah pasti bukan merupakan tahun kabisat.
3. Jika angka tahun itu tidak habis dibagi 400, tidak habis dibagi 100 akan tetapi habis dibagi 4, maka tahun itu merupakan tahun kabisat.
4. Jika angka tahun tidak habis dibagi 400, tidak habis dibagi 100, dan tidak habis dibagi 4, maka tahun tersebut bukan merupakan tahun kabisat.

PSEUDOCODE
if year modulo 4 is 0
then
  if year modulo 100 is 0
  then 
    if year modulo 400 is 0
    then
      ini tahun Kabisat
    else
      ini bukan tahun Kabisat
  else ini tahun Kabisat
else ini bukan tahun Kabisat
end if


JAVASCRIPT
var tahun = 2004;

if (tahun % 4 === 0 && tahun % 100 !== 0)
{
    console.log("Ini tahun kabisat");
} else if (tahun % 4 === 0 && tahun % 100 === 0 && tahun % 400) {
    console.log("Ini tahun kabisat");
} else {
    console.log("Ini bukan tahun kabisat");
}

/*=================================================*/
Laundry Day

ALGORITMA
1. mencari mesin cuci
2. membuka tutup mesin cuci
3. memasukkan pakaian ke mesin cuci
  3.1 jika sudah 20 pakaian maka lanjut ke step 4
  3.2 jika kurang 20 maka lanjut ke step 3
4. hidupkan mesin cuci

PSEUDOCODE
store "mesin cuci" with 0

while "mesin cuci" < 19 do
  set "mesin cuci" = "mesin cuci" + 1
end while
display "penuh"

/*=================================================*/
Periksa Kuku

ALGORITMA
1. Memeriksa Kuku
2. jika kuku panjang, maka harus di hukum
3. jika kuku pendek, maka mendapatkan reward

PSEUDOCODE
store "murid" with 0
  
while "murid" < 39
  do "periksa"
    if "kuku panjang" 
    do "hukum"
    display "kamu di hukum"
  else
    if "kuku pendek"
    do "selamat"
    display "selamat kamu tidak di hukum"
end if
end while

/*=================================================*/
var hungerLevel = 10;
if (hungerLevel > 7) {
  console.log('Time to eat!')
} else {
  console.log('Let\'s eat later.')
}
/*=================================================*/
var moonPhase = 'full'
var foggyNight = false
if (moonPhase === 'full' || foggyNight === true) {
  console.log('Howwlll!');
} else if (moonPhase === 'mostly full') {
  console.log('Arms and legs are getting hairier');
} else if (moonPhase === 'mostly new') { 
  console.log('Back on two feet');
} else {
  console.log('Invalid moon phase');
}

switch (moonPhase) {
  case 'full':
    console.log('Howwwwlll!!');
    break;
  case 'mostly full':
    console.log('Arms and legs are getting hairier');
    break;
  case 'mostly new':
    console.log('Back on two feet')
    break;
  default:
    console.log('invalid moon phase')
    break;
}
/*=================================================*/
var stopLight = 'green';

if (stopLight === 'red') {
  console.log('Stop');
} else if (stopLight === 'yellow') {
  console.log('Slow down');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}
/*=================================================*/
var stopLight = 'green';
var pedestrians = true;

if (stopLight === 'green' && pedestrians === false) {
  console.log('Go!');
} else {
  console.log('Stop');
}
/*=================================================*/
var groceryItem = 'papaya';

switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}

var nama = '';
var peran = '';

prompt('Nama harus di isi')