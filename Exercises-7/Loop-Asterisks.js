var rows1 = 5;
var rows2 = 5;
var rows3 = 5;
// ===================================================================================
// 1. Menyusun Barisan Bintang

for (i= 1; i<=rows1; i++) {
  console.log('*');
}
// ===================================================================================
// 2. Menyusun Barisan Bintang Dengan Nested Looping

for(var q=1; q<=rows2; q++)
{
    e="";
    for(var w=1;w<=rows2;w++)
    e += "*"
    console.log(e)
}

// ===================================================================================
// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

for (i = 1; i <= rows3; i++) 
{
  s = '';
  for (j = 0; j < i; j++)
    s += '*';
  console.log(s);
}
