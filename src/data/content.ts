export const content = {
  header: {
    name: {
      en: "Mars Shakirov",
      ru: "Марс Шакиров"
    },
    profession: {
      en: "Product Manager & Analyst",
      ru: "Продуктовый менеджер & Аналитик данных"
    },
    bio: {
      en: "Experienced in building and optimizing digital products, leveraging data to drive decision-making and enhance user experiences. Passionate about educational technology and travel services.",
      ru: "Опытный специалист в создании и оптимизации цифровых продуктов, использующий данные для принятия решений и улучшения пользовательского опыта. Увлечен образовательными технологиями и туристическими сервисами."
    },
    photo: "/profile-photo.png", 
    contact: {
      email: "mars.shakirov@gmail.com",
      telegram: "Shakirov_Mars"
    }
  },
  languages: {
    en: "English",
    ru: "Русский"
  },
  experience: [
    {
      title: {
        en: "Product Manager & Data Analyst",
        ru: "Продуктовый менеджер и Аналитик данных"
      },
      company: {
        en: "Wowtickets",
        ru: "Wowtickets"
      },
      period: {
        en: "May 2023 - Present",
        ru: "Май 2023 - Настоящее время"
      },
      logo: "/wow_logo.png",
      website: 'https://wowtickets.com',
        "description": {
          "en": `I started in a fast-growing startup focused on the India and UAE markets, taking on a wide scope of responsibilities from the beginning. Initially, I was responsible for working with external content providers, overseeing the entire process from contract signing to ticket sales. During this time, we successfully integrated seven providers, often requiring custom technical solutions. I also managed communication with acquisition channels like Skyscanner and Wego, as well as payment providers such as Stripe and Trust.
          Throughout my work, we continuously managed content and search settings, which required ongoing analysis of acquisition metrics and conversion rates.  
      
          Later, my primary focus shifted to monetizing content and additional services. I developed, analyzed, and implemented projects to increase revenue, including fraud protection mechanisms. Additionally, I optimized operational processes by automating accounting reports, creating support tools, and setting up alerts to prevent financial losses and detect order processing errors.`,
          
          "ru": `Я начал работу в интенсивно развивающемся стартапе, ориентированном на рынки Индии и ОАЭ, с самого начала взяв на себя широкую зону ответственности. Изначально я отвечал за работу с внешними поставщиками контента, контролируя процесс от подписания договора до продаж билетов. За это время мы интегрировали семь поставщиков, в ряде случаев разрабатывая оригинальные технические решения. Также я занимался коммуникацией с каналами привлечения, такими как Skyscanner и Wego, и платёжными провайдерами, такими как Stripe и Trust.  
      
          На протяжении всей работы мы управляли настройками контента и поиска, что требовало постоянного анализа метрик привлечения и конверсий.  
      
          Позже моя основная работа сосредоточилась на монетизации контента и дополнительных услуг. Я разрабатывал, анализировал и внедрял проекты по увеличению дохода, включая защиту от мошенничества. Помимо этого, я оптимизировал операционные процессы, автоматизируя бухгалтерскую отчётность, создавая инструменты для поддержки клиентов и настраивая алерты для предотвращения убытков и отслеживания ошибок при обработке заказов.`
      },      
      projects: [
        {
          "title": {
            "en": "Monetization of Unique Content",
            "ru": "Монетизация уникального контента"
          },
          "description": {
            "en": "I worked on projects to monetize unique content, which we called 'Combinations.' Content providers could only offer what airlines supplied, but by predicting market demand, we created custom flight pairings and sold them at a margin 2-3 times higher than regular content. Over time, I developed and launched three different systems for generating such content, which led to 15% of total sales coming from combined flights.",
            "ru": "Я занимался проектами по монетизации уникального контента, которые мы называли 'Комбинации'. Поставщики контента были ограничены предложениями авиакомпаний, но, предсказывая спрос, мы создавали собственные сочетания рейсов и продавали их с маржой в 2-3 раза выше, чем у обычного контента. Со временем я разработал и внедрил три системы генерации такого контента, благодаря чему 15% всех продаж приходилось на комбинированные перелёты."
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
            "title": {
              "en": "Improving Bookability",
              "ru": "Улучшение Bookability"
            },
            "description": {
              "en": `One of the main challenges in TravelTech is bookability – ensuring that a ticket or service is booked at the same price as originally shown during the search. This issue primarily depends on content providers and is traditionally considered fundamentally unsolvable.  
          
              We delved into the root causes of this problem and developed a system that allowed us to search for alternative options from different providers before the actual booking process began. We also learned to prioritize providers at the content display stage by analyzing the bookability of their offerings.  
          
              As a result, we not only improved bookability but also generated approximately 5% of total revenue from this optimization.`,
              
              "ru": `Одна из основных проблем в TravelTech — bookability, то есть успешность бронирования, подразумевающая, что билет или услуга бронируются по той же цене, что была доступна при изначальном поиске. Эта проблема главным образом зависит от поставщиков контента и традиционно считается фундаментально неразрешимой.  
          
              Мы детально изучили корни этой проблемы и разработали систему, которая позволяла искать альтернативные варианты у разных поставщиков ещё до начала реального бронирования. Также мы научились приоритизировать поставщиков на этапе показа контента, анализируя успешность их бронирования.  
          
              В результате мы не только улучшили bookability, но и смогли получать дополнительно около 5% от общего дохода благодаря этой оптимизации.`
            },
          
          media: {
            type: "image",
            url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=2500",
            alt: {
              en: "Mobile banking application interface",
              ru: "Интерфейс мобильного банковского приложения"
            }
          }
        },
        {
          "title": {
            "en": "Optimizing Search Response Time with Smart Caching",
            "ru": "Оптимизация времени ответа в поиске с помощью умного кеширования"
          },
          "description": {
            "en": `When returning search results, it is crucial not only to provide the best price but also to respond as quickly as possible. We analyzed our response times and session conversion rates and identified the optimal response time window to capture the user's attention before they switched to a competitor.  
        
            Since we operated between the content provider and the user, we couldn't directly control how fast responses were delivered. To address this, we developed a caching system with different storage durations based on content type and time remaining until departure.  
        
            This system reduced the share of timeouts from 5-6% to less than 1%, while maintaining only a slightly lower bookability rate. We also integrated caching into our combination logic, ensuring that 99% of all combinations in search results used cached data. Additionally, we reduced overall search load by 40% and improved system stability during peak traffic periods.`,
            
            "ru": `При отправке результатов поискового запроса важно не только предлагать лучшую цену, но и делать это как можно быстрее. Мы проанализировали скорость ответа и конверсию в сессиях, определив оптимальное время, в которое мы должны успеть показать клиенту наше предложение, пока он не ушёл к конкуренту.  
        
            Мы находились между поставщиком контента и пользователем, поэтому не могли напрямую контролировать скорость отдачи ответа. Для решения этой проблемы мы разработали систему кеширования с разной длительностью хранения, в зависимости от типа контента и времени до вылета.  
        
            Эта система сократила долю таймаутов с 5-6% до менее 1%, при этом bookability этого контента снизился незначительно. Мы также научились активно использовать этот кеш для комбинированных перелётов и добились того, что 99% комбинаций в поиске строились на основе кешированных данных. Вдобавок, нам удалось снизить общую нагрузку на поиск на 40% и повысить надёжность системы в периоды пиковых нагрузок.`
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
      en: "Product Analyst",
      ru: "Аналитик в команде продукта"
      },
      company: {
        en: "MegoTravel",
        ru: "MegoTravel"
      },
      period: {
        en: "Sep 2022 - May 2023",
        ru: "Сен 2022 - Май 2023"
      },
      logo: "/mego_logo.png",
      website: 'https://mego.travel/',
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
        en: "Product Analyst & Data Researcher",
        ru: "Аналитик продукта и Исследователь данных"
      },
      company: {
        en: "Umschool",
        ru: "Умскул"
      },
      period: {
        en: "Jun 2016 - Feb 2018",
        ru: "Июн 2016 - Фев 2018"
      },
      logo: "/umschool_logo.png",
      website: 'https://umschool.net/',
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
    },
    {
      title: {
        en: "Product Expert",
        ru: "Методист-аналитик"
      },
      company: {
        en: "Skyeng",
        ru: "Скаенг"
      },
      period: {
        en: "Jun 2016 - Feb 2018",
        ru: "Июн 2016 - Фев 2018"
      },
      logo: "/skyeng_logo.png",
      website: 'https://skyeng.ru/',
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
    },
    {
      title: {
        en: "Researcher & Lecturer",
        ru: "Исследователь и преподаватель"
      },
      company: {
        en: "Academia",
        ru: "Научная деятельность"
      },
      period: {
        en: "Jun 2016 - Feb 2018",
        ru: "Июн 2016 - Фев 2018"
      },
      logo: "/kfu_logo.png",
      website: 'https://kpfu.ru/',
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
    },
    {
      title: {
        en: "Educator & Content creator",
        ru: "Преподаватель и контент-мейкер"
      },
      company: {
        en: "Self-Employed",
        ru: "Самозанятость"
      },
      period: {
        en: "Jun 2016 - Feb 2018",
        ru: "Июн 2016 - Фев 2018"
      },
      logo: "/creator_logo.png",
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
