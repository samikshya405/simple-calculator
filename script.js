const display = document.querySelector(".display")
const clear = document.querySelector(".btn-ac")

const button = document.querySelectorAll('.btn')

let displayValue = '';
let lastOperator=''
//operator list
const operator=['%','/','+','-','*']

const audio = new Audio("./a.wav")
button.forEach((item)=>{
    item.addEventListener('click',()=>{
        const val = item.innerText;
        //reset the prank
        display.classList.remove('prank')
        display.style.background =""
        display.style.color = ""
        if(val==='AC'){
            displayValue=''
            displayV()

            return;
        }

        if(val==='='){
            
            const lastChar = displayValue[displayValue.length-1]
            if(operator.includes(lastChar)){
                displayValue=displayValue.slice(0,-1)
            }

            
            const extraValue = randomNum()
            if(extraValue>0){
                display.classList.add('prank')
                display.style.background ="red"
                display.style.color = "white"
                audio.play()
            }
            console.log(extraValue)
            const result=eval(displayValue) + extraValue;
            // console.log(result);
            
            displayValue=String(result)
            displayV(result)
            // console.log(displayValue);
            return;
            
        }

        if(val==='C'){
            
            const lastChar = displayValue.slice(0,-1)
            displayValue=lastChar
            
            displayV(displayValue)
            return;
        }

        //dont allow more than one at once
        if(operator.includes(val)){
            lastOperator=val
            const lastChar = displayValue[displayValue.length-1]
            if(operator.includes(lastChar)){
                displayValue=displayValue.slice(0,-1)
            }
            

        }
        if(val==='.'){

            if(!displayValue){
                return;
            }

            const indexofLastOperator =displayValue.lastIndexOf(lastOperator)
            const lastNumberSet = displayValue.slice(indexofLastOperator)
            if(lastNumberSet.includes('.')){
                return;
            }
            if(!lastOperator && displayValue.includes('.')){
                return;
            }
        }



        displayValue+=val
        displayV(displayValue)

    })
})

const displayV = (str)=>{
    display.innerText=str || '0.00'
}



const randomNum =()=>{
   const num = Math.floor(Math.random()*10);
   return num < 4 ? num:0
}




