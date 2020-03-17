function kaliTerusRekursif(angka) {
    // you can only write your code here!
    angkaStr=angka.toString()

    if (angkaStr.length === 1) {
        return angka
    }
    var tampung = 1;
    for (let i = 0; i < angkaStr.length; i++) {
        tampung = tampung*(Number(angkaStr[i]))
    }

    return kaliTerusRekursif(tampung)
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6