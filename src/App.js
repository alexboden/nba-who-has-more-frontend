import "./App.css";
// importing components from react-router-dom package
import { Routes, Route, BrowserRouter} from "react-router-dom";
import { ReactSession } from 'react-client-session';
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Question from "./components/Question";
import About from "./components/About";
import CollapsibleExample from "./components/Navbar";
import Correct from "./components/Correct";
import Incorrect from "./components/Incorrect";
import Contact from "./components/Contact";
import Stats from "./components/Stats";

function App() {
	ReactSession.setStoreType("localStorage");
	
	const highscore = ReactSession.get("highscore");
	if (!highscore) {
		ReactSession.set("highscore", 0);
	}

	return (
		<div class='display-flex'>

		<CollapsibleExample />
		<BrowserRouter>

		<Routes>
			<Route path="/" element={<Question />} />
			<Route path="/about" element={<About />} />
			<Route path="/correct" element={<Correct />} />
			<Route path="/incorrect" element={<Incorrect />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/stats" element={<Stats />} />
			{/* <Route path="/settings" element={<Settings />} /> */}
			{/* <Route path="*" element={<NotFound />} /> */}
		</Routes>
		</BrowserRouter>
		</div>
	);
}

export default App;