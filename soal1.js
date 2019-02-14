// document.getElementById("btn").value

var fnBentuk = (inputBentuk, inputJml) => {
    inputBentuk = document.getElementById("inputBentuk").value
    inputJml = document.getElementById("inputJml").value
    var z = ""
    if (inputBentuk == 1) {
        for (var i = 0; i < inputJml; i++) {
            // banyak baris

            for (var j = 0; j < i + 1; j++) {
                // bintang
                z += "*" + " ";
            }

            z += "<br>";
        }

    } else if (inputBentuk == 2) {
        for (var i = 0; i < inputJml; i++) {
            // banyak baris

            for (var j = 0; j < inputJml; j++) {
                // bintang
                z += "*" + " ";
            }

            z += "<br>";
        }

    } else if (inputBentuk == 3) {
        for (var i = 0; i < inputJml; i++) {
            // banyak baris

            for (var j = 0; j < inputJml - 1 - i; j++) {
                // bintang
                z += `&nbsp;&nbsp;&nbsp;`;
            }
            for (var k = 0; k < i + 1; k++) {
                // bintang
                z += "*" + " ";
            }

            z += "<br>";
        }


    }

    // console.log(z);
    document.getElementById("output").innerHTML = z


}