function generate_question(){
	let stat_combos = [
		[40, 'pts', 'points'],
        [30, 'pts', 'points'],
        [20, 'pts', 'points'],
        [15, 'reb', 'rebounds'],
        [10, 'reb', 'rebounds'],
        [10, 'ast', 'assists'],
        [5, 'ast', 'assists'],
        [3, 'stl', 'steals'],
        [3, 'blk', 'blocks']
    ]
    
    player1_id = randint(1, 100)
    player2_id = randint(1, 100) 
    
    while(player1_id == player2_id):
	player2_id = randint(1, 100)
	
    player1 = Player.objects.get(id=player1_id)
    player2 = Player.objects.get(id=player2_id)
    
    stat = stat_combos[randint(0, len(stat_combos) - 1)]
    
    q = Question()
    
    q.question = "Who has more games with " + str(stat[0]) + " or more " + stat[2] + "?"
    q.player1_name = player1.name
    q.player2_name = player2.name
    q.player1_count = count_stat(player1.data.get(stat[1]), stat[0])
    q.player2_count = count_stat(player2.data.get(stat[1]), stat[0])
    
	
    if q.player1_count > q.player2_count:
	q.answer = player1.name
    elif q.player2_count > q.player1_count:
	q.answer = player2.name
    else:
	generate_question()
    
    q.save()
    
    return q
}