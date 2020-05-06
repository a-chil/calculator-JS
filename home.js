function insert(val) {
    document.getElementById("textview").value += val;
}

function equal() {
    var val = document.getElementById("textview").value;
    if (val) {
        document.getElementById("textview").value = eval(val);
    }
    
}

function clean() {
    document.getElementById("textview").value = '';
}

function back() {
    var val = document.getElementById("textview").value;
    document.getElementById("textview").value = val.substring(0,val.length-1);
}

function percent() {
    document.getElementById("textview").value /= 100;
}