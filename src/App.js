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
  const estiloAnuncios = { lineHeight: '300%', fontSize: '10px' };
  const estiloImagenAnuncios = { width: '10%', marginLeft: '20px' };
  const estiloTituloPrincipal = { color: 'rgb(161, 16, 16)' };
  return (

    <Fragment>
      <MenuSuperior menuSuperior={
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
      } />

      <Header header={
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

      } />



      <MenuBotonesSuperiores menu={

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

      }
      />


      <TiposNoticias tipo={

        <div class="container text-center">
          <div class="row">
            <div class="col-sm-2"></div>
            <div class="col-sm-8">
              <ul class="nav nav-pills">
                <li class="active"><a href="#">LOCALES</a></li>
                <li><a href="#">NOTICIAS</a></li>
                <li><a href="#">JUDICIALES</a></li>
                <li><a href="#">DEPORTES</a></li>
                <li><a href="#">CLASIFICADOS</a></li>
                <li><a href="#">POLITICA</a></li>
              </ul>
            </div>
            <div class="col-sm-2"></div>
          </div>
        </div>


      }
      />

      <HistoriasAdicionales historias={

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
      } />

      <SeccionesNoticias noticias={

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
      } />

      <NoticiasMasVistas visitadas={

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

      } />


      <Contactanos contacto={


        <div class="container text-center">
          <div class="container" style={{ height: '1px', backgroundColor: 'rgb(161, 16, 16)' }}></div>
          <h1 class="text-center" style={{ fontFamily: 'Trebuchet MS', color: 'rgb(161, 16, 16)' }}>
            <b>El Heraldo</b>
          </h1>
          <div class="container">
            <div class="row">
              <div class="col-sm-12 text-center">
                <div class="row">
                  <div class="col-sm-4"></div>
                  <div class="col-sm-4"><br />
                    <p style={{ fontSize: '9px' }} class="text-secundary">EL HERALDO S.A. Prohibida la reproducción y utilización,
                    total o parcial, de
                    los contenidos en cualquier forma o modalidad, sin previa, expresa y escrita autorización,
                    incluyendo su mera reproducción y/o puesta a disposición con fines comerciales, directa o
              indirectamente lucrativos. 2000 - 2021 ©</p>
                  </div>
                  <div class="col-sm-4"><b>Siganos en nuestras redes sociales:</b><br />
                    <img width="80%" height="80%"
                      src="https://isanidad.com/wp-content/uploads/2019/01/Siguenos-en-las-redes-sociales.jpg" />
                  </div>
                </div>
                <p><strong>PBX:</strong> (57) (5) 3715000 <strong>Línea de atención:</strong> (57) (5) 313-3400 /
          300-910-9968 Calle 53B N° 46 - 25, Barranquilla - Atlántico Oficina
          Bogotá: Dirección Calle 88 No. 13 A 07 <strong>Teléfono:</strong> (1) 218 5733</p><br /><br />
              </div>
            </div>
          </div>




        </div>

      } />

      <Comentarios formulario={


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

      } />

      <ComentarioUsuarios comentarios={

        <div style={{ marginBottom: '50px'}} class="container text-left">

          <h3 style={{ textAlign: 'left' }}><strong>Comentarios</strong></h3>

          <div class="media">
            <div class="media-left media-top">
              <img src="https://pickaface.net/gallery/avatar/66961165_171026_2019_co0p.png" class="media-object"
                style={{ width: '80px' }} />
            </div>
            <div class="media-body">
              <h4 class="media-heading">Jhon Snow</h4>
              <p>El mejor periodico, lo leo desde que lo traducen al valirio.</p>
            </div>
          </div>

          <hr />

          <div class="media">
            <div class="media-left media-middle">
              <img
                src="https://www.kindpng.com/picc/m/49-498430_star-wars-darth-vader-icon-hd-png-download.png"
                class="media-object" style={{ width: '80px' }} />
            </div>
            <div class="media-body">
              <h4 class="media-heading">Dark Vader</h4>
              <p>Noticias de primera mano, los felicito, que la fuerza los acompañe!.</p>
            </div>
          </div>

          <hr />

          <div class="media">
            <div class="media-left media-bottom">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv5wLKZdih2dSMU68xUO1huv3HFvaVTJwoew&usqp=CAU"
                class="media-object" style={{ width: '80px' }} />
            </div>
            <div class="media-body">
              <h4 class="media-heading">Mr. President Donald</h4>
              <p>BUILD THAT WALL! BUILD THAT WALL! BUILD THAT WALL!.</p>
            </div>
          </div>

        </div>


      } />



    </Fragment>

  );
}

export default App;
