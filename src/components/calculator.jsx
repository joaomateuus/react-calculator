import React from "react";
import './Calculator.css'
import Container from '@mui/material/Container'
import { Box } from "@mui/system";

export default function Calculator() {
    return (
        <div>
            <Box m={5}/>
            <Container maxWidth="xs">
                <div className="buttons-wrapper">
                    <Box m={12} />
                        <h1 className="result">01</h1>
                    <button>AC</button>
                    <button>+/-</button>
                    <button>%</button>
                    <button className="special-carac">/</button>
                    <button className="numbers">7</button>
                    <button className="numbers">8</button>
                    <button className="numbers">9</button>
                    <button className="special-carac">X</button>
                    <button className="numbers">4</button>
                    <button className="numbers">5</button>
                    <button className="numbers">6</button>
                    <button className="special-carac">-</button>
                    <button className="numbers">3</button>
                    <button className="numbers">1</button>
                    <button className="numbers">2</button>
                    <button className="special-carac">+</button>
                    <button className="numbers">0</button>
                    <button className="numbers">,</button>
                    <button className="numbers" style={{visibility:'hidden'}}>,</button>
                    <button>=</button>
                </div>
            </Container>
        </div>
    )
}