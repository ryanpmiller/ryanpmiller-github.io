import React, {Component} from 'react';
import {ButtonToolbar, Button} from 'react-bootstrap';
import Pre from '../components/Pre';

class Buttons extends Component {
	render() {
		const btnStyle = ['success', 'warning', 'danger', 'info', 'default', 'primary', 'link'];
		const btnSize = ['large', 'default', 'small', 'xsmall'];
		const formClass = this.props.toggle ? 'bs-example hide-code' : 'bs-example';

		return (
			<div id='buttons' className='pattern-type'>
				<h1 className='pl-section'>Buttons</h1>
				<p>Buttons are generally added to a page using portlet preferences whose names contain the strings buttonSize, buttonStyle, and buttonLayout.</p>

				<div className='pl-subsection clearfix'>
					<h3 className='pl-heading'>Button Style</h3>
					<p>UX description goes here... Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Curabitur blandit tempus porttitor.</p>
					<form className={formClass} data-example-id='btn-style'>
						<ButtonToolbar>
							{btnStyle.map((style, index) => <Button bsStyle={style} key={index}>{style}</Button>)}
						</ButtonToolbar>
					</form>
					<Pre type='xml' code='&lt;preference name="buttonStyle" value="primary" /&gt;' toggle={this.props.toggle}/>
				</div>

				<div className='pl-subsection clearfix'>
					<h3 className='pl-heading'>Button Size</h3>
					<p>UX description goes here... Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Curabitur blandit tempus porttitor.</p>
					<form className={formClass} data-example-id='btn-size'>
						<ButtonToolbar>
							{btnSize.map((size, index) => <Button bsStyle='primary' bsSize={size !== 'default' ? size : null} key={index}>{size}</Button>)}
						</ButtonToolbar>
					</form>
					<Pre type='xml' code='&lt;preference name="buttonSize" value="xlarge" /&gt;' toggle={this.props.toggle}/>
				</div>

				<div className='pl-subsection clearfix'>
					<h3 className='pl-heading'>Button Block</h3>
					<p>UX description goes here... Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Curabitur blandit tempus porttitor.</p>
					<form className={formClass} data-example-id='btn-block'>
						<ButtonToolbar>
							<Button bsStyle='primary' block>block</Button>
						</ButtonToolbar>
					</form>
					<Pre type='xml' code='&lt;preference name="buttonLayout" value="block" /&gt;' toggle={this.props.toggle}/>
				</div>
			</div>
		);
	}
};

export default Buttons;
