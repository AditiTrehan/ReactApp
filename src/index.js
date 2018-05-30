import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Contact from'./Contact';
import Nugen from './Nugen';
import Login from './Login';
import App from './App';
import Dashboard from './Dashboard';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

const baseUrl="http://localhost:3000";

ReactDOM.render(
     
    <BrowserRouter>
 		<div>
 			<Route exact path="/" component={Login}/>
    		<Route path="/login" component={Login}/>
 			<Route path="/nugen" component={Nugen}/>
			<Route path="/dashboard" component={Dashboard}/>
 		</div>
 	</BrowserRouter>,
    //  <Nugen baseUrl={baseUrl}/>,
    // <Login/>,
     document.getElementById('root')
    );
registerServiceWorker();
