let keys = document.querySelector('.c-keys');
let display = document.getElementById('display');

keys.addEventListener('click', (event) =>{

         let target= event.target;
         //if(!target.matches('button')){return false;}

           try {
             if(target.value && target.value !== display.value ){

                 if(target.classList.contains('equal')){
                  let result = eval(display.value);
                  if(result !== undefined){
                        display.value = result;
                    }

                }else if(target.classList.contains('num')){
                    display.value += target.value;

                  }else if(target.classList.contains('operator')){
                    display.value += target.value;

                  }else if(target.classList.contains('a-c')){
                    display.value=' ';
                  }else if(target.classList.contains('operatorM')){
                      display.value += target.placeholder;

                  }else if(target.classList.contains('operatorD')){
                        display.value += target.placeholder;
                      }

                }else {
                  return false;
                  }

           }catch (e) {
               display.value="Error";
           }

});
