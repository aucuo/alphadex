import Header from "./components/header";
import './app.scss';
import 'swiper/swiper-bundle.css';

import RocketIcon from "@/assets/svg/rocket-logo.svg";
import CoinsLImage from "@/assets/images/coins-left.png";
import CoinsL2Image from "@/assets/images/coins-left2.png";
import CoinsRImage from "@/assets/images/coins-right.png";
import {ReactSVG} from "react-svg";
import {Button} from "@/components/ui/button.tsx";
import SectionTitle from "./components/sectionTitle";

import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion.tsx";
import QRImage from "@/assets/images/qr.jpg"
import QRRes1Image from "@/assets/images/qr-res1.png"
import QRRes2Image from "@/assets/images/qr-res2.png"
import QRRes3Image from "@/assets/images/qr-res3.png"
import QRRes4Image from "@/assets/images/qr-res4.png"

import FollowArrowIcon from "@/assets/svg/follow-arrow.svg";

import YoutubeIcon from "@/assets/svg/soc-youtube.svg";
import TelegramIcon from "@/assets/svg/soc-telegram.svg";
import XIcon from "@/assets/svg/soc-xtwitter.svg";
import ArrowRightIcon from "@/assets/svg/arrow-right.svg";
import Footer from "@/components/footer.tsx";
import TargetSection from "@/components/targetSection.tsx";
import WhyUsSection from "@/components/whyUsSection.tsx";
import ReasonsSection from "@/components/reasonsSection.tsx";
import QuestionsSection from "@/components/questionsSection.tsx";
import ReviewsSection from "@/components/reviewsSection.tsx";
import ProductsSection from "@/components/productsSection.tsx";

function App() {


    return (
        <>
            <section className="hero section" id="hero">
                <div className="container">
                    <Header/>
                    <div className="hero__wrapper">
                        <ReactSVG src={RocketIcon} className="reactsvg"/>
                        <div className="hero__text">
                            <h1>DEX IT`S EASY</h1>
                            <p>Твой путь от новичка до профи начинается здесь</p>
                        </div>
                        <Button
                            onClick={() => {
                                window.open('https://t.me/the1club_bot?start=source_site')
                            }}
                        >
                            Вступить в THE ONE
                        </Button>

                    </div>
                    <div className="hero__circles"></div>
                    <img className="hero__coin hero__coin--left" src={CoinsLImage} alt="Монеты крипта"/>
                    <img className="hero__coin hero__coin--left2" src={CoinsL2Image} alt="Монеты крипта"/>
                    <img className="hero__coin hero__coin--right" src={CoinsRImage} alt="Монеты крипта"/>
                </div>
            </section>
            <div className="container">
                <WhyUsSection/>
            </div>
            <ReasonsSection/>
            <TargetSection/>
            <ProductsSection/>
            <ReviewsSection/>
            <section className="faq section" id="faq">
                <SectionTitle className="faq__title">
                    FAQ
                </SectionTitle>
                <div className="faq__list">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                что я получаю после вступленйя?
                            </AccordionTrigger>
                            <AccordionContent>
                                <ul>
                                    <li>
                                        доступ к THE ONE Education (видеоматериалы, гайды, Zoom-созвоны каждую неделю)
                                    </li>
                                    <li>
                                        вход в THE ONE Club (торговля внутри дня (сигналы), среднесрочная торговля, эфиры, 6 экспертов рынка)
                                    </li>
                                    <li>
                                        поддержку и рост в вайбовом коммьюнити
                                    </li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                чем the one  отлйчается от курсов йлй другйх закрытых клубов?
                            </AccordionTrigger>
                            <AccordionContent>
                                THE ONE - не курс. Здесь ты не просто «смотришь видео», а сразу применяешь знания в живой торговле. Система строится на практике и участии, а не на теории
                                Практика, живая торговля и поддержка экспертов - с первого дня. Всё заточено на результат и доступно единым пакетом
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                какои нужен опыт для старта?
                            </AccordionTrigger>
                            <AccordionContent>
                                Ты можешь быть новичком или уже иметь опыт - мы поможем выстроить базу и усилим твой скилл хантера на любом уровне
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                будет лй поддержка на старте?
                            </AccordionTrigger>
                            <AccordionContent>
                                Да. Мы всегда на связи в чате и на созвонах - поможем на каждом этапе с первых шагов
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                когда я увйжу результат?
                            </AccordionTrigger>
                            <AccordionContent>
                                У многих результаты появляются уже в первые дни. Всё зависит от вовлечённости и того, насколько ты включен в процесс. Мы даём всё, чтобы рост был реальным, не “теоретическим”
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                какйе навыкй я получу?
                            </AccordionTrigger>
                            <AccordionContent>
                                Мы даем все необходимое для понимания того, как анализировать токены, искать перспективные проекты, управлять рисками и строить личную стратегию для осознанной торговли
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                удобно лй проходйть все с телефона?
                            </AccordionTrigger>
                            <AccordionContent>
                                Да. Все материалы и платформы полностью адаптированы под мобильные устройства, весь процесс взаимодействия выстроен в Telegram
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                доступ к матерйалам на одйн раз - йлй постоянный?
                            </AccordionTrigger>
                            <AccordionContent>
                                Доступ ко всем материалам сохраняется, пока ты в клубе
                                Можно пересматривать и использовать ресурсы в любое время и неограниченное количество раз
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                сколько стойт участйе?
                            </AccordionTrigger>
                            <AccordionContent>
                                Актуальную стоимость и условия вступления доступны после клика на кнопку «Вступить в THE ONE»
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>
            <QuestionsSection/>
            <section className="qr section">
                <div className="qr__container container">
                    <div className="qr__text">
                        <h2 className="qr__title">
                            Торгуй умнее -<br/>
                            зарабатывай больше
                        </h2>
                        <div className="qr__frame frame">
                            <img className="qr__image" src={QRImage} alt="QR код"/>
                            <Button size="sm"
                                    onClick={() => {
                                        window.open("https://t.me/alpha_web3_bot?start=academy", "_blank");
                                    }}
                            >
                                Торговать
                            </Button>
                        </div>
                    </div>
                    <div className="qr__list">

                        <img className="qr__res" src={QRRes1Image} alt="Наши результаты"/>
                        <img className="qr__res" src={QRRes2Image} alt="Наши результаты"/>
                        <img className="qr__res" src={QRRes3Image} alt="Наши результаты"/>
                        <img className="qr__res" src={QRRes4Image} alt="Наши результаты"/>

                        <img className="qr__res" src={QRRes1Image} alt="Наши результаты"/>
                        <img className="qr__res" src={QRRes2Image} alt="Наши результаты"/>
                        <img className="qr__res" src={QRRes3Image} alt="Наши результаты"/>
                        <img className="qr__res" src={QRRes4Image} alt="Наши результаты"/>

                        <img className="qr__res" src={QRRes1Image} alt="Наши результаты"/>
                        <img className="qr__res" src={QRRes2Image} alt="Наши результаты"/>
                        <img className="qr__res" src={QRRes3Image} alt="Наши результаты"/>
                        <img className="qr__res" src={QRRes4Image} alt="Наши результаты"/>

                    </div>
                </div>
            </section>
            <div className="container">
                <section className="follow section">
                    <SectionTitle className="follow__title">
                        follow us
                        <ReactSVG src={FollowArrowIcon} className="follow__title-arrow reactsvg"/>
                    </SectionTitle>

                    <div className="follow__text">
                        Следите за новостями, ловите инсайды и становитесь частью нашего крипто-комьюнити!
                    </div>
                    <div className="follow__soc soc">
                        <ReactSVG className="soc__icon reactsvg" src={TelegramIcon}/>
                        <div className="soc__info">
                            <h3 className="soc__title">
                                Telegram
                            </h3>
                            <p className="soc__text">
                                Прямые новости, разборы стратегий<br/>
                                и поддержка 24/7 в закрытом комьюнити
                            </p>
                        </div>
                        <Button className="soc__button" variant="outline" size="sm"
                                onClick={() => {
                                    window.open("https://t.me/AlphaDEX_Academy", "_blank");
                                }}
                        >
                            Перейти в Telegram
                            <ReactSVG className="reactsvg" src={ArrowRightIcon}/>
                        </Button>
                    </div>
                    <div className="follow__soc soc">
                        <ReactSVG className="soc__icon reactsvg" src={YoutubeIcon}/>
                        <div className="soc__info">
                            <h3 className="soc__title">
                                YouTube
                            </h3>
                            <p className="soc__text">
                                Обучающие видео, стримы и живые разборы<br/>
                                от экспертов DEX-трейдинга
                            </p>
                        </div>
                        <Button className="soc__button" variant="outline" size="sm"
                                onClick={() => {
                                    window.open("https://youtube.com/@alpha1_academy", "_blank");
                                }}
                        >
                            Смотреть на YouTube
                            <ReactSVG className="reactsvg" src={ArrowRightIcon}/>
                        </Button>
                    </div>
                    <div className="follow__soc soc">
                        <ReactSVG className="soc__icon reactsvg" src={XIcon}/>
                        <div className="soc__info">
                            <h3 className="soc__title">
                                Twitter (X)
                            </h3>
                            <p className="soc__text">
                                Молниеносные обновления, мемы и важные<br/>
                                альфа-новости в формате коротких постов
                            </p>
                        </div>
                        <Button className="soc__button" variant="outline" size="sm"
                                onClick={() => {
                                    window.open("https://X.com/alpha1_academy", "_blank");
                                }}
                        >
                            Читать в Twitter
                            <ReactSVG className="reactsvg" src={ArrowRightIcon}/>
                        </Button>
                    </div>
                    <div className="follow__soc soc">
                        <ReactSVG className="soc__icon reactsvg" src={XIcon}/>
                        <div className="soc__info">
                            <h3 className="soc__title">
                                Instagram*
                            </h3>
                            <p className="soc__text">
                                визуальные разборы, сторис с лайфхаками<br/>
                                и наглядные графики
                            </p>
                        </div>
                        <Button className="soc__button" variant="outline" size="sm"
                                onClick={() => {
                                    window.open("https://X.com/alpha1_academy", "_blank");
                                }}
                        >
                            Открыть instagram
                            <ReactSVG className="reactsvg" src={ArrowRightIcon}/>
                        </Button>
                    </div>
                    <div className="follow__warning">
                        *Признана экстремистской организацией и запрещена в РФ.
                    </div>
                    <h4 className="follow__btitle">
                        Не упустите главное - подпишитесь на нас
                    </h4>
                    <p className="follow__btext">
                        DEX - это легко, когда вы в правильном месте
                    </p>
                </section>
                <Footer/>
            </div>
        </>
    )
}

export default App
