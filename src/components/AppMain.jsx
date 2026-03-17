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




    return (
        <>
            <main>
                <section>
                    <div className="container">
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                            <div className="col">
                                <div className="card">
                                    <img className="card-img-top" src="https://cdn.discordapp.com/attachments/1460718808175214683/1483425810990764085/SPOILER_fabio_green_long_hair.png?ex=69ba8b72&is=69b939f2&hm=09297b8ce5b59731d3992d56f5818d4c4862ba44e19347643960a5a23dc1da99&" alt="" />
                                    <div className="card-body">
                                    <p>Nome</p>
                                    <p>Anno di nascita</p>
                                    <p>Nazionalità</p>
                                    <p>Biografia</p>
                                    <p>Riconoscimenti</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}