import place from './../assets/img/place.png';
import EventConfig from "../config/event.config.ts";
import {useState} from "react";
import ScrollService from "../services/Scroll.service.ts";

export default function Time(){

    const [showMap, setShowMap] = useState<boolean>(false);

    const displayMap = () => {
        setShowMap(!showMap);
        if(!showMap){
            setTimeout(() => {
                ScrollService.navigate('map_location');
            },1000);
        }
    }


    return (
        <div>
        <div id="fh5co-event" className="fh5co-bg" style={{ backgroundImage: `url(${place})` }}>
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
                                            En un lugar lejano, detrás de las montañas, cerca de las nubes,
                                            y lejos del bullicio de la ciudad, se encuentra el lugar
                                            donde celebraremos nuestra boda; donde esperamos compartir con ustedes este día tan especial
                                            y empezar nuestra nueva aventura.
                                         </p>
                                        <p>
                                            <button  onClick={displayMap} className={'btn btn-primary'}>
                                                { showMap ? 'Ocultar mapa de ubicación' : 'Ver mapa de ubicación' }
                                            </button>
                                        </p>
                                    </div>
                                </div>
                                {/*<div className="col-md-6 col-sm-6 text-center">*/}
                                {/*    <div className="event-wrap animate-box">*/}
                                {/*        <h3>Wedding Party</h3>*/}
                                {/*        <div className="event-col">*/}
                                {/*            <i className="icon-clock"></i>*/}
                                {/*            <span>7:00 PM</span>*/}
                                {/*            <span>12:00 AM</span>*/}
                                {/*        </div>*/}
                                {/*        <div className="event-col">*/}
                                {/*            <i className="icon-calendar"></i>*/}
                                {/*            <span>Monday 28</span>*/}
                                {/*            <span>November, 2016</span>*/}
                                {/*        </div>*/}
                                {/*        <p>Far far away, behind the word mountains, far from the countries*/}
                                {/*            Vokalia and Consonantia, there live the blind texts. Separated they*/}
                                {/*            live in Bookmarksgrove right at the coast of the Semantics, a large*/}
                                {/*            language ocean.</p>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            {showMap && <iframe
                id="map_location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.6934523369296!2d-83.9507258!3d9.9594427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e700205b1d59%3A0xf1f58fc01ad1ca22!2sCloud%20House!5e0!3m2!1sen!2scr!4v1790879074661!5m2!1sen!2scr"
                width="100%" height="450" style={{border:0}} allowFullScreen={true} loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"></iframe>}
        </div>

    );
}