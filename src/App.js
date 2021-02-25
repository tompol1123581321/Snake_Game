import React from "react"
import Header from "./components/Header"
import MainSreen from "./components/mainSreen"
import Footer from "./components/footer"
import "./style/mainStyle.scss"
import LoginScreen from "./components/loginScreen"
import RegisterPage from "./components/registerPage"
import { Route } from "react-router-dom"

const App = () => {
	return (
		<div className="wholePage">
			<Header />
			<Route path="/" exact>
				<LoginScreen />
			</Route>
			<Route path="/register">
				<RegisterPage />
			</Route>
			<Route>
				<MainSreen path="/mainScreen" />
			</Route>
			<Footer />
		</div>
	)
}

export default App
