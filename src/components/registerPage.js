import React, { useState } from "react"
import {
	Button,
	Container,
	Form,
	Row,
} from "react-bootstrap"
import { useHistory } from "react-router-dom"
import "../style/mainStyle.scss"
import axios from "axios"

const RegisterPage = () => {
	const history = useHistory()
	const [user, setUser] = useState("")
	const [pass1, setPass1] = useState("")
	const [pass2, setPass2] = useState("")
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
				<Form
					onSubmit={() => {
						if (pass1 === pass2) {
							axios({
								method: "post",
								url: "http://localhost:5000/",
								data: {
									username: user,
									password: pass1,
								},
							})
							history.push("/mainScreen")
						} else {
							alert("Passwords do not match!")
						}
					}}
				>
					<Form.Group
						controlId="formBasicEmail"
						style={{ maxWidth: "20rem" }}
					>
						<Form.Label>Username</Form.Label>
						<Form.Control
							onChange={(e) => {
								setUser(e.target.value)
							}}
							value={user}
							type="username"
							placeholder="Username"
							required={true}
						/>
					</Form.Group>

					<Form.Group
						controlId="formBasicPassword"
						style={{ maxWidth: "20rem" }}
					>
						<Form.Label>Password</Form.Label>
						<Form.Control
							onChange={(e) => {
								setPass1(e.target.value)
							}}
							value={pass1}
							type="password"
							placeholder="Password"
							required={true}
						/>
					</Form.Group>
					<Form.Group
						controlId="formBasicPassword"
						style={{ maxWidth: "20rem" }}
					>
						<Form.Label>Password again</Form.Label>
						<Form.Control
							onChange={(e) => {
								setPass2(e.target.value)
							}}
							value={pass2}
							type="password"
							placeholder="Password"
							required={true}
						/>
					</Form.Group>
					<Row>
						<Button
							style={{ margin: "1rem" }}
							type="submit"
						>
							Register
						</Button>
					</Row>
				</Form>
			</Container>
		</div>
	)
}

export default RegisterPage
