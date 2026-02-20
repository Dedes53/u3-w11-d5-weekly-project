import { Container } from "react-bootstrap";
import RadioStationCard from "./RadioStationCard";

function NovitaSection() {
    return (
        <Container>
            <h1 className="b-b py-2 mt-3">Novità</h1>
            <div className="radio-station d-flex align-items-center justify-content-between p-3 mb-3">
                <RadioStationCard />
                <RadioStationCard />
            </div>

        </Container>

    )
}

export default NovitaSection;