import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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
    const wrapperRef = useRef<HTMLDivElement | null>(null); // Для отслеживания контейнера

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

    // Настройка scroll progress
    const { scrollYProgress } = useScroll({
        target: wrapperRef,
        offset: ["start start", "end start"], // Отслеживание скролла внутри секции
    });

    // Резкое исчезновение заголовка
    const headerOpacity = useTransform(
        scrollYProgress,
        [(cards.length - 1.5) / cards.length, (cards.length - 1.2) / cards.length], // Точка срабатывания
        [1, 0],
        { clamp: true }
    );

    return (
        <section ref={wrapperRef} className="reasons section" id="reasons">
            {/* Sticky header */}
            <motion.div
                className="reasons__header"
                style={{
                    opacity: headerOpacity, // Резкое изменение прозрачности
                }}
            >
                <div className="container">
                    <SectionTitle className="reasons__title">
                        5 причин<br />
                        выбрать нас
                    </SectionTitle>
                </div>
            </motion.div>

            {/* Список карточек */}
            <div className="reasons__list">
                {cards.map((card, index) => {
                    const isLastCard = index === cards.length - 1; // Проверка на последнюю карточку

                    const cardOpacity = useTransform(
                        scrollYProgress,
                        [index / cards.length, (index + 0.8) / cards.length], // Ускоряем анимацию
                        [1, 0],
                        { clamp: true }
                    );

                    return (
                        <motion.div
                            key={index}
                            className="reasons__card card"
                            style={{
                                opacity: isLastCard ? 1 : cardOpacity, // Последняя карточка всегда видима
                            }}
                        >
                            <ReactSVG src={card.icon} className="card__num reactsvg" />
                            <div className="card__shape"></div>
                            <div className="card__wrapper">
                                <h3 className="card__title">{card.title}</h3>
                                <p className="card__text">{card.text}</p>
                                <Button
                                    onClick={() => {
                                        window.open('https://t.me/the1club_bot?start=source_site')
                                    }}
                                >
                                    ВСТУПИТЬ В THE ONE
                                </Button>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default ReasonsSection;