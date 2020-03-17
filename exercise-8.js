function cariPelaku(str) {
    // you can only write your code here!

    var panjang = str.match(/\abc/g)
    hasil = panjang.length

    return hasil 
  }
  
  // TEST CASES
  console.log(cariPelaku('mabcvabc')); // 2
  console.log(cariPelaku('abcdabdc')); // 1
  console.log(cariPelaku('bcabcac')); // 1
  console.log(cariPelaku('abcabcabc')); // 3
  console.log(cariPelaku('babcbacabc')); // 2