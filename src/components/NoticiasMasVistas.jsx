import React from 'react';

function NoticiasMasVistas() {

    return (
        <div class="container text-center">
            <div class="container" style={{ height: '1px', backgroundColor: 'rgb(161, 16, 16)' }}></div>

            <div style={{ textAlign: 'center', marginTop: '10px' }} class="container">
                <div class="row">
                    <div style={{ textAlign: 'left' }} class="col-sm-1">
                        <ul class="pager">
                            <li><a href="#">Anterior</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-10">
                        <div class="row">
                            <div class="col-sm-4">
                                <a href="#">
                                    <img style={{ width: '100%' }}
                                        src="https://www.diariodesevilla.es/2021/02/18/sociedad/llegada-rover-Perseverance-Marte-directo_1548465159_134395452_1200x675.jpg" />
                                </a>
                            </div>
                            <div class="col-sm-4">
                                <a href="#">
                                    <img style={{ width: '100%' }}
                                        src="https://s.france24.com/media/display/3a9437fa-552b-11eb-99e9-005056bfd1d9/WEB%2012ENEVACUNACION%20LATINOAMERICA1080.jpg" />
                                </a>
                            </div>
                            <div class="col-sm-4">
                                <a href="#">
                                    <img style={{ width: '100%' }} src="https://diarioelcanal.com/wp-content/uploads/2020/12/brexit.jpg" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ textAlign: 'right' }} class="col-sm-1">
                        <ul class="pager">
                            <li><a href="#">Siguiente</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/*<!--Paneles de noticias-->*/}
            <div style={{ marginTop: '10px' }} class="container">

                <div class="panel panel-default">
                    <div class="panel-heading"><strong>Lo más visto</strong></div>
                    <div class="list-group">
                        <a href="#" class="list-group-item">Sigue el misterio de los hombres que atracaron la joyería</a>
                        <a href="#" class="list-group-item">Derriban "olla" de vicio que operaba en el corazón del barrio San José</a>
                        <a href="#" class="list-group-item">Esta será la distribución de las vacunas que llegarán la próxima semana</a>
                        <a href="#" class="list-group-item">Arrestan a siete latinos por drogas en Miami y rescatan a víctima de trata</a>
                        <a href="#" class="list-group-item">Las EPS comienzan vacunación a afiliados mayores de 80 años</a>
                    </div>

                </div>
            </div>

            {/* <!--Paginacion-->*/}
            <div style={{ textAlign: 'center' }} class="container">
                <ul class="pagination">
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">...</a></li>
                </ul>
            </div>
        </div>
    );
};
export default NoticiasMasVistas;
