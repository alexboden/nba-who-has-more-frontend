import { ReactSession } from 'react-client-session';
import {useNavigate} from 'react-router-dom';

function Correct() {

const score = ReactSession.get("score");
const player1_count = ReactSession.get("player1_count");
const player2_count = ReactSession.get("player2_count");
const player1_name = ReactSession.get("player1_name");
const player2_name = ReactSession.get("player2_name");
const question = ReactSession.get("question");



const navigate = useNavigate();

const onSubmit = (e) => {
		e.preventDefault();
		console.log(e.target);
		navigate('/')
	};

  return (
    <div >
		<h2 class="display-3 text-center m-3">Correct!</h2>
		<div>

		<h2 class='text-center m-3'>Current Score: {score} 🔥</h2>
		<div class="d-grid gap-2">
		<button type="submit" class="m-3 p-3 text-center btn btn-lg btn-outline-primary fw-bold" onClick={onSubmit}>Continue</button>
		</div>
		<h2 class='m-3'> Answer Key:</h2>
		<h3 class='m-2 mx-3'> {question}</h3>
		<h5 class='mx-4'>{player1_name} : {player1_count}</h5>
		<h5 class='mx-4'>{player2_name} : {player2_count}</h5>
		</div>
	</div>
  );
}

export default Correct;
