import React, { useEffect, useReducer, useState } from 'react'

export default function TicTacToe() {

    const [board, setBoard] = useState([...Array(9)].fill(null))

    const [player, nextPlayer] = useReducer(player => player === "X" ? "O" : "X", "X");


    const checkWinner = () => {
        let firstItem = board.indexOf(player)

        let distance = null

        for (let i = firstItem + 1; i < board.length - firstItem &&
            distance === null; i++) {
            if (board[i] === player) {
                distance = i - firstItem
            }
            
        }

        

       // console.log(`${player} első pozi: ${firstItem} és táv: ${distance}`)

        console.log(board[firstItem + distance * 2] === player)
    }

    const select = (val) => {

        const boardAlt = board.slice()

        boardAlt[val] = player

        setBoard(boardAlt)
        
    }

    useEffect(()=> {
        checkWinner()
        nextPlayer()
    }, [board])

    return (
        <div className="flex flex-wrap">
            {
                board.map((value, i) => <Block key={i} value={value} select={() => select(i)} />)
            }
        </div>
    )
}

function Block({value, select}) {

    const setValue = () => {
        if (value === null) {
            select()
        }
    }

    return (
        <button
            onClick={setValue}
            type="button"
            
            className="tie w-[100px] h-[100px] bg-blue-200  rounded-sm m-1">
                <span className="text-xl bold">{value}</span>
        </button>
    )
}