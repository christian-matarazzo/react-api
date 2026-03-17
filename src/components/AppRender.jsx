import { useState, useEffect } from "react"
import axios from "axios"
export default function AppRender() {

    const [allActors, setActors] = useState([])

    /* facciamo la chiamata API */

    const attori = "https://lanciweb.github.io/demo/api/actors/"
    const attrici = "https://lanciweb.github.io/demo/api/actresses/"

    /* creamo gli arrey di richiesta */

    const richiesta1 = axios.get(attori)
    const richiesta2 = axios.get(attrici)

    /* usiamo promise all per mergare i dati */


    useEffect(() => {
        Promise.all([richiesta1, richiesta2])
            .then(axios.spread((risposta1, risposta2) => { /* axios.spread si utilizzava precedentemente per fare quello che oggi farebbe il Promise.all + destructuring (trovato nozioni online) */
                setActors([...risposta1.data, ...risposta2.data])
            }))

    }, [])



    console.log(allActors);

    return (
        <>
        <main>
            <section>
                <div className="container">
                    <h2 className='text-center'> Attori più famosi </h2>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                        {allActors.map((actor) => /* map del nostro array con i gli API data */
                            <div key={actor.name} className="col">
                                <div className="card h-100">
                                    <img className="card-img-top p-2 bg-dark " style={{ width: '100%', height: "50%", objectFit: "cover" }} src={actor.image} alt={actor.name} />
                                    <div className="card-body bg-dark text-white">
                                        <p>Nome: {actor.name}</p>
                                        <p>Anno di nascita: {actor.birth_year}</p>
                                        <p>Nazionalità: {actor.nationality}</p>
                                        <p>Biografia: {actor.biography}</p>
                                        <p>Riconoscimenti: {actor.awards.join()}</p>
                                        <p>Film più famosi: {actor.known_for ? actor.known_for.join() : actor.most_famous_movies.join()}</p> {/* usiamo un ternario per dettare la condizione di visualizzazione */}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
        </section>
      </main >
        </>
    )
}