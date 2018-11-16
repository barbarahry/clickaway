import React from "react";
// By extending the React.Component class, Counter inherits functionality from it

   

 
const Navbar = ({ score, topScore }) => (

  <nav className="navbar navbar-expand-lg navbar-light bg-light ">
    <a className="navbar-brand" href="">
    {/* <img src="images/star.png"  alt={props.id} /> */}
    </a>
   
    

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        
        <li className="nav-item">
          {/* <a className="nav-link" href=""> */}
          <h5 style={{color: '#95a086'}} className="textgamename">
          {"Click Away Your Memory"}
          </h5>
          {/* </a> */}
        </li>
     
  
      </ul>
      <p style={{color: '#c41d53'}}>Score:{score} || Top Score: {topScore} </p>
      {/* <i className="fas fa-star" style="font-size: 64px; color:#c6b4d7"></i> */}
      <i className="fas fa-star" style={{color: '#ea77a4', fontSize:'36px'}}></i>
     
    </div>
  </nav>
 )



export default Navbar;
