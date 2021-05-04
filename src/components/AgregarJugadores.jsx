import { useState } from 'react'
import { nanoid } from 'nanoid';

const Agregarjugadores = () => {
	const [jugadores, setJugadores] = useState([])
	const [nuevoJugador, setNuevoJugador] = useState('')

	const agregarJugador = (e) => {
		e.preventDefault()
		if (!nuevoJugador.trim()) {
			return
		}
		let jugadoresPush = jugadores
		jugadoresPush.push({ nombre: nuevoJugador, id: nanoid })
		setJugadores(jugadoresPush)
		setNuevoJugador('')
	}

	const eliminarJugador = (eliminar) => {
		let jugadoresFilter = jugadores.filter((item) => item !== eliminar)
		setJugadores(jugadoresFilter)
	}


	return (
		<div className='flex items-center justify-center h-screen'>
			<div className=' -mt-20 flex-col font-bold rounded-lg border  p-10 h-3/5 w-4/5 md:w-3/5 flex items-center justify-center bg-red-800'>
				<form action='submit' onSubmit={(e) => agregarJugador(e)} className='flex flex-col'>
					<input
						type='text'
						value={nuevoJugador}
						onChange={(event) => setNuevoJugador(event.currentTarget.value)}
					/>
					<button
						className='mt-8'
						onClick={(e) => agregarJugador(e)}
					>
						Agregar
				</button>
				</form>
				<div className='mt-8 h-2/3 w-3/5 overflow-y-auto items-center justify-center'>
					<ul className='items-center justify-center'>
						{
							jugadores &&
							jugadores.map((item) =>
								<li className=' items-center justify-center text-center' key={item.id} >{item.nombre} <button className='float-right mr-5' onClick={() => eliminarJugador(item)}>x</button></li>
							)
						}
					</ul>
				</div>
				<button className='mt-8'>Lets Play</button>
			</div>
		</div>
	)
}

export default Agregarjugadores