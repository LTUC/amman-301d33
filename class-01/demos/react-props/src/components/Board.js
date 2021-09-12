import React from 'react';
import Square from './Square'

class Board extends React.Component {
    render() {
        return(
            <div>
                <h1>Board Game</h1>
                {/* <div>square 1</div>
                <div>square 2</div>
                <div>square 3</div>
                <div>square 4</div> */}
                <Square squareNo={'1'}/>
                <Square squareNo={'2'}/>
                <Square squareNo={'3'}/>
                <Square squareNo={'4'}/>

            </div>
        )
    }
}

export default Board;