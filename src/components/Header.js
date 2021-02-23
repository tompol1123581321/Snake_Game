import React from "react"
import { Navbar } from "react-bootstrap"
import "../style/mainStyle.scss"

const Header = () => {
	return (
		<div>
			<Navbar
				variant="primary"
				expand="lg"
				className="header"
			>
				<Navbar.Brand>Snake Game</Navbar.Brand>
			</Navbar>
		</div>
	)
}

export default Header
