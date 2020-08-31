import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom' 
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import NotFoundComponent from './components/NotFoundComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployee from './components/ViewEmployee';

function App() {
  return (
    <div>
      <Router>
			<HeaderComponent />
				<div className="container">
					<Switch>
						<Route exact path="/" component={ListEmployeeComponent} />
						<Route exact path="/employees" component={ListEmployeeComponent} />
						<Route exact path="/add-employee" component={CreateEmployeeComponent} />
						<Route exact path="/update-employee/:id" component={UpdateEmployeeComponent} />
						<Route exact path="/view-employee/:id" component={ViewEmployee} />
						<Route component={NotFoundComponent} />
					</Switch>
				</div>
			<FooterComponent />
      </Router>
    </div>
  );
}

export default App;
