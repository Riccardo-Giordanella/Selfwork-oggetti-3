let bowling = {
    players: [
        // { 'name': 'Livio', 'scores': [] },
        // { 'name': 'Paola', 'scores': [] },
        // { 'name': 'Filippo', 'scores': [] },
        // { 'name': 'Giuseppe', 'scores': [] }
    ],

    crea_punteggi_casuali: function () {
        this.players.forEach(player => {
            for (let i = 0; i < 10; i++) {
                player.scores.push(Math.floor(Math.random() * (10 - 1 + 1) + 1));
            }
        });
    },

    trova_punteggio_finale: function () {
        this.players.forEach(player => {
            player.totalScore = player.scores.reduce((acc, score) => acc + score, 0);
        });
        this.players.sort((a, b) => b.totalScore - a.totalScore);
    },


    aggiungi_giocatore: function (nome) {
        let nuovoGiocatore = { name: nome, scores: []};
        this.players.push(nuovoGiocatore);
    },

    determina_vincitore: function () {
        return "Il vincitore è:"+ this.players[0].name;
    },

    classifica_finale: function () {
        console.log('Classifica finale:');
        this.players.forEach( (player, i)=>{
            console.log(`${i + 1}. ${player.name}`);
        })

    },
}

// bowling.crea_punteggi_casuali(); // Crea 10 punteggi casuali per ogni giocatore
// console.log(bowling.players); // Mostra i giocatori con i punteggi casuali
bowling.aggiungi_giocatore('Alessandro');
bowling.aggiungi_giocatore('Riccardo');
bowling.aggiungi_giocatore('Matteo');
bowling.crea_punteggi_casuali();
bowling.trova_punteggio_finale();
console.log(bowling.determina_vincitore());
bowling.classifica_finale();


console.log(bowling);


// console.log(bowling.players); // Mostra i giocatori aggiornati
// console.log(bowling.determina_vincitore()); // Determina il vincitore
// console.log(bowling.classifica_finale()); // Mostra la classifica finale dei giocatori
