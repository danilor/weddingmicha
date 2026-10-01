const galleryItems = [
    {
        text: "Un par de copas",
        image: `https://picsum.photos/seed/${Math.random().toString()}/500/1000`
    },
    {
        text: "La caminata",
        image: `https://picsum.photos/seed/${Math.random().toString()}/500/1000`
    },
    {
        text: "La familia",
        image: `https://picsum.photos/seed/${Math.random().toString()}/500/1000`
    },
    {
        text: "Las sonrisas",
        image: `https://picsum.photos/seed/${Math.random().toString()}/500/1000`
    },
    {
        text: "Maniobras",
        image: `https://picsum.photos/seed/${Math.random().toString()}/500/1000`
    },
    {
        text: "Aventuras",
        image: `https://picsum.photos/seed/${Math.random().toString()}/500/1000`
    },
    {
        text: "El viaje",
        image: `https://picsum.photos/seed/${Math.random().toString()}/500/1000`
    },
    {
        text: "La pregunta",
        image: `https://picsum.photos/seed/${Math.random().toString()}/500/1000`
    },
    {
        text: "Entre más mejor",
        image: `https://picsum.photos/seed/${Math.random().toString()}/500/1000`
    },
    {
        text: "Dos caras de la misma moneda",
        image: `https://picsum.photos/seed/${Math.random().toString()}/500/1000`
    },
    {
        text: "Coincidencias",
        image: `https://picsum.photos/seed/${Math.random().toString()}/500/1000`
    },
    {
        text: "Diversión",
        image: `https://picsum.photos/seed/${Math.random().toString()}/500/1000`
    }
];


export default function Gallery() {
    return (
        <div id="fh5co-gallery" className="fh5co-section-gray">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                        <span>Memorias</span>
                        <h2>Nuestros momentos</h2>
                        <p>Aenean vehicula tortor eu nisl fringilla sodales. Praesent in elementum tellus. Etiam
                            ultrices libero libero, sed facilisis massa sollicitudin at.</p>
                    </div>
                </div>
                <div className="row row-bottom-padded-md">
                    <div className="col-md-12">
                        <ul id="fh5co-gallery-list">

                            {
                                galleryItems.map((item, index) => (
                                    <li key={`gallery-item-${index}`} className="one-third animate-box"
                                        data-animate-effect="fadeIn" data-aos="fade-in"
                                        style={{backgroundImage: `url(${item.image})`}}>
                                        <a target={'_blank'} href={item.image}>
                                            <div className="case-studies-summary">
                                                {/*<span>14 Photos</span>*/}
                                                <h2>{item.text}</h2>
                                            </div>
                                        </a>
                                    </li>
                                ))
                            }

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}