
export const content = {
  header: {
    name: {
      en: "John Doe",
      ru: "Джон Доу"
    },
    profession: {
      en: "Product Designer & Developer",
      ru: "Дизайнер Продукта & Разработчик"
    },
    bio: {
      en: "Passionate about creating seamless digital experiences through thoughtful design and clean development. I combine strategic thinking with technical execution to build products people love.",
      ru: "Увлечен созданием плавных цифровых впечатлений через продуманный дизайн и чистую разработку. Я сочетаю стратегическое мышление с техническим исполнением, чтобы создавать продукты, которые люди любят."
    },
    photo: "/profile-photo.jpg", // Will be added
    contact: {
      email: "john.doe@example.com",
      telegram: "johndoe"
    }
  },
  languages: {
    en: "English",
    ru: "Русский"
  },
  experience: [
    {
      title: {
        en: "Senior UX Designer",
        ru: "Старший UX Дизайнер"
      },
      company: {
        en: "Design Forward",
        ru: "Design Forward"
      },
      period: {
        en: "Jan 2020 - Present",
        ru: "Янв 2020 - Настоящее время"
      },
      logo: "/placeholder.svg",
      description: {
        en: "Leading design initiatives for enterprise clients, focused on creating intuitive and accessible interfaces. Established design system and mentored junior designers.",
        ru: "Руководство инициативами дизайна для корпоративных клиентов, с акцентом на создание интуитивных и доступных интерфейсов. Создал систему дизайна и наставлял младших дизайнеров."
      },
      projects: [
        {
          title: {
            en: "Financial Dashboard Redesign",
            ru: "Редизайн Финансовой Панели"
          },
          description: {
            en: "Completely overhauled a complex financial dashboard used by over 2,000 financial analysts daily. Reduced task completion time by 35% and increased user satisfaction scores by 52%. Check out the <a href='https://example.com/case-study' target='_blank' class='text-primary underline hover:text-primary/80'>detailed case study</a>.",
            ru: "Полностью переработал сложную финансовую панель, используемую более чем 2000 финансовыми аналитиками ежедневно. Сократил время выполнения задач на 35% и повысил показатели удовлетворенности пользователей на 52%. Ознакомьтесь с <a href='https://example.com/case-study' target='_blank' class='text-primary underline hover:text-primary/80'>подробным разбором кейса</a>."
          },
          media: {
            type: "image",
            url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=2500",
            alt: {
              en: "Financial dashboard interface showing analytics and graphs",
              ru: "Интерфейс финансовой панели, показывающий аналитику и графики"
            }
          }
        },
        {
          title: {
            en: "Mobile Banking App",
            ru: "Мобильное Банковское Приложение"
          },
          description: {
            en: "Designed and launched a new banking app focused on millennial users. Features included personalized insights, goal-based savings, and simplified investment options.",
            ru: "Разработал и запустил новое банковское приложение, ориентированное на пользователей-миллениалов. Функции включали персонализированные аналитические данные, накопления на основе целей и упрощенные варианты инвестирования."
          },
          media: {
            type: "image",
            url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=2500",
            alt: {
              en: "Mobile banking application interface",
              ru: "Интерфейс мобильного банковского приложения"
            }
          }
        }
      ]
    },
    {
      title: {
        en: "Product Designer",
        ru: "Дизайнер Продукта"
      },
      company: {
        en: "Innovate Tech",
        ru: "Innovate Tech"
      },
      period: {
        en: "Mar 2018 - Dec 2019",
        ru: "Мар 2018 - Дек 2019"
      },
      logo: "/placeholder.svg",
      description: {
        en: "Responsible for end-to-end product design for a SaaS analytics platform. Collaborated closely with engineering and product management to deliver seamless user experiences.",
        ru: "Отвечал за комплексный дизайн продукта для аналитической платформы SaaS. Тесно сотрудничал с инженерией и управлением продуктами для обеспечения безупречного пользовательского опыта."
      },
      projects: [
        {
          title: {
            en: "Analytics Dashboard",
            ru: "Аналитическая Панель"
          },
          description: {
            en: "Created a real-time analytics dashboard that processed over 1 million data points daily. Implemented innovative visualization techniques to make complex data accessible. Watch our <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=25s' target='_blank' class='text-primary underline hover:text-primary/80'>tutorial video</a> starting at 0:25.",
            ru: "Создал панель аналитики в реальном времени, которая обрабатывает более 1 миллиона точек данных ежедневно. Внедрил инновационные методы визуализации, чтобы сделать сложные данные доступными. Посмотрите наше <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=25s' target='_blank' class='text-primary underline hover:text-primary/80'>обучающее видео</a>, начиная с 0:25."
          },
          media: {
            type: "image",
            url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2500",
            alt: {
              en: "Analytics dashboard with data visualizations",
              ru: "Панель аналитики с визуализацией данных"
            }
          }
        }
      ]
    },
    {
      title: {
        en: "UI/UX Designer",
        ru: "UI/UX Дизайнер"
      },
      company: {
        en: "Creative Solutions",
        ru: "Creative Solutions"
      },
      period: {
        en: "Jun 2016 - Feb 2018",
        ru: "Июн 2016 - Фев 2018"
      },
      logo: "/placeholder.svg",
      description: {
        en: "Designed user interfaces for web and mobile applications across various industries. Conducted user research and usability testing to validate design decisions.",
        ru: "Разрабатывал пользовательские интерфейсы для веб- и мобильных приложений в различных отраслях. Проводил исследования пользователей и тестирование удобства использования для проверки дизайнерских решений."
      },
      projects: [
        {
          title: {
            en: "E-commerce Redesign",
            ru: "Редизайн E-commerce"
          },
          description: {
            en: "Complete overhaul of an e-commerce platform resulting in 28% increase in conversion rate and 42% decrease in cart abandonment. Implemented a new checkout flow and improved product discovery.",
            ru: "Полная переработка платформы электронной коммерции, что привело к увеличению коэффициента конверсии на 28% и снижению показателя отказа от корзины на 42%. Внедрил новый процесс оформления заказа и улучшил обнаружение продуктов."
          },
          media: {
            type: "image",
            url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=2500",
            alt: {
              en: "E-commerce interface on laptop",
              ru: "Интерфейс электронной коммерции на ноутбуке"
            }
          }
        },
        {
          title: {
            en: "Travel Booking App",
            ru: "Приложение для Бронирования Путешествий"
          },
          description: {
            en: "Designed a mobile app for booking travel experiences, focusing on creating an immersive and inspiring interface while maintaining ease of use for booking functionality.",
            ru: "Спроектировал мобильное приложение для бронирования путешествий, сосредоточившись на создании иммерсивного и вдохновляющего интерфейса при сохранении простоты использования функций бронирования."
          },
          media: {
            type: "image",
            url: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=2500",
            alt: {
              en: "Travel app interface showing destination browsing",
              ru: "Интерфейс приложения для путешествий, показывающий просмотр направлений"
            }
          }
        }
      ]
    }
  ],
  ui: {
    showProjects: {
      en: "Show Projects",
      ru: "Показать Проекты"
    },
    hideProjects: {
      en: "Hide Projects",
      ru: "Скрыть Проекты"
    },
    viewImage: {
      en: "View Full Size",
      ru: "Просмотреть в полном размере"
    },
    close: {
      en: "Close",
      ru: "Закрыть"
    },
    contact: {
      email: {
        en: "Email",
        ru: "Эл. почта"
      },
      telegram: {
        en: "Telegram",
        ru: "Телеграм"
      }
    }
  }
};
