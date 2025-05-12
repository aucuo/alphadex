import React, { useEffect, useRef } from 'react';
import './targetSection.scss';
import SectionTitle from "@/components/sectionTitle.tsx";

const TargetSection: React.FC = () => {
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const startScrollPosition = useRef<number | null>(null);

    useEffect(() => {
        if (!wrapperRef.current || !containerRef.current) return;

        // Сохраняем начальную позицию скролла страницы
        const handleScroll = () => {
            if (!wrapperRef.current || !containerRef.current) return;

            // Получаем текущую позицию target__wrapper
            const currentRect = wrapperRef.current.getBoundingClientRect();

            // Проверяем, достиг ли элемент верхней части экрана (sticky)
            const isSticky = currentRect.top <= 60; // 60px - значение top для sticky

            if (isSticky) {
                // Если начальная позиция скролла еще не установлена, сохраняем ее
                if (startScrollPosition.current === null) {
                    startScrollPosition.current = window.scrollY;
                }

                // Вычисляем, насколько прокручена страница относительно начальной позиции
                const scrolledDistance = window.scrollY - (startScrollPosition.current || 0);

                // Преобразуем это расстояние в горизонтальное смещение
                const scrollMultiplier = 1.5; // Коэффициент преобразования
                const horizontalOffset = Math.max(0, scrolledDistance * scrollMultiplier);

                // Ограничиваем горизонтальное смещение максимальной шириной контейнера
                const maxOffset = containerRef.current.scrollWidth - window.innerWidth;
                const clampedOffset = Math.min(horizontalOffset, maxOffset);

                // Применяем transform к контейнеру
                containerRef.current.style.transform = `translateX(-${clampedOffset}px)`;
            } else {
                // Если элемент больше не sticky, сбрасываем начальную позицию скролла
                startScrollPosition.current = null;

                // Возвращаем контейнер в исходное положение
                containerRef.current.style.transform = `translateX(0px)`;
            }
        };

        // Добавляем обработчик события скролла
        window.addEventListener('scroll', handleScroll);

        // Очищаем обработчик при размонтировании компонента
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
                    <div
                        ref={containerRef}
                        className="ills__container container"
                    >
                        {/* Первый элемент */}
                        <div className="ill target__ill">
                            <div className="ill__arrow"></div>
                            <div className="ill__info">
                                <div className="ill__info-dec"></div>
                                <div className="ill__title">Новичкам</div>
                                <div className="ill__text">
                                    Если вы только начинаете свой путь - мы поможем избежать ошибок и сделать первые шаги
                                    к осознанной торговле без страха.
                                </div>
                            </div>
                        </div>

                        {/* Второй элемент */}
                        <div className="ill ill--center target__ill">
                            <div className="ill__arrow"></div>
                            <div className="ill__info ill__info--center">
                                <div className="ill__title">Опытным трейдерам</div>
                                <div className="ill__text">
                                    Торгуете на CEX, но хотите правильно подойти к DEX, систематизировать знания и
                                    прокачать стратегию? У нас вы получите только рабочие инструменты, практический опыт
                                    и профессиональную поддержку.
                                </div>
                                <div className="ill__info-dec"></div>
                            </div>
                        </div>

                        {/* Третий элемент */}
                        <div className="ill target__ill">
                            <div className="ill__arrow"></div>
                            <div className="ill__info">
                                <div className="ill__info-dec"></div>
                                <div className="ill__title">DEX-трейдерам</div>
                                <div className="ill__text">
                                    Уже в теме DEX-торговли, но хотите углубиться, начать зарабатывать и стать частью
                                    сильного комьюнити? Вы в нужном месте.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TargetSection;