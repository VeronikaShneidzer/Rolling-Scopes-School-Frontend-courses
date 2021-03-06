| Deadline  | Folder name |
|-----------|-------------|
| 16.10.2017 23:59 | positions-and-floats |

# Homework: positions-and-floats

Create web page, strictly according to:

**[Orange-Rabbit layout](https://github.com/StanislauZubovich/UXMiniLab/blob/2017-Q3/designs/cssreciepes/orange-rabbit.psd)**

Pixel Perfect is reference point of the task.

## Как сдавать

Сверстанный макет и папки с контентом залить в ветку *positions-and-floats* в своем **приватном** репозитории. Сделать пулл реквест и указать в ревьюверах своего ментора.

## Критерии оценки

За полностью выполненное задание, без нарушений - **100 баллов**.

**!оценка: 0-10** означает, что если требование полностью не выполнено, то выставляется 0 баллов; если полностью выполнено, то выставляется 10 баллов; за частичное выполнение выставляется промежуточное значение на усмотрение ментора.

Также баллы могут сниматься за ошибки, указанные в ТЗ.

## Техническое Задание

1. Общее:
	 - Файл HTML назвать index.html
	 - Сделать отдельные папки с картинками, шрифтами, стилями. Если все будет в одном каталоге на уровне с index.html, **минус 10 баллов**.

2. Семантическая верстка:
	 - Использование HTML5 тегов, таких как header (logo + nav), section, article, footer (copyright), form+fields, figure+figcaption;
	 **!оценка: 0-10**
	 - Правильное и разумное наименование классов, избегать наименований вроде .orange-square, .left, .big, .horse, а использовать правильные, вроде .heading, .team-link, .member, .avatar-capture, а так же псевдоклассы, вроде :first-child, last-child и другие;
	 **!оценка: 0-10**
	 - Использование id для стилей - ошибка, ** минус 5 баллов**.

3. Логотип сделать одной картинкой (не надо отдельно делать каждый слой, это касается главного лого).
**!оценка: 0-5**

4. На странице должен быть 1 элемент h1. В иделе - слова orange + RABBIT.
**!оценка: 0-5**

5. Навигация выполнена с использованием тега nav. Иконки внутри - изображение в виде спрайта. Это все должно быть ссылками. На hover должен происходить хотя бы минимальный эффект, на ваше усмотрение.
**!оценка: 0-10**

6. Header должен быть fixed.
**!оценка: 0-5**

7. Шрифты. Их всех можно найти бесплатно, ниже будут приведены ссылки. Проверить правильное подключение. Причем правильно нужно подобрать и подходящий вес шрифта.
**!оценка: 0-10**

8. Требования по колонкам, которые расположены в ряд горизонтально:
	 - Проверяем, что случится, если мы в колонке увеличим количество текста, просто копируем внутрь больше текста. (Расположение колонок не должно портиться, ограничение на overflow);
	**!оценка: 0-5**
	 - Проверяем, что случится, если мы добавим еще одну колонку. (Она должна быть либо под первой колонкой, либо посередине следующей строки, либо быть скрыто свойством overflow, но никак не 5-м видимым элементом в строку, выходящим за границу макета)
	**!оценка: 0-5**
	 - Если использован display: inline-block, убедиться в том, что нету "пробельного" зазора между элементами в строке. Если есть, **минус 5 баллов**.
   
9. Картинки в разделе "team" нужно найти в интернете самостоятельно. Они должны иметь формат обычных изображений (прямокгольник или квадрат) и должны быть обработаны средствами CSS (border, border-radius). В идеале сделать картинки с подписями в виде figure+figcaption.
**!оценка: 0-10**

К подписям применяем проверку по пункту 8a, к блокам пояснение+картинка+подпись - пункты 8b+8c. Оценка согласно пунктам.

10. Форма должна быть оформлена в виде тега form и всего надлежащего внутри. Форма должна содержать базовую валидацию на Email, а поля Name и email должны быть required.
**!оценка: 0-10**

11. Footer должен прибит к низу и содержать только copyright текст. Прибитие значит, что если убрать контент на странице, кроме хедера и футера, то футер будет все равно внизу.
**!оценка: 0-5**

12. Использование flexbox в этом задании запрещено. **Штраф: минус 30 баллов.**

## Полезные ссылки

[Презентации](https://github.com/rolling-scopes/front-end-course/wiki/Position.-Floats.-Semantics.-CSS3)


[Видео лекции от 06.10.2017](https://youtu.be/gYYWe7vlEQk)

Где искать шрифты:

С помощью строки поиска в [Fontsquirel](https://www.fontsquirrel.com/)

[MyriadPro-Regular](http://www.fontpalace.com/font-download/MyriadPro-Regular/)
