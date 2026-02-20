function EpisodCard(props) {
    return (
        <div className="song-card">
            <img
                className="rounded song-card-img"
                src={props.image}
                alt="immagine episodio"
            />
            <p className="song-card-title">{props.title}</p>
        </div>
    )
}

export default EpisodCard;