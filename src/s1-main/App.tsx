import React from 'react'
import s from './App.module.css'
import HW1 from '../s2-homeworks/hw01/HW1'
import HW5 from "../s2-homeworks/hw05/HW5";
import HW6 from "../s2-homeworks/hw06/HW6";
import HW7 from "../s2-homeworks/hw07/HW7";
import HW2 from "../s2-homeworks/hw02/HW2";
import HW8 from "../s2-homeworks/hw08/HW8";

function App() {
    return (
        <div className={s.App}>

            <HW5/>
            <HW6/>
            <HW7/>
           {/* <HW8/>*/}
        </div>
    )
}

export default App
