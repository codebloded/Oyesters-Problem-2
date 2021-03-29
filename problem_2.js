/*
    Problem-2:
            Given a time in 12-hr AM/PM format, convert it to military time(24hr) and you also need to add
        45 min &45 sec in the result and the display the output.

        E.g.: - Input – 12:01:00PM Output 12:46:45
        Input – 12:01:00AM Output 00:46:45 
*/ 

const convertTime = (timeIn_12)=>{
    const [time , suffix] =  timeIn_12.split(' ');
    let [hours , minutes , seconds] = time.split(':');

    if(hours === '12'){
        hours = '00';
    }

    if(suffix === 'PM' ){
        hours = parseInt(hours , 10) + 12;
    }
    minutes = parseInt(minutes , 10) + 45;
    seconds = parseInt(seconds,10) + 45;
    return `${hours}:${minutes}:${seconds}`
}

console.log(convertTime('12:01:00 PM'))
console.log(convertTime('12:01:00 AM'))