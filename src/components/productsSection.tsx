import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, AnimationControls } from 'framer-motion';
import { ReactSVG } from 'react-svg';
import SectionTitle from "@/components/sectionTitle.tsx";

import './productsSection.scss';
import StepArrowIcon from "@/assets/svg/arrow-step.svg"
import { Button } from "@/components/ui/button.tsx";

const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: .6, ease: 'easeOut' } },
};

const ProductsSection: React.FC = () => {
    // Контроллеры анимации
    const mainTextControls = useAnimation();
    const stepControls: AnimationControls[] = [useAnimation(), useAnimation()];
    const lastStepControls = useAnimation();

    // Рефы для отслеживания появления в viewport
    const mainTextRef = useRef(null);
    const stepRefs = [useRef(null), useRef(null)];
    const lastStepRef = useRef(null);

    // useInView для каждого элемента
    const isMainTextInView = useInView(mainTextRef, { once: true, margin: "-100px 0px -300px 0px" });
    const isStep0InView = useInView(stepRefs[0], { once: true, margin: "-100px 0px -300px 0px" });
    const isStep1InView = useInView(stepRefs[1], { once: true, margin: "-100px 0px -300px 0px" });
    const isLastStepInView = useInView(lastStepRef, { once: true, margin: "-100px 0px -300px 0px" });

    // Запускаем анимации по мере появления элементов
    useEffect(() => {
        if (isMainTextInView) {
            mainTextControls.start("visible");
        }
    }, [isMainTextInView]);

    useEffect(() => {
        if (isStep0InView) {
            stepControls[0].start("visible");
        }
    }, [isStep0InView]);

    useEffect(() => {
        if (isStep1InView) {
            stepControls[1].start("visible");
        }
    }, [isStep1InView]);

    useEffect(() => {
        if (isLastStepInView) {
            lastStepControls.start("visible");
        }
    }, [isLastStepInView]);

    return (
        <section className="products section" id="products">
            <div className="container">
                <div className="products__wrapper">
                    <SectionTitle className="products__name">
                        Продукт
                    </SectionTitle>

                    {/* Главный текст */}
                    <motion.div
                        ref={mainTextRef}
                        className="products__text products__text--main"
                        variants={itemVariants}
                        initial="hidden"
                        animate={mainTextControls}
                    >
                        <h3>THE ONE</h3>
                        <p>
                            Это твоё пространство для роста. Единый доступ ко всему сразу “Education + Club”<br/>
                            без ограничений: видеоматериалы, живая торговля, эксперты и комьюнити -<br/>
                            всё едино и встроено прямо в Telegram
                        </p>
                        <p>
                            Наша цель и намерение - расти финансово за счёт крипторынка, развивать мышление<br/>
                            и усиливать физическое состояние
                        </p>
                        <p>
                            <span>главное тут - 1+1=11</span>
                        </p>
                    </motion.div>

                    {/* Список шагов */}
                    <div className="products__list">
                        {[0, 1].map((index) => (
                            <motion.div
                                key={index}
                                ref={stepRefs[index]}
                                className="products__text products__step"
                                variants={itemVariants}
                                initial="hidden"
                                animate={stepControls[index]}
                            >
                                <motion.div
                                    className={`products__step-arrow ${index === 1 ? 'products__step-arrow--right' : ''} reactsvg`}
                                    variants={itemVariants}
                                    initial="hidden"
                                    animate={stepControls[index]}
                                >
                                    <ReactSVG src={StepArrowIcon} />
                                </motion.div>

                                <h3>
                                    THE ONE <span>{index === 0 ? 'club' : 'education'}</span>
                                </h3>
                                <ul>
                                    {index === 0 ? (
                                        <>
                                            <p>
                                                Живая торговля и поддержка экспертов в <span>реальном времени</span>, а не просто сигнальный чат
                                            </p>
                                            <ul>
                                                <li>6 экспертов</li>
                                                <li>живые торговые сессии (Degen-time)</li>
                                                <li>среднесрочная и интрадей (сигналы) торговля + флип по SOLANA</li>
                                                <li>мощное коммьюнити</li>
                                                <li>ламповая атмосфера</li>
                                            </ul>
                                            <p>Здесь структура, рост, эксперты и трейдеры, которые идут вместе<br/> с тобой к цели</p>
                                        </>
                                    ) : (
                                        <>
                                            <p>
                                                Ты не просто смотришь видео - ты быстро строишь систему понимания рынка и сразу закрепляешь её на практике:
                                            </p>
                                            <ul>
                                                <li>15 видеоматериалов с акцентом на действия</li>
                                                <li>гайды, инструменты и чек-листы</li>
                                                <li>домашние задания</li>
                                                <li><span>еженедельные</span> Zoom-сессии с экспертами для разбора всех вопросов</li>
                                                <li>вход в клуб</li>
                                            </ul>
                                        </>
                                    )}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    {/* Последний шаг */}
                    <motion.div
                        ref={lastStepRef}
                        className="products__step products__step--last"
                        variants={itemVariants}
                        initial="hidden"
                        animate={lastStepControls}
                    >
                        <div className="products__arrows">
                            <motion.div
                                className="products__step-arrow products__arrows-item products__step-arrow--right reactsvg"
                                variants={itemVariants}
                                initial="hidden"
                                animate={lastStepControls}
                            >
                                <ReactSVG src={StepArrowIcon} />
                            </motion.div>
                            <motion.div
                                className="products__step-arrow products__arrows-item reactsvg"
                                variants={itemVariants}
                                initial="hidden"
                                animate={lastStepControls}
                            >
                                <ReactSVG src={StepArrowIcon} />
                            </motion.div>
                        </div>
                        <Button
                            className="products__button"
                            onClick={() => {
                                const element = document.getElementById('products');
                                if (element) {
                                    element.scrollIntoView({behavior: 'smooth'});
                                }
                            }}
                        >
                            Вступить в THE ONE
                        </Button>
                        <p>
                            Получи доступ ко всему сразу<br/>
                            <span>одним кликом</span>
                        </p>
                    </motion.div>

                </div>
                <div className="products__circles"></div>
            </div>
        </section>
    );
};

export default ProductsSection;