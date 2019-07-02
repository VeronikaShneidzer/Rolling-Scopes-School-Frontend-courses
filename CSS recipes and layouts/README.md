# CSS Recipes & Layouts. Responsive Web Design

Create web page, strictly according to: **[Racoon blog layout](https://www.dropbox.com/s/gd9m1w2t19b3qlx/responsive_blog_remastered.psd?dl=0)**

No Pixel Perfect required

## Как сдавать

Сверстанный макет и папки с контентом залить в ветку *css-recipes-and-layouts* в своем **приватном** репозитории. Сделать пулл реквест и указать в ревьюверах своего ментора.

## Критерии оценки

За выполненое в срок задание - начисляется **100 баллов**. Баллы снимаются за ошибки, указанные в ТЗ. Общий балл не может быть ниже 0.

Исполнение mobile-to-desktop или desktop-to-mobile роли не играет.

Верстка полностью резиновая - Это значит, что должны поддерживаться все разрешения экрана от 320px до 1920px. Т.е. ваша структура не должна ломаться, даже если разрешение нестандартное.

## Техническое Задание:

### За что снимаются баллы:

1. Общее:

- Файл HTML назвать index.html
- Сделать отдельные папки с картинками, шрифтами, стилями. Если все будет в одном каталоге на уровне с index.html, **-20**.
- При наведении на активный элемент, курсор не принимает значение "pointer", или надписи в меню не выделяются визуально. **-20**.

2. Семантическая верстка:

- отсутствие html5 элементов для обозначения составных частей **-10**.
- Неправильное наименование классов **-10**.
- Использование id для стилей **-10**.

3. Responsive WEB:

- Не реализован какой-либо из фарматов (mobile, tablet, desktop) **-20**.
- Нет применения media-queries **-20**.
- Все должно строиться на flexbox либо grid. Применение float, clear, inline-block - ошибка. **-10**.
- Поддержка браузеров: Google Chrome 63+, FireFox 58+, Microsoft Edge 40+ (Microsoft EdgeHTML 16+). Браузер не поддерживается **-10**.

4. Header:

- Ошибки в логотипе, он не центрирован. **-10**.
- Навигационные элементы не соотвествуют дизайну. **-10**.

5. Main content:

- На элементах соцсетей цифры - это отдельные динамические элементы. Если сделано одной статичной картинкой. **-20**.
- При масштабировании, если элементы начинают налазить друг на друга, или выходить за размеры экрана. **-20**.
- Шрифты не соотвествуют заданным. **-10**.
- Элементы переключения табов (разделов) не активны **-10**.

6. Footer:

- Его нет. Снизу должен быть загрузочный спиннер. И он должен быть центрирован. Ничего более.

7. Если в работе присутствуют другие недочеты и ошибки, оценка может быть снижена по усмотрению проверяющего.

### Полезные ссылки

[Презентация RWD+Flexbox](https://github.com/rolling-scopes/front-end-course/wiki/Responsive-Web-Design.-Flexbox)

[Презентация CSS Grid](http://slides.com/ra_levis/deck)

[Видео лекции от 27.10.2017](https://youtu.be/k2GtDJKC6HQ)
