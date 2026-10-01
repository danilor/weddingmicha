import groom from './../assets/img/groom.jpg';
import bride from './../assets/img/bride.jpg';
import EventConfig from "../config/event.config.ts";

export default function People() {

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
                    <div className="couple-half">
                        <div className="groom">
                            <img src={groom} alt="groom" className="img-responsive"/>
                        </div>
                        <div className="desc-groom">
                            <h3>Michael Flores</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis facilisis dui.
                                Integer eu dapibus justo. Cras turpis nisi, ultricies vitae tincidunt non, fermentum
                                eget dui.</p>
                        </div>
                    </div>
                    <p className="heart text-center"><i className="zi-heart"></i></p>
                    <div className="couple-half">
                        <div className="bride">
                            <img src={bride} alt="bride" className="img-responsive"/>
                        </div>
                        <div className="desc-bride">
                            <h3>Agnes Barrantes</h3>
                            <p>Donec fringilla condimentum felis eget rutrum. Nulla facilisi. Sed faucibus luctus ante quis sodales. Suspendisse velit nisi, vulputate eu luctus mollis, sollicitudin at tortor.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

