// Code your solution in this file!
//42nd street = hq

function distanceFromHqInBlocks(num){
    const hq = 42
    if (num >=42){return num - hq}  return hq - num
    
}

function distanceFromHqInFeet(num){
   const help= distanceFromHqInBlocks(num);
   return help * 264;
}

function distanceTravelledInFeet(num1, num2){
    const feet = 264;
    if (num2 >= num1){
        return (num2 - num1)*feet;
    }
    return (num1 - num2)*feet;
    }

    function calculatesFarePrice(num1, num2){
       
         const distance= distanceTravelledInFeet(num1, num2);
        
         if (distance < 400){return 0}
         else if(400 < distance && distance < 2000){return (distance - 400)*.02} else if(distance>200 && distance < 2500){return 25} else if(distance > 2500){return  'cannot travel that far'}
         
         
    }
