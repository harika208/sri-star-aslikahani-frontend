
import './App.css';
import LogoName from "./LogoName"
import Scroll from "./ContentScroll/Scroll"
import NavRoutes from './Routes/NavRoutes';

import Social from "./SocialMedia-Logo/Social"


function App() {
  
  return (
    <>

<LogoName />
<Social />

<NavRoutes/>

 <div className='advert'>Advertisement</div> 
<Scroll/>


    </>
  );
}

export default App;
