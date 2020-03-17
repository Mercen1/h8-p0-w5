function totalDigitRekursif(angka) {
    // you can only write your code here!
    angkaStr = angka.toString();
    var kurang = (Number(angkaStr[0])) * Math.pow(10, angkaStr.length - 1)

    if (angkaStr.length === 1) {
        return angka
    } else {

        return Number(angkaStr[0]) + totalDigitRekursif(angka - kurang)
    }

}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5