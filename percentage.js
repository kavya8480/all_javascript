let m=30,e=40,p=45,c=50,b=85,total,percent;
total=m+e+p+c+b;
percent=(total/500)*100;
console.log('total mark is',total);
console.log('the percent is',percent);
if(percent>=90){
    console.log("Grade-A1");
}
else if(percent>=80 && percent<90){
    console.log("Grade-A2");
}
else if(percent>=70 && percent<80){
    console.log("Grade-B1");
}
else if(percent>=60 && percent<70){
    console.log("Grade-B2");
}
else if(percent>=50 && percent<60){
    console.log("Grade-C1");
}
else if(percent>=40 && percent<50){
    console.log("Grade-C2");
}
else {
    console.log("Fail");
}