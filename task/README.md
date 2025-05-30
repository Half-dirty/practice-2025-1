# Проектная практика

### 1. Базовая часть задания

1. **Настройка Git и репозитория:**
   - Была зарегистрирована учётная запись на GitHub.
   - Создан новый репозиторий.
   - Выполнено клонирование репозитория на локальную машину.
   - Созданы и настроены ветки.
   - Репозиторий структурирован в соответствии с требованиями.
  
   - [x] Выполнено.

2. **Написание документов в Markdown:**  
   Для документального сопровождения проекта были созданы следующие Markdown-файлы:
   
   - [Описание проекта](../docs/description.md)
   - [Журнал прогресса](../docs/progress.md)
   - [Участники проекта](../docs/members.md)
   - [Информация о подпроекте](../docs/attestation-platform.md)
   
   В процессе:
   
   - Был изучен синтаксис Markdown: заголовки, списки, ссылки, выделение, таблицы.
   - Все файлы оформлены с соблюдением единых стилевых стандартов и структуры.

   - [x] Выполнено.

3. **Создание статического веб-сайта:**

   [Открыть сайт](https://half-dirty.github.io/practice-2025-1/site/)

   - [x] Выполнено.

4. **Взаимодействие с организацией-партнёром:**  
   В рамках практики был организован визит в Центральный научно-исследовательский институт русского жестового языка (ЦНИИ РЖЯ) — партнёра Мосполитеха и основного заказчика проекта.  
   В ходе встречи были подробно изучены этапы процедуры аттестации переводчиков РЖЯ, получена консультация от директора института Харламенкова Алексея Евгеньевича, а также рассмотрены реальные документы и примеры экзаменационных сессий.  
   Дополнительно участник получил практический опыт в работе с 3D-оборудованием: продемонстрирована 3D-печать и выполнено 3D-сканирование при помощи мобильного сканера Creality CR-Scan Raptor.  
   Отчёт о визите: [partner-visit-report.md](../reports/partner-visit-report.md)
   
   - [x] Выполнено.

5. **Отчёт по практике**

   Итоговый отчёт по проектной (учебной) практике **успешно составлен** и размещён в репозитории.
   
   - **Файл отчёта (DOCX)**: [Отчёт.docx](https://github.com/Half-dirty/practice-2025-1/blob/master/reports/report.docx)
   - **Файл отчёта (pdf)**: [Отчёт.pdf](https://github.com/Half-dirty/practice-2025-1/blob/master/reports/report.pdf)
   
   Файлы отчёта размещаются в папке [`reports`](https://github.com/Half-dirty/practice-2025-1/tree/master/reports) репозитория.
   
   Структура и содержание отчёта соответствуют шаблону practice_report_template.docx.
   
   - [x] Выполнено.

---

### 2. Вариативная часть задания

В рамках вариативной части практики был реализован индивидуальный проект **Resume Creator** — полноценный веб-сервис для генерации PDF-резюме на основе введённых пользователем данных. Проект основан на статье [How to build your own HTTP server in Python](https://joaoventura.net/blog/2017/python-webserver/) и расширен следующими модификациями:

- Добавлен Flask-сервер для маршрутизации и обработки форм.
- Реализован HTML-интерфейс с адаптивной вёрсткой.
- Использован JavaScript для интерактивной отправки формы через AJAX.
- Подключена генерация PDF через `wkhtmltopdf` и библиотеку `pdfkit`.
- Реализована страница успеха и механизм скачивания сгенерированного файла.

В проекте применён стек: **Python (Flask), HTML, CSS, JavaScript, wkhtmltopdf**.

#### Основные материалы

- [Подробное описание проекта и архитектуры](https://github.com/Half-dirty/practice-2025-1/blob/master/docs/description_for_optional_part.md)
- [Пошаговое руководство по реализации с кодом и диаграммами](https://github.com/Half-dirty/practice-2025-1/blob/master/docs/guide_for_optional_part.md)
- [Финальный отчёт по работе и хронология реализации](https://github.com/Half-dirty/practice-2025-1/blob/master/reports/report_for_optional_part.md)

- [x] Выполнено.

---

### Структура git-репозитория

В рамках практики следует придерживаться заданной структуры git-репозитория, приведённой в файле [git_structure.md](git_structure.md).

---

### Контрольные сроки

Сроки контрольных мероприятий приведены в файле [terms.md](terms.md).

---

### Литература и интернет-ресурсы

1. Введение в CSS верстку:
   https://developer.mozilla.org/ru/docs/Learn_web_development/Core/CSS_layout/Introduction
2. DevTools для «чайников»:
   https://habr.com/ru/articles/548898/
3. Элементы HTML:
   https://developer.mozilla.org/ru/docs/Web/HTML/Element
4. Основы HTML:
   https://developer.mozilla.org/ru/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content
5. Основы CSS:
   https://developer.mozilla.org/ru/docs/Web/CSS
6. https://doka.guide/
7. Официальная документация Git:
   https://git-scm.com/book/ru/v2
8. https://skillbox.ru/media/code/chto_takoe_git_obyasnyaem_na_skhemakh/
9. Бесплатный курс на Hexlet по Git:
   https://ru.hexlet.io/courses/intro_to_git
10. Уроки по Markdown:
    https://ru.hexlet.io/lesson_filters/markdown

---

### Информация для сведения

- Общие задачи занимают 32–40 часов, дополнительные проекты добавляют 32–40 часов, что в сумме соответствует 72 часам.
- Выбор между индивидуальной и групповой работой (до 3 человек) позволяет адаптировать задание под ваши предпочтения.
- Возможность использовать как GitHub, так и GitVerse обеспечивает гибкость и доступ к современным инструментам.
- Исследовательские проекты и технические руководства, основанные на технологиях из [codecrafters-io/build-your-own-x](https://github.com/codecrafters-io/build-your-own-x), помогут развить навыки анализа, программирования и документирования.
