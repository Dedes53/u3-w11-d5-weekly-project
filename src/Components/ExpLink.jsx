import { Col } from "react-bootstrap";

function ExpLink(props) {
    return (
        <Col xs={12} md={6} lg={4}>
            <div className="exp-link-card">
                <div className="d-flex justify-content-between align-items-center">
                    <p className="m-0">{props.link}</p>
                    <p className="m-0">&gt;</p>
                </div>
            </div>
        </Col>
    )
}

export default ExpLink;