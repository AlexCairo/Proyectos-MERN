const PI = 3.14;

function sumar(a,b){
    return a + b;
}

function restar(a,b){
    return a - b;
}

function dividir(a,b){
    if(b == 0){
        return ErrorDivision();
    }else{
        return a/b;
    }
}

function ErrorDivision(){
    return 'No se puede dividir entre 0 !';
}

module.exports = {
    sumar : sumar,
    restar : restar,
    dividir : dividir,
    PI : PI,
}