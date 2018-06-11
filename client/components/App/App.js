import React from 'react';
import './app.css';
import Sidebar from "../Sidebar/Sidebar.js";
import Wrapper from "../Wrapper/Wrapper";
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import  reducer  from './../reducers/reducer.js'
import AlertTemplate from 'react-alert-template-basic'
import { Provider as AlertProvider } from 'react-alert'

const store = createStore(reducer)

debugger

const options = {
  position: 'bottom right',
  timeout: 3000,
  offset: '30px',
  transition: 'scale'
}

export default class App extends React.Component {
  render () {
    return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...options}>
        <BrowserRouter>
          <div>
            <Sidebar/>
            <Wrapper/>
          </div>
         </BrowserRouter>
      </AlertProvider>
     </Provider>
    );
  }
}