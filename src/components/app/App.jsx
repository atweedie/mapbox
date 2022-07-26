import { useState } from 'react';
import '../../styles/app.css';
import Map from '../map/Map'
import { IssLocationContext } from '../../services/issLocationContext';

const App = () => {
	const [issLocationHistory, setIssLocationHistory] = useState([]);
	
	return (
		<div className="App">
			<IssLocationContext.Provider value={{issLocationHistory, setIssLocationHistory}}>
				<Map></Map>
			</IssLocationContext.Provider>
		</div>
	);
}

export default App;
