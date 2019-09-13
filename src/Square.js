import React, { Component } from 'react';
import './App.css'
import xpic from "./xmarksthespot.png"
import rpic from './rock.png'
import gpic from './gold.png'
import bpic from './bomb.png'

export default class Square extends Component {
    constructor(){
        super()
        this.state = {
            img: xpic,
        }
    }

    handleClick = () => {
        let {index, randomNums, bombLocation, treasureLocation, img } = this.props
            if( index == bombLocation ){
                this.setState({img: bpic})
                setTimeout(function(){
                    alert('You Lose, sucker!');
                    window.location.reload();
                }, 550)
            }else if(index == treasureLocation){
                this.setState({img: gpic})
                setTimeout(function(){
                    alert('Congrats, matey. you found da booty');
                    window.location.reload();
                }, 550)
            }else{
                this.setState({img: rpic})
            }
    }
    render(){
        return(
            <React.Fragment>
                <div className= 'square' onClick = {this.handleClick}>
                    <img height = '90px' src={this.state.img} />
                </div>
            </React.Fragment>
        )
    }
}
// <button className= 'square' onClick= {this.call}>
//
// </button>
