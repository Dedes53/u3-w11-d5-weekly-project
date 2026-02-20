function RadioCard({ image, title, artist, isExplicit = false }) {
    return (
        <div className="episodio-card">

            <div className="episodio-image-wrapper">
                <img
                    src={image || "/images/placeholder.jpg"}
                    alt={title}
                    className="episodio-image"
                />
            </div>

            <div className="episodio-info">
                <h5 className="episodio-title">
                    {isExplicit && <span className="explicit-badge">E</span>}
                    {title}
                </h5>
                <p className="episodio-artist">{artist}</p>
            </div>
        </div>
    )
}

export default RadioCard;