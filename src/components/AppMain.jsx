import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios';
import { useState, useEffect } from 'react';





export default function AppMain() {

    const [actors, setActors] = useState([]) /* dichiariamo una variabile useState con un array vuoto da usare per immagazzinare i dati della chiamata API */

    function getActors() { /* facciamo una funzione per il fetch */
        axios.get("https://lanciweb.github.io/demo/api/actors/") /* usiamo axios per il fetch, inseriamo il link */
        .then ((res) => { /* promise */
            console.log(res.data); /* console log per vedere se i dati vengono richiamati */
            setActors(res.data) 
            
        })
    }



    
    return (
        <h1 onClick={getActors}>Ciao</h1>
    )
}