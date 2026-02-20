import { Col } from "react-bootstrap";

function ExpLink(props) {
    return (
        <Col xs={12} md={6} lg={4} className="rounded rounded-4 bg-black color-am p-3 ">
            <div className="d-flex justify-content-between align-items-center">
                <p className="m-0">{props.link}</p>
                <p className="m-0">&gt;</p>
            </div>

        </Col>
    )
}

export default ExpLink;