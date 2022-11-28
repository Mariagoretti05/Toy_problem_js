const prompt =require("prompt-sync")();
function limit(){
    //prompt user to input the speed of a car
    let speed = prompt("Enter speed in Km/hr: ");
    if(speed<70){
        console.log('Ok')
    }else if((speed-70)/5){
        console.log('License suspended')
    }
}

    // if  (speed <= 70) {
    //     console.log('OK')
    // }

    // else if (speed > 70) {
    //     const points = (speed - 70)/5

    //     if (points >= 12)
    //     console.log('License suspended')
    // }


limit();