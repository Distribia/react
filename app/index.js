import React from 'react';
import ReactDom from 'react-dom';

class MyComponent extends React.Component{
	render(){
		return(
			<h2>Hello React!</h2>
		);
	}
}

ReactDom.render(<MyComponent />,document.getElementById('main'));