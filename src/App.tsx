import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {StartPage} from "./components/StartPage";
import {UserNotFoundPage} from "./components/UserNotFoundPage";
import {UserPage} from "./components/UserPage";

function App() {
    return (
        <div className="App">
            <Header/>
            <StartPage/>
            <UserNotFoundPage/>
            <UserPage/>
        </div>
    )
}

export default App
