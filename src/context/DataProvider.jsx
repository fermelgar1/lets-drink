import { createContext, useState } from "react"

const dataContext = createContext()

const DataProvider = (props) => {
	const [ruta, setRuta] = useState('')
	const [jugadores, setJugadores] = useState([])
	
	return (
		<dataContext.Provider value={{ ruta, setRuta, jugadores, setJugadores, }}>
			{props.children}
		</dataContext.Provider>
	)
}

export { DataProvider, dataContext }
