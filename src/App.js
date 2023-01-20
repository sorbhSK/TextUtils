import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import React , {useState} from 'react';

function App() {
  const [mode, setMode] = useState("light");  // whether dark mode is enabled or not
  const[alert,setAlert] = useState(null);
  const [Themecolor,setThemecolor] = useState("#fff0");
  const SetThemeOne = () =>{
    if(Themecolor !== '#012e88'){
      setThemecolor('#012e88')
      document.body.style.backgroundColor = "#012e88";
    }
  }
  const SetThemeTwo = () =>{
    if(Themecolor !== '#067f7b'){
      setThemecolor('#067f7b')
      document.body.style.backgroundColor = "#067f7b";
    }
  }
  const SetThemeThree = () =>{
    if(Themecolor !== '#4f6909'){
      setThemecolor('##4f6909')
      document.body.style.backgroundColor = "#4f6909";
    }
  }
  const SetThemeFour = () =>{
    if(Themecolor !== '#6d0576'){
      setThemecolor('#6d0576')
      document.body.style.backgroundColor = "#6d0576";
    }
  }
  const showAlert = (message,type) =>{
    setAlert({
      msg : message ,
      type: type
    });
    setTimeout(()=>{
      setAlert(null)
    },1500);
  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = "#1d2b39";
      showAlert("Dark Mode has been enabled","success")
      document.title = "TextUtils - Darkmode";
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = "white";
      showAlert("Dark Mode has been enabled","success")
      document.title = "TextUtils - Lightmode";
    }
  } 
  return (
    <>
    <Navbar title="TextUtils" aboutText="this is about" mode={mode} toggleMode={toggleMode} Themecolor={Themecolor} SetThemeOne={SetThemeOne} SetThemeTwo={SetThemeTwo} SetThemeThree={SetThemeThree} SetThemeFour={SetThemeFour}/>
        <Alert alert={alert}/>
        <div className="container">
          <TextForm heading="Enter here the text to analyze" mode={mode} showAlert={showAlert}/>
          <About />
        </div>
    </>
  );
}

export default App;
