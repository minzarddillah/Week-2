var nama = 'minzard';
var age;
var money;
  if (nama === ''){
    console.log('Kenalan dulu kali sebelum masuk!')
  }else if (age <= 17){
    console.log('jangan berjudi, anak muda!')
  }else if (age >= 17 && money <= 50000){
    console.log('Uang tidak cukup. Anda harus pulang.')
  }

  if(peran === 'Ksatria'){
    console.log('Halo Ksatria ' + nama + ', kamu dapat menyerang dengan senjatamu!')
  }else if (peran === 'ksatria'){
    console.log('Halo Ksatria ' + nama + ', kamu dapat menyerang dengan senjatamu!')
  }else if (peran === 'Tabib'){
    console.log('Halo Tabib ' + nama + ', kamu akan membantu temanmu yang terluka.')
  }else if (peran === 'tabib'){
    console.log('Halo Tabib ' + nama + ', kamu akan membantu temanmu yang terluka.')
  }else if (peran === 'Penyihir'){
    console.log('Halo Penyihir ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!')
  }else if (peran === 'penyihir'){
    console.log('Halo Penyihir ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!')
  }else {
    console.log('Pilih peranmu untuk memulai game')
  }