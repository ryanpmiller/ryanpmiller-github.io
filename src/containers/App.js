import React, {Component} from 'react';
import {Jumbotron, Grid, Row, Col} from 'react-bootstrap';
import Colors from './Colors';
import Typography from './Typography';
import Forms from './Forms';
import Buttons from './Buttons';
import Navigation from './Navigation';
import './App.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			toggleCode: false
		};
	}

	render() {
		return (
			<div>
				<Grid>
					<Jumbotron>
						<h1>DDC Pattern Library</h1>
					</Jumbotron>
					<Row id='top'>
						<Col md={9}>
							<Colors toggle={this.state.toggleCode}/>
							<Typography toggle={this.state.toggleCode}/>
							<Forms toggle={this.state.toggleCode}/>
							<Buttons toggle={this.state.toggleCode}/>
						</Col>
						<Col md={3} className='navigation-column'>
							<Navigation toggleCode={this._toggleCode.bind(this)} toggle={this.state.toggleCode}/>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}

	_toggleCode(event) {
		event.preventDefault();
		this.setState({toggleCode: !this.state.toggleCode});
	}
};

export default App;
