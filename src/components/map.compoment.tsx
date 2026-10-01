import EventConfig from "../config/event.config.ts";

export default function Map() {
    return (

    <div id="fh5co-couple">
        <div className="container">
            <div className="row" data-aos="fade-up">
                <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                    <h2>¡Hola!</h2>
                    <h3>{EventConfig.plain.text}</h3>
                    <p>Te invitamos a celebrar nuestra boda</p>
                </div>
            </div>
            <div className="couple-wrap animate-box" data-aos="fade-up">

            </div>
        </div>
    </div>

    );
}