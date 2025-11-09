let n=6,temp=n,i,num=0;
for(i=1;i<n;i++){
    if(n%i===0){
        num=num+i;
    }
}
if(num===temp){
    console.log('it is perfect num.');
}
else console.log('it is not perfect num.');