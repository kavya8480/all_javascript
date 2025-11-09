//while loops
let num=5,fact=1,i=1;
while(i<=num){
    fact=fact*i;
    i++;
}
console.log(fact);

//for loop
for(i=1;i<=num;i++){
    fact=fact*i;
}
console.log('fact is',fact);

//do-while loop

do{
  fact=fact*i; 
  i++; 
} while(i<=num);
console.log(fact);