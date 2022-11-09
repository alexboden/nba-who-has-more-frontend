function About() {
  return (
    <div class="m-3">
		<h1 class="display-3">	
			About
		</h1>
		<p class='fs-5'>
			Welcome to the NBA Who has More! This is a simple game that will test your knowledge of the NBA.
			
		</p>
		<p class='fs-5'>
			 This game will ask you a question about which player has more games with a certain stat threshold. The players will be randomly selected from the the top 100 players of all time according to <a href="https://www.espn.com/nba/story/_/page/nbarankalltime/greatest-players-ever" >ESPN's list.</a> The data will not be regularly updated so active players stats might be a bit off.
		</p>
    </div>
  );
}

export default About;
