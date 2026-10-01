import type {HoneymoonItem} from "../types/HoneymoonItem.type.ts";
import {useState} from "react";

type HoneymoonSingleItemProps = {
    item: HoneymoonItem
};

export default function HoneymoonSingleItem({item}: HoneymoonSingleItemProps) {

    const [detailed, setDetailed] = useState<boolean>(false);

    return (
        // <div className="row honeymoonItemSingle" data-aos="fade-up">
        //
        //
        //     {side === 'right' ? (
        //         <div className="col-md-6 animate-box">
        //             <img className={'honeymoonImage'} src={item.image as string} alt={item.title} />
        //         </div>
        //     ):null}
        //
        //     <div className="col-md-6 h-100">
        //         <div className="feature-left animate-box" data-animate-effect="fadeInLeft">
		// 				<span className="icon">
		// 					<i className={item.icon}></i>
		// 				</span>
        //             <div className="feature-copy">
        //                 <h3>{item.title}</h3>
        //                 <p>{item.description}</p>
        //             </div>
        //         </div>
        //
        //
        //
        //
        //     </div>
        //
        //     {side === 'left' ? (
        //         <div className="col-md-6 animate-box">
        //             <img className={'honeymoonImage'} src={item.image as string} alt={item.title} />
        //         </div>
        //     ):null}
        //
        //
        // </div>

        <div className={'honeymoonItemSingle col-6 col-md-4 col-sm-6 col-xs-6 '} onClick={() => setDetailed(!detailed)}>
            <img className={'honeymoonImage'} src={item.image as string} alt={item.title} />
            <div className={'text'}>
                <h4>{item.title}</h4>

            {detailed ? (
                <div>
                    <p data-aos="fade-up">{item.description}</p>
                    <button data-aos="fade-up" className={'btn btn-primary'} onClick={() => alert('Regalo')}><i className="zi-gift"></i> ¡Dar regalo!</button>
                </div>
            ):null}

            </div>

        </div>
    );
}