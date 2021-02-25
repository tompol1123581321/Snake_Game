import React from "react"
import {
	Button,
	Container,
	Form,
	Row,
} from "react-bootstrap"
import { useHistory } from "react-router-dom"
import "../style/mainStyle.scss"

const LoginScreen = () => {
	const history = useHistory()
	return (
		<div
			className="mainScreen"
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Container style={{ maxWidth: "20rem" }}>
				<Form style={{ maxWidth: "20rem", margin: "auto" }}>
					<Form.Group
						controlId="formBasicEmail"
						style={{
							maxWidth: "20rem",
						}}
					>
						<Form.Label>Username</Form.Label>
						<Form.Control
							type="username"
							placeholder="Username"
						/>
					</Form.Group>

					<Form.Group
						controlId="formBasicPassword"
						style={{ maxWidth: "20rem" }}
					>
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Password"
						/>
					</Form.Group>
					<Row
						style={{
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<Button
							variant="success"
							type="Login"
							style={{ margin: "1rem" }}
						>
							Login
						</Button>
						<Button
							onClick={() => {
								history.push("/register")
							}}
							style={{ margin: "1rem" }}
						>
							Register
						</Button>
					</Row>
				</Form>
			</Container>
		</div>
	)
}

export default LoginScreen
