import './header.scss';
import { ReactSVG } from 'react-svg';
import {Button} from "@/components/ui/button.tsx";

import LogoIcon from "@/assets/svg/academy-logo.svg";
import BurgerIcon from "@/assets/svg/burger.svg";

const Header = () => {{
    return (
        <div className="header">
            <a href="#hero">
                <ReactSVG src={LogoIcon} className="header__logo reactsvg"/>
            </a>
            <nav className="header__nav">
                <a href="#why-us" className="header__nav-link">
                    О нас
                </a>
                <a href="#reasons" className="header__nav-link">
                    Преимущества
                </a>
                <a href="#target" className="header__nav-link">
                    Кому
                </a>
                <a href="#products" className="header__nav-link">
                    Продукты
                </a>
                <a href="#faq" className="header__nav-link">
                    FAQ
                </a>
            </nav>
            <div className="header__buttons">
                <Button variant="outline" size="icon" disabled>
                    RU
                </Button>
                <Button variant="outline" size="icon">
                    ENG
                </Button>
                <Button className="header__button header__button--burger" variant="outline" size="icon">
                    <ReactSVG src={BurgerIcon} className="reactsvg"/>
                </Button>
                <Button className="header__button header__button--sprint">
                    Начать SPRINT
                </Button>
            </div>
        </div>
    );
}
}

export default Header;