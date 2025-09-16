import React, {useRef} from 'react';
import SectionTitle from "@/components/sectionTitle.tsx";
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay } from 'swiper/modules';

import ArrowNextIcon from "@/assets/svg/arrow2-right.svg";
import ArrowPrevIcon from "@/assets/svg/arrow2-left.svg";


import './reviewsSection.scss';
import {ReactSVG} from "react-svg";

const ReviewsSection: React.FC = () => {
    const imagesRecord = import.meta.glob('@/assets/images/reviews/*.png', { eager: true }) as Record<string, { default: string }>;
    const imagesArr = Object.values(imagesRecord).map(m => m.default);

    const swiperRef = useRef<SwiperType | null>(null);

    const handleTransitionEnd = () => {
        if (!swiperRef.current) return;

        // сбрасываем max-height у всех слайдов
        swiperRef.current.slides.forEach((slide) => {
            (slide as HTMLElement).style.maxHeight = ``;
        });

        const activeSlide = swiperRef.current.slides[swiperRef.current.activeIndex] as HTMLElement;
        if (!activeSlide) return;

        const img = activeSlide.querySelector('img');
        if (!img) return;

        const imgHeight = img.naturalHeight;

        activeSlide.style.maxHeight = `${imgHeight}px`;
    };

    const goNext = () => {
        swiperRef.current?.slideNext();
    };

    const goPrev = () => {
        swiperRef.current?.slidePrev();
    };

    return (
        <section className="reviews section" id="reviews">
            <div className="container">
                <SectionTitle className="reviews__title">Отзывы</SectionTitle>
            </div>

            <Swiper
                spaceBetween={0}
                slidesPerView={'auto'}
                centeredSlides={true}
                autoHeight={false}
                loop={true}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChangeTransitionEnd={handleTransitionEnd}
                autoplay={{
                    delay: 3000
                }}
                modules={[Autoplay]}
            >
                {imagesArr.map((img, i) => (
                    <SwiperSlide key={i} className="reviews__slide">
                        <img src={img} alt={`review-${i + 1}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="reviews__controls">
                <button onClick={goPrev} className="reviews__btn reviews__btn--prev">
                    <ReactSVG src={ArrowPrevIcon} />
                </button>
                <button onClick={goNext} className="reviews__btn reviews__btn--next">
                    <ReactSVG src={ArrowNextIcon} />
                </button>
            </div>
        </section>
    );
};

export default ReviewsSection;
