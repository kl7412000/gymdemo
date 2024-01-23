const userNameEl = document.querySelector("#username");
const heightEl = document.querySelector("#height");
const weightEl = document.querySelector("#weight");

console.log(userNameEl,heightEl,weightEl);

console.log(getBmi(heightEl.value,weightEl.value));

function calcBmi(){
    let height= heightEl.value;
    let weight=weightEl.value;

    if(height==""||weight==""){
        alert("輸入不能為空");
        return;
    }

    let bmi=getBmi(height,weight);
    console.log(bmi);
}

function getBmi(height,weight){
    let bmi = weight/(height/100)**2;
    if (isNaN(bmi)){
        return "數值錯誤";
    }
    return bmi.toFixed(2);
}