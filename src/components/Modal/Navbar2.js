import React from "react";
// By extending the React.Component class, Counter inherits functionality from it

class Counter extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    count: 0
  };

  // handleIncrement increases this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };



  render() {
    return (

 
 Navbar = (props) => (

  <nav className="navbar navbar-expand-lg navbar-light bg-light ">
    <a className="navbar-brand" href="">
    {/* <img src="images/star.png"  alt={props.id} /> */}
    </a>
   
    

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        
        <li className="nav-item">
          {/* <a className="nav-link" href=""> */}
          <h5 style={{color: '#95a086'}}>
          {"Click an image to begin!"}
          </h5>
          {/* </a> */}
        </li>
     
  
      </ul>
      <p style={{color: '#c41d53'}}>Score:{this.state.count} || Top Score: {1}</p>
      {/* <i className="fas fa-star" style="font-size: 64px; color:#c6b4d7"></i> */}
      <i className="fas fa-star" style={{color: '#ea77a4', fontSize:'36px'}}></i>
     
    </div>
  </nav>
 ))

};
}



export default Navbar;
