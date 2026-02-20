import { useDispatch } from 'react-redux';
import { setCurrentSong } from '../redux/actions/musicActions';

function NuoveCanzoni({ songData }) {
    const dispatch = useDispatch();

    //click per player
    const handleClick = () => {
        dispatch(setCurrentSong(songData));
    };

    return (
        <div
            onClick={handleClick}
            style={{
                cursor: 'pointer',
                minWidth: '150px',
                transition: 'transform 0.3s'
            }}
            className="nuova-canzone-card"
        >
            <img
                className="rounded"
                style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover"
                }}
                src={songData.album.cover_medium}
                alt={songData.title}
            />
            <p className="mb-0 mt-2 small fw-bold text-truncate" style={{ width: '150px' }}>
                {songData.title}
            </p>
            <p className="small text-muted text-truncate mb-0" style={{ width: '150px' }}>
                {songData.artist.name}
            </p>
        </div>
    )
}

export default NuoveCanzoni;