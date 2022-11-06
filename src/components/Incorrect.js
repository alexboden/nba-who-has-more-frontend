import {useNavigate} from 'react-router-dom';
import { ReactSession } from 'react-client-session';
import axios from "axios";
import React from "react";

function Incorrect() {

	ReactSession.setStoreType("localStorage");
	const navigate = useNavigate()
	const score = ReactSession.get("score");
	console.log('score')
	console.log(score);
	const player1_count = ReactSession.get("player1_count");
	const player2_count = ReactSession.get("player2_count");
	const player1_name = ReactSession.get("player1_name");
	const player2_name = ReactSession.get("player2_name");
	const question = ReactSession.get("question");

	if (! ReactSession.get("highscore")) {
		ReactSession.set("higher", score);
	}
	
	
	if (score > ReactSession.get("highscore")) {
		ReactSession.set("highscore", score);
	}
	
	const highscore = ReactSession.get("highscore");
	

	axios.post(`https://django-nba-backend.herokuapp.com/api/game/`, {
		"score": score,
	})
	// console.log('test')
	
	ReactSession.set("score", 0);

	const onSubmit = (e) => {
		e.preventDefault();
		console.log(e.target);
		navigate('/')
	};

  return (
    <div>
		<h2 class="display-3 text-center">Incorrect</h2>
		<h2 class='text-center m-3'>Final Score: {score}</h2>
		<h2 class='text-center m-3'>High Score: {highscore}</h2>
		
		{/* <image src={cryingJordan} alt="cryingJordan" width="500" height="500" /> */}
 		{/* <img src={process.env.PUBLIC_URL + '/crying-jordan.png'} alt="logo"  width="500" height="500" /> */}
		<div class="container-fluid d-grid gap-2">
			<button type="submit" class="m-3 p-3 text-center btn btn-lg btn-outline-primary fw-bold" onClick={onSubmit}>New Game</button>
			<h2 class='m-3'> Answer Key:</h2>
			<h3 class='m-2 mx-3'> {question}</h3>
			<h5 class='mx-4'>{player1_name} : {player1_count}</h5>
			<h5 class='mx-4'>{player2_name} : {player2_count}</h5>
   		</div>
	</div>
  );
}

export default Incorrect;
