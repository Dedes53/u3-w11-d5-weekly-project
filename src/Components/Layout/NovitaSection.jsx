import { Container, Row } from "react-bootstrap";
import RadioStationCard from "./RadioStationCard";
import radioImage1 from '../../assets/images/1a.png'
import radioImage2 from '../../assets/images/1b.png'
function NovitaSection() {
    return (
        <Container>
            <h1 className="b-b py-2 mt-3">Novità</h1>
            <Container className="radio-station p-3 mb-3 overflow-hidden">
                <Row>

                    <RadioStationCard
                        radioImage={radioImage1}
                        description="Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill" />
                    <RadioStationCard
                        radioImage={radioImage2}
                        description="Ecco la nuova casa della musica latina" />
                </Row>
            </Container>

        </Container>

    )
}

export default NovitaSection;