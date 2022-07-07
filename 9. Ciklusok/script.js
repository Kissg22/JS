var szamok = [2,4,13,4,6,42];

var ParosSzama = 0

ParosSzama += szamok[0] % 2 === 0 ? 1: 0;

console.log(ParosSzama);
console.log("----")

var index = 0;
var paratlanszam = 0;

while (index < szamok.length){
    paratlanszam += szamok[index] % 2 > 0 ? 1: 0;
    console.log(index++);
    
    
};
console.log("----")
console.log(paratlanszam)
console.log("----")
var paratlanszam2 = 0
for (var i = 0; i < szamok.length; i++){
    console.log(i)
    console.log(szamok[i])
    console.log('-----------')
    paratlanszam2 += szamok[i] % 2 > 0 ? 1 : 0;

}
console.log("----")
console.log(paratlanszam2);
console.log("----")
paratlanszam3 = 0
for(var szam of szamok) {
    console.log(szam);
    paratlanszam3 += szam % 2 > 0 ? 1 : 0;
}
console.log("----")
console.log(paratlanszam3);