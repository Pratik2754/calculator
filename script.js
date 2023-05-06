let string="";
let buttons= document.querySelectorAll('button');
let arr= Array.from(buttons);
arr.forEach((button) => {
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML=='='){
            string=eval(string);
            document.querySelector('input').value=string;}
        else if(e.target.innerHTML=='AC'){
            string="";
            document.querySelector('input').value=string;
        }
        else{
            string+=e.target.innerHTML;
            document.querySelector('input').value=string;
        }
    })
    
});
// function compute(){
//     Function("return"+input.value)();
// }