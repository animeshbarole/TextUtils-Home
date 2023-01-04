//import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar  from './Components/Navbar';
import Textform from './Components/Textform';

import AlertCom from './Components/AlertCom';



function App() {

  const [Mode, setMode] = useState('light')
  const [Alert, setAlert] = useState(null)


  const showAlert = (message) =>
  {
    setAlert(message)

    setTimeout(() => {
       
       setAlert(null)
    }, 1500);
        
  }
  
  const toggleMode =() =>
  {
     if(Mode==="light")
     {
      setMode("dark")
      document.body.style.backgroundColor = "grey";
      document.body.style.color ="white";
      showAlert("Dark Mode Has been Enable");

     }

     else
     {
      setMode("light")
      document.body.style.backgroundColor = "white";
      document.body.style.color ="black";
      showAlert("Light Mode Has been Enable");
      
     }
  }


  return (
    <> 
    <Navbar   title = "TextUtils"  home = "Home" bg= {Mode} variant ={Mode} dark ={Mode} toggleMode={toggleMode}  />
    <AlertCom Alert = {Alert}/>
    <Textform showAlert ={showAlert} heading = "Enter the Text to Analyze" lable = "Nice Lable" />
              
            
 
    
    
  
   
    </>
  );
}

export default App;
