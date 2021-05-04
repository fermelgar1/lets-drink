import { Link } from 'react-router-dom'

const Inicio = () => {
	return (
		<div>
			<ul>
				<li><Link to='/bebidas'>bebidas</Link></li>
				<li><Link to='/juego'>juegos</Link></li>
			</ul>
		</div>
	)
}

export default Inicio
