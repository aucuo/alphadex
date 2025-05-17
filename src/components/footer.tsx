import './footer.scss';
import {ReactSVG} from "react-svg";
import LogoIcon from "@/assets/svg/academy-logo.svg"
import {Button} from "@/components/ui/button.tsx";

import PepeImage from "@/assets/images/pepe.png"

const Footer = () => {{
    return (
        <div className="footer">
            <div className="footer__row">
                <div className="footer__col">
                    <a href="#hero">
                        <ReactSVG className="footer__logo reactsvg" src={LogoIcon}/>
                    </a>
                    <div className="footer__buttons">
                        <Button className="footer__button" size="sm"
                                onClick={() => {
                                    const element = document.getElementById('products');
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                        >Начать Sprint</Button>
                        <Button className="footer__button footer__button--outline" variant="outlinePrimary" size="sm"
                                onClick={() => {
                                    window.open("https://t.me/Alpha_Dex_Academy", "_blank");
                                }}
                        >
                            Поддержка
                        </Button>
                    </div>
                </div>
                <div className="footer__col footer__col--expand">
                    <nav className="footer__nav nav">
                        <div className="nav__col">
                            <div className="nav__title">
                                навигация
                            </div>
                            <a href="#why-us" className="nav__link">
                                О нас
                            </a>
                            <a href="#reasons" className="nav__link">
                                Преимущества
                            </a>
                            <a href="#target" className="nav__link">
                                Кому
                            </a>
                            <a href="#products" className="nav__link">
                                Продукты
                            </a>
                            <a href="#faq" className="nav__link">
                                FAQ
                            </a>
                        </div>
                        <div className="nav__col">
                            <div className="nav__title">
                                подпишись
                            </div>
                            <a href="https://t.me/AlphaDEX_Academy" target="_blank" className="nav__link">
                                telegram
                            </a>
                            <a href="https://youtube.com/@alpha1_academy" target="_blank" className="nav__link">
                                YOUTUBE
                            </a>
                            <a href="https://X.com/alpha1_academy" target="_blank" className="nav__link">
                                twitter (x)
                            </a>
                            <a href="https://teletype.in/@alpha_one_academy" target="_blank" className="nav__link">
                                teletype
                            </a>
                            {/*<div className="nav__link nav__link--disabled">*/}
                            {/*    debank personal*/}
                            {/*</div>*/}
                            {/*<div className="nav__link nav__link--disabled">*/}
                            {/*    debank team*/}
                            {/*</div>*/}
                        </div>
                        <div className="nav__col">
                            <div className="nav__title">
                                другое
                            </div>
                            <a href="" className="nav__link">
                                политика
                            </a>
                            <a href="" className="nav__link">
                                правила и условия
                            </a>
                        </div>
                    </nav>
                </div>
                <div className="footer__col">
                    <img className="footer__pepe" src={PepeImage} alt="Крутая пепе в шубе и в очках"/>
                </div>
            </div>
            <div className="footer__bottom">
                <p className="footer__bottom-text">
                    © Все права защищены, Alpha DEX Academy 2025
                </p>
            </div>
        </div>
    );
}
}

export default Footer;