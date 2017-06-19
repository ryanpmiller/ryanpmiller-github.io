import React, {Component} from 'react';
import {Nav, NavItem, Button} from 'react-bootstrap';
import './Navigation.css';

class Navigation extends Component {
	constructor() {
		super();

		this.state = {
			activeKey: 0
		};
	}

	render() {
		const components = ['colors', 'typography', 'forms', 'buttons'];

		return (
			<nav>
				<Nav className='side-nav' bsStyle="pills" stacked activeKey={this.state.activeKey} onSelect={this._handleSelect.bind(this)}>
					{components.map((component, index) => <NavItem ref={`navItem${index}`} eventKey={index} href={`#${component}`} title={component} key={index}>{component}</NavItem>)}
				</Nav>
				{/* TODO figure out if the code toggle is required */}
				<Button block onClick={this.props.toggleCode.bind(this)} >Toggle Code Display is <b>{this.props.toggle.toString()}</b></Button>
				<Button block href="#top" >Back to top</Button>
			</nav>
		);
	}

	_handleSelect(selectedKey) {
		const navItem = `navItem${selectedKey}`;

		window.location.href = this.refs[navItem].props.href;
		this.setState({activeKey: selectedKey});
	}
};

export default Navigation;
