import React from 'react';

function MenuSuperior() {


    return (

        <div className="MenuSuperior">
                <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand text-danger" href="#">El Heraldo</a>
          </div>
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">Inicio</a></li>
            <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Servicios<span
              class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">Entregas a domicilio</a></li>
                <li><a href="#">Solicite subscripcion por correo</a></li>
                <li><a href="#">Como obtener nuestra app</a></li>
              </ul>
            </li>
            <li><a href="#">Quienes somos</a></li>
            <li><a href="#">Contactenos</a></li>
          </ul>
        </div>
        </div>
       
    );
}

export default MenuSuperior;
