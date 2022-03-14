import React, {useState} from "react";
import './Calculator.css'
import Container from '@mui/material/Container'
import { Box } from "@mui/system";

export default function Calculator() {
    const [num, setNum] = useState(0);
    const [oldNum, setOldNum] = useState(0);
    const [operator, setOperator] = useState(0);

    //fun that will receive our input and display it 
    function inputNumber(e) {
        //got an event listener and the state setter
        //we passed the first state and will get the input
        //its like a string concat, it´ll display the input toguether 
        let input = e.target.value;
        setNum(num+input);

        //like a said its like a string concat, so will get all of them and put toguether
        //and this conditional is to avoid zero that is the fisrt state
        if (num === 0){
            setNum(input);
        //here just continue with the first logic
        } else {
            setNum (num+input);
        }
    }

    //it will clear setting and empty string
    function clear() {
        setNum('');
    }

    //the logic behind percentage 
    function percentage(){
        setNum(num / 100);
    }

    //change the calculum operator
    function operatorChanger() {
        //se if the num is +0(positive and set it negative)
        if(num > 0) {
            setNum(-num);
        } else {
        //setting positive w a react lib help
            setNum(Math.abs(num));
        }

    }
    
    //it will get the respective operator
    function operatorHandler(e){
        let operatorInput = e.target.value;
        setOperator(operatorInput);
        setOldNum(num);
        setNum(0)
    }
    
    //here is the real logic behind our calculator 
    function calculum() {
        if(operator === '/') {
            setNum(parseFloat(oldNum) / parseFloat(num));
        } else if (operator === 'X') {
            setNum(parseFloat(oldNum) * parseFloat(num));
        } else if (operator === '+') {
            setNum(parseFloat(oldNum) + parseFloat(num));
        } else if (operator === '-') {
            setNum(parseFloat(oldNum) - parseFloat(num));
        }
    }
    
    return (
        <div>
            <Box m={5} />
            <Container maxWidth="xs">
                <div className="buttons-wrapper">
                    <Box m={12} />
                        <h1 className="result">{num}</h1>
                    {/*All buttons with their state values and event listeners*/} 
                    <button onClick={clear}>AC</button>
                    <button onClick={operatorChanger}>+/-</button>
                    <button onClick={percentage}>%</button>
                    
                    <button className="special-carac" onClick={operatorHandler}
                    value={'/'}>/</button>
                
                    <button className="numbers" onClick={inputNumber}
                    value={7} >7</button>
                    <button className="numbers" onClick={inputNumber}
                    value={8}> 8</button>
                    <button className="numbers" onClick={inputNumber}
                    value={9}> 9</button>
                    
                    <button className="special-carac" onClick={operatorHandler}
                    value={'X'}>X</button>
                    
                    <button className="numbers" onClick={inputNumber}
                    value={4}> 4</button>
                    <button className="numbers" onClick={inputNumber}
                    value={5}> 5</button>
                    <button className="numbers" onClick={inputNumber}
                    value={6}>6</button>
                    
                    <button className="special-carac" onClick={operatorHandler}
                    value={'-'}>-</button>
                    
                    <button className="numbers" onClick={inputNumber}
                    value={1}> 1</button>
                    <button className="numbers" onClick={inputNumber}
                    value={2}> 2</button>
                    <button className="numbers" onClick={inputNumber}
                    value={3}> 3</button>
                    
                    <button className="special-carac" onClick={operatorHandler}
                    value={'+'}>+</button>
                    
                    <button className="numbers" onClick={inputNumber}
                    value={0}> 0</button>
                    <button className="numbers" onClick={inputNumber}
                    value={'.'}>.</button>
                    <button className="numbers" style={{visibility:'hidden'}}>,</button>
                    <button className="special-carac" onClick={calculum}>=</button>
                </div>
            </Container>
        </div>
    )
}