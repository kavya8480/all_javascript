//prime num
let n=1,a=0,i;
for(i=2;i<=n-1;i++){
    if(n%i==0){
        a=1;
    }
}
if(n===1){
    console.log('it is neither prime nor composite.');
}
else if(a===0)
    console.log('it is prime.');
else console.log('it is not prime.');

let count =0;
for(i=1;i<=n;i++){
    if(n%i===0){
        count++;
        if(count>2){
            break;
        }
    }
}
if(count>2) console.log('not a prime num.');
else console.log('prime num.');