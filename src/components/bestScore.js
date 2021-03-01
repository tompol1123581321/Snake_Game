import axios from "axios"
import React, { useState, useEffect } from "react"

const geetingProducts = async (req, res) => {
	const text = await axios.get("http://localhost:5000/")
	console.log(text)
}
geetingProducts()
const BestScore = ({ score }) => {
	const theBestHistoryScore = localStorage.getItem("score")

	useEffect(() => {
		setBestScore(theBestHistoryScore)
	}, [theBestHistoryScore])

	const [bestScore, setBestScore] = useState(0)
	useEffect(() => {
		if (score > bestScore) {
			setBestScore(score)
			localStorage.setItem("score", score)
		}
	}, [score, bestScore])

	return (
		<div>
			<h2>Your best score: {bestScore}</h2>
			<h2>Your score: {score}</h2>
		</div>
	)
}

export default BestScore
