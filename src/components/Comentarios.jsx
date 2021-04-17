import React from 'react';

function Comentarios() {


    return (

     
        <div style={{ marginBottom: '50px', textAlign: 'center' }} class="container text-center">
          <form>
            <div class="input-group">
              <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
              <input id="email" type="text" class="form-control" name="email" placeholder="Usuario/correo" />
            </div>
            <div class="input-group">
              <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
              <input id="password" type="password" class="form-control" name="password" placeholder="Contraseña" />
            </div>
            <br />
            <div class="input-group">
              <span class="input-group-addon">Escribanos!</span>
              <input id="msg" type="text" class="form-control" name="msg" placeholder="Dejenos su comentario!" />
            </div>
          </form>
          <button style={{ marginTop: '15px' }} type="button" class="btn btn-danger">Enviar</button>
        </div>

    );
}

export default Comentarios;
