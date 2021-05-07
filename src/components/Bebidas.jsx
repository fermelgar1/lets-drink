import { useContext, useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router'
import { dataContext } from '../context/DataProvider'

const Bebidas = (bebidas) => {
	const [contador, setContador] = useState(0)
	const { setRuta } = useContext(dataContext)

	const match = useRouteMatch()
	useEffect(() => {
		setRuta(match.path)
	})

	const handlClick = (accion) => {
		const ultimo = bebidas.bebidas.length
		switch (accion) {
			case '+':
				if (contador < ultimo - 1) {
					setContador(contador + 1)
				}
				break
			case '-':
				if (contador > 0) {
					setContador(contador - 1)
				}
				break
			default:
				break
		}
	}

	return (
		<div className='flex flex-col items-center justify-center h-screen'>
			<div className=' -mt-20 flex-col font-bold rounded-lg border  p-10 h-3/5 w-4/5 md:w-3/5 flex items-center justify-center bg-red-800'>
				{bebidas.bebidas &&

					<p>{bebidas.bebidas[contador].nombre} <br /> {bebidas.bebidas[contador].description} <br />{bebidas.bebidas[contador].incredientes}</p>
				}
			</div>
			<div className='w-4/5 md:w-3/5'>
				{
					bebidas.bebidas &&
					contador < (bebidas.bebidas.length - 1) &&
					<button className='mr-8 float-right btn' onClick={() => handlClick('+')} >Siguiente</button>
				}
				{
					contador > 0 &&
					<button className='ml-8 float-left btn' onClick={() => handlClick('-')} >Aterior</button>
				}
			</div>
		</div>
	)
}

export default Bebidas
