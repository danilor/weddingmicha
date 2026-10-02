import attending from './../assets/img/attending.jpg';
import type {UserType} from "../types/User.type.ts";
import EventConfig from "../config/event.config.ts";


type RSVPProps = {
    User: UserType
}

export default function RSVP({User}: RSVPProps) {
    return (
        <div id="fh5co-started" className="fh5co-bg" style={{backgroundImage: `url(${attending})`}}>
            <div className="overlay"></div>
            <div className="container">
                <div className="row animate-box" data-aos="fade-up">
                    <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                        <h2>¿Nos Acompañas?</h2>
                        <p>Por favor, confirma tu asistencia.</p>
                    </div>
                </div>
                <div className="row" data-aos="fade-up">
                    <div className="display-t">
                        <div className="display-tc">
                            <div className="col-md-10 col-md-offset-1">
                                <div className="col-md-8 col-sm-8 col-md-offset-2 col-sm-offset-2 text-center">
                                    <div className="event-wrap animate-box">
                                        <h3>Invitación</h3>
                                        <div className="event-col">
                                            <i className="zi-user"></i> <i>Estimado(a)</i>
                                            <span>{User.name}</span>
                                            {/*<span>test</span>*/}
                                        </div>
                                        <div className="event-col">
                                            <i className="zi-user-plus"></i> <i>Invitados</i>

                                            <span>{User.guests.toString()}</span>

                                        </div>
                                        <p>
                                            Está cordialmente invitado(a) a nuestra boda, que se celebrará
                                            el {EventConfig.plain.text}. Le agradecemos que
                                            confirme su asistencia a través de este formulario a más tardar XX/XX/2026.
                                            Su respuesta es muy importante para nosotros.
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
    );
}