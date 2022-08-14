import {useEffect, useState} from 'react'

const Timer = () =>{

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0)

    useEffect(()=>{
        const a = setInterval(()=>{
            setSeconds(seconds+1)
            if (seconds == 59){
                setSeconds(0)
                setMinutes(minutes+1)
            }
        }, 1000)
        
        return () =>{clearInterval(a)}
    })

    return(
        <div className="m-auto flex text-center justify-center">
            <h1 className='font-bold text-xl'>{minutes/10 < 1? "0"+minutes: minutes}:{seconds/10 < 1? "0"+seconds: seconds}</h1>
        </div>
    );
}

export default Timer
