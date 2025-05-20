import Header from "./components/header";
import './app.scss';

import RocketIcon from "@/assets/svg/rocket-logo.svg";
import CoinsLImage from "@/assets/images/coins-left.png";
import CoinsL2Image from "@/assets/images/coins-left2.png";
import CoinsRImage from "@/assets/images/coins-right.png";
import {ReactSVG} from "react-svg";
import {Button} from "@/components/ui/button.tsx";
import SectionTitle from "./components/sectionTitle";

import DiscountIcon from "@/assets/svg/discount-badge.svg"
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
                                const element = document.getElementById('products');
                                if (element) {
                                    element.scrollIntoView({behavior: 'smooth'});
                                }
                            }}
                        >
                            Начать SPRINT
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
            <div className="container">
                <section className="products section" id="products">
                    <SectionTitle className="products__title">
                        Продукты
                    </SectionTitle>
                    <div className="products__list">
                        <div className="products__card card">
                            <h3 className="card__title">
                                SPRINT lite
                            </h3>
                            <p className="card__text">
                                доступ ко всему на неделю -
                                попробуи перед стартом
                            </p>
                            <ul className="card__list">
                                <li className="card__list-item">
                                    15 видеоматериалов
                                </li>
                                <li className="card__list-item">
                                    7 дней в закрытом клубе
                                </li>
                                <li className="card__list-item">
                                    Прямое общение с экспертом
                                </li>
                                <li className="card__list-item">
                                    1 созвон для разбора вопросов
                                </li>
                                <li className="card__list-item">
                                    1 созвон для отработки практики
                                </li>
                            </ul>
                            <div className="card__bottom">
                                <div className="card__info">
                                    <div className="card__info-param">
                                        длительность: 1 неделя
                                    </div>
                                    <div className="card__info-param">
                                        Формат: видео + закрытый клуб
                                    </div>
                                    <div className="card__info-param">
                                        оплата: сразу/рассрочка
                                    </div>
                                </div>
                                <div className="card__price price">
                                    <div className="price__old">
                                        11 970 ₽
                                    </div>
                                    <div className="price__current">
                                        8 870 ₽
                                    </div>
                                    <ReactSVG src={DiscountIcon} className="price__badge reactsvg"/>
                                </div>
                                <Button className="card__button" variant="black" size="sm"
                                        onClick={() => {
                                            const element = document.getElementById('products');
                                            if (element) {
                                                element.scrollIntoView({ behavior: 'smooth' });
                                            }
                                        }}
                                >
                                    Стартовать с Lite
                                </Button>
                            </div>
                        </div>
                        <div className="products__card card">
                            <div className="card__badge">
                                популярное
                            </div>
                            <h3 className="card__title">
                                SPRINT
                            </h3>
                            <p className="card__text">
                                полныи старт в DEX
                            </p>
                            <ul className="card__list">
                                <li className="card__list-item">
                                    15 видеоматериалов
                                </li>
                                <li className="card__list-item">
                                    Гайды и чек-листы
                                </li>
                                <li className="card__list-item">
                                    30 дней в закрытом клубе
                                </li>
                                <li className="card__list-item">
                                    4 созвона для разбора вопросов
                                </li>
                                <li className="card__list-item">
                                    4 созвона для отработки практики
                                </li>
                            </ul>
                            <div className="card__bottom">
                                <div className="card__info">
                                    <div className="card__info-param">
                                        длительность: 1 месяц
                                    </div>
                                    <div className="card__info-param">
                                        Формат: видео + закрытый клуб + лайвы
                                    </div>
                                    <div className="card__info-param">
                                        оплата: сразу/рассрочка
                                    </div>
                                </div>
                                <div className="card__price price">
                                    <div className="price__old">
                                        33 300 ₽
                                    </div>
                                    <div className="price__current">
                                        24 970 ₽
                                    </div>
                                    <ReactSVG src={DiscountIcon} className="price__badge reactsvg"/>
                                </div>
                                <Button className="card__button" variant="outlinePrimary" size="sm"
                                        onClick={() => {
                                            const element = document.getElementById('products');
                                            if (element) {
                                                element.scrollIntoView({ behavior: 'smooth' });
                                            }
                                        }}
                                >
                                    Пройти SPRINT
                                </Button>
                            </div>
                        </div>
                        <div className="products__card card">
                            <h3 className="card__title">
                                sprint one
                            </h3>
                            <p className="card__text">
                                едйныи максймум -<br/>
                                для будущйх профй
                            </p>
                            <ul className="card__list">
                                <li className="card__list-item">
                                    15 видеоматериалов
                                </li>
                                <li className="card__list-item">
                                    Гайды и чек-листы
                                </li>
                                <li className="card__list-item">
                                    60 дней в закрытом клубе
                                </li>
                                <li className="card__list-item">
                                    Прямое общение с экспертами
                                </li>
                                <li className="card__list-item">
                                    8 созвонов для разбора вопросов
                                </li>
                                <li className="card__list-item">
                                    8 созвонов для отработки практики
                                </li>
                                <li className="card__list-item">
                                    Двухдневный интенсив с экспертами
                                </li>
                                <li className="card__list-item">
                                    Разбор инструментов для глубокого ресерча
                                </li>
                            </ul>
                            <div className="card__bottom">
                                <div className="card__info">
                                    <div className="card__info-param">
                                        длительность: 2 месяца
                                    </div>
                                    <div className="card__info-param">
                                        Формат: видео + закрытый клуб + лаивы + 1 неделя
                                        сопровожденйя в отдельном чате
                                    </div>
                                    <div className="card__info-param">
                                        оплата: сразу/рассрочка
                                    </div>
                                </div>
                                <div className="card__price price">
                                    <div className="price__old">
                                        53 200 ₽
                                    </div>
                                    <div className="price__current">
                                        39 900 ₽
                                    </div>
                                    <ReactSVG src={DiscountIcon} className="price__badge reactsvg"/>
                                </div>
                                <Button className="card__button" variant="black" size="sm"
                                        onClick={() => {
                                            const element = document.getElementById('products');
                                            if (element) {
                                                element.scrollIntoView({ behavior: 'smooth' });
                                            }
                                        }}
                                >
                                    Стать PRO
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <section className="faq section" id="faq">
                <SectionTitle className="faq__title">
                    FAQ
                </SectionTitle>
                <div className="faq__list">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                какой нужен опыт для старта?
                            </AccordionTrigger>
                            <AccordionContent>
                                Ты можешь быть новичком или уже иметь опыт - мы поможем выстроить базу и усилим твои
                                скиллы на любом уровне
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                как проходйт процесс?
                            </AccordionTrigger>
                            <AccordionContent>
                                Ты получаешь доступ к видео, гайдам и практическим сессиям. Материалы доступны в любое
                                время плюс живые созвоны для отработки навыков и ответов на вопросы
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                что будет после SPRINT?
                            </AccordionTrigger>
                            <AccordionContent>
                                Ты получаешь доступ в закрытый клуб с поддержкой экспертов, где продолжаешь расти вместе
                                с
                                сильным комьюнити и имеешь доступ ко всем материалам
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                какйе способы оплаты доступны?
                            </AccordionTrigger>
                            <AccordionContent>
                                Ты можешь внести оплату сразу или разбить её на несколько частей без переплат
                                (рассрочка),
                                чтобы было удобно
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
                                У многих первые результаты появляются уже во время SPRINT. Всё зависит от вовлечённости
                                и
                                работы над собой
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                какйе навыкй я получу?
                            </AccordionTrigger>
                            <AccordionContent>
                                Ты научишься работать с DEX, анализировать токены, искать перспективные проекты,
                                управлять
                                рисками и строить личную стратегию для осознанной торговли
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                можно лй учйться с телефона?
                            </AccordionTrigger>
                            <AccordionContent>
                                Да. Все материалы и платформы полностью адаптированы под мобильные устройства
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
