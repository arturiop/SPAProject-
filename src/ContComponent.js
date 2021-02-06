import React from 'react';

const StoreCont = React.createContext(null);

export const Provider = (props) => {
	return (
		<StoreCont.Provider value={props.store}>
			{props.children}
		</StoreCont.Provider>

	);
}

export default StoreCont;