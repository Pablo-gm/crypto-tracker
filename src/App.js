import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CoinTable from './pages/CoinTable';
import CoinDetails from './pages/CoinDetails';
import NotFound from './pages/NotFound';
import './App.css';



function App() {

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={CoinTable} />
          <Route path="/coin/:id"  component={CoinDetails} />
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
