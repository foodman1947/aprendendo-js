window.onload = function(){
    // ==
    // >=
    // <=
    // !=
    // !==
    // ===
    var nome = "joaao",idade = '15', repetir=0;
    if (nome == "joao"){
        console.log('oi jão')
    }else{
        console.log('sai daqui seu lizo');
    }
    if (idade != 15){
        console.log('carai você é vc vc vcvcvcvc')
    }else{
        console.log('pta merda ');
    }
    while (nome == "joaao"){
        console.log('Hello world!!');
        if(repetir < 10){
            repetir++;
        }
        if(repetir == 10){
            nome = "guilherme";
        }
    }
    for(var numero=0 ; numero < 10; numero++){
        console.log("ola mundo!");
    }
    do{
        console.log('do');
    }while(nome == "bah");
}