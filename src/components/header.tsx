import { useState, useEffect } from 'react';
import { ReactSVG } from 'react-svg';
import { Button } from "@/components/ui/button.tsx";
import './header.scss';

import LogoIcon from "@/assets/svg/academy-logo.svg";
import BurgerIcon from "@/assets/svg/burger.svg";
import CloseIcon from "@/assets/svg/close.svg"; // Импортируем иконку крестика
import TelegramIcon from "@/assets/svg/soc-telegram.svg";
import XIcon from "@/assets/svg/soc-xtwitter.svg";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Состояние для отслеживания открытия меню

    // Функция для переключения состояния меню
    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    // Функция для закрытия меню
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Эффект для управления скроллом body
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'; // Отключаем скролл
        } else {
            document.body.style.overflow = ''; // Включаем скролл
        }

        // Очистка эффекта при размонтировании компонента
        return () => {
            document.body.style.overflow = ''; // Восстанавливаем скролл
        };
    }, [isMenuOpen]);

    return (
        <div className="header">
            {/* Логотип */}
            <a href="#hero" onClick={closeMenu}>
                <ReactSVG src={LogoIcon} className="header__logo reactsvg" />
            </a>

            {/* Навигация */}
            <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
                <a href="#why-us" className="header__nav-link" onClick={closeMenu}>
                    О нас
                </a>
                <a href="#reasons" className="header__nav-link" onClick={closeMenu}>
                    Преимущества
                </a>
                <a href="#target" className="header__nav-link" onClick={closeMenu}>
                    Кому
                </a>
                <a href="#products" className="header__nav-link" onClick={closeMenu}>
                    Продукты
                </a>
                <a href="#faq" className="header__nav-link" onClick={closeMenu}>
                    FAQ
                </a>
            </nav>

            {/* Кнопки */}
            <div className="header__buttons">
                {/*<Button className="header__button" variant="outline" size="icon">*/}
                {/*    ENG*/}
                {/*</Button>*/}

                <Button
                    className="header__button header__button--soc"
                    variant="outline"
                    size="icon"
                    onClick={() => {
                        window.open("https://t.me/AlphaDEX_Academy ", "_blank");
                    }}
                >
                    <ReactSVG src={TelegramIcon} className="reactsvg" />
                </Button>
                <Button
                    className="header__button header__button--soc"
                    variant="outline"
                    size="icon"
                    onClick={() => {
                        window.open("https://twitter.com/alpha1_academy ", "_blank");
                    }}
                >
                    <ReactSVG src={XIcon} className="reactsvg" />
                </Button>

                <Button
                    className="header__button header__button--burger"
                    variant="outline"
                    size="icon"
                    onClick={toggleMenu} // Переключение меню
                >
                    {/* Условный рендеринг иконки */}
                    <ReactSVG
                        src={isMenuOpen ? CloseIcon : BurgerIcon}
                        className="reactsvg"
                    />
                </Button>
                <Button
                    className="header__button header__button--sprint"
                    onClick={() => {
                        const element = document.getElementById('products');
                        if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                        }
                        closeMenu(); // Закрываем меню после клика
                    }}
                >
                    Начать SPRINT
                </Button>
            </div>
        </div>
    );
};

export default Header;