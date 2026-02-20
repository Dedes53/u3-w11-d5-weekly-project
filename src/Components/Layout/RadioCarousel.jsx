import { Container } from "react-bootstrap";
import RadioCard from "./RadioCard";
import '../css/RadioCarousel.css';

function RadioCarousel() {
    return (
        <Container className="py-4">
            {/* Titolo della sezione */}
            <div className="section-header">
                <h2 className="section-title">Nuovi episodi radio</h2>
                <span className="section-arrow">›</span>
            </div>

            {/* Carosello scrollabile */}
            <div className="horizontal-scroll-container">
                <div className="horizontal-scroll-content">

                    {/* Le card che si affiancano */}
                    <RadioCard
                        image="/images/episodio1.jpg"
                        title="Prologo con Abuelo"
                        artist="The Wanderer"
                        isExplicit={true}
                    />
                    <RadioCard
                        image="/images/episodio2.jpg"
                        title="Feel More Present"
                        artist="Apple Music"
                    />
                    <RadioCard
                        image="/images/episodio3.jpg"
                        title="Michael Bublé & Carly Pearce"
                        artist="Michael Bublé & Carly Pearce"
                    />
                    <RadioCard
                        image="/images/episodio4.jpg"
                        title="The Wanderer"
                        artist="Apple Music"
                    />
                    <RadioCard
                        image="/images/episodio5.jpg"
                        title="Chill Radio"
                        artist="Apple Music"
                    />

                </div>
            </div>
        </Container>
    )
}

export default RadioCarousel;