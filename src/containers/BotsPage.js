import React from "react";
import BotCollection from "../containers/BotCollection";
import YourBotArmy from "../containers/YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one

  // create the array to render all 
  // create array for the our own army
  constructor(){
    super ()
    this.state = {
      botList: [],
      botArmy: [],
      
    }
    this.handleFetch()
  }
// fetch done  (practise componentDidMount lol)
  handleFetch= () => {
    fetch(`asdsdaasd`)
    .then(resp => resp.json())
    .then(resp => this.setState({
      botList: resp
    }))
    }
//working
    updateBotArmy = (bot) => {
      if(!this.state.botArmy.includes(bot)){
      this.setState(state => {
        state.botArmy.push(bot)
        return state
      })}
  }
// working
  removeBotFromArmy= (bot) => {
    this.setState(state => {
      state.botArmy = state.botArmy.filter(armyBot => (armyBot !== bot))
      return state
    })
  }

 

//
  render() {
    return (
      <div>
        <YourBotArmy botArmy={this.state.botArmy} removeBotFromArmy={this.removeBotFromArmy}/>
        <BotCollection botList={this.state.botList} updateBotArmy = {this.updateBotArmy}/>
      </div>
    );
  }

}

export default BotsPage;


