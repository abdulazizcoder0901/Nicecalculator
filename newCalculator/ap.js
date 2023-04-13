let inputScreen = document.querySelector('input')

function display(num){
    inputScreen.value += num
}

function calculate (){
    try{
        inputScreen.value = eval(inputScreen.value)
    }
    catch(err){
        alert('Invalid calculate !!!')
    }
}

function Clear(){
    inputScreen.value = "";
}

function del(){
    inputScreen.value = inputScreen.value.slice(0,-1)
}