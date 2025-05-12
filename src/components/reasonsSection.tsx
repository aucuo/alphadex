import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactSVG } from 'react-svg';

import SectionTitle from "@/components/sectionTitle.tsx";
import R1Icon from "@/assets/svg/r1.svg";
import R2Icon from "@/assets/svg/r2.svg";
import R3Icon from "@/assets/svg/r3.svg";
import R4Icon from "@/assets/svg/r4.svg";
import R5Icon from "@/assets/svg/r5.svg";

import './reasonsSection.scss';
import { Button } from "@/components/ui/button.tsx";

const ReasonsSection: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0); // Текущая карточка

    // Массив карточек
    const cards = [
        {
            title: 'Глубина',
            text: 'Вы получите не просто теорию - вы полностью погрузитесь в DEX',
            icon: R1Icon,
        },
        {
            title: 'Поддержка',
            text: 'Мы всегда на связи, готовы ответить на вопросы и поможем на каждом этапе вашего пути, обеспечивая уверенность и поддержку',
            icon: R2Icon,
        },
        {
            title: 'Практика',
            text: 'Мы передаём реальный практический опыт рыночных ситуаций, чтобы вы могли сразу применять полученные знания и не терять время на теорию',
            icon: R3Icon,
        },
        {
            title: 'Гайды',
            text: 'Вы получите доступ к подробным материалам, которые помогут вам лучше ориентироваться в мире DEX',
            icon: R4Icon,
        },
        {
            title: 'Клуб',
            text: 'Вы станете частью закрытого клуба трейдеров, в котором повысите свой скилл, получите доступ к инсайдерской информации и всегда будете в тренде нарратива',
            icon: R5Icon,
        },
    ];

    // Автоматическая смена карточек
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % cards.length); // Циклическая смена индекса
        }, 4000);

        return () => clearInterval(interval); // Очистка интервала при размонтировании
    }, [cards.length]);

    return (
        <section className="reasons section" id="reasons">
            <SectionTitle className="reasons__title">
                5 причин<br />
                выбрать нас
            </SectionTitle>

            <div className="reasons__list">
                {/* Анимированная карточка */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex} // Уникальный ключ для анимации
                        className="reasons__card card"
                        initial={{ opacity: 0, y: 50 }} // Начальное состояние
                        animate={{ opacity: 1, y: 0 }} // Конечное состояние
                        exit={{ opacity: 0, y: -50 }} // Исчезновение
                        transition={{ duration: 0.35 }} // Длительность анимации
                    >
                        <ReactSVG src={cards[currentIndex]?.icon} className="card__num reactsvg" />
                        <div className="card__shape"></div>
                        <div className="card__wrapper">
                            <h3 className="card__title">{cards[currentIndex]?.title}</h3>
                            <p className="card__text">{cards[currentIndex]?.text}</p>
                            <Button>Начать спринт</Button>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default ReasonsSection;