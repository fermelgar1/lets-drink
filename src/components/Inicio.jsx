import { useContext, useEffect } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { dataContext } from '../context/DataProvider'

const Inicio = () => {
	const { setRuta } = useContext(dataContext)
	
	const match = useRouteMatch()
	useEffect(() => {
		setRuta(match.path)
	})
	return (
		<div>
			<ul>
				<li><Link to='/bebidas'>bebidas</Link></li>
				<li><Link to='/AgregarJugadores'>juegos</Link></li>
			</ul>
		</div>
	)
}

export default Inicio
