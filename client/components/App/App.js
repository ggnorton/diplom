import React from 'react';
import './app.css';
import Sidebar from "../Sidebar/Sidebar.js";
import Wrapper from "../Wrapper/Wrapper";
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

class Ass extends React.Component {
	render() {
		return (
			<h1>ASSSSSS HOLE</h1>
		)
	}
}

class Main extends React.Component {
	render() {
		return (
			<div>
				<Sidebar/>
		        <Switch>
		            <Route exact path="/" component={Wrapper} />
		            <Route path="/ass" component={Ass} />
		        </Switch>
			</div>
		)
	}
}

export default class App extends React.Component {
  render () {
    return (
    <BrowserRouter>
       <Main />
     </BrowserRouter>
    );
  }
}