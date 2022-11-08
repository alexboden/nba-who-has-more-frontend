import axios from "axios";
import React from "react";
import { useNavigate} from "react-router-dom";
import { ReactSession } from 'react-client-session';

const baseURL = "https://django-nba-backend.herokuapp.com/api/question/n2ew";

function Question() {
	// This syntax ensures `this` is bound within handleClick. 

	const [q, setQ] = React.useState();
	const navigate = useNavigate();
	
	React.useEffect(() => {
		axios.get(baseURL).then((response) => {
			setQ(response.data);
			console.log(response.data)
			ReactSession.set("question", response.data.question);
			ReactSession.set("player1_name", response.data.player1_name);
			ReactSession.set("player2_name", response.data.player2_name);
			ReactSession.set("player1_count", response.data.player1_count);
			ReactSession.set("player2_count", response.data.player2_count);
		});
	}, []);

	// console.log(q)
	
	const onSubmit = (e) => {
		e.preventDefault();
		console.log(e.target);
		if (e.target.value == q.player1_name && q.answer == q.player1_name || e.target.value == q.player2_name && q.answer == q.player2_name) {
			const score = ReactSession.get("score");
			
			if (score == null) {
				ReactSession.set("score", 1);
			} else {
				ReactSession.set("score", score + 1);
			}

			return navigate('/correct')
		} else {
			navigate('/incorrect')
		}
	};

	if (!q) {
		return (
			<>
		<div class="d-flex justify-content-center m-5">
			<h2>Loading...</h2>
			<div class="spinner-border spinner-border-lg mx-2" role="status" aria-hidden="true"></div>
		</div>
		<div class="d-flex justify-content-center">
			<h3>You may need to refresh</h3>
		</div>
		</>
	);
	}

	return (
		<div class='m-3'>
			<h1 class='text-center display-5'>{q.question}</h1>
			<div class='btn-group-lg m-4 d-grid gap-2 col-6 mx-auto' role='group'>
				<button class="btn btn-outline-primary" type="submit" name="btn" value={q.player1_name} onClick={onSubmit}>
				{q.player1_name}	
				</button>
				<button class="btn btn-outline-primary" type="submit" name="btn" value={q.player2_name} onClick={onSubmit}>
				{q.player2_name}
				</button>
		</div>
		</div>
	)
}

export default Question;