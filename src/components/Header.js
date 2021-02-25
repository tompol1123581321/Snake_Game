import React from "react"
import { Nav, Navbar } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import "../style/mainStyle.scss"

const Header = () => {
	return (
		<div>
			<Navbar
				variant="primary"
				expand="lg"
				className="header"
			>
				<Navbar.Brand>SnakeGame</Navbar.Brand>
				<Nav>
					<LinkContainer to="/">
						<Nav.Link>User</Nav.Link>
					</LinkContainer>
				</Nav>
			</Navbar>
		</div>
	)
}

export default Header
