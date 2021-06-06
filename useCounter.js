import { useState } from 'react'

export const useCounter = (initialState = 10) => {

    const [counter, setCounter] = useState(initialState); // 10

    const reset = () =>{
        setCounter( initialState );
    }
    
    const increment = () => {
        setCounter( counter + 1 );
        // if(counter < 30){
        //     setCounter( counter + 1 )
        // }else{
        //     setCounter( counter + 0 )
        // }
    }
    
    const decrement = () => {
        setCounter( counter - 1 );
        // if(counter === 1){
        //     setCounter( counter - 0 )
        // }else{
        //     setCounter( counter - 1 ) 
        // }
    }

    return{
        counter,
        increment,
        decrement,
        reset,
    };

}
