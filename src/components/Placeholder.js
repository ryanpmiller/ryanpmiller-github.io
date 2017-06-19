import React, {Component} from 'react';
import Pre from './Pre';

class Colors extends Component {
	render() {
		const formClass = this.props.toggle ? 'bs-example hide-code' : 'bs-example';

		return (
			<div id={this.props.id} className='pattern-type clearfix'>
				<h1 className='pl-section'>{this._capitalize(this.props.id)}</h1>
				<div className='placeholder-content'></div>
				<div className='placeholder-content'></div>
				<form className={formClass} data-example-id=''></form>
				<Pre type='xml' code='&lt;code example="patterns" /&gt;' toggle={this.props.toggle}/>
			</div>
		);
	}

	_capitalize(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
};

export default Colors;
