var error;

function clearing() {
    document.getElementById("in1").value = "";
    document.getElementById("in2").value = "";
}

function backspacer() {
    var op = document.getElementById("in1").value;
    document.getElementById("in1").value = op.slice(0, op.length - 1);
}

function adchar(n) {
    document.getElementById("in1").value += n;
}

function equals() {
    var op = document.getElementById("in1").value;
    var opnew = filtersymbols(op);

    if (error == undefined){
        document.getElementById("in2").value = eval(opnew);
    } else{
        document.getElementById("in2").value = "syntax error";
    }
}
function filtersymbols(i) {
    i = i.replace("x", "*");
    i = i.replace("^", "**");
    i = i.replace("√", "Math.sqrt");
    i = i.replace("Π", "Math.PI");
    i = i.replace("sin", "Math.sin");
    i = i.replace("cos", "Math.cos");
    i = i.replace("tan", "Math.tan");
    i = i.replace("asin", "Math.asin");
    i = i.replace("acos", "Math.acos");
    i = i.replace("atan", "Math.atan");
    while (checkFact(i)) {
        i = factorialized(i);
    }
    return i;
}
function factorialized(n) {
    var id = n.search("!")-1;
    var num = "",
     fnum = "";
    var j;
    for(j=id; j>=0; j--) {
        if (!isNaN(n[j])) {
            num += n[j];
        } else {
            break;
        }
    }
    for (j = 0; j < num.length; j++){
        fnum += num[num.length - 1 -j];
    }
    var mwk =fnum + "!";
    i = i.replace(mwk, fact(fnum));
    return i;
}
function checkFact(n){
    if (n.search("!")>0){
        return true;
    }
}
function fact(n) {
    if (n == 1 || n==0){
        return 1;
    } else{
        return fnum * fact(n-1);
    }
}