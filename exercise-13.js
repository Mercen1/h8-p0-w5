function sorting(arrNumber) {
    // code di sini
    for (let i = 0; i < arrNumber.length - 1; i++) {
        if (arrNumber[i] > arrNumber[i + 1]) {
            var tampung = arrNumber[i];
            arrNumber[i] = arrNumber[i + 1];
            arrNumber[i + 1] = tampung;
        }
    }

    return arrNumber
}

function getTotal(arrNumber) {
    // code di sini
    if (arrNumber.length > 0) {
        var max = arrNumber[arrNumber.length - 1];
        var temp = 0;
        for (let j = 0; j < arrNumber.length; j++) {
            if (arrNumber[j] === max) {
                temp++
            }
        }
    } else {
        return ''
    }

    return 'angka paling besar adalah ' + max + ' dan jumlah kemunculan sebanyak ' + temp + ' kali'
}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''