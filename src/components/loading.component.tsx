import rings from './../assets/img/rings.png';

export default function Loading(){
    return (
        <div className={'loading'}>
            <img src={rings} alt="Loading..." />
        </div>
    );
}