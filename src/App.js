import React from "react";
//import Counter from "./components/Counter";
import Wrapper from "./components/wrapper";
import PicCard from "./components/picCard";
import Images from "./pics.json";

var clickedImgs = [];

class App extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    count: 0
  };

  // handleIncrement increments this.state.count by 1
  handleIncrement = id => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
    Images.sort(() => Math.random() - 0.5);
    console.log(id);
    if (clickedImgs.includes(id)) {
      this.setState({ count: 0 });
      clickedImgs = [];
    } else {
      clickedImgs.push(id);
    }
  };

  render() {
    return (
      <Wrapper>
        <div className="card text-center">
          <div className="card-header bg-primary text-white">
            Click Counter!
          </div>
          <div className="card-body">
            <p className="card-text">Click Count: {this.state.count}</p>
          </div>
        </div>
        <h1 className="title">Click on a pic!</h1>

        {Images.map(img => (
          <PicCard
            image={img.image}
            func={() => this.handleIncrement(img.id)}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
