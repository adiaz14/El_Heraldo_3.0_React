import React from 'react';

function ComentarioUsuarios() {


    return (

        <div style={{ marginBottom: '50px' }} class="container text-left">

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
    );
}

export default ComentarioUsuarios;
