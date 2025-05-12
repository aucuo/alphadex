import './header.scss';
import { ReactSVG } from 'react-svg';
import {Button} from "@/components/ui/button.tsx";

import LogoIcon from "@/assets/svg/academy-logo.svg";
import TelegramIcon from "@/assets/svg/soc-telegram.svg";
import XIcon from "@/assets/svg/soc-xtwitter.svg";


const Header = () => {{
    return (
        <div className="header">
            <ReactSVG src={LogoIcon} className="header__logo reactsvg"/>
            <nav className="header__nav">
                <a href="" className="header__nav-link">
                    О нас
                </a>
                <a href="" className="header__nav-link">
                    Преимущества
                </a>
                <a href="" className="header__nav-link">
                    Кому
                </a>
                <a href="" className="header__nav-link">
                    Продукты
                </a>
                <a href="" className="header__nav-link">
                    FAQ
                </a>
            </nav>
            <div className="header__buttons">
                <Button variant="outline" size="icon" disabled>
                    RU
                </Button>
                <Button variant="outline" size="icon">
                    <ReactSVG src={TelegramIcon} className="reactsvg"/>
                </Button>
                <Button variant="outline" size="icon">
                    <ReactSVG src={XIcon} className="reactsvg"/>
                </Button>
                <Button>
                    Начать SPRINT
                </Button>
            </div>
        </div>
    );
}
}

export default Header;