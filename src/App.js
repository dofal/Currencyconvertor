import React, {useState} from 'react'
import Header from './components/Header'
import './App.css'
import './Mobile.css'
import Main from './components/Main'
import { createContext } from "react";

const ThemeContext = createContext('light');


function App() {
 
  const[theme, SetTheme] = useState("light-mode");
  

  const ThemeChange = () => {
      SetTheme((curr) => (curr === "light-mode" ? "dark-mode" : "light-mode"));
  }

   return (
      <ThemeContext.Provider value={{theme, SetTheme}}>
        <div className='app' id={theme}>
        <Header ThemeChange={ThemeChange} theme={theme}/>
        <Main theme={theme}/>
        </div>
      </ThemeContext.Provider>
  )
}

export default App
