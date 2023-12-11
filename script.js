const display = document.querySelector(".display")
const clear = document.querySelector(".btn-ac")

const button = document.querySelectorAll('.btn')

let displayValue = '';

button.forEach((item)=>{
    item.addEventListener('click',()=>{
        const val = item.innerText;
        if(val==='AC'){
            displayValue=''
            displayV()
            return;
        }

        if(val==='='){
            console.log(displayValue);
            const result=eval(displayValue)
            console.log(result);
            
            displayValue=String(result)
            displayV(result)
            

            return;
            
        }

        if(val==='C'){
            
            const lastChar = displayValue.slice(0,-1)
            displayValue=lastChar
            
            displayV(displayValue)
            return;
        }
        displayValue+=val
        displayV(displayValue)

    })
})

const displayV = (str)=>{
    display.innerText=str || '0.00'
}




