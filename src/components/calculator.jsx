import React, {useState} from "react";
import './Calculator.css'
import Container from '@mui/material/Container'
import { Box } from "@mui/system";

export default function Calculator() {
    const [num, setNum] = useState(0);

    function inputNumber(e) {
        let input = e.target.value;
        setNum(input)
    }
    
    return (
        <div>
            <Box m={5} />
            <Container maxWidth="xs">
                <div className="buttons-wrapper">
                    <Box m={12} />
                        <h1 className="result">{num}</h1>
                    <button>AC</button>
                    <button>+/-</button>
                    <button>%</button>
                    <button className="special-carac">/</button>

                    <button className="numbers" onClick={inputNumber}
                    value={7} >7</button>
                    <button className="numbers" onClick={inputNumber}
                    value={8}> 8</button>
                    <button className="numbers" onClick={inputNumber}
                    value={9}> 9</button>
                    <button className="special-carac">X</button>
                    <button className="numbers" onClick={inputNumber}
                    value={4}> 4</button>
                    <button className="numbers" onClick={inputNumber}
                    value={5}> 5</button>
                    <button className="numbers" onClick={inputNumber}
                    value={6}>6</button>
                    <button className="special-carac">-</button>
                    <button className="numbers" onClick={inputNumber}
                    value={3}> 3</button>
                    <button className="numbers" onClick={inputNumber}
                    value={1}> 1</button>
                    <button className="numbers" onClick={inputNumber}
                    value={2}> 2</button>
                    <button className="special-carac">+</button>
                    <button className="numbers" onClick={inputNumber}
                    value={0}> 0</button>
                    <button className="numbers">,</button>
                    <button className="numbers" style={{visibility:'hidden'}}>,</button>
                    <button>=</button>
                </div>
            </Container>
        </div>
    )
}