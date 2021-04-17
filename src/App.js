import React, { Fragment } from 'react';
import './App.css';
import MenuSuperior from './components/MenuSuperior'
import Header from './components/Header'
import MenuBotonesSuperiores from './components/MenuBotonesSuperiores'
import TiposNoticias from './components/TiposNoticias'
import HistoriasAdicionales from './components/HistoriasAdicionales'
import NoticiasMasVistas from './components/NoticiasMasVistas'
import Contactanos from './components/Contactanos'
import SeccionesNoticias from './components/SeccionesNoticias'
import Comentarios from './components/Comentarios'
import ComentarioUsuarios from './components/ComentarioUsuarios'

function App() {

  return (

    <Fragment>

      <MenuSuperior />

      <Header />

      <MenuBotonesSuperiores />

      <TiposNoticias />

      <HistoriasAdicionales />

      <SeccionesNoticias />

      <NoticiasMasVistas />

      <Contactanos />

      <Comentarios />

      <ComentarioUsuarios />

    </Fragment>

  );
}

export default App;
