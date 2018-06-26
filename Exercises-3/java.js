//pengisian nama dan peran hanya berupa string yg disimpan dalam variabel

function java() {
    var nama = "";
    var peran = "";
      if (nama === '') {
      console.log('Nama').innerHTML= 'Nama tidak boleh kosong';
    }  else {
      console.log('Nama').innerHTML= 'Selamat datang di Dunia Proxytia, ' + nama;
    }

    if(peran == 'Ksatria') {
        console.log('Peran').innerHTML = 'Halo Ksatria ' + nama + ', kamu dapat menyerang dengan senjatamu!';
      } 
      else if(peran == 'ksatria') {
        console.log('Peran').innerHTML = 'Halo Ksatria ' + nama + ', kamu dapat menyerang dengan senjatamu!';
      }
      else if(peran == 'Tabib'){
        console.log('Peran').innerHTML = 'Halo Tabib ' + nama + ', kamu akan membantu temanmu yang terluka.';
      }
      else if(peran == 'tabib'){
        console.log('Peran').innerHTML = 'Halo Tabib ' + nama + ', kamu akan membantu temanmu yang terluka.';
      }
      else if(peran == 'Penyihir'){
        console.log('Peran').innerHTML = 'Halo Penyihir ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!';
      }
      else if(peran == 'penyihir'){
        console.log('Peran').innerHTML = 'Halo Penyihir ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!';
      }
      else {
        console.log('Peran').innerHTML= 'Pilih peranmu untuk memulai game';
      }
}