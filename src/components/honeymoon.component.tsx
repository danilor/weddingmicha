import scuba from './../assets/img/honeymoon/scuba.png';
import hike from './../assets/img/honeymoon/hike.png';
import opera from './../assets/img/honeymoon/opera.png';
import roadtrip from './../assets/img/honeymoon/roadtrip.png';
import orangutans from './../assets/img/honeymoon/orangutan.jpg';
import spa from './../assets/img/honeymoon/spa.png';
import type {HoneymoonItem} from "../types/HoneymoonItem.type.ts";
import HoneymoonSingleItem from "./honeymoon_item.component.tsx";


const HoneymoonExperiences: HoneymoonItem[] = [
    {
        title: 'Buceo en la Gran Barrera de Coral',
        description: 'Ayúdanos a explorar el vibrante mundo submarino del sistema de arrecifes de coral más grande del mundo.',
        icon: 'zi-water-transportation',
        image: scuba,
    },
    {
        title: 'Caminata al amanecer en el monte Batur',
        description: 'Una caminata guiada por un volcán activo para ver el amanecer y cocinar huevos al vapor volcánico.',
        icon: 'zi-pagoda',
        image: hike,
    },
    {
        title: 'Cena romántica junto a la Ópera de Sídney',
        description: 'Una hermosa velada disfrutando de una excelente gastronomía con vistas al emblemático puerto de Sídney.',
        icon: 'zi-water-transportation',
        image: opera,
    },
    {
        title: 'Senderismo en la selva para ver orangutanes',
        description: 'Una expedición de dos días por la selva para ver orangutanes salvajes en su hábitat natural de selva tropical.',
        icon: 'zi-auto-rickshaw',
        image: orangutans,
    },
    {
        title: 'Fondo para un viaje por carretera en furgoneta camper',
        description: 'Contribución para el alquiler de nuestra furgoneta camper mientras recorremos la impresionante Great Ocean Road.',
        icon: 'zi-bicycle-trailer',
        image: roadtrip,
    },
    {
        title: 'Día de spa Balinés tradicional',
        description: 'Un relajante masaje en pareja y un baño de flores con vistas a los frondosos valles selváticos.',
        icon: 'zi-bathrobe',
        image: spa,
    },
];

export default function Honeymoon() {
    return (
        <div id="fh5co-honeymoon">
            <div className="container">
                <div className="row" data-aos="fade-up">
                    <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                        <span>Experiencias en</span>
                        <h2>Nuestra Luna de Miel</h2>
                        <p>

                            Su presencia en nuestra boda es el mejor regalo de todos. Sin embargo, si desean honrarnos
                            con un obsequio, hemos creado una lista de experiencias para la luna de miel de nuestros
                            sueños, recorriendo
                            las selvas de Indonesia y las costas de Australia. <strong>Da clic</strong> en cada imagen para conocer más
                            sobre cada experiencia y cómo puedes contribuir a hacerlas realidad.
                            ¡Gracias por ayudarnos a crear recuerdos inolvidables!

                        </p>
                    </div>
                </div>
                <div className="row" data-aos="fade-up">
                    {HoneymoonExperiences.map((item, index) => (
                        <HoneymoonSingleItem key={index} item={item}/>
                    ))}
                </div>

            </div>
        </div>
    );
}