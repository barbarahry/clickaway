import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    // value: this.props.counter.value,
    tags: []
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };

  renderTags() {
    //if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  // handleIncrement () {
  // handleIncrement = () => {
  //   console.log("Increment Clicked", this);
  //   this.setState({ value: this.state.value + 1 });
  // };

  render() {
    // console.log("props", this.props);
    console.log("counter - Rendered ");

    return (
      <React.Fragment>
        {/* {this.props.children} */}
        <h4>Counter #{this.props.id}</h4>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          // onClick={this.handleIncrement}
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          // onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>

        {this.state.tags.length === 0 && "Please creae a new tag!"}
        {this.renderTags()}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}
