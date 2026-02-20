function RadioCard(props) {
    return (
        <div className="radio-card">
            <div>
                <p className="mb-1" style={{ fontSize: '10px' }}>NUOVA STAZIONE RADIO</p>
                <p style={{ fontSize: '18px' }}>{props.description}</p>
            </div>
            <img
                className="rounded radio-card-img"
                src={props.image}
                alt="immagine stazione radio"
            />
        </div>
    )
}

export default RadioCard;