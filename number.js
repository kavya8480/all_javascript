//two numbers are equal or not
let a=10,b=6;
if(a===b){
    console.log("To numbers are equal.");
}
else {
     console.log("To numbers are not equal.");
}

//check number is even or odd?
let c=12;
if(c%2==0){
    console.log('The number is even.');
}
else {
    console.log('The number is odd.');
}

//number is positive or negative
if(a>0){
    console.log('The number is positive.');
}
if(a===0){
    console.log('The number is zero.');
}
if(a<0){
    console.log('The number is negative.');
}
//greatest b/w 2nums
if(a>b){
    console.log('a is greatest.');
}
else {
    console.log('b is greatest.');
}

//greatest b/w 3nums
if(a>b &&a>c){
    console.log('a is greatest.');
}
else {
    if(b>a &&b>c)
    {
        console.log('b is greatest.');
    }
    else console.log('c is greatest.');
}
//greatest b/w 4nums
let d=20;
if(a>b&&a>c&&a>d){
    console.log('a is greatest.');
}
if(b>a&&b>c&&b>d){
    console.log('b is greatest.');
}
if(c>a&&c>b&&c>d){
    console.log('c is greatest.');
}
if(d>a&&d>b&&d>c){
    console.log('d is greatest.');
}
/*if(a>b){
big1=a} else {big1=b}
if(c>d){big2=2} else{ big2=d}
if(big1>big2){big=big1} else{big=big2}
console.log("big is",big);
*/

//leap year
let year=2004;
if(((year%4===0)&&(year%100!==0))||(year%400===0)){
console.log('year is leap year.');
}
else {
    console.log('not a leap year.');
}

//able to vote or not
let p_age=20;
if(p_age>=18){
    console.log('able to vote.');
}
else {
    console.log('not able to vote.');
}

