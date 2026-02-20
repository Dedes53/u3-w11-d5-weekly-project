import { Container } from "react-bootstrap";

function Player() {
    return (
        <Container className="rounded bg-dark d-flex align-items-center justify-content-between p-3 fixed-bottom">
            <img src="" alt="" />
            <div className="controls">
                <button>Play</button>
                <button>Next</button>
            </div>
        </Container>
    )
}

export default Player;