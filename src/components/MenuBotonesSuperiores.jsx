import React from 'react';

function MenuBotonesSuperioes() {


    return (

        <div class="container text-center">

            <div class="row">
                <div style={{ textAlign: 'center' }} class="col-sm-1">
                    <h4>región</h4>
                </div>
                <div style={{ textAlign: 'left' }} class="col-sm-1">
                    <div class="dropdown">
                        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                            <span class=" caret"></span>
                        </button>
                        <ul class="dropdown-menu">
                            <li><a href="#">GUAJIRA</a></li>
                            <li><a href="#">BOLIVAR</a></li>
                            <li><a href="#">MAGDALENA</a></li>
                            <li><a href="#">SAN ANDRES</a></li>
                            <li><a href="#">CESAR</a></li>
                            <li><a href="#">CORDOBA</a></li>
                            <li><a href="#">SUCRE</a></li>
                        </ul>
                    </div>
                </div>
                <div style={{ textAlign: 'left' }} class="col-sm-1">
                    <button type="button" class="btn btn-default">
                        <span class="glyphicon glyphicon-search"></span> Buscar
    </button>
                </div>
                <div class="col-sm-6">
                    <h5 style={{ color: 'rgb(161, 16, 16)', lineHeight: '80%' }}><b>Portada del día
      <button type="button"> <span class="glyphicon glyphicon-circle-arrow-right"></span></button></b></h5>

                </div>
                <div class="col-sm-3">
                    <div class="row">
                        <div class="col-sm-6">
                            <div style={{ textAlign: 'right' }}>
                                <img style={{ width: '20%' }}
                                    src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/bell.png" />
                                <a href="#"><span class="badge">5</span></a>
                            </div>
                        </div>
                        <div style={{ marginBottom: '8px' }} class="col-sm-6">
                            <img style={{ width: '30%' }}
                                src="https://www.emmegi.co.uk/wp-content/uploads/2019/01/User-Icon.jpg" />
                            <button type="button" class="btn btn-danger">Ingresar</button>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ height: '1px', backgroundColor: 'rgb(161, 16, 16)' }}></div>
            <div style={{ height: '12px' }}></div>

        </div>


    );
}

export default MenuBotonesSuperioes;







