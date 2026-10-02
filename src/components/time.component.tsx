import place from './../assets/img/place.png';
import EventConfig from "../config/event.config.ts";
// import {useState} from "react";
// import ScrollService from "../services/Scroll.service.ts";

export default function Time() {

    // const [showMap, setShowMap] = useState<boolean>(true);

    // const displayMap = () => {
    //     setShowMap(!showMap);
    //     if (!showMap) {
    //         setTimeout(() => {
    //             ScrollService.navigate('map_location');
    //         }, 1000);
    //     }
    // }


    return (
        <div>
            <div id="fh5co-event" className="fh5co-bg" style={{backgroundImage: `url(${place})`}}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row" data-aos="fade-up">
                        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                            <span>Nuestro día especial</span>
                            <h2>La boda</h2>
                        </div>
                    </div>
                    <div className="row" data-aos="fade-up">
                        <div className="display-t">
                            <div className="display-tc">
                                <div className="col-md-10 col-md-offset-1">
                                    <div className="col-md-8 col-sm-8 col-md-offset-2 col-sm-offset-2 text-center">
                                        <div className="event-wrap animate-box">
                                            <h3>Ceremonia Principal</h3>
                                            <div className="event-col">
                                                <i className="icon-clock"></i>
                                                <span>{EventConfig.plain.start}</span>
                                                <span>{EventConfig.plain.end}</span>
                                            </div>
                                            <div className="event-col">
                                                <i className="icon-calendar"></i>
                                                <span>{EventConfig.plain.date}</span>
                                                <span>{EventConfig.plain.month}</span>
                                            </div>
                                            <p>
                                                Siempre hemos encontrado nuestra mayor paz y alegría rodeados de
                                                naturaleza. Ya fuera en nuestra primera caminata juntos o en los
                                                momentos de tranquilidad paseando por el bosque, los árboles han sido
                                                testigos de nuestra historia de amor.
                                            </p>
                                            {/*<p>*/}
                                            {/*    <button onClick={displayMap} className={'btn btn-primary'}>*/}
                                            {/*        {showMap ? 'Ocultar mapa de ubicación' : 'Ver mapa de ubicación'}*/}
                                            {/*    </button>*/}
                                            {/*</p>*/}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




                <div className={''} id="fh5co-gallery">
                    <div className="container" id={'map_location'}>
                        <div className="row" data-aos="fade-up">
                            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                                <span>Como llegar a</span>
                                <h2>Cloud House</h2>
                            </div>
                        </div>
                        <div className={'row'}>
                            <div className="col-md-12 text-center">
                                <iframe                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.6934523369296!2d-83.9507258!3d9.9594427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e700205b1d59%3A0xf1f58fc01ad1ca22!2sCloud%20House!5e0!3m2!1sen!2scr!4v1790879074661!5m2!1sen!2scr"
                                    width="100%" height="450" style={{border: 0}} allowFullScreen={true} loading="lazy"
                                    referrerPolicy="strict-origin-when-cross-origin"></iframe>
                            </div>
                        </div>

                    </div>
                </div>

        </div>

    );
}