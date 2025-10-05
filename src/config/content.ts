export const content = {
  nav: {
    home: 'Главная',
    about: 'Обо мне',
    skills: 'Навыки',
    projects: 'Проекты',
    contact: 'Контакты'
  },
  
  hero: {
    greeting: 'Привет 👋 Меня зовут',
    name: 'LokkitcDev',
    real_name: 'Бекзат',
    title: 'Python-разработчик',
    description: 'Я начинающий Python-разработчик с огромной страстью к бэкенду! 🚀 Моя цель — разрабатывать надежные, производительные и масштабируемые веб-приложения. И развиться как опытный специалист.',
    viewWorkBtn: 'Посмотреть работы',
    contactBtn: 'Связаться со мной',
    scrollDown: 'Прокрутить вниз'
  },
  
  about: {
    title: 'Обо мне',
    description: [
      'Я начинающий Python-разработчик с огромной страстью к бэкенду! 🚀 Учусь на 4 курсе в "Инновационном Техническом Колледже" по направлению "Разработка программного обеспечения".',
      'Прошел несколько специализированных курсов: курс веб-разработки в "Яндекс Практикуме", интенсив по Python-разработке от "Stepik". Победитель и призер внутренних олимпиад технических училищ.',
      'Сейчас пишу backend для учебного приложения с использованием Django и PostgreSQL, изучаю асинхронное программирование в Python (FastAPI, asyncio) и создаю открытые пэт-проекты. Увлекаюсь технологиями: искусственный интеллект, облачные вычисления, DevOps.'
    ],
    highlights: {
      experience: 'Курс обучения',
      projects: 'Проектов создано',
      technologies: 'Освоенных технологий'
    }
  },
  
  skills: {
    title: 'Технологии и навыки',
    subtitle: 'Технологии, которые я использую для создания backend-решений',
    categories: {
      frontend: 'Frontend',
      backend: 'Backend',
      tools: 'Инструменты и DevOps'
    },
    summary: {
      frontend: {
        title: 'Frontend разработка',
        description: 'Базовые знания HTML, CSS, JavaScript для создания простых пользовательских интерфейсов.'
      },
      backend: {
        title: 'Backend разработка',
        description: 'Создание надежных API и серверных приложений с Django и FastAPI, работа с PostgreSQL.'
      },
      tools: {
        title: 'DevOps и инструменты',
        description: 'Настройка Docker, работа с Git, базовые навыки CI/CD и развертывания приложений.'
      }
    }
  },
  
  projects: {
    title: 'Мои проекты',
    subtitle: 'Учебные и pet-проекты, над которыми я работал',
    projectsList: [
      {
        title: 'REST API для блога',
        description: 'REST API для личного блога с авторизацией на базе JWT, системой комментариев и управлением контентом. Построено с Django REST Framework и PostgreSQL.'
      },
      {
        title: 'E-commerce Backend',
        description: 'Backend для учебного e-commerce приложения с каталогом товаров, корзиной, системой заказов и интеграцией с платежными системами.'
      },
      {
        title: 'Система управления задачами',
        description: 'API для управления задачами команды с аутентификацией, ролями пользователей и уведомлениями. Использует FastAPI и асинхронное программирование.'
      },
      {
        title: 'Учебная CMS',
        description: 'Простая система управления контентом с админ-панелью, редактором статей и системой публикации. Создана на Django.'
      },
      {
        title: 'API мониторинга',
        description: 'Сервис для мониторинга состояния серверов и приложений с системой алертов и дашбордом. Использует FastAPI и WebSockets.'
      },
      {
        title: 'Telegram Bot',
        description: 'Телеграм-бот для автоматизации рутинных задач с интеграцией к внешним API и базой данных для хранения пользовательских настроек.'
      }
    ],
    liveDemo: 'Демо',
    github: 'GitHub',
    cta: {
      title: 'Хотите увидеть больше?',
      description: 'Посетите мой профиль GitHub для просмотра дополнительных проектов и вкладов в open-source',
      button: 'Посмотреть профиль GitHub'
    }
  },
  
  contact: {
    title: 'Связаться со мной',
    subtitle: 'Готов к сотрудничеству или есть вопросы? Буду рад обсудить проекты и возможности!',
    info: {
      title: 'Контактная информация',
      email: 'Email',
      phone: 'Telegram',
      location: 'Местоположение',
      followMe: 'Социальные сети'
    },
    form: {
      title: 'Отправить сообщение',
      namePlaceholder: 'Ваше имя',
      emailPlaceholder: 'Ваш email',
      subjectPlaceholder: 'Тема',
      messagePlaceholder: 'Ваше сообщение',
      sendButton: 'Отправить сообщение',
      sendingButton: 'Отправка...',
      successMessage: 'Спасибо за ваше сообщение! Я свяжусь с вами в ближайшее время.'
    },
    contactInfo: {
      email: 'bekzat.talimbek@example.com',
      phone: '@lokkitc',
      location: 'Казахстан'
    }
  },
  
  footer: {
    copyright: '© 2024 Бекзат Талимбек. Все права защищены.',
    builtWith: 'Создано с React, TypeScript и ❤️'
  }
};