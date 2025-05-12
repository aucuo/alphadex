import Header from "./components/header";
import './app.scss';

import RocketIcon from "@/assets/svg/rocket-logo.svg";
import CirclesIcon from "@/assets/svg/hero-circles.svg";
import CoinsLImage from "@/assets/images/coins-left.png";
import CoinsRImage from "@/assets/images/coins-right.png";
import {ReactSVG} from "react-svg";
import {Button} from "@/components/ui/button.tsx";
import SectionTitle from "./components/sectionTitle";

import Shape1Icon from "@/assets/svg/abstract-shape1.svg"
import Shape2Icon from "@/assets/svg/abstract-shape2.svg"
import R1Icon from "@/assets/svg/r1.svg"
import R2Icon from "@/assets/svg/r2.svg"
import R3Icon from "@/assets/svg/r3.svg"
import R4Icon from "@/assets/svg/r4.svg"
import R5Icon from "@/assets/svg/r5.svg"
import DiscountIcon from "@/assets/svg/discount-badge.svg"
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion.tsx";
import {Input} from "@/components/ui/input.tsx";

import SonicImage from "@/assets/images/sonic.png"
import HaticoImage from "@/assets/images/hatico.png"
import QRImage from "@/assets/images/qr.jpg"
import QRRes1Image from "@/assets/images/qr-res1.png"
import QRRes2Image from "@/assets/images/qr-res2.png"
import QRRes3Image from "@/assets/images/qr-res3.png"
import QRRes4Image from "@/assets/images/qr-res4.png"

import FollowArrowIcon from "@/assets/svg/follow-arrow.svg";

import YoutubeIcon from "@/assets/svg/soc-youtube.svg";
import TelegramIcon from "@/assets/svg/soc-telegram.svg";
import ArrowRightIcon from "@/assets/svg/arrow-right.svg";
import Footer from "@/components/footer.tsx";

function App() {
  return (
      <>
          <div className="container">
              <section className="hero section">
                  <Header/>
                  <div className="hero__wrapper">
                      <ReactSVG src={RocketIcon} className="reactsvg"/>
                      <div className="hero__text">
                          <h1>DEX IT`S EASY</h1>
                          <p>Твой путь от новичка до профи начинается здесь</p>
                      </div>
                      <Button>Начать SPRINT</Button>
                  </div>
                  <ReactSVG src={CirclesIcon} className="hero__circles reactsvg"/>
                  <img className="hero__coin hero__coin--left" src={CoinsLImage} alt="Монеты крипта"/>
                  <img className="hero__coin hero__coin--right" src={CoinsRImage} alt="Монеты крипта"/>
              </section>
              <section className="why-us section">
                  <SectionTitle className="why-us__title">
                      Почему<br/>
                      мы
                  </SectionTitle>

                  <div className="why-us__list">
                      <div className="why-us__card card">
                          <ReactSVG src={Shape2Icon} className="card__shape reactsvg"/>
                          <h3 className="card__title">
                              Самое большое
                          </h3>
                          <p className="card__text">
                              Сообщество DEX-трейдеров
                              в СНГ
                          </p>
                          <ReactSVG src={Shape2Icon} className="card__shape reactsvg"/>
                      </div>
                      <div className="why-us__card card">
                          <ReactSVG src={Shape2Icon} className="card__shape reactsvg"/>
                          <h3 className="card__title">
                              350+
                          </h3>
                          <p className="card__text">
                              Прошли SPRINT
                          </p>
                          <ReactSVG src={Shape2Icon} className="card__shape reactsvg"/>
                      </div>
                      <div className="why-us__card card">
                          <ReactSVG src={Shape1Icon} className="card__shape reactsvg"/>
                          <h3 className="card__title">
                              99,9%
                          </h3>
                          <p className="card__text">
                              Спринтеров готовы нас рекомендовать
                          </p>
                          <ReactSVG src={Shape1Icon} className="card__shape reactsvg"/>
                      </div>
                      <div className="why-us__card card">
                          <ReactSVG src={Shape1Icon} className="card__shape reactsvg"/>
                          <h3 className="card__title">
                              5+
                          </h3>
                          <p className="card__text">
                              Лет в криптоиндустрии, 3 года из которых в DEX
                          </p>
                          <ReactSVG src={Shape1Icon} className="card__shape reactsvg"/>
                      </div>
                  </div>
              </section>
          </div>
          <section className="reasons section">
              <SectionTitle className="reasons__title">
                  5 причин<br/>
                  выбрать нас
              </SectionTitle>
              <div className="reasons__list">
                  <div className="reasons__card card">
                      <ReactSVG src={R1Icon} className="card__num reactsvg"/>
                      <div className="card__shape"></div>
                      <div className="card__wrapper">
                          <h3 className="card__title">
                              Глубина
                          </h3>
                          <p className="card__text">
                              Вы получите не просто теорию - вы полностью
                              погрузитесь в DEX
                          </p>
                          <Button>Начать спринт</Button>
                      </div>
                  </div>
                  <div className="reasons__card card">
                      <ReactSVG src={R2Icon} className="card__num reactsvg"/>
                      <div className="card__shape"></div>
                      <div className="card__wrapper">
                          <h3 className="card__title">
                              поддержка
                          </h3>
                          <p className="card__text">
                              Мы всегда на связи, готовы ответить на вопросы
                              и поможем на каждом этапе вашего пути,
                              обеспечивая уверенность и поддержку
                          </p>
                          <Button>Начать спринт</Button>
                      </div>
                  </div>
                  <div className="reasons__card card">
                      <ReactSVG src={R3Icon} className="card__num reactsvg"/>
                      <div className="card__shape"></div>
                      <div className="card__wrapper">
                          <h3 className="card__title">
                              практика
                          </h3>
                          <p className="card__text">
                              Мы передаём реальный практический опыт рыночных ситуаций,
                              чтобы вы могли сразу применять полученные знания
                              и не терять время на теорию
                          </p>
                          <Button>Начать спринт</Button>
                      </div>
                  </div>
                  <div className="reasons__card card">
                      <ReactSVG src={R4Icon} className="card__num reactsvg"/>
                      <div className="card__shape"></div>
                      <div className="card__wrapper">
                          <h3 className="card__title">
                              гайды
                          </h3>
                          <p className="card__text">
                              Вы получите доступ к подробным материалам,
                              которые помогут вам лучше ориентироваться в мире DEX
                          </p>
                          <Button>Начать спринт</Button>
                      </div>
                  </div>
                  <div className="reasons__card card">
                      <ReactSVG src={R5Icon} className="card__num reactsvg"/>
                      <div className="card__shape"></div>
                      <div className="card__wrapper">
                          <h3 className="card__title">
                              клуб
                          </h3>
                          <p className="card__text">
                              Вы станете частью закрытого клуба трейдеров, в котором повысите свой скилл, получите
                              доступ к
                              инсайдерской информации и всегда будете в тренде нарратива
                          </p>
                          <Button>Начать спринт</Button>
                      </div>
                  </div>
              </div>
          </section>
          <section className="target section">
              <div className="container">
                  <SectionTitle className="target__title">
                      Кому подойдет
                  </SectionTitle>
              </div>
              <div className="ills target__ills">
                  <div className="ills__container container">
                      <div className="ill target__ill">
                          <div className="ill__arrow"></div>
                          <div className="ill__info">
                              <div className="ill__info-dec"></div>
                              <div className="ill__title">
                                  Новичкам
                              </div>
                              <div className="ill__text">
                                  Если вы только начинаете свой путь - мы поможем избежать ошибок и сделать первые шаги
                                  к осознанной торговле без страха
                              </div>
                          </div>
                      </div>
                      <div className="ill ill--center target__ill">
                          <div className="ill__arrow"></div>
                          <div className="ill__info ill__info--center">
                              <div className="ill__title">
                                  Опытным трейдерам
                              </div>
                              <div className="ill__text">
                                  Торгуете на CEX, но хотите правильно подойти к DEX, систематизировать знания и прокачать стратегию? У нас вы получите только рабочие инструменты, практический опыт и профессиональную поддержку
                              </div>
                              <div className="ill__info-dec"></div>
                          </div>
                      </div>
                      <div className="ill target__ill">
                          <div className="ill__arrow"></div>
                          <div className="ill__info">
                              <div className="ill__info-dec"></div>
                              <div className="ill__title">
                                  DEX-трейдерам
                              </div>
                              <div className="ill__text">
                                  Уже в теме DEX-торговли, но хотите углубиться,
                                  начать зарабатывать и стать частью сильного комьюнити? Вы в нужном месте
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <div className="container">
              <section className="products section">
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
                              <Button className="card__button" variant="black" size="sm">
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
                              Полныи старт в DEX
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
                                      Формат: вйдео + закрытый клуб + лайвы
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
                              <Button className="card__button" variant="outlinePrimary" size="sm">
                                  Пройти SPRINT
                              </Button>
                          </div>
                      </div>
                      <div className="products__card card">
                          <h3 className="card__title">
                              sprint one
                          </h3>
                          <p className="card__text">
                              едйныи максимум -
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
                                      Формат: вйдео + закрытый клуб + лаивы + 1 неделя
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
                              <Button className="card__button" variant="black" size="sm">
                                  Стать PRO
                              </Button>
                          </div>
                      </div>
                  </div>
              </section>
          </div>
          <section className="faq section">
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
                              Что будет после SPRINT?
                          </AccordionTrigger>
                          <AccordionContent>
                              Ты получаешь доступ в закрытый клуб с поддержкой экспертов, где продолжаешь расти вместе с
                              сильным комьюнити и имеешь доступ ко всем материалам
                          </AccordionContent>
                      </AccordionItem>
                  </Accordion>
                  <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                          <AccordionTrigger>
                              Какйе способы оплаты доступны?
                          </AccordionTrigger>
                          <AccordionContent>
                              Ты можешь внести оплату сразу или разбить её на несколько частей без переплат (рассрочка),
                              чтобы было удобно
                          </AccordionContent>
                      </AccordionItem>
                  </Accordion>
                  <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                          <AccordionTrigger>
                              Будет лй поддержка на старте?
                          </AccordionTrigger>
                          <AccordionContent>
                              Да. Мы всегда на связи в чате и на созвонах - поможем на каждом этапе с первых шагов
                          </AccordionContent>
                      </AccordionItem>
                  </Accordion>
                  <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                          <AccordionTrigger>
                              Когда я увйжу результат?
                          </AccordionTrigger>
                          <AccordionContent>
                              У многих первые результаты появляются уже во время SPRINT. Всё зависит от вовлечённости и
                              работы над собой
                          </AccordionContent>
                      </AccordionItem>
                  </Accordion>
                  <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                          <AccordionTrigger>
                              Какйе навыкй я получу?
                          </AccordionTrigger>
                          <AccordionContent>
                              Ты научишься работать с DEX, анализировать токены, искать перспективные проекты, управлять
                              рисками и строить личную стратегию для осознанной торговли
                          </AccordionContent>
                      </AccordionItem>
                  </Accordion>
                  <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                          <AccordionTrigger>
                              Можно лй учйться с телефона?
                          </AccordionTrigger>
                          <AccordionContent>
                              Да. Все материалы и платформы полностью адаптированы под мобильные устройства
                          </AccordionContent>
                      </AccordionItem>
                  </Accordion>
              </div>
          </section>
          <div className="container">
              <section className="questions section">
                  <SectionTitle className="questions__title">
                      Остались<br/>
                      вопросы?
                  </SectionTitle>
                  <img className="questions__hero questions__hero--sonic" src={SonicImage} alt="Соник читает книжку"/>
                  <img className="questions__hero questions__hero--hatico" src={HaticoImage}
                       alt="Хатико в шлеме викинга читает книгу"/>
                  <div className="questions">
                      <div className="questions__middle middle">
                          <p className="middle__text">
                              Сомневаетесь или хотите узнать больше - оставьте заявку ниже, и мы свяжемся с вами, чтобы
                              ответить на все ваши вопросы и помочь выбрать подходящий SPRINT
                          </p>
                          <h4 className="middle__title">
                              Заполните форму ниже
                          </h4>
                          <Input className="middle__input" placeholder="Ваше имя (обязательно)" type="text"
                                 maxLength={20} minLength={2} required/>
                          <Input className="middle__input" placeholder="Ваш telegram (обязательно)" type="text"
                                 maxLength={20} minLength={2} required/>
                          <Input className="middle__input" placeholder="Ваш e-mail (обязательно)" type="text"
                                 maxLength={20} minLength={2} required/>
                          <Button size="sm">Оставить заявку</Button>
                      </div>
                  </div>
              </section>
          </div>
          <section className="qr section">
              <div className=" container">
                  <div className="qr__text">
                      <h2 className="qr__title">
                          Торгуй умнее -<br/>
                          зарабатывай больше
                      </h2>
                      <div className="qr__frame frame">
                          <img className="qr__image" src={QRImage} alt="QR код"/>
                          <Button size="sm">Торговать</Button>
                      </div>
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
                      <Button className="soc__button" variant="outline" size="sm">
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
                      <Button className="soc__button" variant="outline" size="sm">
                          Смотреть на YouTube
                          <ReactSVG className="reactsvg" src={ArrowRightIcon}/>
                      </Button>
                  </div>
                  <div className="follow__soc soc">
                      <ReactSVG className="soc__icon reactsvg" src={TelegramIcon}/>
                      <div className="soc__info">
                          <h3 className="soc__title">
                              Twitter (X)
                          </h3>
                          <p className="soc__text">
                              Молниеносные обновления, мемы и важные<br/>
                              альфа-новости в формате коротких постов
                          </p>
                      </div>
                      <Button className="soc__button" variant="outline" size="sm">
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
