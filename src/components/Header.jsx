import React from 'react';

function Header() {
    const estiloAnuncios = { lineHeight: '300%', fontSize: '10px' };
    const estiloImagenAnuncios = { width: '10%', marginLeft: '20px' };
    const estiloTituloPrincipal = { color: 'rgb(161, 16, 16)' };

    return (

        <div>

            <button type="button" class="btn btn-info" data-toggle="collapse" data-target="#anuncios">Mostrar/quitar
  anuncios</button>
            <div id="anuncios" style={estiloAnuncios} class="container-fluid text-left bg-danger collapse">
                <b>Anuncios</b>
                <a href="#">
                    <img style={estiloImagenAnuncios}
                        src="https://tienda.elheraldo.co/1107-home_default/suscripcion-18-meses-el-heraldo.jpg" />
                </a>
            </div>
            <div class="container text-center">
                <p>Miércoles, 24 de Febrero, 2021</p>
                <h1 style={estiloTituloPrincipal}>EL HERALDO</h1>
            </div>

        </div>

    );
}

export default Header;
