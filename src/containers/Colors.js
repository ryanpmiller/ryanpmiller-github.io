import React, {Component} from 'react';
import Placeholder from '../components/Placeholder'

class Colors extends Component {
	render() {
		return (
			<Placeholder id='colors' toggle={this.props.toggle} />
		);
	}
};

export default Colors;
