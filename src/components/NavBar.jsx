import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { dataContext } from '../context/DataProvider'
import NavBebidas from './NavBebidas'
import NavJuegos from './NavJuegos'


const NavBar = () => {
	const { ruta } = useContext(dataContext)
	console.log(`ruta`, ruta)
	return (
		<div className='h-12 bg-black p-2 sticky top-0 grid grid-flow-col'>
			<p className='text-white text-justify text-2xl font-sans'>
				<Link to='/'
				>
					Lets Drink
				</Link>
			</p>
			<div className='text-white text-justify text-1xl font-sans justify-self-end'>
				{
					ruta === '/Bebidas' || ruta === '/AgregarBebidas' ?
						<NavBebidas />
						:
						null
				}
				{
					ruta === '/AgregarJugadores' &&
					<NavJuegos />
				}
			</div>
		</div>
	)
}

export default NavBar