import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';

import {BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideos from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

ReactDOM.render(

  <BrowserRouter>

    <Switch>

      <Route path="/" component={Home} exact/>      
      <Route path="/cadastro/video" component={CadastroVideos} />      
      <Route path="/cadastro/categoria" component={CadastroCategoria} />      
      <Route component={Home}  component={() => (<div>404</div>)} />

    </Switch>

  
  </BrowserRouter>,
  
  document.getElementById('root')
);

