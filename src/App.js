import './App.css';
import {useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { Route, Routes } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light'); //Whether Dark mode is enabled or not.
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () =>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been Enabled", "success");
      // document.title = "TextUtils - Dark Mode";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enabled", "success");
      // document.title = "TextUtils - Light Mode";
    }
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
    <div className='container my-3'>
      <Routes>
        <Route path='/about' element={<About mode={mode}/>}/>
        <Route path='/' element={<TextForm heading = "Try Textutils - Word Counter, Character Counter, Remove extra spaces" mode = {mode} showAlert={showAlert}/>}/>
      </Routes>
    </div>

     

    </>
  );
}

export default App;
