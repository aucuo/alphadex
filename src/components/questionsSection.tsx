import React, { useState } from "react";
import { Button } from "@/components/ui/button.tsx";
import SectionTitle from "@/components/sectionTitle.tsx";
import SonicImage from "@/assets/images/sonic.png"; // Путь к изображению Соника
import HaticoImage from "@/assets/images/hatico.png"; // Путь к изображению Хатико
import emailjs from "@emailjs/browser";
import {Input} from "@/components/ui/input.tsx"; // Установите пакет: npm install @emailjs/browser
import './questionsSection.scss'

const QuestionsSection: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        telegram: "",
        email: "",
    });

    const [errors, setErrors] = useState({
        name: false,
        telegram: false,
        email: false,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    // Обработчик изменения полей ввода
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        // Обновляем данные формы
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        // Валидация полей
        if (name === "name" && value.length < 2) {
            setErrors((prev) => ({ ...prev, name: true }));
        } else if (name === "telegram" && value.length < 2) {
            setErrors((prev) => ({ ...prev, telegram: true }));
        } else if (name === "email" && !validateEmail(value)) {
            setErrors((prev) => ({ ...prev, email: true }));
        } else {
            setErrors((prev) => ({ ...prev, [name]: false }));
        }
    };

    // Валидация email
    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Обработчик отправки формы
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Проверяем все поля на валидность
        const isNameValid = formData.name.length >= 2;
        const isTelegramValid = formData.telegram.length >= 2;
        const isEmailValid = validateEmail(formData.email);

        if (!isNameValid || !isTelegramValid || !isEmailValid) {
            setErrors({
                name: !isNameValid,
                telegram: !isTelegramValid,
                email: !isEmailValid,
            });
            return;
        }

        // Отправляем данные по почте
        try {
            setIsSubmitting(true);

            await emailjs.send(
                "service_n3s998p", // ID вашего сервиса EmailJS
                "template_yrx49ja", // ID вашего шаблона EmailJS
                formData,
                "ng63Jzt74IfU3y3Qw" // Ваш публичный ключ EmailJS
            );

            setFormData({ name: "", telegram: "", email: "" }); // Очищаем форму
        } catch (error) {
            console.error("Ошибка при отправке формы:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    // Функция для проверки состояния кнопки
    const isFormValid = (): boolean => {
        return (
            formData.name.length >= 2 &&
            formData.telegram.length >= 2 &&
            validateEmail(formData.email)
        );
    };

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
                <form onSubmit={handleSubmit} className="questions">
                    <div className="questions__middle middle">
                        <p className="middle__text">
                            Сомневаетесь или хотите узнать больше - оставьте заявку ниже, и мы свяжемся с вами,
                            чтобы ответить на все ваши вопросы и помочь выбрать подходящий SPRINT
                        </p>
                        <h4 className="middle__title">Заполните форму ниже</h4>

                        {/* Поле имени */}
                        <Input
                            className={`middle__input ${errors.name ? "input-error" : ""}`}
                            placeholder="Ваше имя (обязательно)"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            maxLength={20}
                            minLength={2}
                            required
                        />

                        {/* Поле Telegram */}
                        <Input
                            className={`middle__input ${errors.telegram ? "input-error" : ""}`}
                            placeholder="Ваш telegram (обязательно)"
                            type="text"
                            name="telegram"
                            value={formData.telegram}
                            onChange={handleInputChange}
                            maxLength={20}
                            minLength={2}
                            required
                        />

                        {/* Поле Email */}
                        <Input
                            className={`middle__input ${errors.email ? "input-error" : ""}`}
                            placeholder="Ваш e-mail (обязательно)"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            maxLength={50}
                            minLength={5}
                            required
                        />

                        {/* Кнопка отправки */}
                        <Button
                            size="sm"
                            type="submit"
                            disabled={!isFormValid() || isSubmitting}
                        >
                            {isSubmitting ? "Отправка..." : "Оставить заявку"}
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default QuestionsSection;