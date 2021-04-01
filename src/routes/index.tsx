import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Ferramentas } from '../pages/Ferramentas';
import { Clientes } from '../pages/Clientes';
import { CriarClientes } from '../pages/CriarClientes';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Ferramentas} exact />
    <Route path="/listar_clientes" component={Clientes}  />
    <Route path="/criar_cliente" component={CriarClientes}  />    
  </Switch> 
);

export {Routes};
