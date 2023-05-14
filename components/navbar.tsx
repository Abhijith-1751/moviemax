import * as React from 'react'
import '../css/navbar.css'


function Navbar(){
  return(
   <nav>
    <img src="https://stackblitz.com/files/moviemax-io/github/Abhijith-1751/moviemax/main/img/logo.png" alt="Logo"/>
    
    <ul>
      <button>Home</button>
      <button>Kids</button>
      <button>Action</button>
      <button>Romantic</button>
    </ul>

   </nav>
  );
}

export default Navbar;