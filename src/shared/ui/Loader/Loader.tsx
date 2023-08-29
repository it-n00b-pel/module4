import style from './Loader.module.scss';
import preloader from '../../assets/icons/Loading.svg';

export const Loader = () => (

    <div className={style.preloader}>
        <img src={preloader} alt="preloader" />
    </div>
);
