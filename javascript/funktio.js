const getRandomIntNumberInRange = (min,max)=>{
    return Math.floor(Math.random()*max) + min;
}
document.querySelector("#dice").addEventListener("click",()=>{
    const randomized_number = getRandomIntNumberInRange(1,6)
    const diceImage = document.querySelector("#dice");

    if (randomized_number==1){
        diceImage.src=".//kuvat/dice_1.png";
    }
    else if(randomized_number==2){
        diceImage.src=".//kuvat/dice_2.png";
    }
    else if(randomized_number==3){
        diceImage.src=".//kuvat/dice_3.png";
    }
    else if(randomized_number==4){
        diceImage.src=".//kuvat/dice_4.png";
    }
    else if(randomized_number==5){
        diceImage.src=".//kuvat/dice_5.png";
    }
    else if(randomized_number==6){
        diceImage.src=".//kuvat/dice_6.png";
    }
})
