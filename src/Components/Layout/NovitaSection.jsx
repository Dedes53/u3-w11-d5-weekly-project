import { Container, Row } from "react-bootstrap";
import RadioStationCard from "./RadioStationCard";
import radioImage1 from '../../assets/images/1a.png'
import radioImage2 from '../../assets/images/1b.png'
import '../css/NovitaSection.css'


function NovitaSection() {
    return (
        <Container>
            <h1 className="b-b py-2 mt-3">Novità</h1>

            {/* Container scrollabile orizzontalmente */}
            <div className="horizontal-scroll-container">
                <div className="horizontal-scroll-content">

                    <RadioStationCard
                        radioImage={radioImage1}
                        description="Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill" />
                    <RadioStationCard
                        radioImage={radioImage2}
                        description="Ecco la nuova casa della musica latina" />

                </div>
            </div>
        </Container >
    )
}

export default NovitaSection;