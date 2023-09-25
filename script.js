const form = document.querySelector('#Monform');
const inputText = document.querySelector('.jajatext');
const rangeInput = document.querySelector('.sliiid'); 

// bouton generateur
form.addEventListener("submit" , function(event){
    event.preventDefault();
    inputText.value = generateP();
});


// bouton range 
rangeInput.addEventListener("input", function(addEventListener) {
    inputText.value = generateP(); 
});



var  el_down = document.getElementById("geeks");


function generateP() {
    var pass = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 
            'abcdefghijklmnopqrstuvwxyz0123456789@#$';
      
    for (let i = 2; i <=12; i++) {
        var char = Math.floor(Math.random()
                *str.length + 10);
          
        pass += str.charAt(char)
    }
      
    return pass;
}

function gfg_Run() {
    el_down.innerHTML = generateP();
}



// style
document.body.style.backgroundColor="grey"
document.body.style.margin="20px"
document.body.style.color="red"
document.body.style.textAlign="center"
document.body.style.size="20px"

