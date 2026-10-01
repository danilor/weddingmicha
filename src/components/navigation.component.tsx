
import ScrollService from "../services/Scroll.service.ts";

export default function Navigation() {
    return (
        <nav className="fh5co-nav" role="navigation">
            <div className="container">
                <div className="row">
                    <div className="col-xs-2">
                        <div id="fh5co-logo"><a href="index.html">M&A<strong>.</strong></a></div>
                    </div>
                    <div className="col-xs-10 text-right menu-1">
                        <ul>
                            <li className="active"><a href="index.html">Inicio</a></li>
                            <li><a href="#" onClick={() => ScrollService.navigate("fh5co-event")}>Evento</a></li>
                            <li><a href="#" onClick={() => ScrollService.navigate("fh5co-gallery")}>Galería</a></li>
                            <li><a href="#" onClick={() => ScrollService.navigate("fh5co-honeymoon")}>Luna de Miel</a></li>
                            <li><a href="#" onClick={() => ScrollService.navigate("fh5co-started")}>RSVP</a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </nav>
    );
}