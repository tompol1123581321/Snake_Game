import React, { useEffect, useState, useRef } from "react"
import { useInterval } from "../useInterval"
import {
	CANVAS_SIZE,
	SNAKE_START,
	APPLE_START,
	SCALE,
	SPEED,
	DIRECTIONS,
} from "../constants"

import BestScore from "./bestScore"

const MainSreen = () => {
	const canvasRef = useRef()
	const [snake, setSnake] = useState(SNAKE_START)
	const [apple, setApple] = useState(APPLE_START)
	const [dir, setDir] = useState([0, -1])
	const [speed, setSpeed] = useState(null)
	const [gameOver, setGameOver] = useState(true)

	useInterval(() => gameLoop(), speed)

	const endGame = () => {
		setSpeed(null)
		setGameOver(true)
		setClick("Click the playing field to Start")
	}

	const moveSnake = ({ keyCode }) =>
		keyCode >= 37 &&
		keyCode <= 40 &&
		setDir(DIRECTIONS[keyCode])

	const createApple = () =>
		apple.map((_a, i) =>
			Math.floor(Math.random() * (CANVAS_SIZE[i] / SCALE))
		)

	const checkCollision = (piece, snk = snake) => {
		if (
			piece[0] * SCALE >= CANVAS_SIZE[0] ||
			piece[0] < 0 ||
			piece[1] * SCALE >= CANVAS_SIZE[1] ||
			piece[1] < 0
		)
			return true

		for (const segment of snk) {
			if (
				piece[0] === segment[0] &&
				piece[1] === segment[1]
			)
				return true
		}
		return false
	}

	const checkAppleCollision = (newSnake) => {
		if (
			newSnake[0][0] === apple[0] &&
			newSnake[0][1] === apple[1]
		) {
			setScore(score + 1)
			let newApple = createApple()
			while (checkCollision(newApple, newSnake)) {
				newApple = createApple()
			}
			setApple(newApple)
			return true
		}
		return false
	}

	const gameLoop = () => {
		const snakeCopy = JSON.parse(JSON.stringify(snake))
		const newSnakeHead = [
			snakeCopy[0][0] + dir[0],
			snakeCopy[0][1] + dir[1],
		]
		snakeCopy.unshift(newSnakeHead)
		if (checkCollision(newSnakeHead)) endGame()
		if (!checkAppleCollision(snakeCopy)) snakeCopy.pop()
		setSnake(snakeCopy)
	}

	const startGame = () => {
		setSnake(SNAKE_START)
		setApple(APPLE_START)
		setDir([0, -1])
		setSpeed(SPEED)
		setGameOver(false)
	}

	useEffect(() => {
		const context = canvasRef.current.getContext("2d")
		context.setTransform(SCALE, 0, 0, SCALE, 0, 0)
		context.clearRect(
			0,
			0,
			window.innerWidth,
			window.innerHeight
		)
		context.fillStyle = "gray"
		snake.forEach(([x, y]) => context.fillRect(x, y, 1, 1))
		context.fillStyle = "red"
		context.fillRect(apple[0], apple[1], 1, 1)
	}, [snake, apple, gameOver])

	const [click, setClick] = useState(
		"Click the playing field to Start"
	)

	const [score, setScore] = useState(0)
	return (
		<div
			className="mainScreen"
			style={{
				display: "flex",
				justifyContent: "center",
			}}
		>
			<div
				role="button"
				tabIndex="1"
				onKeyDown={(e) => moveSnake(e)}
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-around",
					maxWidth: "70rem",
					margin: "auto",
				}}
				onClick={() => {
					setScore(0)
					startGame()
					setClick("Game is running")
				}}
			>
				<div style={{ width: "25rem" }}>
					<BestScore score={score} />

					<div>
						<h4>{click}</h4>
					</div>
				</div>
				<canvas
					style={{
						border: "2px solid gray",
						backgroundColor: "white",
						margin: "auto",
					}}
					ref={canvasRef}
					width={`${CANVAS_SIZE[0]}px`}
					height={`${CANVAS_SIZE[1]}px`}
				></canvas>
			</div>
		</div>
	)
}

export default MainSreen
