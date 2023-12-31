import Dice from './Dice';
import './Board.css'

function Board({ name, color, gameHistory }) {
    const num = gameHistory[gameHistory.length - 1] || 1;
    const sum = gameHistory.reduce((a, b) => a + b, 0);
    return (
        <div class="Board App-board">
            <h2 class="Board-heading">{name}</h2>
            <Dice color={color} num={num} />
            <h2 class="Board-heading">총점</h2>
            <p>{sum}</p>
            <h2 class="Board-heading">기록</h2>
            {gameHistory.join(', ')}
        </div>
    );
}

export default Board;