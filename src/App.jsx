import { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import AgregarJugadores from './components/AgregarJugadores'
import Bebidas from './components/Bebidas'
import Inicio from './components/Inicio'
import AgregarBebidas from './components/AgregarBebidas'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

function App() {
  const [bebidas, setBebidas] = useState()

  useEffect(() => {
    const obtenerBebidas = async () => {
      try {
        const res = await axios.get('http://localhost:5000/get/bebidas')
        setBebidas(res.data)
      } catch (error) {
        console.log(`error`, error)
      }
    }
    obtenerBebidas()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className=''>
      <Router>
        <NavBar ruta={''} />
        <Switch>
          <Route path='/AgregarJugadores'>
            <AgregarJugadores />
          </Route>
          <Route path='/AgregarBebidas'>
            <AgregarBebidas />
          </Route>
          <Route path='/Bebidas'>
            <Bebidas bebidas={bebidas} />
          </Route>
          <Route path='/'>
            <Inicio />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App