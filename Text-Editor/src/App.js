
import './App.css';
/*import { BrowserRouter, Route, Routes } from "react-router-dom";*/
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About'
import React, {useState} from 'react';

function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(()=>{
      setAlert(null);
    } , 1500);
  }

  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#2B4A63';
      showAlert('Dark Mode has been enabled', 'success')
    }else{
      setMode('light');
      document.body.style.backgroundColor = '#fff';
      showAlert('Light Mode has been enabled', 'success');
    }
  }
  const toggleMode1=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#570A57';
      showAlert('Dark Mode has been enabled', 'success')
    }else{
      setMode('light');
      document.body.style.backgroundColor = '#fff';
      showAlert('Light Mode has been enabled', 'success');
    }
  }
  const toggleMode2=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#150050';
      showAlert('Dark Mode has been enabled', 'success')
    }else{
      setMode('light');
      document.body.style.backgroundColor = '#fff';
      showAlert('Light Mode has been enabled', 'success');
    }
  }
  const toggleMode3=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#272121';
      showAlert('Dark Mode has been enabled', 'success')
    }else{
      setMode('light');
      document.body.style.backgroundColor = '#fff';
      showAlert('Light Mode has been enabled', 'success');
    }
  }

  return (
    <>
    {/*<BrowserRouter>*/}
      <Navbar title = "Text-Editor" mode={mode} toggleMode={toggleMode} toggleMode1={toggleMode1} toggleMode2={toggleMode2} toggleMode3={toggleMode3}/>
      <Alert alert={alert}/>
      
      <div className="container">
        {/*<Routes>
              <Route exact path='/' element={}*/}
                  <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} /> {/*> </Route>
              <Route exact path='/about' element={ write about element if want to use routing}></Route>
        </Routes>*/}
        <About  />
      </div>
    {/*</BrowserRouter>*/}
   
    </>
  );
}

export default App;
