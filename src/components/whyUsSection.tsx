import React from 'react';
import { motion } from 'framer-motion';
import { ReactSVG } from 'react-svg';
import Shape1Icon from '@/assets/svg/abstract-shape1.svg'; // Пути к вашим иконкам
import Shape2Icon from '@/assets/svg/abstract-shape2.svg';
import LinkArrowIcon from '@/assets/svg/link-arrow.svg';
import SectionTitle from "@/components/sectionTitle.tsx";

import './whyUsSection.scss';

const WhyUsSection: React.FC = () => {
    // Варианты анимации для контейнера карточек
    const containerVariants = {
        hidden: { opacity: 0 }, // Начальное состояние контейнера
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3, // Задержка перед началом анимации дочерних элементов
                staggerChildren: 0.2, // Интервал между анимациями дочерних элементов
            },
        },
    };

    // Варианты анимации для каждой карточки
    const cardVariants = {
        hidden: { opacity: 0, x: 50 }, // Начальное состояние (скрыто справа)
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'tween', // Линейная анимация
                duration: 0.8, // Длительность анимации
                ease: 'easeOut', // Плавное завершение анимации
            },
        },
    };

    return (
        <section className="why-us section" id="why-us">
            <SectionTitle className="why-us__title">
                Почему<br />
                мы
            </SectionTitle>

            <motion.div
                className="why-us__list"
                variants={containerVariants} // Применяем варианты анимации контейнера
                initial="hidden" // Начальное состояние
                whileInView="visible" // Анимация при появлении в области видимости
                viewport={{ once: true }} // Анимация срабатывает только один раз
            >
                {/* Карточки */}
                {[1, 2, 3, 4].map((index) => (
                    <motion.div
                        key={index}
                        className="why-us__card card"
                        variants={cardVariants} // Применяем варианты анимации для карточек
                    >
                        <ReactSVG
                            src={index > 2 ? Shape1Icon : Shape2Icon}
                            className="card__shape reactsvg"
                        />
                        <h3 className="card__title">
                            {index === 1 && 'Самое большое'}
                            {index === 2 && '350+'}
                            {index === 3 && '99,9%'}
                            {index === 4 && '5+'}
                        </h3>
                        <p className="card__text">
                            {index === 1 && 'Сообщество DEX-трейдеров в СНГ'}
                            {index === 2 && (
                                <>
                                    Выпущенных Хантеров{' '}
                                    <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                                        узнать подробнее
                                        <ReactSVG
                                            src={LinkArrowIcon}
                                        />
                                    </a>
                                </>
                            )}
                            {index === 3 && 'Хантеров готовы нас рекомендовать'}
                            {index === 4 && 'Лет в криптоиндустрии, 3 года из которых в DEX'}
                        </p>
                        <ReactSVG
                            src={index > 2 ? Shape1Icon : Shape2Icon}
                            className="card__shape reactsvg"
                        />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default WhyUsSection;