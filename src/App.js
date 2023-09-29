import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      {/* <Navbar title = "Textutils" aboutText= "About Textutils"/> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils"/>
      <div className='container my-3'>
        <TextForm heading = "Enter the text to analize below"/>
      </div>
    </>
  );
}

export default App;
