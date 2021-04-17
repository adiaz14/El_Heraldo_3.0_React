import React from 'react';

function HistoriasAdicionales() {


    return (

        <div class="container text-center">
            <div style={{ height: '12px' }}></div>
            <div style={{ height: '1px', backgroundColor: 'rgb(161, 16, 16)' }}></div>
            <div style={{ height: '12px' }}></div>
            {/*<!--Historias adicionales-->*/}
            <div class="row ">
                <div class="col-sm-8">
                    <h5>HISTORIAS <strong>EL HERALDO</strong></h5>
                    <span class="label label-default">lo ultimo</span>
                    <span class="label label-primary">Judicial</span>
                    <span class="label label-success">Barranquilla</span>
                    <span class="label label-info">Colombia</span>
                    <span class="label label-warning">Deportes</span>
                    <span class="label label-danger">La Costa</span>
                    <div>
                        <span class="label label-info">Bogota</span>
                        <span class="label label-primary">Internacionales</span>
                        <span class="label label-danger">Farandula</span>
                        <span class="label label-warning">Entretenimiento</span>
                        <span class="label label-success">La Guajira</span>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div style={{ marginTop: '10px' }} class="jumbotron">
                        <a href="#"> <img style={{ width: '50px' }}
                            src="https://cdn4.iconfinder.com/data/icons/academic-disciplines-color/64/current-events-512.png" /></a>
                        <strong>SUBSCRITEBE</strong> a El Heraldo <br />desde <span
                            style={{ color: 'rgb(161, 16, 16)' }}><strong>$800</strong></span>
                    </div>
                </div>
            </div>
            <div style={{ height: '12px' }}></div>
            <div style={{ height: '1px', backgroundColor: 'rgb(161, 16, 16)' }}></div>
            <div style={{ height: '12px' }}></div>
        </div>

    );
}

export default HistoriasAdicionales;
