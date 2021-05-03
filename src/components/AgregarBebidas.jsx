const AgregarBebidas = () => {
	// data= {
	// 	nombre,
	// 	description,
	// 	incredientes,
	// 	dificultad,
	// 	preparacion
	// }
	return (
		<div className='flex flex-col p-20 items-center justify-center h-screen'>
			<div className='flex flex-col -mt-20'>
				<h3 className='mb-4 text-2xl'>Agregar Nueva Bebida</h3>
				<form action="">
					<div className='flex flex-row'>
						<div>
							<label htmlFor="nombre">Nombre</label><br />
							<label htmlFor="descripcion">Descripcion</label><br />
							<label htmlFor="incredientes">Incredientes</label><br />
							<label htmlFor="dificultad">Dificultad</label><br />
							<label htmlFor="preparacion">Preparacion</label><br />
						</div>
						<div>
							<input className='pl-2 ml-8 border-black border border-solid rounded' type="text" name="nombre" id="" /><br />
							<input className='pl-2 ml-8 border-black border border-solid rounded' type="text" name="descripcion" id="" /><br />
							<input className='pl-2 ml-8 border-black border border-solid rounded' type="text" name="incredientes" id="" /><br />
							<input className='pl-2 ml-8 border-black border border-solid rounded' type="text" name="dificultad" id="" /><br />
							<input className='pl-2 ml-8 border-black border border-solid rounded' type="text" name="preparacion" id="" />
						</div>
					</div>
					<div className='mt-4'>
						<button className='btn'>
							agregar
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default AgregarBebidas
