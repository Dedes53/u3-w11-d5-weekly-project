function EpisodCard(props) {
    return (
        <div>
            <img
                className="rounded"
                style={{ width: "150px" }}
                src={props.image}
                alt="immagine episodio"
            />
            <p>{props.title}</p>
        </div>
    )
}

export default EpisodCard;