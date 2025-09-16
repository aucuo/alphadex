import React from "react";
import { Button } from "@/components/ui/button.tsx";
import SectionTitle from "@/components/sectionTitle.tsx";
import SonicImage from "@/assets/images/sonic.png"; // Путь к изображению Соника
import HaticoImage from "@/assets/images/hatico.png"; // Путь к изображению Хатико
import './questionsSection.scss'

const QuestionsSection: React.FC = () => {

    return (
        <section className="questions section">
            <div className="container">
                <SectionTitle className="questions__title" id="questions">
                    Остались<br />
                    вопросы?
                </SectionTitle>
                <img
                    className="questions__hero questions__hero--sonic"
                    src={SonicImage}
                    alt="Соник читает книжку"
                />
                <img
                    className="questions__hero questions__hero--hatico"
                    src={HaticoImage}
                    alt="Хатико в шлеме викинга читает книгу"
                />
                <div className="questions">
                    <div className="questions__middle middle">
                        <p className="middle__text">
                            Сомневаетесь или хотите узнать больше - оставьте
                            заявку ниже, и мы ответим на все ваши вопросы
                        </p>

                        {/* Кнопка отправки */}
                        <Button
                            size="sm"
                            onClick={() => {
                                window.open('https://t.me/m/PYlsZlVaZGZi')
                            }}
                        >
                            оставить заявку
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuestionsSection;