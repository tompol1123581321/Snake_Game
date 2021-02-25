import React from "react"
import {
	Button,
	Container,
	Form,
	Row,
} from "react-bootstrap"
import "../style/mainStyle.scss"

const RegisterPage = () => {
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
				<Form>
					<Form.Group
						controlId="formBasicEmail"
						style={{ maxWidth: "20rem" }}
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
					<Form.Group
						controlId="formBasicPassword"
						style={{ maxWidth: "20rem" }}
					>
						<Form.Label>Password again</Form.Label>
						<Form.Control
							type="password"
							placeholder="Password"
						/>
					</Form.Group>
					<Row>
						<Button style={{ margin: "1rem" }}>
							Register
						</Button>
					</Row>
				</Form>
			</Container>
		</div>
	)
}

export default RegisterPage
