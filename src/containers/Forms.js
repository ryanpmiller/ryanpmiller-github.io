import React, {Component} from 'react';
import Placeholder from '../components/Placeholder'

class Forms extends Component {
	render() {
		return (
			<Placeholder id='forms' toggle={this.props.toggle} />
		);
	}
};

export default Forms;
