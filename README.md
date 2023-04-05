## Navigazione per Neftlix React

## **In questo esercizio applicherai le nuove conoscenze riguardo il react-router-dom alla tua app Netflix. Ricorda di installare il pacchetto npm con** `**npm i react-router-dom**`

1.  Crea una Route per un componente **TVShows**. Una semplice rotta statica, senza parametri. Monta in questa pagina un componente a tua scelta. Es. `/tv-shows`
2.  Aggiungi un Link alla pagina **TVShows** nella Navbar dell’applicazione, per navigarci comodamente.
3.  Crea una Route parametrica per montare un componente **MovieDetails**. Dovrà permettere di ricevere un parametro `id` dalla URL. Es. `/movie-details/:movieId`
4.  Crea il componente **MovieDetails** per visualizzare i dettagli e i commenti del singolo film. Queste informazioni dovranno essere ottenute da delle fetch ogni qualvolta il componente **MovieDetails** verrà montato; avrai bisogno di prelevare il `movieId` dall’URL (per recuperare sia i dettagli del film sia i suoi commenti sarà necessario effettuare due fetch: una a omdbAPI e una alle nostre API interne)
5.  In ogni componente **SingleMovie** aggiungi un bottone; servirà per per navigare alla sua pagina di dettaglio, sfruttando la rotta parametrica creata sopra. Inserisci l’`id` del film nell’URL.

#### EXTRA

- Cambia il comportamento della SearchBar: se l’utente è sulla pagina **TVShows**, il placeholder dovrà diventare: “Cerca Serie TV…”
- Se non l’hai già fatto, migliora la navigazione aggiungendo loaders e gestione errori
