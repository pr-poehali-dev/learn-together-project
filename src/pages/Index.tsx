import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Навигационная панель */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="BookOpen" className="h-8 w-8 text-violet-600" />
            <span className="font-montserrat font-bold text-xl">
              Учись вместе
            </span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a
              href="#"
              className="text-gray-700 hover:text-violet-600 transition-colors"
            >
              Главная
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-violet-600 transition-colors"
            >
              Курсы
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-violet-600 transition-colors"
            >
              Вебинары
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-violet-600 transition-colors"
            >
              Материалы
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-violet-600 transition-colors"
            >
              О нас
            </a>
          </div>
          <div>
            <Button className="bg-violet-600 hover:bg-violet-700 text-white">
              Начать обучение
            </Button>
          </div>
        </div>
      </nav>

      {/* Героический раздел */}
      <section className="bg-gradient-to-r from-violet-500 to-blue-500 text-white py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="font-montserrat text-4xl md:text-5xl font-bold leading-tight">
              Открой мир знаний за пределами школьной программы
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Интерактивная образовательная платформа для школьников, где каждый
              найдет полезные материалы, вебинары и онлайн-курсы
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
              <Button className="bg-white text-violet-700 hover:bg-gray-100 px-6 py-2 text-lg">
                Изучать курсы
              </Button>
              <Button className="bg-yellow-400 text-violet-900 hover:bg-yellow-300 border-none px-6 py-2 text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5">
                Узнать больше
                <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Школьники за обучением"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Раздел возможностей */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-montserrat text-3xl font-bold text-gray-800 mb-4">
              Почему выбирают платформу "Учись вместе"
            </h2>
            <p className="text-gray-600 text-lg">
              Наша миссия — сделать качественное образование доступным для
              каждого школьника
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 hover:shadow-lg transition-shadow rounded-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="BookOpen" className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-montserrat text-xl font-bold text-gray-800 mb-2">
                Полезные материалы
              </h3>
              <p className="text-gray-600">
                Учебники, рабочие тетради, презентации и многое другое для
                самостоятельного изучения
              </p>
            </div>

            <div className="text-center p-6 hover:shadow-lg transition-shadow rounded-lg">
              <div className="bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Video" className="h-8 w-8 text-violet-600" />
              </div>
              <h3 className="font-montserrat text-xl font-bold text-gray-800 mb-2">
                Интерактивные вебинары
              </h3>
              <p className="text-gray-600">
                Онлайн-занятия с преподавателями в режиме реального времени с
                возможностью задать вопросы
              </p>
            </div>

            <div className="text-center p-6 hover:shadow-lg transition-shadow rounded-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="GraduationCap" className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-montserrat text-xl font-bold text-gray-800 mb-2">
                Онлайн-курсы
              </h3>
              <p className="text-gray-600">
                Структурированные программы обучения с проверкой знаний и
                обратной связью от преподавателей
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Раздел популярных категорий */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-montserrat text-3xl font-bold text-gray-800 mb-12 text-center">
            Популярные категории
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="p-4 pb-2">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <Icon name="Calculator" className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-xl font-montserrat">
                  Математика
                </CardTitle>
                <CardDescription>
                  Алгебра, геометрия, статистика
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm text-gray-500">
                  12 курсов • 45 материалов
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="p-4 pb-2">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <Icon name="Flask" className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl font-montserrat">
                  Естественные науки
                </CardTitle>
                <CardDescription>Физика, химия, биология</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm text-gray-500">
                  18 курсов • 57 материалов
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="p-4 pb-2">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <Icon name="Languages" className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-montserrat">
                  Иностранные языки
                </CardTitle>
                <CardDescription>
                  Английский, немецкий, китайский
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm text-gray-500">
                  24 курса • 68 материалов
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="p-4 pb-2">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <Icon name="Code" className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl font-montserrat">
                  Программирование
                </CardTitle>
                <CardDescription>Python, Java, веб-разработка</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm text-gray-500">
                  15 курсов • 42 материала
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-violet-600 text-violet-600 hover:bg-violet-50"
            >
              Смотреть все категории
              <Icon name="ChevronRight" className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Раздел отзывов */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-montserrat text-3xl font-bold text-gray-800 mb-12 text-center">
            Что говорят наши ученики
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gray-50 border-none shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Icon name="Star" className="h-5 w-5 text-yellow-500" />
                  <Icon name="Star" className="h-5 w-5 text-yellow-500" />
                  <Icon name="Star" className="h-5 w-5 text-yellow-500" />
                  <Icon name="Star" className="h-5 w-5 text-yellow-500" />
                  <Icon name="Star" className="h-5 w-5 text-yellow-500" />
                </div>
                <p className="italic text-gray-700 mb-4">
                  "Благодаря курсам по физике я смог углубить свои знания и
                  выиграть олимпиаду. Преподаватели объясняют сложные темы
                  простым языком!"
                </p>
                <div className="flex items-center">
                  <div className="rounded-full bg-gray-300 w-10 h-10 flex items-center justify-center mr-3">
                    <span className="font-bold text-gray-600">АК</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Алексей К.</p>
                    <p className="text-sm text-gray-600">11 класс, г. Москва</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 border-none shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Icon name="Star" className="h-5 w-5 text-yellow-500" />
                  <Icon name="Star" className="h-5 w-5 text-yellow-500" />
                  <Icon name="Star" className="h-5 w-5 text-yellow-500" />
                  <Icon name="Star" className="h-5 w-5 text-yellow-500" />
                  <Icon name="Star" className="h-5 w-5 text-yellow-500" />
                </div>
                <p className="italic text-gray-700 mb-4">
                  "Я всегда испытывала трудности с математикой, но благодаря
                  вебинарам и дополнительным материалам смогла повысить свою
                  успеваемость!"
                </p>
                <div className="flex items-center">
                  <div className="rounded-full bg-gray-300 w-10 h-10 flex items-center justify-center mr-3">
                    <span className="font-bold text-gray-600">МС</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Марина С.</p>
                    <p className="text-sm text-gray-600">
                      9 класс, г. Санкт-Петербург
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 border-none shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Icon name="Star" className="h-5 w-5 text-yellow-500" />
                  <Icon name="Star" className="h-5 w-5 text-yellow-500" />
                  <Icon name="Star" className="h-5 w-5 text-yellow-500" />
                  <Icon name="Star" className="h-5 w-5 text-yellow-500" />
                  <Icon name="Star" className="h-5 w-5 text-yellow-500" />
                </div>
                <p className="italic text-gray-700 mb-4">
                  "Курсы программирования открыли для меня новый мир
                  возможностей. Теперь я могу создавать свои приложения и даже
                  заработал первые деньги!"
                </p>
                <div className="flex items-center">
                  <div className="rounded-full bg-gray-300 w-10 h-10 flex items-center justify-center mr-3">
                    <span className="font-bold text-gray-600">ДВ</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Дмитрий В.</p>
                    <p className="text-sm text-gray-600">
                      10 класс, г. Новосибирск
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="py-16 bg-gradient-to-r from-violet-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-6">
            Готов начать свой путь к знаниям?
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 opacity-90">
            Присоединяйся к тысячам школьников, которые уже расширяют свои
            знания с нами!
          </p>
          <Button className="bg-white text-violet-700 hover:bg-gray-100 px-8 py-3 text-lg">
            Начать обучение бесплатно
          </Button>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="BookOpen" className="h-8 w-8 text-violet-400" />
                <span className="font-montserrat font-bold text-xl">
                  Учись вместе
                </span>
              </div>
              <p className="text-gray-400">
                Образовательная платформа для школьников, стремящихся к знаниям
                за пределами обычной программы.
              </p>
            </div>

            <div>
              <h4 className="font-montserrat font-bold text-lg mb-4">
                Разделы
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Курсы
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Вебинары
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Материалы
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Тесты
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-montserrat font-bold text-lg mb-4">О нас</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    О проекте
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Преподаватели
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Отзывы
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Контакты
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-montserrat font-bold text-lg mb-4">
                Связаться с нами
              </h4>
              <div className="space-y-2">
                <p className="text-gray-400 flex items-center">
                  <Icon name="Mail" className="h-5 w-5 mr-2" />
                  info@uchis-vmeste.ru
                </p>
                <p className="text-gray-400 flex items-center">
                  <Icon name="Phone" className="h-5 w-5 mr-2" />
                  +7 (800) 123-45-67
                </p>
                <div className="flex space-x-3 pt-2">
                  <a
                    href="#"
                    className="bg-gray-700 p-2 rounded-full hover:bg-violet-600 transition-colors"
                  >
                    <Icon name="Facebook" className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-gray-700 p-2 rounded-full hover:bg-violet-600 transition-colors"
                  >
                    <Icon name="Instagram" className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-gray-700 p-2 rounded-full hover:bg-violet-600 transition-colors"
                  >
                    <Icon name="Youtube" className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-gray-700 p-2 rounded-full hover:bg-violet-600 transition-colors"
                  >
                    <Icon name="Telegram" className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 Учись вместе. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
