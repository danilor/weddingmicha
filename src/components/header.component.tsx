import {type CalendarEvent, ics} from "calendar-link";
import EventConfig from "../config/event.config.ts";
import header from '../assets/img/header.jpg';
import Counter from "./counter.component.tsx";

// https://www.npmjs.com/package/calendar-link

type HeaderPropsType = {
    isValid: boolean
}

export default function Header({isValid}: HeaderPropsType) {

    return (
        <header id="fh5co-header" className="fh5co-cover" role="banner"
                style={{backgroundImage: `url(${header})`}} data-stellar-background-ratio="0.5">
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2 text-center">
                        <div data-aos="fade-up" className="display-t">
                            <div className="display-tc animate-box" data-animate-effect="fadeIn">
                                <h1>Michael &amp; Agnes</h1>

                                {isValid && <h2>¡Nos vamos a casar!</h2>}
                                {isValid && <Counter />}
                                {isValid && <p><a href={ics(EventConfig.event as CalendarEvent)} className="btn btn-default btn-sm">Reserva
                                    el día</a></p>}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}