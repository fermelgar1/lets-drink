import { Link } from 'react-router-dom'

const NavBebidas = () => {
	return (
		<div>
			<Link to='/Bebidas' >Inicio</Link>
			<span className='mx-5' />
			<Link to='/agregarBebidas' >Agregar Bebidas</Link>
		</div>
	)
}

export default NavBebidas
