let step=document.querySelector(".dynamic-number");
let message=document.getElementById('result');
let cnt=0;
let correctno=parseInt(Math.random() * 100);
console.log(correctno);


function clickHandler()
{
    cnt++;
    step.innerHTML = cnt;

    let number_user=document.getElementById("num").value;
    console.log(number_user);

    if(number_user<correctno)
        {
        message.innerHTML="Try entering a bigger number";  
        }
    else if(number_user==correctno)
       {
        message.innerHTML="Correct Number! You Win!!";
       }
    else if(number_user > correctno)
        {
        message.innerHTML="Try entering a smaller number";
         }
         
}