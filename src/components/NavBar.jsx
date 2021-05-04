import { Link } from 'react-router-dom'

const NavBar = () => {
	return (
		<div className='h-12 bg-black grid p-2 sticky top-0'>
			<Link
				className='text-white text-justify text-2xl font-sans'
				to='/'
			>
				Lets Drink
		</Link>
		</div>
	)
}

export default NavBar