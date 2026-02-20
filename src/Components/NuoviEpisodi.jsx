import EpisodCard from "./EpisodCard";
import Episodio1 from '../assets/images/2a.png'
import Episodio2 from '../assets/images/2b.png'
import Episodio3 from '../assets/images/2c.png'
import Episodio4 from '../assets/images/2d.png'
import Episodio5 from '../assets/images/2e.png'

function NuoviEpisodi() {
    return (
        <>
            <h4>Nuovi episodi radio</h4>
            <div className="d-flex flex-nowrap overflow-auto gap-3">
                <EpisodCard
                    image={Episodio1}
                    title="Prologo con Abuelo"
                />
                <EpisodCard
                    image={Episodio2}
                    title="The Wanderer"
                />
                <EpisodCard
                    image={Episodio3}
                    title="Michael Bublé & Carly Pearce"
                />
                <EpisodCard
                    image={Episodio4}
                    title="Stephan Moccio: The Zane Lowe Interview"
                />
                <EpisodCard
                    image={Episodio5}
                    title="Chart Spotlight: Julia Michaels"
                />
            </div>
        </>
    )
}

export default NuoviEpisodi;