import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from './Components/TextFrom'; // Ensure the name is correct
import Alert from "./Components/Alert"; // Ensure the path is correct
import About from "./Components/About.js"; 
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('white');
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode) {
      setMode(savedMode);
      document.body.style.backgroundColor = savedMode === 'dark' ? '#042743' : 'white';
    }
  }, []);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const handleAlertClose = () => {
    setAlert(null);
  };

  // const removeBodyClasses = () => {
  //   document.body.classList.remove('bg-primary', 'bg-danger', 'bg-success', 'bg-warning','bg-light', 'bg-dark');
  // }

  const toggleMode = () => {
    const newMode = mode === 'white' ? 'dark' : 'white';
    setMode(newMode);
    document.body.style.backgroundColor = newMode === 'dark' ? '#042743' : 'white';
    showAlert(`${newMode.charAt(0).toUpperCase() + newMode.slice(1)} mode has been enabled`, "success");
    document.title = `TextUtils - ${newMode.charAt(0).toUpperCase() + newMode.slice(1)} Mode`;
    localStorage.setItem('mode', newMode); // Save mode preference
  };

  return (
    <>
      <Router>
        <Navbar title="Text Utility" dis="sandip" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} onClose={handleAlertClose} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading='Enter the text to analyze below'  mode={mode} toggleMode={toggleMode} />} />
          </Routes> 
        </div>
      </Router> 
    </>
  );
}

export default App;
