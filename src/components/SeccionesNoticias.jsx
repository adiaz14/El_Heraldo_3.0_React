import React from 'react';

function SeccionesNoticias() {

    return (
        <div class="container justify-content-center">

            {/*<!--Primera sección-->*/}
            <div class="row text-justify ">

                <div class="col-sm-8">
                    <p class="text-muted small">FUERTES BRISAS 07:33 PM</p>
                    <div class="page-header">
                        <div class=" alert alert-info">
                            <a href="#" class="alert-link">
                                Fuertes brisas causan daños en feria ubicada en el Malecón del Río
          </a>
                        </div>
                    </div>
                    <p>A través de la línea Wasapea EL HERALDO, ciudadanos reportaron varios daños que han sufrido las estructuras
                    que
                    están en el Malecón del río, debido a las fuertes brisas que azotan la costa Caribe.
                    Las casetas y varios elementos de exhibición que se encuentran en la zona, se vinieron abajo debido a las
                    intensas corrientes de aire.
        </p>
                </div>

                <div class="col-sm-4">
                    <div class="thumbnail">
                        <a
                            href="https://zonacero.com/sites/default/files/styles/1260x720/public/2021/2/24/foto_detalle/gran_malecon_brisas.jpg?itok=RtHlBE5d">
                            <img
                                src="https://zonacero.com/sites/default/files/styles/1260x720/public/2021/2/24/foto_detalle/gran_malecon_brisas.jpg?itok=RtHlBE5d" />
                            <div class="caption">
                                <p class="text-muted small">Hasta el momento se reportan cuatro personas lesionadas, quienes no revisten
              gravedad.</p>
                            </div>
                        </a>
                    </div>
                </div>

            </div>


            <hr />

            {/*<!--Segunda sección-->*/}

            <div class="row text-justify">

                <div class="col-sm-4">
                    <div class="thumbnail">
                        <a
                            href="https://zonacero.com/sites/default/files/styles/1260x720/public/2018/9/02/foto_detalle/festival_del_bollo_3_0.jpeg?itok=KHsWJPpV">
                            <img
                                src="https://zonacero.com/sites/default/files/styles/1260x720/public/2018/9/02/foto_detalle/festival_del_bollo_3_0.jpeg?itok=KHsWJPpV" />
                        </a>
                    </div>
                </div>

                <div class="col-sm-8">
                    <p class="text-muted small">FESTIVAL DEL GUANDÚ 05:53 PM</p>
                    <div class="page-header">
                        <div class="alert alert-info">
                            <a href="#">
                                <div class="alert-link">
                                    ¡Alisten las totumas! Llega el Festival del Guandú y Bollo de Yuca en Sibarco
          </div>
                            </a>
                        </div>
                    </div>
                    <p>La tradición gastronómica del Festival del Guandú y Bollo de Yuca sigue en Sibarco, un corregimiento
                    a pocos minutos de Baranoa, Atlántico, que año tras año recibe cientos de visitantes catadores en busca
      de su plato estrella: una buena ‘guandulada’ acompañada de bollo e’ yuca.</p>
                </div>
            </div>

            <hr />


            <div class="row text-justify">

                {/*<!--Tercera sección, primera mitad-->*/}
                <div class="col-md-6">
                    <p class="text-muted small">ESTATUTO DE PROTECCIÓN TEMPORAL PARA MIGRANTES 09:35 AM</p>
                    <div class="page-header">
                        <div class="alert alert-info">
                            <a href="#">
                                <div class="alert-link"> En mayo arranca primera fase de regularización de venezolanos en Colombia
            </div>
                            </a>
                        </div>
                    </div>
                    <p>Migración Colombia estima que para finales de este 2021, al menos, 800 mil migrantes queden registrados y
                    se
                    hayan acogido
                    al Estatuto Temporal de Protección, mecanismo que recientemente lanzó el Gobierno nacional y que busca
                    regularizar a más de
        1.7 millones de venezolanos que en la actualidad hacen vida en el país.</p>
                    <div class="thumbnail">
                        <a
                            href="http://www.eje21.com.co/site/wp-content/uploads/2020/04/corredor-humanitario-para-enviar-venezolanos-de-pereira-a-cucuta.jpg">
                            <img
                                src="http://www.eje21.com.co/site/wp-content/uploads/2020/04/corredor-humanitario-para-enviar-venezolanos-de-pereira-a-cucuta.jpg" />
                            <div class="caption">
                                <p class="text-muted small">HEl director de Migración Colombia, indicó que esperan cerrar este año con
                                800
                                mil venezolanos beneficiados
              con el mecanismo de protección..</p>
                            </div>
                        </a>
                    </div>
                </div>
                {/*<!--Tercera sección, segunda mitad-->*/}
                <div class="col-md-6">

                    <p class="text-muted small">MINTRANSPORTE 01:56 PM</p>
                    <div class="page-header">
                        <div class="alert alert-info">
                            <a href="#">
                                <div class="alert-link">
                                    Obras en el aeropuerto Ernesto Cortissoz tienen un 96% de avance
            </div>
                            </a>
                        </div>
                    </div>
                    <p>El Ernesto Cortissoz estará en condiciones para la Asamblea del BID, así lo aseguró el Ministerio de
                    Transporte y la Agencia Nacional de
        Infraestructura "("ANI")" durante un comité de obras en las instalaciones del aeropuerto.</p><br />
                    <div class="thumbnail">
                        <a href="https://corrupcionaldia.com/wp-content/uploads/2019/12/EK0t7XOXkAE-OVx.jpg">
                            <img src="https://corrupcionaldia.com/wp-content/uploads/2019/12/EK0t7XOXkAE-OVx.jpg" />
                            <div class="caption">
                                <p class="text-muted small">Así lo dio a conocer este miércoles la ministra de Transporte, Ángela
                                María
                                Orozco,
              en su visita a Barranquilla..</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SeccionesNoticias;
