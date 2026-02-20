import { Col, Container, Row } from "react-bootstrap";

function RadioStationCard(props) {
    return (
        <Col xs={8} md={6}>
            <div className="d-flex flex-column align-items-start justify-content-center">
                <div>
                    <p>Nuova stazione radio</p>
                    <p>{props.description}</p>
                </div>
                <img
                    className="w-100"
                    src={props.radioImage}
                    alt="Stazione radio"
                />
            </div>
        </Col>

    )
}

export default RadioStationCard;    