import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import ExpLink from "./ExpLink";

function Esplorare() {

    const link = [
        "Esplora per genere",
        "Decenni",
        "Attività e stati d'animo",
        "Worldwide",
        "Classifiche",
        "Audio spaziale",
        "Video Musicale",
        "Nuovi artisti",
        "Hit del passato"
    ]

    return (
        <Container fluid className="p-3">
            <h4>Altro da esplorare</h4>

            <Row className="g-3 ">
                {link.map((link, index) => {
                    return <ExpLink key={index} link={link} />
                })}
            </Row>
        </Container>
    )
}

export default Esplorare;