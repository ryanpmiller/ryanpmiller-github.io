import React, {Component} from 'react';
// import {Button} from 'react-bootstrap';

class Pre extends Component {
	// TODO figure out if we want single toggles for code, main level toggle or to always show code

	// constructor() {
	// 	super();
	//
	// 	this.state = {
	// 		toggleInstance: false
	// 	};
	// }

	render() {
		// let codeText = 'Hide Code';
		// let toggle = this.state.toggleInstance || this.props.toggle;
		let toggle = this.props.toggle;

		// if (toggle) {
		// 	codeText = 'Show Code';
		// }

		return (
			<figure className='code highlight'>
				<pre className={(toggle) ? 'hide' : ''}>
					<code className={`language-${this.props.type}`} data-lang={this.props.type}>
						{/* TODO update this.props.code to support multi-line values */}
						{this.props.code}
					</code>
				</pre>
				{/* <Button bsStyle='link' onClick={this._toggleInstance.bind(this)} >{codeText}</Button> */}
			</figure>
		);
	}

	// _toggleInstance(event) {
	// 	event.preventDefault();
	// 	this.setState({toggleInstance: !this.state.toggleInstance})
	// }
};

export default Pre;
