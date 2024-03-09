//問1
function menseki(hankei){
    return "面積は"+hankei*hankei*3.14+"cm²です。"+"<br>";
}
document.write("■■■問1■■■"+"<br>");
document.write(menseki(5));
document.write(menseki(7));
document.write(menseki(10));
document.write("<br>");

//問2
function kingaku(otona,kodomo){
    return +500*otona+200*kodomo+"円です。"+"<br>";
}
document.write("■■■問2■■■"+"<br>");
document.write(kingaku(2,4));
document.write(kingaku(1,5));
document.write(kingaku(3,7));
document.write("<br>");