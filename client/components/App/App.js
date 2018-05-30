import React from 'react';
import './app.css';
import Sidebar from "../Sidebar/Sidebar.js";
import Wrapper from "../Wrapper/Wrapper";
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

class Main extends React.Component {
	render() {
		return (
			<div>
				<Sidebar/>
				<Wrapper />
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