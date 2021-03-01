import React from "react"
import Header from "./components/Header"
import MainSreen from "./components/mainSreen"
import Footer from "./components/footer"
import "./style/mainStyle.scss"
import LoginScreen from "./components/loginScreen"
import RegisterPage from "./components/registerPage"
import { Route, Switch } from "react-router-dom"

const App = () => {
	return (
		<div className="wholePage">
			<Header />
			<Switch>
				<Route path="/" exact>
					<LoginScreen />
				</Route>
				<Route path="/register">
					<RegisterPage />
				</Route>
				<Route>
					<MainSreen path="/mainScreen" />
				</Route>
			</Switch>
			<Footer />
		</div>
	)
}

export default App
