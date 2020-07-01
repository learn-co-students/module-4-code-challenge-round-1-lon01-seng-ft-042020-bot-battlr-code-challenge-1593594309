  
import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

//working
  renderBots = () => (
    this.props.botList.map(bot => (
      <BotCard bot={bot} key={bot.id}
      updateBotArmy = {this.props.updateBotArmy} />
    ))
  )
//done
  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
        {this.renderBots()}
    		 Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;