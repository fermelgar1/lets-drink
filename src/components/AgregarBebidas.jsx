import { useState } from 'react'
import axios from 'axios'

const bebida = {
	nombre: '',
	description: '',
	incredientes: '',
	dificultad: '',
	preparacion: ''
}

const AgregarBebidas = () => {

	const [nuevaBebida, setNuevaBebida] = useState(bebida)
	const [submited, setSubmited] = useState(false)

	const handdleSubmit = (event) => {
		event.preventDefault()
		setSubmited(true)

		if (!nuevaBebida.nombre.trim() && !nuevaBebida.description.trim() && !nuevaBebida.incredientes.trim() && !nuevaBebida.dificultad.trim() && !nuevaBebida.preparacion.trim()) {
			return
		}
		postBebidas()
	}

	const postBebidas = async () => {
		try {
			// console.log(`nuevaBebida`, nuevaBebida)
			const res = await axios.post(`http://localhost:5000/post/bebidas?
				nombre= ${nuevaBebida.nombre}&
				description= ${nuevaBebida.description}&
				incredientes= ${nuevaBebida.incredientes}&
				dificultad= ${nuevaBebida.dificultad}&
				preparacion= ${nuevaBebida.preparacion}`
			)
			console.log(`res`, res)
			setNuevaBebida(bebida)
			setSubmited(false)
		} catch (error) {
			console.log(`error`, error)
		}
	}

	return (
		<div className='flex flex-col p-20 items-center justify-center h-screen'>
			<div className='flex flex-col -mt-20'>
				<h3 className='mb-4 text-2xl'>Agregar Nueva Bebida</h3>
				<form action='submit' onSubmit={(event) => handdleSubmit(event)}>
					<div className='flex flex-row'>
						<div>
							<label className='' htmlFor='nombre'>Nombre</label>
							<br />
							<input
								value={nuevaBebida.nombre}
								onChange={(event) => setNuevaBebida({ ...nuevaBebida, nombre: event.currentTarget.value })}
								className='pl-2 border-black border border-solid rounded'
								type='text'
								name='nombre'
							/>
							<br />
							{
								submited && !nuevaBebida.nombre &&
								<div>
									<span className='text-red-500 text-xs italic'>
										Porfavor llena el campo
              		</span><br />
								</div>
							}
							<label className='' htmlFor='descripcion'>Descripcion</label>
							<br />
							<input
								value={nuevaBebida.description}
								onChange={(event) => setNuevaBebida({ ...nuevaBebida, description: event.currentTarget.value })}
								className='pl-2 border-black border border-solid rounded'
								type='text'
								name='descripcion'
							/>
							<br />
							{
								submited && !nuevaBebida.description &&
								<div>
									<span className='text-red-500 text-xs italic'>
										Porfavor llena el campo
              		</span><br />
								</div>
							}
							<label className='' htmlFor='incredientes'>Incredientes</label>
							<br />
							<textarea
								value={nuevaBebida.incredientes}
								onChange={(event) => setNuevaBebida({ ...nuevaBebida, incredientes: event.currentTarget.value })}
								className='pl-2 border-black border border-solid rounded'
								type='text'
								name='incredientes'
							/>
							<br />
							{
								submited && !nuevaBebida.incredientes &&
								<div>
									<span className='text-red-500 text-xs italic'>
										Porfavor llena el campo
              		</span><br />
								</div>
							}
							<label className='' htmlFor='dificultad'>Dificultad</label>
							<br />
							<input
								value={nuevaBebida.dificultad}
								onChange={(event) => setNuevaBebida({ ...nuevaBebida, dificultad: event.currentTarget.value })}
								className='pl-2 border-black border border-solid rounded'
								type='text'
								list='dificultades'
								name='dificultad'
							/>
							<datalist id='dificultades'>
								<option value='facil'></option>
								<option value='medio'></option>
								<option value='díficil'></option>
							</datalist>
							<br />
							{
								submited && !nuevaBebida.dificultad &&
								<div>
									<span className='text-red-500 text-xs italic'>
										Porfavor llena el campo
              		</span><br />
								</div>
							}
							<label className='' htmlFor='preparacion'>Preparacion</label><br />
							<textarea
								value={nuevaBebida.preparacion} onChange={(event) => setNuevaBebida({ ...nuevaBebida, preparacion: event.currentTarget.value })}
								className='pl-2 border-black border border-solid rounded'
								type='text'
								name='preparacion'
							/>
							{
								submited && !nuevaBebida.preparacion &&
								<div>
									<span className='text-red-500 text-xs italic'>
										Porfavor llena el campo
              		</span><br />
								</div>
							}
						</div>
					</div>
					<div className='mt-4'>
						<button className='btn' onClick={(event) => handdleSubmit(event)} >
							agregar
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default AgregarBebidas
