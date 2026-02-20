import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSongs } from '../redux/actions/musicActions';
import NuoveCanzoni from "./NuoveCanzoni";

function NuoveUscite({ query, title = 'Nuove uscite' }) {
    const dispatch = useDispatch();
    const { songs, loading, error } = useSelector((state) => state.music);

    useEffect(() => {
        dispatch(fetchSongs(query));
    }, [dispatch, query]);

    if (loading) {
        return (
            <div className="my-4">
                <h4>{title}</h4>
                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
                    <div className="spinner-border text-light" role="status">
                        <span className="visually-hidden">Caricamento...</span>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="my-4">
                <h4>{title}</h4>
                <div className="alert alert-danger" role="alert">
                    <strong>Errore:</strong> {error}
                </div>
                <button
                    className="btn btn-outline-light btn-sm"
                    onClick={() => dispatch(fetchSongs(query))}
                >
                    Riprova
                </button>
            </div>
        );
    }

    return (
        <div className="my-4">
            <h4>{title}</h4>
            <div className="songs-wrapper">
                {songs.slice(0, 10).map((song) => (
                    <NuoveCanzoni
                        key={song.id}
                        songData={song}
                    />
                ))}
            </div>
        </div>
    )
}

export default NuoveUscite;