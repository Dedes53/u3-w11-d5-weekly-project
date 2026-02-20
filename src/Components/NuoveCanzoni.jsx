import { useDispatch } from 'react-redux';
import { setCurrentSong } from '../redux/actions/playerActions';

function NuoveCanzoni({ songData }) {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setCurrentSong(songData));
    };

    return (
        <div
            onClick={handleClick}
            className="song-card"
        >
            <img
                className="rounded song-card-img"
                src={songData.album.cover_medium}
                alt={songData.title}
            />
            <p className="song-card-title">
                {songData.title}
            </p>
            <p className="song-card-artist">
                {songData.artist.name}
            </p>
        </div>
    )
}

export default NuoveCanzoni;