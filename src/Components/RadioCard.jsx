function RadioCard(props) {
    return (
        <div className="py-3">
            <div>
                <p className="mb-1" style={{ fontSize: '10px' }}>NUOVA STAZIONE RADIO</p>
                <p style={{ fontSize: '18px' }}>{props.description}</p>
            </div>
            <img
                style={{ width: '300px' }}
                className="rounded"
                src={props.image}
                alt="immagine stazione radio"
            />
        </div>
    )
}

export default RadioCard;