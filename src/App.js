import Navba from './components/Navba.jsx'
import Home from './components/Home.jsx';
import Footer from './components/Footer.jsx';
import About from './components/About.jsx'
import Contect from './components/Contect.jsx';
import LoginSignup from './components/LoginSignup/LoginSignup.jsx'

import './App.css';

function App() {
  let component
  switch (window.location.pathname)
  {
    case "/":
      component =<> 
      <Navba/>
      <Home />
      <Footer/></>;
      break
    case "/About":
      component =<> 
      <Navba/>
      <About />
      <Footer/></>;
      break
    case "/Contect":
      component =<> 
      <Navba/>
      <Contect />
      <Footer/></>;
      break
    case "/login":
      component = <LoginSignup />;
      break
      default:

  }
  return (
    <div>
      
      {component}
  
    </div>
    
  );
}

export default App;
