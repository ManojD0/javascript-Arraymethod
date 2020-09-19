
var list=[
    {
    name:"tim",age:45
},
{
    name:"tim",age:675
},
{
    name:"mark",age:45
},
{
    name:"tim",age:45
},
{
    name:"elon",age:45
},
]


//filter
let filterdata=list.filter(function(item){
    return item.age>=500;
});

console.log(filterdata)
//filter

//map
let maparray=list.map(function(item){
    return item.name;
})
console.log(maparray)
//map

//find
let mapfind=list.find(function(item){
    return item.name=='tim';
})
console.log(mapfind)
//find

//reduce=Total
let totoal=list.reduce(function(currentValue,item){
    return item.age+currentValue;
},0);
console.log(totoal)

//reduce


