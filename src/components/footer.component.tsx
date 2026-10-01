
const dated = new Date();
const year = dated.getFullYear();

export default function Footer(){
    return (
        <footer id="fh5co-footer" role="contentinfo">
            <div className="container">

                <div className="row copyright" data-aos="fade-up">
                    <div className="col-md-12 text-center">
                        <p>
                            <small className="block">&copy; {year} Todos los derechos reservados.</small>
                            {/*<small className="block">Designed by <a href="http://freehtml5.co/"*/}
                            {/*                                        target="_blank">FREEHTML5.co</a> Demo*/}
                            {/*    Images: <a href="http://unsplash.co/" target="_blank">Unsplash</a></small>*/}
                        </p>

                        <ul className="fh5co-social-icons">
                            <li><a href="https://www.instagram.com/thebringerofgreaterthings/" target={'_blank'}><i className="icon-instagram"></i></a></li>
                            {/*<li><a href="#"><i className="icon-facebook"></i></a></li>*/}
                            {/*<li><a href="#"><i className="icon-linkedin"></i></a></li>*/}
                            {/*<li><a href="#"><i className="icon-dribbble"></i></a></li>*/}
                        </ul>

                    </div>
                </div>

            </div>
        </footer>
    );
}