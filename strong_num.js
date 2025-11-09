let n=145,temp=n,i=1,a=0;
while(n>0){
    let num=n%10;
    let fact=1;
    for(i=1;i<=num;i++){
        fact=fact*i;
    }
    a=a+fact;
    n=Math.floor(n/10);
}
if(a===temp){
    console.log('It is strong num.');
}
else console.log('It is not.');
