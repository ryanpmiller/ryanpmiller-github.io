import React, {Component} from 'react';
import Placeholder from '../components/Placeholder'

class Typography extends Component {
	render() {
		return (
			<Placeholder id='typography' toggle={this.props.toggle} />
		);
	}
};

export default Typography;
