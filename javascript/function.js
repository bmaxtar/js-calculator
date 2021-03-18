gsap.from('.container', {duration: 2, opacity: 0, stagger: 0.5, y: 500});

let btns = document.querySelectorAll(".num-button");
let allBtns = document.querySelectorAll(".button");
let resultBox = document.querySelector("#result-box");
let clearBtn = document.querySelector('#clear');

let total = document.querySelector("#total");

let btnSpread = [...btns];
let allBtnSpread = [...allBtns];

//Pour les nombres entres
btnSpread.forEach((button, i) => {
  button.addEventListener("click", () => {
    //Valeur pour la calculatrice

    if (resultBox.innerHTML == "0") {
      resultBox.innerHTML = "";
    }

    let value = btns[i].innerHTML;
    resultBox.innerHTML += value;
  });
});


// Functiions en valeur Strings
function evaluate(fn) {
    return new Function('return ' + fn)();
}

// Pour calculer tous les nombres entres
total.addEventListener('click', ()=> {
let allInputs = resultBox.innerHTML;

resultBox.innerHTML = evaluate(allInputs);

console.log(evaluate(allInputs));
})

// Supprimer les valeurs
clearBtn.addEventListener('click', ()=> {
    resultBox.innerHTML = "0";
})

// Animation  Css

allBtnSpread.forEach((button, i)=> {
    button.addEventListener('click', ()=> {
       let element = allBtns[i];
       element.style.boxShadow ='inset -6px -6px 16px 0 rgba(255, 255, 255, .5), inset 6px 6px 16px 0 rgba(209, 205, 199, .5)';

       setTimeout(function(){
        element.style.boxShadow = " 6px 6px 16px 0 rgba(209, 205, 199, .5),-6px -6px 16px 0 rgba(255, 255, 255, .5)"
       }, 0300);

    })

})


