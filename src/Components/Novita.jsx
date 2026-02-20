import Container from 'react-bootstrap/Container';
import Stazioniradio from './StazioniRadio';
import NuoviEpisodi from './NuoviEpisodi';
import NuoveUscite from './NuoveUscite';

function Novita() {
    return (
        <Container>
            <h1 className="mt-3 b-b py-2">Novità</h1>

            <Stazioniradio />
            <NuoviEpisodi />
            <NuoveUscite />

        </Container>
    )
}

export default Novita;