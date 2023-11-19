const GameOver = ({winner, setBoardArr}) => {

    let reload = () => {
        setBoardArr(new Array(9).fill({value: ' '}));
        window.location.reload();
}

    return (
        <div className='gameover'>
            <h2>Game Over! {winner} wins!!</h2>
            <button className='restart' onClick={reload}>
                Restart Game.
            </button>
        </div>
    )
}

export default GameOver;