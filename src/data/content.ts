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
"bio": {
  "en": "Product specialist with a focus on data-driven decision-making. Experienced in EdTech and TravelTech, I design and optimize digital products that enhance user experience and drive business growth. I test hypotheses on data, generate ideas and turn them into MVPs that deliver real impact.",

  "ru": "Специалист по цифровым продуктам с фокусом на data-driven подход. Опыт в EdTech и TravelTech — разрабатываю и оптимизирую решения, улучшающие пользовательский опыт и бизнес-показатели. Тестирую гипотезы на данных, генерю идеи и превращаю их в MVP"
}

,
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
        en: "Product Manager",
        ru: "Продуктовый менеджер"
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
  "en": `<p>This company emerged as a dedicated sub-team for international markets within my previous workplace. With a strong focus on expansion in India and the UAE, it later evolved into an independent startup, where I took on a broad range of responsibilities from day one.</p>

  <p>Initially, I managed external content providers, overseeing the process from contract signing to ticket sales. During this period, we integrated <b>seven providers</b>, often requiring custom technical solutions. I also handled communication with acquisition channels like <b>Skyscanner</b> and <b>Wego</b>, as well as payment providers such as <b>Stripe</b> and <b>Trust</b>.</p>

  <p>Continuous content and search optimization required constant analysis of acquisition metrics and conversion rates.</p>

  <p><b>Later, my focus shifted to monetization and revenue growth.</b> I developed and implemented projects to increase income, including fraud protection mechanisms. Additionally, I optimized operational processes by automating accounting reports, creating support tools, and setting up alerts to prevent financial losses and detect order processing errors.</p>

  <p>Through our active work on monetization and conversion, we successfully achieved <b>operational breakeven</b>, ensuring the company's financial sustainability.</p>`,

  "ru": `<p>Эта компания возникла как подкоманда по международным рынкам в рамках моего предыдущего места работы. Первоначально сосредоточившись на расширении в Индии и ОАЭ, со временем она стала независимым стартапом, где я взял на себя широкий круг задач.</p>

  <p>Сначала я управлял работой с внешними поставщиками контента, контролируя процесс от подписания договора до продажи билетов. Мы интегрировали <b>семь поставщиков</b>, в ряде случаев разрабатывая уникальные технические решения. Также я отвечал за взаимодействие с каналами привлечения, такими как <b>Skyscanner</b> и <b>Wego</b>, а также с платёжными провайдерами, включая <b>Stripe</b> и <b>Trust</b>.</p>

  <p>Оптимизация контента и поиска требовала постоянного анализа метрик привлечения и конверсий.</p>

  <p><b>Позже мой фокус сместился на монетизацию и рост доходов.</b> Я разрабатывал и внедрял проекты для увеличения прибыли, включая механизмы защиты от мошенничества. Дополнительно я оптимизировал операционные процессы: автоматизировал бухгалтерскую отчётность, создавал инструменты поддержки и настраивал алерты для предотвращения убытков и выявления ошибок при обработке заказов.</p>

  <p>Благодаря активной работе над монетизацией и конверсией мы достигли <b>операционной безубыточности</b>, обеспечив финансовую устойчивость компании.</p>`
}

  ,      
      projects: [
        {
          "title": {
            "en": "Monetization of Unique Content",
            "ru": "Монетизация уникального контента"
          },
"description": {
  "en": `<p>I worked on <b>monetizing unique content</b>, which we called <b>"Combinations"</b>. While content providers could only offer flights directly supplied by airlines, we leveraged market demand predictions to create <b>custom flight pairings</b>, selling them at a margin <b>2-3 times higher</b> than regular content.</p>
  
  <p>Over time, I developed and launched <b>three different systems</b> for generating such content, resulting in <b>15% of total sales</b> coming from combined flights.</p>`,

  "ru": `<p>Я занимался <b>монетизацией уникального контента</b>, который мы называли <b>"Комбинации"</b>. Поставщики контента могли предлагать только рейсы от авиакомпаний, но, предсказывая спрос, мы создавали <b>собственные сочетания перелётов</b> и продавали их с маржой <b>в 2-3 раза выше</b>, чем у регулярного контента.</p>
  
  <p>Со временем я разработал и внедрил <b>три системы</b> генерации такого контента, что привело к тому, что <b>15% всех продаж</b> приходилось на комбинированные перелёты.</p>`
},
          media: {
            type: "image",
            url: "map.png",
            alt: {
              en: "Diagram of how combinations work",
              ru: "Схема работы комбинаций"
            }
          }
        },
          {
            "title": {
              "en": "Improving Bookability",
              "ru": "Улучшение Bookability"
            },
"description": {
  "en": `<p>One of the key challenges in <b>TravelTech</b> is <b>bookability</b>—ensuring that tickets or services are booked at the same price as originally displayed during the search. This issue primarily depends on content providers and is traditionally considered <b>fundamentally unsolvable</b>.</p>

  <p>We analyzed the root causes of this problem and developed a system that allowed us to <b>search for alternative options</b> from different providers before the booking process even started. Additionally, we optimized content display by <b>prioritizing providers</b> based on their bookability rates.</p>

  <p>As a result, we not only improved bookability but also generated <b>approximately 5% of total revenue</b> from this optimization.</p>`,

  "ru": `<p>Одна из ключевых проблем в <b>TravelTech</b> — <b>bookability</b>, то есть успешность бронирования, когда билет или услуга оформляются по той же цене, что была показана при поиске. Эта проблема исключительно зависит от поставщиков контента и традиционно считается <b>трудноразрешимой</b>.</p>

  <p>Мы проанализировали проблему из первых принципов и разработали систему, которая позволяла <b>искать альтернативные варианты</b> у разных поставщиков ещё до начала реального бронирования. Кроме того, мы оптимизировали показ контента, <b>приоритизируя поставщиков</b> с более высокой успешностью бронирования.</p>

  <p>В результате мы не только улучшили bookability, но и получили <b>дополнительно около 5% от общего дохода</b> благодаря этой оптимизации.</p>`
}
,
          
          media: {
            type: "image",
            url: "alt_search.png",
            alt: {
              en: "Diagram of the alternative search process",
              ru: "Схема процесса поиска альтернативных вариантов"
            }
          }
        },
        {
          "title": {
            "en": "Optimizing Search Response Time with Smart Caching",
            "ru": "Оптимизация времени ответа в поиске с помощью умного кеширования"
          },
"description": {
  "en": `<p>Our main traffic source is <b>meta-search engines</b>, where we compete with other travel agencies on price. Initially, we believed price was the key factor, but analysis showed that <b>response time</b> is just as critical.</p>

  <p>Users decide quickly, so we identified an <b>optimal response window</b> to capture their attention before they switched to competitors. Since we couldn't directly control provider speed, we developed a <b>caching system</b> with adaptive storage durations based on content type and time until departure.</p>

  <p>This reduced <b>timeouts</b> from <b>5-6% to less than 1%</b> while maintaining bookability. <b>99% of search combinations</b> started using cached data, cutting search load by <b>40%</b> and improving system stability during peak traffic.</p>`,

  "ru": `<p>Наш основной источник трафика — <b>мета-поисковики</b>, где мы конкурируем с тревел-агентствами по цене. Ранее мы считали, что цена — главный фактор выбора, но анализ показал, что <b>скорость ответа</b> так же важна.</p>

  <p>Пользователи быстро принимают решения, поэтому мы выявили <b>оптимальный интервал ответа</b>, в который нужно уложиться, чтобы не потерять клиента. Так как скорость поставщиков нам не подконтрольна, мы разработали <b>систему кеширования</b> с разной длительностью хранения в зависимости от типа контента и времени до вылета.</p>

  <p>Это снизило <b>таймауты</b> с <b>5-6% до менее 1%</b> без значительных потерь в bookability. <b>99% комбинаций</b> в поиске стали использовать кеш, нагрузка на систему упала на <b>40%</b>, а её стабильность выросла в пиковые периоды.</p>`
}

,
        
        media: {
          type: "image",
          url: "response_time.png",
          alt: {
            en: "Illustration of how data analysis leads to a technical solution",
            ru: "Иллюстрация того, как анализ данных приводит к техническому решению"
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
"description": {
  "en": `<p>I worked in a product sub-team focused on expanding into <b>Brazil, the UAE, and India</b>. My role included optimizing operations, generating analytics, and managing pricing.</p>

  <p>Knowing the international team would eventually spin off into a separate company, I spent several months rotating through <b>Search, UI, and Growth</b> teams to broaden my expertise.</p>`,

  "ru": `<p>Я работал в продуктовой подкоманде, занимающейся выходом на <b>рынки Бразилии, ОАЭ и Индии</b>. В мои задачи входили оптимизация процессов, аналитика и настройка ценообразования.</p>

  <p>Понимая, что международная команда станет отдельной компанией, я несколько месяцев работал в <b>командах поиска, UI и роста</b>, чтобы расширить компетенции.</p>`
}
,
      projects: [
        {
          "title": {
            "en": "Optimization of Foreign Supplier Balance Replenishment",
            "ru": "Оптимизация пополнения валютного баланса иностранных поставщиков"
          },
"description": {
  "en": `<p>One of my key independent projects was optimizing <b>foreign currency balance replenishment</b> for suppliers. Due to <b>external challenges</b>, many partners required foreign currency payments, but transactions were <b>slow, unreliable, and affected by exchange rate fluctuations</b>.</p>

  <p>After analyzing currency workflows, I identified optimization points and developed a <b>semi-automated system</b>. It provided finance teams with reports on recommended top-up amounts based on real-time sales, ensuring <b>uninterrupted ticket sales and minimized exchange losses</b>.</p>`,

  "ru": `<p>Один из моих значимых самостоятельных проектов — <b>оптимизация пополнения валютных балансов</b> поставщиков. <b>Из-за внешних сложностей</b> расчёты в иностранной валюте были <b>медленными, нестабильными и зависели от курсов</b>.</p>

  <p>Проанализировав процессы, я выявил точки оптимизации и внедрил <b>полуавтоматическую систему</b>. Она формировала отчёты с рекомендованными суммами пополнения на основе продаж, позволяя финансистам <b>обеспечивать бесперебойные платежи и минимизировать потери на конверсии</b>.</p>`
}

,
          media: {
            type: "image",
            url: "top_up.png",
            alt: {
              en: "Diagram of how supplier currency balance top-ups were optimized",
              ru: "Схема оптимизации пополнения валютных балансов поставщиков"
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
        en: "Jun 2021 - Present",
        ru: "Июн 2021 - Настоящее время"
      },
      logo: "/umschool_logo.png",
      website: 'https://umschool.net/',
"description": {
  "en": `<p>I joined the company to develop a new feature—an assessment of students' knowledge across all topics, regardless of the subject.  
  </p><p>At the same time, I was entrusted with leading the content creation department. After successfully handling this, I continued developing new features for knowledge assessment, restructuring homework assignments, and predicting student outcomes.  
  </p><p>Beyond my core tasks, I constantly <b>proposed and implemented solutions</b> to various challenges across the company. Over time, I transitioned to more business-oriented work: calculating unit economics and building analytical reports for executives. This organically led to the creation of an analytics department, which I took the lead in.  
  </p><p>Within this department, we standardized metric calculations across product, finance, and marketing teams. As the company grew, we built the first ETL processes and a notification system.  
  </p><p>In the final stage of my tenure, I handed over analytics leadership and shifted focus to Data Engineering—integrating external data sources, designing a data warehouse, and contributing to the company’s analytical infrastructure.</p>`,

  "ru": `<p>Я присоединился к компании, чтобы разработать новую фичу — систему оценки знаний учеников по всем темам, вне зависимости от предмета.  
  </p><p>Параллельно мне поручили руководство отделом контента. После успешного завершения этой задачи я продолжил <b>предлагать и внедрять решения</b> в области оценки знаний, переработки структуры домашних заданий и предсказания результатов учеников.  
  </p><p>Постепенно я переключился на более бизнес-ориентированные задачи: расчёт юнит-экономики и построение аналитических отчётов для руководства. Это привело к созданию аналитического отдела, которым я начал руководить.  
  </p><p>В рамках отдела мы унифицировали расчёт метрик для продуктового, финансового и маркетингового подразделений. Позже мы разработали первые ETL-процессы и систему уведомлений.  
  </p><p>На завершающем этапе работы в компании я передал управление аналитикой и сосредоточился на Data Engineering: интегрировал внешние источники данных, проектировал хранилище и участвовал в построении аналитической инфраструктуры.</p>`
}
,
      projects: [
        {
          title: {
            "en": "Knowledge Assessment System for Students",
            "ru": "Система оценки знаний учеников"
          },
"description": {
  "en": `<p>This project was one of the most significant in my career. I developed an algorithm that assessed students' knowledge of individual topics based on the tasks they completed.</p>

<p>To achieve this, I chose <b>Bayesian Knowledge Tracing (BKT)</b> for its balance of simplicity and interpretability. We structured all topics into granular <b>"umits"</b>, where each task assessed multiple umits and dynamically adjusted a student's competence level.</p>

<p>Leadership required using only original tasks, which led me to manage <b>content production</b>. I built and optimized the content team, streamlined workflows, and developed a <b>web application</b> that automated task annotation and mapped umits to exercises. This also deepened my expertise in <b>copyright regulations</b> for educational content.</p>

<p>We also developed a <b>Netflix-like recommendation system</b> that suggested review materials based on student progress. Additionally, I independently designed and implemented the <b>umitation program</b>, a web-based tool that modeled knowledge retention and helped refine our algorithm.</p>

<p>By February 2022, the project launched in test mode, and by September 2022, it was rolled out to <b>all users</b>. While its main goal was student retention—ensuring progress reduced churn—it also became a strong <b>marketing tool</b>, positioned as a breakthrough in education under "<b>UmSchool NEO</b>".</p>

<hr>
<p><b>🔗 Related Materials:</b></p>
<ul>
  <li><a href="https://tongyuzhou.com/bkt-explorable/" target="_blank">🧠 Explore Bayesian Knowledge Tracing</a></li>
  <li><a href="https://umitation-programm.streamlit.app/" target="_blank">🖥️ Umitation Program</a></li>
</ul>

`,

  "ru": `<p>Этот проект стал одним из самых значимых в моей карьере. Мне удалось реализовать алгоритм, который оценивал знания учеников по отдельным темам на основе решенных им задач.</p>

<p>Для этого я выбрал <b>BKT (Bayesian Knowledge Tracing)</b> за его простоту и интерпретируемость. Темы были разбиты на <b>"умиты"</b>, а каждое задание оценивало <b>сразу несколько умитов</b>, динамически корректируя уровень знаний ученика.</p>

<p>Руководство потребовало <b>использовать только оригинальные задачи</b>, поэтому я взял на себя управление <b>производством контента</b>. Оптимизировал процессы, автоматизировал работу команды и разработал <b>веб-приложение</b> для разметки задач и привязки умитов к заданиям. Это также помогло мне глубже разобраться в <b>авторском праве</b> на образовательные материалы.</p>

<p>На базе системы мы создали <b>рекомендательный механизм в стиле Netflix</b>, подбирающий материалы для повторения. Помимо этого, я самостоятельно разработал <b>программу для умитирования</b> — веб-приложение, моделирующее процесс усвоения знаний, что помогло улучшить алгоритм.</p>

<p>В феврале 2022 года проект запустился в тестовом режиме, а в сентябре 2022 его <b>раскатали на всех пользователей</b>. Основная цель — <b>удержание учеников</b>: чем выше прогресс ученика, тем меньше вероятность смены образовательной платформы. Однако проект стал и <b>сильным маркетинговым инструментом</b>, представленным как революция в образовании под названием "<b>Умскул NEO</b>".</p>

<hr>
<p><b>🔗 Связанные материалы:</b></p>
<ul>
  <li><a href="https://tongyuzhou.com/bkt-explorable/" target="_blank"> 🧠 Про алгоритм BKT</a></li>
  <li><a href="https://umitation-programm.streamlit.app/" target="_blank"> 🖥️ Программа для умитирования</a></li>
</ul>

`
}


,
          media: {
            type: "image",
            url: "learning_progress.png",
            alt: {
              en: "Diagram of how the student performance tracking system works and is displayed",
              ru: "Схема работы и отображения системы успеваемости ученика"
            }
          }
        },
        {
          "title": {
            "en": "Development of New Features for the Educational Product",
            "ru": "Разработка новых фич для образовательного продукта"
          },
"description": {
  "en": `<p>I worked on developing new features for the product—some inspired by existing solutions, others entirely original.  
  </p><p>One such idea was <strong>"Rainbow of Success"</strong>—a system where students could track their progress based on completed tasks and success rate. Progress was converted into two metrics: <strong>"diligence"</strong> and <strong>"quality"</strong>, visualized as a trajectory within a rainbow, where outer layers indicated a higher probability of top exam scores.  
  </p><p>Another feature was <strong>"Bubbles"</strong>—a homework system that adapted task difficulty dynamically, ensuring students practiced at their optimal level for a personalized learning experience.  
  </p><p>These features remained at the prototype stage, as development resources were focused on a major redesign and more fundamental tasks. Additionally, I lacked sufficient data to prove their impact on key business metrics.</p>

  <hr>
  <p><b>🔗 Related Materials:</b></p>
  <ul>
    <li><a href="ideas.pdf" target="_blank">📄 Presentation of Ideas for CPO</a></li>
    <li><a href="Пузырьки 13 мая.html" target="_blank">🔗 Prototype of "Bubbles"</a></li>
    <li><a href="Новая формула для оценки домашки.html" target="_blank">🔗 Research on Homework Complexity</a></li>
    <li><a href="Универсальная_радуга_результата.html" target="_blank">📊 Analytical Basis for "Rainbow of Success"</a></li>
  </ul>`,

  "ru": `<p>Я разрабатывал новые фичи для продукта — часть из них была адаптацией существующих решений, но были и абсолютно оригинальные идеи.  
  </p><p>Одна из них — <strong>"Радуга успеха"</strong>, система, где ученики могли отслеживать свой прогресс по количеству решённых задач и их успешности. Прогресс конвертировался в две метрики: <strong>"старательность"</strong> и <strong>"качество"</strong>, визуализируясь в виде радуги, где дальние слои указывали на высокую вероятность успешной сдачи экзамена.  
  </p><p>Другая идея — <strong>"Пузырьки"</strong>, адаптивная система домашнего задания, которая динамически подбирала сложность задач, создавая персонализированный опыт обучения.  
  </p><p>Фичи не дошли до продакшена, так как команда разработки сосредоточилась на редизайне и приоритетных задачах, а у меня не было достаточных данных для доказательства их влияния на бизнес-показатели.</p>

  <hr>
  <p><b>🔗 Связанные материалы:</b></p>
  <ul>
    <li><a href="ideas.pdf" target="_blank">📄 Презентация идей для руководства</a></li>
    <li><a href="Пузырьки 13 мая.html" target="_blank">🔗 Прототип "Пузырьков"</a></li>
    <li><a href="Новая формула для оценки домашки.html" target="_blank">🔗 Исследование сложности домашних заданий</a></li>
    <li><a href="Универсальная_радуга_результата.html" target="_blank">📊 Аналитические предпосылки "Радуги успеха"</a></li>
  </ul>`
}
,
          media: {
            type: "image",
            url: "bubbles.png",
            alt: {
              en: "Diagram of the new homework format called 'Bubbles",
              ru: "Схема нового формата домашки под названием 'Пузырьки'"
            }
          }
        },
        {
            title: {
              "en": "Building an Analytical Culture in the Company",
              "ru": "Формирование аналитической культуры в компании"
            },
            description: {
              "en": `I led a major initiative to enhance the analytical culture within the company. When I joined, the company relied on fixed SQL scripts that generated reports at the press of a button, which employees then manually processed.  
                      </p><p> Using only open-source and free services (<strong>Google Spreadsheets, Google Drive, and self-hosted Redash</strong>), I achieved several key improvements:  
                      </p><ul>  
                      <li>The product team gained access to standardized key economic indicators, ensuring that all stakeholders operated with the same numbers.</li>  
                      <li>For the customer service department, we built a predictive model-based tool that identified users in the <strong>"red zone"</strong>—those at high risk of churn.</li>  
                      <li>For the marketing team, we developed a targeted messaging tool that allowed them to segment users based on specific criteria and execute targeted campaigns.</li>  
                      </ul>  
                      <p> Later, this evolved into a more advanced infrastructure, incorporating an <strong>analytical data warehouse</strong> powered by <strong>ClickHouse</strong> and <strong>MongoDB</strong>, orchestrated with <strong>Airflow</strong>. I was actively involved in developing this solution and later took on its maintenance as a Data Engineer.  
                      <hr>
					  </p><p><strong>Related Materials:</strong></p>  
                      <p><a href="https://public.tableau.com/app/profile/mars.shakirov/viz/longate_22_23/sheet8" target="_blank">📊 General retention report</a></p>  
                      <p><a href="Модель предсказания баллов.html" target="_blank">📊 Score Prediction Model</a></p>  
                      <p><a href="Исследование оттока longate.html" target="_blank">🔍 Churn Analysis</a></p>  
                      <p><a href="churn_report.html" target="_blank">📈 Iteration of the Churn Prediction Model</a></p>  
                      <p><a href="marketing_report.html" target="_blank">📩 Research for Marketing team</a></p>
                      <p><a href="ist_dashboard.png" target="_blank">📩 Dashboard for students based on our calculations</a></p>`,
              
              "ru": `Я проводил масштабную работу по повышению аналитической культуры в компании. На момент моего прихода аналитика строилась на фиксированных SQL-скриптах, которые формировали выгрузки по нажатию кнопки, а сотрудники затем вручную работали с этими данными.  
                      </p><p> Используя только <strong>бесплатные и open-source решения</strong> (<strong>Google Spreadsheets, Google Drive и self-hosted Redash</strong>), мне удалось добиться значительных улучшений:  
                      </p><ul>  
                      <li>В отделе продукта появилась единая система ключевых экономических показателей, благодаря которой все сотрудники оперировали одними и теми же цифрами.</li>  
                      <li>Для клиентского сервиса был разработан инструмент на основе предсказательной модели, который позволял выделять пользователей в <strong>"красной зоне"</strong> с высоким риском оттока.</li>  
                      <li>Для маркетингового отдела был создан инструмент, который позволял сегментировать пользователей и делать <strong>таргетированные рассылки</strong>.</li>  
                      </ul>  
                      <p> Позже аналитическая инфраструктура перешла на новый уровень – было создано <strong>аналитическое хранилище данных</strong> на базе <strong>ClickHouse</strong> и <strong>MongoDB</strong> с оркестрацией через <strong>Airflow</strong>. Я принимал участие в разработке этого решения, а затем занимался его поддержкой в роли инженера данных.  
                      <hr>
					  </p><p><strong>Связанные материалы:</strong></p>  
                      <p><a href="https://public.tableau.com/app/profile/mars.shakirov/viz/longate_22_23/sheet8" target="_blank">📊 Общий отчёт по продлениям</a></p>  
                      <p><a href="Модель предсказания баллов.html" target="_blank">📊 Модель предсказания баллов</a></p>  
                      <p><a href="Исследование оттока longate.html" target="_blank">🔍 Исследование оттока</a></p>  
                      <p><a href="churn_report.html" target="_blank">📈 Итерация модели предсказания оттока</a></p>  
                      <p><a href="marketing_report.html" target="_blank">📩 Исследование для команды маркетинга</a></p>
                      <p><a href="ist_dashboard.png" target="_blank">📩 Дашборд для учеников на основе наших рассчётов</a></p>`

            },
          media: {
            type: "image",
            url: "analytics.png",
            alt: {
              en: "Diagram showing the difference between the old and new analytics structure",
              ru: "Схема, показывающая разницу между старой и новой аналитической структурой"
            }
          }
        }
      ]
    },
    {
      title: {
        en: "Learning Experience Designer",
        ru: "Методист по разработке курсов"
      },
      company: {
        en: "Skyeng",
        ru: "Скайенг"
      },
      period: {
        en: "Oct 2020 - Jun 2021",
        ru: "Окт 2020 - Июн 2021"
      },
      logo: "/skyeng_logo.png",
      website: 'https://skyeng.ru/',
      description: {
        "en": `I initially joined as a physics expert, validating theoretical concepts and problem solutions. However, I quickly became involved in product development.  
                </p><p> I contributed to designing the structure and approach for exam and olympiad preparation in <strong>Skysmart</strong>. This included developing and refining the task creation flow, optimizing how problems should be illustrated, and selecting the best mechanics for engaging students.  
                </p><p> My role extended beyond content creation—I conducted a full methodological cycle: planning lessons, developing content, teaching students, and implementing adjustments based on feedback.`,
        
        "ru": `Я пришёл в компанию как эксперт по физике, занимаясь валидацией теории и решений задач. Однако вскоре углубился в создание самого продукта.  
                </p><p> Участвовал в проектировании структуры подготовки к экзаменам и олимпиадам по физике в <strong>Skysmart</strong>, разрабатывал и улучшал процессы создания задач, определял, как лучше иллюстрировать задания и какие механики наиболее эффективны для вовлечённости учеников.  
                </p><p> Моя работа охватывала полный цикл методической деятельности: от планирования уроков и разработки контента до проведения занятий с учениками и внесения корректировок на основе обратной связи.`
      },
      projects: [
        {
          title: {
            "en": "Historical Insight Video Project",
            "ru": "Проект с видеороликами с исторической справкой"
          },
          description: {
            "en": `We had the opportunity to record physics experiment videos, but we also conceptualized and produced a series of videos featuring <strong>historical insights on famous scientists</strong>. I personally participated in these videos.  
                    </p><p> This initiative introduced more content variety without significant expenses and was well received by students.  
                    <hr>
					</p><p><strong>Related Materials:</strong></p>  
                    <p><a href="https://youtu.be/JNILsKG9-S8" target="_blank">🎥 Example of a historical insight video</a></p>`,
            
            "ru": `У нас была возможность записывать видео с физическими экспериментами, но мы придумали и реализовали серию <strong>роликов с историческими справками о выдающихся учёных</strong>, в которых я также принимал участие.  
                    </p><p> Это позволило увеличить разнообразие контента без значительных затрат и было тепло воспринято учениками.  
                    <hr>
					</p><p><strong>Связанные материалы:</strong></p>  
                    <p><a href="https://youtu.be/JNILsKG9-S8" target="_blank">🎥 Пример видео с исторической справкой</a></p>`
          },
          media: {
            type: "image",
            url: "collage.png",
            alt: {
              en: "Collage of our video recordings with physics experiments and historical insights.",
              ru: "Коллаж о том, как мы записывали видео с физическими экспериментами и историческими справками"
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
        en: "Jun 2015 - Feb 2020",
        ru: "Июн 2015 - Фев 2020"
      },
      logo: "/kfu_logo.png",
      website: 'https://kpfu.ru/',
      description: {
        "en": `For a long time, I studied, taught, and conducted research in theoretical physics. I wrote scientific articles, presented at conferences, and participated in research internships.  
                </p><p> My primary interest was in <strong>computer simulation methods</strong> for various physical processes, ranging from the chaotic dynamics of material bodies to the quantum mechanics governing optical excitation propagation.  
                </p><p> During this period, I actively studied <strong>Matlab</strong> and <strong>Python</strong>, applying my knowledge of <strong>Linux</strong> and <strong>LaTeX</strong> in my research work.`,
        
        "ru": `Я долгое время учился, преподавал и занимался наукой в области <strong>теоретической физики</strong>. Писал научные статьи, выступал на конференциях и проходил стажировки.  
                </p><p> Основной мой интерес был связан с <strong>методами компьютерного моделирования</strong> различных физических процессов — от хаотической динамики материальных тел до квантовой механики, стоящей за распространением оптического возбуждения.  
                </p><p> В этот период я активно изучал <strong>Matlab</strong> и <strong>Python</strong>, а также применял в работе знания <strong>Linux</strong> и <strong>LaTeX</strong>.`
      },
      projects: [
        {
          title: {
            "en": "Internship at the University of Bayreuth",
            "ru": "Стажировка в университете города Bayreuth"
          },
          "description": {
            "en": `In January 2019, I personally arranged an internship with a professor at the <strong>University of Bayreuth</strong> to work on molecular dynamics simulations.  
                    </p><p> As a result, I had an excellent summer, met wonderful people, and ultimately realized that even abroad, a career in science remains a highly niche trajectory.  
                    <hr>
					</p><p><strong>Related Materials:</strong></p>  
                    <p><a href="https://www.gekle.physik.uni-bayreuth.de/en/team/" target="_blank">🌍 University of Bayreuth – Visitors List</a></p>`,
            
            "ru": `В январе 2019 года я самостоятельно договорился с профессором из <strong>университета города Bayreuth</strong> о прохождении стажировки по моделированию молекулярной динамики.  
                    </p><p> В итоге я провёл замечательное лето, познакомился с прекрасными людьми и окончательно убедился, что даже за рубежом наука остаётся весьма нишевой карьерной траекторией.  
                    <hr>
					</p><p><strong>Связанные материалы:</strong></p>  
                    <p><a href="https://www.gekle.physik.uni-bayreuth.de/en/team/" target="_blank">🌍 Университет Bayreuth – Список гостей</a></p>`
          },
          media: {
            type: "image",
            url: "bayreuth.png",
            alt: {
              en: "My wonderful time in Bayreuth",
              ru: "Моё прекрасное время в Байройте"
            }
          }
        },
        {
          title: {
            "en": "Authoring University Courses",
            "ru": "Разработка авторских курсов в университете"
          },
          description: {
            "en": `From the moment I joined the Department of Theoretical Physics, I expressed my desire to change the approach to the <strong>"Modeling and Visualization in Physics"</strong> course.  
                    </p><p> First, together with the primary course author, we revised the problem-solving guide, where I contributed my own problems and attempted to reflect my vision of what students should take away from the course.  
                    </p><p> Later, I fully modernized the course, integrating <strong>Python programming</strong>, <strong>LaTeX formatting</strong>, and practical exercises on <strong>molecular dynamics simulations</strong> and <strong>optical spectrum calculations</strong>. Unfortunately, this updated version of the course was not formally documented in official study materials.  
                    </p><p><strong>Related Materials:</strong></p>  
                    <hr>
					<p><a href="https://kpfu.ru/portal/docs/F1367493855/Tochechnye.otobrazheniya.pdf" target="_blank">📖 Published structured guide used in the "Modeling and Visualization in Physics" course.</p>  
                    <p><a href="https://youtube.com/playlist?list=PLmCLVWoa79_URDW9RRiOwVrL_knw8C7XL&si=OTClCme5_exLc-Yv" target="_blank">🎥 LaTeX Course for Students</a>: A video tutorial series recorded during the pandemic.</p>`,
            
            "ru": `С момента прихода на кафедру теоретической физики я предложил изменить подход к изучению курса <strong>"Моделирование и визуализация в физике"</strong>.  
                    </p><p> В первую очередь, совместно с основным автором курса, мы переработали учебное пособие, куда я добавил авторские задачи и постарался выразить своё видение того, что студенты должны извлечь из прохождения курса.  
                    </p><p> Затем я полностью обновил курс, добавив в него <strong>программирование на Python</strong>, <strong>оформление работ в LaTeX</strong> и задания по <strong>моделированию молекулярной динамики</strong> и <strong>расчёту оптических спектров</strong>. К сожалению, эта версия курса не была формализована в учебных пособиях.  
                    <hr>
					</p><p><strong>Связанные материалы:</strong></p>  
                    <p><a href="https://kpfu.ru/portal/docs/F1367493855/Tochechnye.otobrazheniya.pdf" target="_blank">📖 Опубликованное структурированное пособие, использовавшееся в курсе "Моделирование и визуализация в физике".</p>  
                    <p><a href="https://youtube.com/playlist?list=PLmCLVWoa79_URDW9RRiOwVrL_knw8C7XL&si=OTClCme5_exLc-Yv" target="_blank">🎥 Курс LaTeX для студентов</a>: Видео-курс, записанный во время пандемии для студентов.</p>`
          },
          media: {
            type: "image",
            url: "near_whiteboard.png",
            alt: {
              en: "Photo of me teaching in front of a university whiteboard",
              ru: "Фото, где я веду занятие в университете у доски"
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
        en: "Sep 2012 - Feb 2022",
        ru: "Сен 2012 - Фев 2022"
      },
      logo: "/creator_logo.png",
      description: {
        "en": `At the beginning of my career, I worked as a teacher and tutor, teaching students in various online and offline schools.  
                </p><p> Most of my time was dedicated to preparing students for the <strong>Unified State Exam (ЕГЭ) in Physics</strong>. Additionally, I helped students solve olympiad-level problems in <strong>mathematics and physics</strong>.  
                </p><p> For about three years, I was part of the <strong>collegium of physics olympiad problem creators</strong> for the All-Russian Olympiad.`,
        
        "ru": `В начале своей карьеры я работал преподавателем и репетитором, обучая школьников в различных онлайн и офлайн школах.  
                </p><p> Большую часть времени я занимался подготовкой к <strong>ЕГЭ по физике</strong>, а также немного готовил учеников к решению <strong>олимпиадных задач по математике и физике</strong>.  
                </p><p> Около трёх лет я входил в <strong>коллегию составителей олимпиадных задач</strong> по физике для Всероссийской олимпиады.`
      },
      projects: [
        {
          title: {
            "en": "Educational Content Creation on  different platforms",
            "ru": "Создание образовательного контента на платформах"
          },
          description: {
            "en": `I may not be an expert in content creation, but it so happened that I recorded a large number of educational and science-related videos.  
                    </p><p> I designed a full physics course for <strong>grades 10 and 11</strong> and successfully sold it to an online school. Later, I continued making videos for my students on my <strong>YouTube channel</strong>. Some of these videos gained popularity, despite their modest production quality.  
                    </p><p> One of the most unexpected successes was my <strong>TikTok channel</strong>, where several videos reached hundreds of thousands of views. While I didn't manage to monetize the audience effectively, the experience was certainly fascinating.  
                    </p><p><strong>Related Materials:</strong></p>  
                    <p><a href="https://youtube.com/playlist?list=PLRqVDT_WVZRkKOQFruLNC1v74_jTp6LzW&si=rrCPtVaTRWmWAdC0" target="_blank">📚 Physics Course for 10th Grade</a>.</p>  
                    <p><a href="https://www.tiktok.com/@mars_phys" target="_blank">📱 TikTok Channel</a>: Short videos on physics and science.</p>  
                    <p><a href="https://www.youtube.com/@marsshakirov4507" target="_blank">🎥 YouTube Channel</a>.</p>`,
            
            "ru": `Не уверен, что являюсь экспертом в создании контента, но так уж вышло, что я записал большое количество образовательных и около научных видеороликов.  
                    </p><p> Я разработал полный курс по <strong>физике для 10 и 11 классов</strong> и успешно продал его одной из онлайн-школ. Позже я продолжил снимать видео для своих учеников на своём <strong>YouTube-канале</strong>. Некоторые ролики даже обрели популярность, несмотря на скромное качество записи.  
                    </p><p> Одним из самых неожиданных успехов стал мой <strong>TikTok-канал</strong>, где многие видео набирали сотни тысяч просмотров. Хотя мне не удалось качественно монетизировать эту аудиторию, это был очень интересный опыт.  
                    </p><p><strong>Связанные материалы:</strong></p>  
                    <p><a href="https://youtube.com/playlist?list=PLRqVDT_WVZRkKOQFruLNC1v74_jTp6LzW&si=rrCPtVaTRWmWAdC0" target="_blank">📚 Курс по физике для 10-го класса</a>.</p>  
                    <p><a href="https://www.tiktok.com/@mars_phys" target="_blank">📱 TikTok-канал</a>: Короткие ролики о физике и науке.</p>  
                    <p><a href="https://www.youtube.com/@marsshakirov4507" target="_blank">🎥 YouTube-канал</a></p>`
          },
          media: {
            type: "image",
            url: "forum.png",
            alt: {
              en: "Cover slide of my talk at the online forum",
              ru: "Обложка моего выступления на онлайн-форуме"
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
      },
      cv: {
        en: "Resume",
        ru: "Резюме"
      }
    }
  }
};
