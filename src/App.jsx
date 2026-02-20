import '../style.css'

import NavComponent from './Components/NavComponent'
import Novita from './Components/Novita';
import Esplorare from './Components/Esplorare';
import Player from './Components/Player';

function App() {

  return (
    <>
      <NavComponent />
      <Novita />
      <Esplorare />

      <Player />
    </>
  )
}

export default App
