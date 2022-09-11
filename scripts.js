
const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hoursHand = document.querySelector(".hour-hand")

const setDate = () => {

    const now = new Date();
    // will retrieve the seconds of the current minute in time
    const seconds = now.getSeconds();
    // now how do we transform our seconds into degrees?
        // adding 90 degrees will allow to offset the original position which is at 12 on the clock (this problem was seen when we were approaching 60 seconds but were no where close to top of the clock)
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    // now that we have transformed out seconds into degress of a circle, we can update each second to transform the seconds hand by that degree
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`

    
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`

}
 
setInterval(setDate, 1000);