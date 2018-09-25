import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
// import friends from "./friends.json";
import "./App.css";
// import $ from 'jquery';


// window.jQuery = $;
// window.$ = $;
// global.jQuery = $;

var topScore = 0;

// function shakeAll() {
//   $(".card" ).effect("shake");
// };

function shuffle(array) {
  console.log(". shuffle . shuffle . shuffle .");
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: [
      { id: 1, image: "images/1.png", selected: false },
      { id: 2, image: "images/2.png", selected: false },
      { id: 3, image: "images/3.png", selected: false },
      { id: 4, image: "images/4.png", selected: false },
      { id: 5, image: "images/5.png", selected: false },
      { id: 6, image: "images/6.png", selected: false },
      { id: 7, image: "images/7.png", selected: false },
      { id: 8, image: "images/8.png", selected: false },
      { id: 9, image: "images/9.png", selected: false },
      { id: 10, image: "images/10.png", selected: false },
      { id: 11, image: "images/11.png", selected: false },
      { id: 12, image: "images/12.png", selected: false },
      { id: 13, image: "images/star.png", selected: false }
    ]
  };

  selectFriend = friend => {
    console.log("selected Friend: ", friend);
    var friends = [...this.state.friends];
    console.log("friends ", friends);
    const index = friends.indexOf(friend);
    friends[index] = { ...friend };
    const preSelected = friends[index].selected;
    console.log("Friend " + index + "  preSelected " + preSelected);
    if (friends[index].selected) {
      console.log("Try Again !!");
      // shakeAll();
      const resetFriends = this.state.friends.map(c => {
        c.selected = false;
        return c;

      });
     
      this.setState({ resetFriends });
    } else {
      console.log("Nice job !!");
      friends[index].selected = true;
      const score = this.state.friends.filter(c => c.selected).length + 1;
      topScore = Math.max(score, topScore);
      // this.setState({ friends });
      // var shuffleFriends = [...this.state.friends];
      friends = shuffle(friends);
      this.setState({ friends });
    }
  //  if ({topScore}){

  //  }
    // const selectedPost = friends[id].selected;
    // console.log("selected POST ", selectedPost);

    // friends = shuffle(friends);
    // this.setState({ friends });
  };

  removeFriend = id => {
    console.log("removeFriend", id);
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };
  //        <Navbar topScore={this.state.friends.filter(friend => friend.selected).length} />
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Navbar
          score={this.state.friends.filter(friend => friend.selected).length}
          topScore={topScore}
        />

        <Wrapper>
          {this.state.friends.map(friend => (
            <FriendCard
              selectFriend={this.selectFriend}
              friend={friend}
              id={friend.id}
              key={friend.id}
              image={friend.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
