function NuoveCanzoni(props) {
    return (
        <div>
            <img
                className="rounded"
                style={{ width: "150px" }}
                src={props.image}
                alt="immagine canzone"
            />
            <p>{props.title}</p>
            <p>{props.artist}</p>
        </div>
    )
}

export default NuoveCanzoni;