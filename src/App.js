import React, { Component } from 'react';
import Square from './Square'
import Board from './Board'
import './App.css'

export default class App extends Component {
    render () {
        return (
            <React.Fragment>
                <div>
                    <center>
                        <h1>Treasure Hunt</h1>
                        <Board />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <footer> © RobnConor </footer>
                    </center>
                </div>

            </React.Fragment>
        )
    }
}
