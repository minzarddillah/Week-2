// 1. Melakukan Looping Menggunakan While

console.log("LOOPING PERTAMA")
var x = 2
while(x <= 20)
{
    console.log(x + " - I love coding");
    x = x + 2
}
console.log("LOOPING KEDUA")
var x = 20
while(x > 0)
{ 
    console.log(x + " - I will become fullstack developer");
    x = x - 2
}

// 2. Melakukan Looping Menggunakan For

console.log("LOOPING PERTAMA")
for(var i=1; i<=20;i++){
    console.log(i+" - I love coding")
}
console.log("LOOPING PERTAMA")
for(var j=20; j>0;j--){
    console.log(j+" - I will become fullstack developer")
}

// 3. Angka Ganjil dan Genap

var angka;
for(angka=1; angka<=20;angka++){
    if (angka % 2 === 0){
      console.log(angka+" ganjil")}
  else {
    console.log(angka+" genap")}
  }
// PERBAIKAN
var i;
for(var i = 1; i<= 100 ;i+=2) {
  if(i % 3 === 0){
    console.log(i + " kelipatan 3");
  }else{
    console.log(i);
  }
}

var j;
for (j = 1 ; j<= 100 ; j+=5) {
  if(j % 6 === 0){
    console.log(j + " kelipatan 6");
  }else{
    console.log(j)
  }
}

var k;
for (k = 1; k <= 100 ; k+=9) {
  if(k % 10 === 0){
    console.log(k + " kelipatan 10");
  }else{
    console.log(k)
  }
}
//===================================

