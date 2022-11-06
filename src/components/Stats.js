import React from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { ReactSession } from 'react-client-session';

function Stats() {

	// This syntax ensures `this` is bound within handleClick. 
	const navigate = useNavigate()
	const AVERAGE_SCORE_URL = "https://django-nba-backend.herokuapp.com/api/game/average_score";
	const [q, setQ] = React.useState();

	React.useEffect(() => {
		axios.get(AVERAGE_SCORE_URL).then((response) => {
			setQ(response.data.average_score)
			console.log(response.data.average_score)
		});
	}, []);

	const HIGHEST_SCORE_URL = "https://django-nba-backend.herokuapp.com/api/game/highest_score";
	const [hs, setHs] = React.useState();

	React.useEffect(() => {
		axios.get(HIGHEST_SCORE_URL).then((response) => {
			setHs(response.data.highest_score)
			console.log(response.data.highest_score)
		});
	}, []);

	const onSubmit = (e) => {
		e.preventDefault();
		console.log(e.target);
		navigate('/')
	};

	const highscore = ReactSession.get("highscore");
	if (!highscore) {
		ReactSession.set("highscore", 0);
	}

  return (
    <div class="text-center">
		<h1 class="display-2">	
			Game stats
		</h1>
		<p class='fs-2'>
			The average score is: <h class="fw-bold">{q}</h>
		</p>
		<p class='fs-2'>
			The highest score is: <h class="fw-bold">{hs}</h>
		</p>

		<p class='fs-2'>Your highscore is: <h class='fw-bold'>{highscore}</h></p>
			<button type="submit" class="m-3 p-3 text-center btn btn-lg btn-outline-primary fw-bold" onClick={onSubmit}>Can you beat them? Click Me</button>

    </div>
  );
}

export default Stats;
