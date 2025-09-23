import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./targetSection.scss";
import SectionTitle from "@/components/sectionTitle.tsx";

const TargetSection: React.FC = () => {
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [containerWidth, setContainerWidth] = useState(0);
    const [parentWidth, setParentWidth] = useState(0);

    // Анимация для выплывания элементов
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    useEffect(() => {
        if (containerRef.current) {
            const container = containerRef.current;
            const parent = container.parentElement;

            const resizeObserver = new ResizeObserver(() => {
                setContainerWidth(container.offsetWidth);
                if (parent) {
                    setParentWidth(parent.offsetWidth);
                }
            });

            resizeObserver.observe(container);
            if (parent) {
                resizeObserver.observe(parent);
            }

            return () => {
                resizeObserver.disconnect();
            };
        }
    }, []);

    // Scroll pin setup
    const { scrollYProgress } = useScroll({
        target: wrapperRef,
        offset: ["start start", "end end"],
    });

    const maxOffset = containerWidth - parentWidth;

    const containerX = useTransform(
        scrollYProgress,
        [0, 1],
        [0, -maxOffset],
        { clamp: true }
    );

    // Варианты анимации для стрелки с эффектом bounce
    const arrowVariants = (index: number) => ({
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.3,
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
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.3 + 0.6,
            },
        },
    });

    return (
        <section ref={wrapperRef} className="target section" id="target">
            <div className="target__wrapper container">
                <SectionTitle className="target__title">Кому подойдет</SectionTitle>

                <div className="ills target__ills">
                    {/* Анимированный контейнер */}
                    <motion.div
                        ref={(el) => {
                            containerRef.current = el;
                            ref(el);
                        }}
                        className="ills__container"
                        style={{ x: containerX }}
                    >
                        {/* Первый элемент */}
                        <motion.div className="ill target__ill">
                            <motion.div
                                className="ill__arrow"
                                variants={arrowVariants(0)}
                                initial="hidden"
                                animate={controls}
                            />
                            <motion.div
                                className="ill__info"
                                variants={infoVariants(0)}
                                initial="hidden"
                                animate={controls}
                            >
                                <div className="ill__info-dec"></div>
                                <div className="ill__title">Новичкам</div>
                                <div className="ill__text">
                                    Если вы только начинаете свой путь - мы <br/>
                                    поможем избежать ошибок и сделать первые <br/>
                                    шаги к осознанной торговле без страха
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Второй элемент */}
                        <motion.div className="ill ill--center target__ill">
                            <motion.div
                                className="ill__arrow"
                                variants={arrowVariants(1)}
                                initial="hidden"
                                animate={controls}
                            />
                            <motion.div
                                className="ill__info ill__info--center"
                                variants={infoVariants(1)}
                                initial="hidden"
                                animate={controls}
                            >
                                <div className="ill__title">Опытным трейдерам</div>
                                <div className="ill__text">
                                    Торгуете на CEX, но хотите правильно подойти к DEX, систематизировать <br/>
                                    знания и прокачать стратегию? У нас вы получите только рабочие <br/>
                                    инструменты, практический опыт и профессиональную поддержку
                                </div>
                                <div className="ill__info-dec"></div>
                            </motion.div>
                        </motion.div>

                        {/* Третий элемент */}
                        <motion.div className="ill target__ill">
                            <motion.div
                                className="ill__arrow"
                                variants={arrowVariants(2)}
                                initial="hidden"
                                animate={controls}
                            />
                            <motion.div
                                className="ill__info"
                                variants={infoVariants(2)}
                                initial="hidden"
                                animate={controls}
                            >
                                <div className="ill__info-dec"></div>
                                <div className="ill__title">DEX-трейдерам</div>
                                <div className="ill__text">
                                    Уже в теме DEX-торговли, но хотите углубиться,<br/>
                                    начать зарабатывать и стать частью сильного <br/>
                                    комьюнити? Вы в нужном месте
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