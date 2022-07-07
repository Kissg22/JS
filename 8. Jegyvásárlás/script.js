
var quantity = prompt('Add meg a darabszámot')
var type = prompt('Add meg a típust')



console.log(quantity)
console.log(type)
/*
var price = type === "student" ? 300 : 350;
var discount = quantity > 10 ? 0.9 : 1;     
alert(discount)

var total = quantity * price * discount;

*/


/*
2. megoldás
*/
var types = {
    student: 300,
    adult: 350,
    retired: 280,


};

var price = types[type];
if (price === undefined){
    alert("Érvénytelen")

}else{
    var discount = quantity > 10 ? 0.9 : 1; 

    var total = quantity * price * discount;
    
    alert(total);
}

/*
var i = 5
while (i < 10) {   
    i++;
    var osszeg = 0
    var quantity = prompt('Add meg a darabszámot')
    var type = prompt('Add meg a típust')
    
    console.log(quantity)
    console.log(type)
if ('student' == type) {
    

    
        osszeg += 300 * quantity
        
    
  } 
else if ("adult" == type) {
    

    
        osszeg += 350 * quantity
        
  }
else{
    console.log("HIBA!!!")
}

if (quantity >= 10){
    osszeg *= 0.90
}

console.log(osszeg)

}

*/
