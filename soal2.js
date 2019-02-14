arrX = []
do {
    var input = parseInt(prompt("Masukan angka: "))
    if (!isNaN(input)) {
        arrX[arrX.length] = input


    } else {
        break;
    }
    console.log(arrX);

} while (true)
var numMin
var numMax
for (i = 0; i < arrX.length; i++) {
    if (arrX[i] < numMin || numMin == undefined) {
        numMin = arrX[i]

    }

}
for (i = 0; i < arrX.length; i++) {
    if (arrX[i] > numMax || numMax == undefined) {
        numMax = arrX[i]

    }

}
var arrSort = arrX.slice(0, arrX.length).sort((a, b) => a - b)
// console.log(arrX);
console.log(arrSort);
console.log("Nilai Tertinggi : " + numMax);
console.log("Nilai Terendah : " + numMin);