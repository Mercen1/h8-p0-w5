var hurufKecil = 'abcdefghijklmnopqrstuvwxyz'
var vocalKecil = 'aiueo'
var hurufBesar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var vocalBesar = 'AIUEO'

function changeVocals(str) {
    //code di sini
    var arrStr = [];
    for (let i = 0; i < str.length; i++) {
        arrStr.push(str[i])
    }
    for (let i = 0; i < arrStr.length; i++) {
        for (let j = 0; j < hurufKecil.length; j++) {
            for (let k = 0; k < vocalKecil.length; k++) {
                if (arrStr[i] === hurufKecil[j] && arrStr[i] === vocalKecil[k]) {
                    arrStr[i] = hurufKecil[j + 1]
                }
            }
        }
        for (let j = 0; j < hurufBesar.length; j++) {
            for (let k = 0; k < vocalBesar.length; k++) {
                if (arrStr[i] === hurufBesar[j] && arrStr[i] === vocalBesar[k]) {
                    arrStr[i] = hurufBesar[j + 1]
                }
            }
        }
    }
    var tampung ='';
    for (let i = 0; i < arrStr.length; i++) {
        tampung+=arrStr[i]
    }
    
    return tampung;
}

function reverseWord(str) {
    //code di sini
    hasil ='';
    for (let i = str.length-1; i >= 0; i--) {
        hasil += str[i];
    }
    return hasil;
}

function setLowerUpperCase(str) {
    //code di sini
    var arrData = [];
    for (let i = 0; i < str.length; i++) {
        arrData.push(str[i])
    }
    for (let i = 0; i < arrData.length; i++) {
        for (let j = 0; j < hurufBesar.length; j++) {
            if(arrData[i]===hurufBesar[j]){
                arrData[i]=hurufKecil[j]
            } else if( arrData[i]===hurufKecil[j]){
                arrData[i]=hurufBesar[j]
            }
        }
    }
    var tampung ='';
    for (let i = 0; i < arrData.length; i++) {
        tampung+=arrData[i]
    }
    return tampung
}

function removeSpaces(str) {
    //code di sini
    var hasil ='';
    for (let i = 0; i < str.length; i++) {
        if(str[i]!==' '){
            hasil+= str[i]
        }
    }
    return hasil
}

function passwordGenerator(name) {
    //code di sini
    var dataChange = changeVocals(name);
    var reset = reverseWord(dataChange);
    var lowerUpper = setLowerUpperCase(reset);
    var hasil = removeSpaces(lowerUpper)

    if(name.length<5){
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
    return hasil;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'