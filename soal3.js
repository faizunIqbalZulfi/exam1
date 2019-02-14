var data = [{
        nama: "faizun",
        umur: 9,
        kelamin: "pria",
        job: "pilot"
    },
    {
        nama: "iqbal",
        umur: 10,
        kelamin: "wanita",
        job: "ceo"
    },
    {
        nama: "zulfi",
        umur: 5,
        kelamin: "wanita",
        job: "polisi"
    },
    {
        nama: "faiz",
        umur: 14,
        kelamin: "pria",
        job: "pns"
    },
    {
        nama: "bal",
        umur: 20,
        kelamin: "pria",
        job: "dev"
    },
    {
        nama: "zul",
        umur: 8,
        kelamin: "pria",
        job: "dev"
    },
]

var newJob = ["All"]
var fnJob = () => {
    newJob = ["All"]
    for (var i = 0; i < data.length; i++) {
        newJob[newJob.length] = data[i].job
    }
    var uniq = newJob.reduce((a, b) => {
        if (a.indexOf(b) < 0) a.push(b);
        return a;
    }, []);

    var newUniq = uniq.map((val) => val)
    return newUniq
}

var fnMapTable = () => {
    x = []
    for (let i = 0; i < data.length; i++) {
        x[x.length] = `
<tr id="td${i}">
    <td>${data[i].nama}</td>
    <td>${data[i].umur}</td>
    <td>${data[i].kelamin}</td>
    <td>${data[i].job}</td>
    
</tr>`
    }
    document.getElementById("inputData").innerHTML = x.join("")
}

var fnMapJob = () => {
    z = []
    for (let i = 0; i < fnJob().length; i++) {
        z[z.length] = `<option value="${fnJob()[i]}">${fnJob()[i]}</option>`

    }
    document.getElementById("job").innerHTML = z.join("")
}

var fnSubmit = (fnShow) => {
    var input = {
        nama: document.getElementById("inputNama").value,
        umur: document.getElementById("inputUmur").value,
        kelamin: document.querySelector("input[name=inputSex]:checked").value,
        job: document.getElementById("inputJob").value.toLowerCase(),
    }
    data[data.length] = input;

    if (!fnJob().includes(document.getElementById("inputJob").value)) {
        newJob[newJob.length] = document.getElementById("inputJob").value
    }
    fnMapTable()
    fnMapJob()
}

var fnSearchByName = () => {
    var tr = document.getElementById("myTable").getElementsByTagName("tr")
    var input = document.getElementById("filterNama").value.toLowerCase();
    for (let i = 0; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            if (td.innerText.toLowerCase().includes(input)) {
                tr[i].style.display = ""
            } else {
                tr[i].style.display = "none"
            }

        }
    }

}

var fnSearchByUmur = () => {
    var tr = document.getElementById("myTable").getElementsByTagName("tr")
    var inputMin = document.getElementById("filterUmurMin").value;
    var inputMax = document.getElementById("filterUmurMax").value;

    if (inputMin == "" || inputMax == "") {
        inputMin = 0;
        inputMax = 999;
    }

    for (let i = 0; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            if (parseInt(td.innerText) >= inputMin && parseInt(td.innerText) <= inputMax) {
                tr[i].style.display = ""
            } else {
                tr[i].style.display = "none"
            }
        }

    }

}

var fnSearchByJob = () => {
    var tr = document.getElementById("myTable").getElementsByTagName("tr")
    var input = document.getElementById("job").value;
    for (let i = 0; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName("td")[3];
        if (td) {
            if (td.innerText.includes(input) || input == "All") {
                tr[i].style.display = ""
            } else {
                tr[i].style.display = "none"
            }
        }
    }
}

var fnSearchByGender = () => {
    var tr = document.getElementById("myTable").getElementsByTagName("tr")
    var input = document.querySelector("input[name=filterSex]:checked").value.toLowerCase();
    for (let i = 0; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName("td")[2];
        if (td) {
            if (td.innerText.toLowerCase().includes(input)) {
                tr[i].style.display = ""
            } else {
                tr[i].style.display = "none"

            }
        }
    }

    console.log(td);


}

var fnSortNama = () => {
    // var y = data.slice(0, )
    var x = data.sort(function (a, b) {
        var x = a.nama.toLowerCase();
        var y = b.nama.toLowerCase();
        if (x < y) {
            return -1;
        }
        if (x > y) {
            return 1;
        }
        return 0;
    });

    fnMapTable()

    console.log(x);
    console.log(data);

    return x
}

var fnSortUmur = () => {
    var x = data.sort(function (a, b) {
        return a.umur - b.umur
    });
    fnMapTable()

    return x
}

var fnSortKelamin = () => {
    // var y = data.slice(0, )
    var x = data.sort(function (a, b) {
        var x = a.kelamin.toLowerCase();
        var y = b.kelamin.toLowerCase();
        if (x < y) {
            return -1;
        }
        if (x > y) {
            return 1;
        }
        return 0;
    });

    fnMapTable()

    console.log(x);
    console.log(data);

    return x
}
var fnSortJob = () => {
    // var y = data.slice(0, )
    var x = data.sort(function (a, b) {
        var x = a.job.toLowerCase();
        var y = b.job.toLowerCase();
        if (x < y) {
            return -1;
        }
        if (x > y) {
            return 1;
        }
        return 0;
    });

    fnMapTable()

    console.log(x);
    console.log(data);

    return x
}
fnJob()
fnMapTable()
fnMapJob()