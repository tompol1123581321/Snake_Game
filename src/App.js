import React from "react"
import Header from "./components/Header"
import MainSreen from "./components/mainSreen"
import Footer from "./components/footer"
import "./style/mainStyle.scss"

const App = () => {
	return (
		<div className="wholePage">
			<Header />
			<MainSreen />
			<Footer />
		</div>
	)
}

export default App
