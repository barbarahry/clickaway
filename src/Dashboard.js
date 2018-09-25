import React, { Component } from "react";
import Modal from "./components/Modal"

class Dashboard extends Component {
  
  state = { show: true };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    // this.setState({ show: false });
  };


  render() {
    return (
      <main>
        
        <Modal show={this.state.show} handleClose={this.hideModal}>
        
        
        <a  onClick={this.hideModal} >
        <p><img alt={""} src={"images/star2.png"} width={""} height={""}/></p>
        <h2 className="offset"> !You did it!</h2>
        </a>
        
     
        </Modal>
      
        {/* <a type="button" onClick={this.showModal}>
          open
        </a> */}
      </main>
    );
  }
}

export default Dashboard;

// const container = document.createElement("div");
// document.body.appendChild(container);
// ReactDOM.render(<Dashboard />, container);