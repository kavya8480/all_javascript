//reverse num
let n=1234,r=0;
while(n>0){
    r=r+(n%10);
    r=r*10;
    n=Math.floor(n/10);
}
r=r/10;
console.log(r);

//pallindrome number or not
let no=121,temp=no,re=0;
while(no>0){
    re=re+(no%10);
    re=re*10;
    no=Math.floor(no/10);
}
re=re/10;
if(re===temp){
    console.log('It is pallindrome');
}
else
    console.log('It is not pallindrome');

