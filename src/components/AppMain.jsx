import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios';
import { useState, useEffect } from 'react';





export default function AppMain() {

    const [actors, setActors] = useState([]) /* dichiariamo una variabile useState con un array vuoto da usare per immagazzinare i dati della chiamata API */

    function getActors() { /* facciamo una funzione per il fetch */
        axios.get("https://lanciweb.github.io/demo/api/actors/") /* usiamo axios per il fetch, inseriamo il link */
            .then((res) => { /* promise */
                console.log(res.data); /* console log per vedere se i dati vengono richiamati */
                setActors(res.data)
            })
    }

    useEffect(() => {getActors()},[]) /* usiamo useEffect per effettuare il richiamo della funzione getActors, in modo tale da inizializzare la pagina con le card invece che un pulsante per triggherare l'evento */


    return (
        <>
            <main>
                <section>
                    <div className="container">
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                            {actors.map((actor) => /* map del nostro array con i gli API data */
                            <div key= {actor.id} className="col">
                                <div className="card h-100">
                                    <img className="card-img-top p-2 bg-dark " style={{ width: '100%', height: "50%", objectFit: "cover"}} src={actor.image} alt={actor.name} />
                                    <div className="card-body bg-dark text-white">
                                    <p>Nome: {actor.name}</p>
                                    <p>Anno di nascita: {actor.birth_year}</p>
                                    <p>Nazionalità: {actor.nationality}</p>
                                    <p>Biografia: {actor.biography}</p>
                                    <p>Riconoscimenti: {actor.awards.join()}</p>
                                    <p>Film più famosi: {actor.known_for.join()}</p>
                                    </div>
                                </div>
                            </div>
                            )}
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}