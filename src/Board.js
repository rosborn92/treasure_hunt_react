import React, { Component } from 'react';
import Square from './Square'
import './App.css'
import xpic from './xmarksthespot.png'
import rpic from './rock.png'
import gpic from './gold.png'
import bpic from './bomb.png'

export default class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            spaces: [0, 0, 0, 0, 0, 0, 0, 0, 0],
            bombLocation: Math.floor(Math.random() * 9),
            treasureLocation: Math.floor(Math.random() * 9),
            img: xpic
        }
    }

    randomNums = () => {
        let { treasureLocation, bombLocation } = this.state

        const newTreasureLocation = Math.floor(Math.random() * 9)
        this.setState({treasureLocation: newTreasureLocation})
        var newBombLocation = Math.floor(Math.random() * 9)
            if(newBombLocation === newTreasureLocation){
                newBombLocation = Math.floor(Math.random() * 9)
        }
        this.setState({bombLocation: newBombLocation})
        console.log(newBombLocation)
        console.log(newTreasureLocation)
    }


    render(){
        let { spaces, bombLocation, treasureLocation, img, counter } = this.state
        let square = spaces.map((value, index) =>{
            return(
                <Square
                value = {value}
                index = {index}
                randomNums = {this.randomNums}
                bombLocation = {bombLocation}
                treasureLocation = {treasureLocation}
                img = {img}
                />
            )
        })

        return(
            <React.Fragment>
                <h2>Rules: </h2>
                <ol className='list'>
                    <li>Click on the x's to try and discover the treasure</li>
                    <li>If you discover a bomb, you will lose</li>
                    <li>If you discover the treasure, you win!</li>
                </ol>
                <br />
                <br />
                <br />
                <div  id='board' className = 'border'>{square}</div>
                <br />
                <br />
                
            </React.Fragment>
        )
    }
}







// findTreasure = () => {
//     let {img, spaces, treasureLocation, bombLocation} = this.state
//
//         console.log(bombLocation)
//         if(spaces == bombLocation){
//             console.log('first if statement')
//             this.setState({img: rpic})
//         } else if(spaces === bombLocation){
//             console.log('second if statement')
//             this.setState({img: bpic})
//         }else{
//             console.log('third if statement')
//             console.log(this.state.bombLocation)
//             this.setState({img: gpic})
//         }
//     }
