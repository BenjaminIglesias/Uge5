//opgave 1) 
//a
let arr = ["Hassan","Jan","Peter","Boline","Frederik"];
let newarrIncludea = arr.filter(word => word.includes("a"));
//b
let newArrReversed = arr.map(word => word.substring("").split("").reverse("").join("")); 

//opgave 2)
//a
function myFilter(array,callback){
    const returnList = [];
    for(idx in array){
     if(callback(array[idx])){
         returnList.push(array[idx])
     }   
    }
return returnList;
}
//b
function myMap(array,callback){
const returnList = [];
for(idx in array){
    returnList.push(callback(array[idx]));
}
return returnList;
}

//3
//a
function callback3a(element,index,array){
if(index < array.length -1){
    return element + array[index + 1]
}
return element;
}
var numbers = [1, 3, 5, 10, 11];
let result= numbers.map(callback3a);
console.log(result);
//b
function callback3b(element,index,array){
    let a = "<a href=\"\"> " + element + "</a>";
    if(index == array.length -1){
    return  a + "\n" +"</nav>"; 
}
if(index == 0){
    return "<nav>" +"\n" + a;
}
console.log(index);
return a;
}


let resultb = arr.map(callback3b).join("\n");
console.log(resultb);