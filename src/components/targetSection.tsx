import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './targetSection.scss';
import SectionTitle from "@/components/sectionTitle.tsx";

const TargetSection: React.FC = () => {
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const startScrollPosition = useRef<number | null>(null);

    // Анимация для выплывания элементов
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true, // Анимация запускается только один раз
        threshold: 0.1, // Уменьшите порог видимости до 10%
        rootMargin: '0px 0px -50px 0px', // Учитывайте нижнюю часть экрана
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible'); // Запускаем анимацию, когда элемент становится видимым
        }
    }, [controls, inView]);

    useEffect(() => {
        if (!wrapperRef.current || !containerRef.current) return;

        const handleScroll = () => {
            if (!wrapperRef.current || !containerRef.current) return;

            const currentRect = wrapperRef.current.getBoundingClientRect();

            const isSticky = currentRect.top <= 60;

            if (isSticky) {
                if (startScrollPosition.current === null) {
                    startScrollPosition.current = window.scrollY;
                }

                const scrolledDistance = window.scrollY - (startScrollPosition.current || 0);

                const scrollMultiplier = 1.5;
                const horizontalOffset = Math.max(0, scrolledDistance * scrollMultiplier);

                const maxOffset = containerRef.current.scrollWidth - window.innerWidth;
                const clampedOffset = Math.min(horizontalOffset, maxOffset);

                containerRef.current.style.transform = `translateX(-${clampedOffset}px)`;
            } else {
                startScrollPosition.current = null;
                containerRef.current.style.transform = `translateX(0px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Варианты анимации для стрелки с эффектом bounce
    const arrowVariants = (index: number) => ({
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring', // Используем физику пружины
                stiffness: 100, // Жесткость пружины
                damping: 10, // Затухание (меньше значение -> больше отскок)
                delay: index, // Задержка зависит от индекса
            },
        },
    });

    // Варианты анимации для текстового блока с эффектом bounce
    const infoVariants = (index: number) => ({
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring', // Используем физику пружины
                stiffness: 100, // Жесткость пружины
                damping: 10, // Затухание (меньше значение -> больше отскок)
                delay: index + 2, // Задержка зависит от индекса
            },
        },
    });

    return (
        <section className="target section" id="target">
            <div
                ref={wrapperRef}
                className="target__wrapper"
            >
                <div className="container">
                    <SectionTitle className="target__title">
                        Кому подойдет
                    </SectionTitle>
                </div>
                <div className="ills target__ills">
                    {/* Анимированный контейнер */}
                    <motion.div
                        ref={(el) => {
                            containerRef.current = el;
                            ref(el); // Передаем ссылку в useInView
                        }}
                        className="ills__container container"
                    >
                        {/* Первый элемент */}
                        <motion.div className="ill target__ill">
                            <motion.div
                                className="ill__arrow"
                                variants={arrowVariants(0)} // Индекс 0
                                initial="hidden"
                                animate={controls}
                            />
                            <motion.div
                                className="ill__info"
                                variants={infoVariants(0)} // Индекс 0
                                initial="hidden"
                                animate={controls}
                            >
                                <div className="ill__info-dec"></div>
                                <div className="ill__title">Новичкам</div>
                                <div className="ill__text">
                                    Если вы только начинаете свой путь - мы поможем избежать ошибок и сделать первые шаги
                                    к осознанной торговле без страха.
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Второй элемент */}
                        <motion.div className="ill ill--center target__ill">
                            <motion.div
                                className="ill__arrow"
                                variants={arrowVariants(1)} // Индекс 1
                                initial="hidden"
                                animate={controls}
                            />
                            <motion.div
                                className="ill__info ill__info--center"
                                variants={infoVariants(1)} // Индекс 1
                                initial="hidden"
                                animate={controls}
                            >
                                <div className="ill__title">Опытным трейдерам</div>
                                <div className="ill__text">
                                    Торгуете на CEX, но хотите правильно подойти к DEX, систематизировать знания и
                                    прокачать стратегию? У нас вы получите только рабочие инструменты, практический опыт
                                    и профессиональную поддержку.
                                </div>
                                <div className="ill__info-dec"></div>
                            </motion.div>
                        </motion.div>

                        {/* Третий элемент */}
                        <motion.div className="ill target__ill">
                            <motion.div
                                className="ill__arrow"
                                variants={arrowVariants(2)} // Индекс 2
                                initial="hidden"
                                animate={controls}
                            />
                            <motion.div
                                className="ill__info"
                                variants={infoVariants(2)} // Индекс 2
                                initial="hidden"
                                animate={controls}
                            >
                                <div className="ill__info-dec"></div>
                                <div className="ill__title">DEX-трейдерам</div>
                                <div className="ill__text">
                                    Уже в теме DEX-торговли, но хотите углубиться, начать зарабатывать и стать частью
                                    сильного комьюнити? Вы в нужном месте.
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TargetSection;