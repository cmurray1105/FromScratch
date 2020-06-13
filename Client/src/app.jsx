import React from 'react';
import SomeComponent from './SomeComponent.jsx'
import ReactDOM from 'react-dom'
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      showMoreStuff: false
    }
  //bind event handler
  this.propFunction = this.propFunction.bind(this);
  this.handleClick = this.handleClick.bind(this);
  }
  //event handlers
propFunction() {
  console.log("It WORKED!")
}
handleClick(){
  // console.log("sup!")
  this.setState({ showMoreStuff: !this.state.showMoreStuff.value })
}

  //render
  render(){
    let moreStuff;
    console.log(this.state)
    if(this.state.showMoreStuff){
      moreStuff =  <form>
      <br />
      <label>
        User Name:
        <input
          name="User"
          type="text"/>
      </label>
      <label>
        Password:
        <input
        name="password"
        type="password"/>
      </label>
    </form>;
    }
    return (
      <div>
      <button onClick={() =>{
        console.log(this.state)
      this.handleClick();
    }}>Things and Stuff</button>
    {moreStuff}
        <SomeComponent someProp={this.propFunction}/>
      </div>
    )
  }
}

export default App;