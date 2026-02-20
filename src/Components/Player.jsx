import { useSelector, useDispatch } from 'react-redux';
import { togglePlay, stopSong } from '../redux/actions/musicActions';
import { Container, Row, Col } from 'react-bootstrap';

function Player() {
    const dispatch = useDispatch();

    const { currentSong, isPlaying } = useSelector((state) => state.music);

    // se non c'è nessuna canzone selezionata
    if (!currentSong) {
        return (
            <div className="player-fixed bg-dark text-white py-3 border-top border-secondary">
                <Container>
                    <p className="text-center text-muted mb-0">
                        Seleziona una canzone per iniziare
                    </p>
                </Container>
            </div>
        );
    }

    return (
        <div className="player-fixed bg-dark text-white py-3 border-top border-secondary">
            <Container>
                <Row className="align-items-center">

                    {/* immagine della canzone */}
                    <Col xs={6} md={4} className="d-flex align-items-center gap-3">
                        <img
                            src={currentSong.album.cover_small}
                            alt={currentSong.title}
                            className="rounded"
                            style={{
                                width: '60px',
                                height: '60px',
                                objectFit: 'cover',
                                flexShrink: 0
                            }}
                        />
                        <div style={{ overflow: 'hidden' }}>
                            <p className="mb-0 fw-bold small text-truncate">
                                {currentSong.title}
                            </p>
                            <p className="mb-0 text-muted small text-truncate">
                                {currentSong.artist.name}
                            </p>
                        </div>
                    </Col>

                    {/* controlli */}
                    <Col xs={6} md={4} className="text-center">
                        <button
                            className="btn btn-outline-light btn-sm mx-2"
                            onClick={() => dispatch(togglePlay())}
                        >
                            {isPlaying ? '⏸' : '▶'}
                        </button>
                        <button
                            className="btn btn-outline-danger btn-sm mx-2"
                            onClick={() => dispatch(stopSong())}
                        >
                            ⏹
                        </button>
                    </Col>

                    {/* durata */}
                    <Col md={4} className="d-none d-md-block text-end">
                        <small className="text-muted">
                            {Math.floor(currentSong.duration / 60)}:{String(currentSong.duration % 60).padStart(2, '0')}
                        </small>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Player;