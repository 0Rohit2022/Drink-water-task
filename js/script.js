const smallcupsEl = document.querySelectorAll(".cup-small");
const litersEl = document.getElementById("liters");
const  percentageEl = document.getElementById("percentage");
const remainedEl = document.getElementById("remained");
ManageBigCup();
smallcupsEl.forEach((smallCup ,index) => {
    smallCup.addEventListener("click", () => {
        fillwater(index);
    })
});

function fillwater(index){

    if(smallcupsEl[index].classList.contains("full") && (!smallcupsEl[index].nextElementSibling.classList.contains("full"))){
        index--;
    }

    smallcupsEl.forEach((smallCup , index2) => {

        if(index2 <= index){
            smallCup.classList.add("full");
        }
        else {
            smallCup.classList.remove("full");
        }


    });
    ManageBigCup();
}

function ManageBigCup(){
    const filledCups = document.querySelectorAll(".cup-small.full").length;
    const totalCups = smallcupsEl.length;
    if(filledCups === 0){
        percentageEl.style.visibility = 'hidden';
        percentageEl.style.height = 0
    }
    else {
        percentageEl.style.visibility = 'visible';
        percentageEl.style.height = `${filledCups / totalCups * 330}px`
        percentageEl.innerText = `${filledCups / totalCups * 100}%`
        
    }


    if(filledCups === totalCups){
        remainedEl.style.visibility = 'hidden';
        remainedEl.style.height = 0;
        
        percentageEl.innerText = `
        ${filledCups / totalCups * 100}%
        Congratulations.. You have completed your goal successfully`
        

    }
    else {
        remainedEl.style.visibility = 'visible';
        litersEl.innerText = `${2-(250 * filledCups / 1000)}L`

    }
}



