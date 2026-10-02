import dress from './../assets/img/dress.png';

export default function DressCode() {

    return (
        <div id={'fh5co-dresscode'} className="fh5co-section-gray" style={{backgroundImage: `url(${dress})`}}>
            <div className="overlay"></div>
            <div className="container">
                <div className="row" data-aos="fade-up">
                    <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                        <span>Código de vestimenta</span>
                        <h2>Elegancia terrenal</h2>
                        <p>Viste colores inspirados en la naturaleza: verdes, marrones, amarillos tenues y rojos
                            intensos. No se recomiendan los tacones de aguja para caminar por el suelo del bosque.</p>
                    </div>
                </div>
                <div className="row row-bottom-padded-md" data-aos="fade-up">

                        <div className={'dresscode'}>
                            <div className={'circle_container'}>
                                <div className="circle"></div>
                                <div className="circle"></div>
                                <div className="circle"></div>
                                <div className="circle"></div>
                                <div className="circle"></div>
                                <div className="circle"></div>
                            </div>


                        </div>


                </div>
            </div>
        </div>
    );
}