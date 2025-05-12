import { useState, useEffect } from 'react';
import { ReactSVG } from 'react-svg';
import { Button } from "@/components/ui/button.tsx";
import './header.scss';

import LogoIcon from "@/assets/svg/academy-logo.svg";
import BurgerIcon from "@/assets/svg/burger.svg";
import CloseIcon from "@/assets/svg/close.svg"; // Импортируем иконку крестика

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Состояние для отслеживания открытия меню

    // Функция для переключения состояния меню
    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
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
            <a href="#hero">
                <ReactSVG src={LogoIcon} className="header__logo reactsvg" />
            </a>

            {/* Навигация */}
            <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
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

            {/* Кнопки */}
            <div className="header__buttons">
                <Button className="header__button" variant="outline" size="icon" disabled>
                    RU
                </Button>
                <Button className="header__button" variant="outline" size="icon">
                    ENG
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
                <Button className="header__button header__button--sprint">
                    Начать SPRINT
                </Button>
            </div>
        </div>
    );
};

export default Header;