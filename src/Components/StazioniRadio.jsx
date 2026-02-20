import RadioCard from "./RadioCard";
import radioImg1 from '../assets/images/1a.png'
import radioImg2 from '../assets/images/1b.png'

function Stazioniradio() {
    return (
        <div className="radio-stations-wrapper">
            <RadioCard
                description="Rilassati, al resto ci pensiamo noi. Ascolta Apple Music Chill"
                image={radioImg1}
            />
            <RadioCard
                description="Ecco la nuova casa della musica latina"
                image={radioImg2}
            />

        </div>
    )
}

export default Stazioniradio;