import { Order, OrderState } from "./models/Order.js";
import { Bakery } from "./models/Bakery.js";
import { Logger } from "./models/Logger.js";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const bb = new Bakery();
 
const bakeryContext = React.createContext(bb);




class Bakerview extends React.Component {
  static contextType = bakeryContext;
    
  render() {
    return (

    <section className="Baker">      
            <h1>Le Boulanger</h1>
            <table>       
                <tr>
                    <th>Or gagné</th>
                    <th>Or dépensé</th>
                    <th>Farine produite</th>
                    <th>Baguettes produites</th>
                </tr>
                <tr>
                    <td>{ this.context.totalGoldsEarned }</td>
                    <td>{ this.context.totalGoldsSpent.toFixed(2) }</td>
                    <td>{ this.context.totalFlourProduced }</td>
                    <td>{ this.context.totalBaguettesProduced }</td>
                </tr>
            </table>
    </section>
   
    )
  }


}
class StartButton extends React.Component{
  
  static contextType = bakeryContext;

  constructor(props) {
    super(props);
    this.handleOpenClick = this.handleOpenClick.bind(this);
    this.state= { running: this.context.running };
  }
  

  handleOpenClick(){
    console.log(this.context);
    let val = this.state.running;
    val.running = !val.running;
    console.log(this.context);
  }
  render() {
    //const running = this.state.running;
    let button;
    if (!this.state.running){
      button = <button onClick={this.handleOpenClick}>Ouvrir la boulangerie</button>;
    }
    else {
      button = <button onClick={this.handleOpenClick}>Fermer la boulangerie</button>;
    }
    return (
      {button}
    );
  }


}

class Bakeryview extends React.Component {
  
  static contextType = bakeryContext;
  
  startStop() {
    
    console.log(this.context);
    let val = this.context;
    val.running = !val.running;
    this.forceUpdate();
    console.log(this.context);
  }

  levelUp() {
    if (!this.context.levelUp()) {
        alert('Pas assez d\'or');
    }
  }
  buyMill() {
    if (!this.context.buyMill()) {
        alert('Pas assez d\'or');
    }
  }

  render() {
    return (
        <section id="bakery">
          <header>
              <h2>Boulangerie</h2>
               {/*<button className="start" onClick={() => this.startStop()
              }>{ this.context.running ? "Fermer" : "Ouvrir" } la boulangerie</button>*/}
             <StartButton/>
              
          </header>
          <div>
              <img src="./assets/baker.jpg" alt=""/>
              <table>
              <tbody>
                  <tr>
                      <th>Niveau</th> 
                      <td className="lightning">{ this.context.level }</td>
                      <td className="tdbtn">
                        {/*  <button className="plus" onClick={levelUp}>+</button>*/}
                      </td>
                      <td className="gold last">{this.context.level_price.toFixed(0) }</td>  
                  </tr>
                  <tr>
                      <th>Moulins</th>
                      <td className="mills">{ this.context.mills }</td>
                      <td className="tdbtn">
                         {/* <button className="plus" onClick={buyMill}>+</button> */}
                      </td>
                      <td className="gold last">{ this.context.mills_price.toFixed(0) }</td>
                  </tr>
                  <tr>     
                      <th>Or</th>   
                      <td className="gold">{ this.context.golds.toFixed(2) }</td> 
                  </tr>
                  <tr>
                      <th>Farine</th>      
                      <td className="flour">{ this.context.flour } </td>
                  </tr>
                  <tr>
                      <th>Baguettes</th> 
                      <td className="baguette">{ this.context.baguettes }</td>
                  </tr>
                  </tbody>
              </table>
          </div>
    </section>
    )
  }


}




class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bakery: bakeryContext,
    };
  }
  render () {

    return(

      <Bakerview/>,
      <Bakeryview/>
    )

  };
}
ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  