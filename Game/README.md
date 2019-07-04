## Game (JavaScript + HTML or Canvas/WebGl/SVG).

Предыдущие коммиты игры:

![Screen 1](https://raw.githubusercontent.com/NikaNeider/NikaNeider.github.io/master/commits1.png)
![Screen 2](https://raw.githubusercontent.com/NikaNeider/NikaNeider.github.io/master/commits2.png)


Вам необходимо сделать упрощенный клон игры https://www.prodigygame.com/  
Пример геймплея: https://www.youtube.com/watch?v=XXUIRnQ4EJ4  
Целевая аудитория: дети 6-8 лет.

### Минимальная функциональность:
  1) Экран дуэли
  2) Модальный диалог выбора заклинания
  3) Экран задачи
  4) Экран таблицы рекордов
  
### Пример геймплея по шагам:
1. Битва начинается, у игрока и монстра по 100hp или более.
2. Игрок выбирает заклинание первым. Выбор заклинания осуществляется посредством модального диалога. Название и последующая анимация заклинаний - на ваше усмотрение. Виды заклинаний также на ваше усмотрение - могут, как наносить урон, так и лечить. 
3. Игрок переходит к экрану задачи. В случае успешного решения - заклинание применяется, иначе - переход хода к монстру. 
4. Монстр применяет заклинание, наносит урон игроку.
5. Если игрок победил - битва со следующим монстром. Если проиграл - показывается таблица рекордов, с количеством побежденных монстров и именем героя. 

### Варианты экрана "задача":
 1) Решение базовых арифметических примеров. В данном случае генерируется случайная пара чисел и случайная операция с ними.  Например, 25 + 67 или 130 - 7, или 7 x 11 и т.д.
 2) Перевод с анлийского на русский. В данном случае игрок видит случайное английское слово (например, "cat") и должен ввести перевод. Правильных переводов может быть несколько (кот, кошка, котик и т.д.) Словарь должен находится в отдельном файле и легко конфигурироваться. Админку управления словарем делать не надо.  
 3) Буквы слова перемешаны, необходимо, используя drag&drop, восстановить порядок. Например, lleyow -> yellow. Пример интерфейса - https://jqueryui.com/sortable/
 4) Аудирование. https://mdn.github.io/web-speech-api/speak-easy-synthesis/ Произносится слово, необходимо его вписать. 
 5) Любые другие
 
### Монстры:
1) Автогенеренное имя. Имя получается путем слияния элементов из трех массивов. 
   В первом массиве прилагательное - "ужасный", "злобный", "сопливый" и т.д. 
   Во втором - "Огр", "Гном", "Гоблин" и т.д.
   В третьем - "Том", "Макс", "Дима" и т.д.
   В итоге - "Злобный Огр Том"
 2) Автогенеренное тело - "из частей". Вы определяете несколько "голов", "туловищ", "ног", "оружия", из которых собирается итоговый монстр. 
 Пример - https://drive.google.com/open?id=12TYpEwRPKjwkC3Q61aAqmxL8wsbVw6pP
 
### Технические требования:
1) Поддержка Сhrome последней версии. 
2) Язык - JS/ES2015+ или TypeScript
3) Использование любых игровых движков/фреймворков (например, https://phaser.io/) - запрещено. 
   Библиотеки и фреймворки типа react/angular/vue/jquery/bootstrap использовать можно.
4) Финальная версия игры должна быть доступна по ссылке. Самый просто способ - выложить на GitHub pages. (e.g. https://themarkmarrone.github.io/petrovich/, https://spider-shooter.github.io)
5) Landing page. Должна содержать следующую информацию:
   - Название игры
   - Скриншоты геймплея
   - Ссылку для запуска игры
   - Информацию об авторе 
   - Если игру делали два человека - четкое разделение того, кто и что делал. 

### Критерии оценки:
- Есть Landing page +15 баллов
- Используется Webpack +15 баллов
- Есть кастомный компонет "модальный диалог", который используется для выбора заклинаний, игровых настроек и т.д. +5 баллов
- Есть несколько видов заклинаний (два и более) и их анимация с аудио эффектом +15 баллов.
- Есть автогенерация монстров (имя и тело) + 15 баллов
- Есть экран задачи +15 баллов. За второй еще +15. За третий еще + 10. За последующие +5 баллов. Задачи не из списка *Варианты экрана "задача"* оцениваются в 5 баллов максимум. Всего в игре может быть максимум 15 видов задач. Итого: максимальная оценка за этот пункт - 100 баллов. 
- Есть экран "таблица рекордов" +10 баллов 

### Процесс сдачи: 
 - Финальную оценку и проверку выполяняет НЕ ваш ментор. Списки "студент-проверяющий" будут оглашены после дедлайна.
 - У вас будет до 30 минут на презентацию работы
 - Другие студенты могут присутствовать/ задавать вам вопросы.
 - Формат - оффлайн или онлайн в зависимости от локации/возможностей принимающего
 - Отправить ссылку на на Landing Page c игрой в google форму: https://docs.google.com/forms/d/e/1FAIpQLSfrlXeBvLCO9Y8qyk0VRJ2tUCGcVbZ5Ly7sL3ESVssYLtVM6Q/viewform

#### Useful links:
1) https://habrahabr.ru/post/184666/  
2) http://opengameart.org/
3) http://robinbobin.livejournal.com/4066704.html
4) https://cdn.scratch.mit.edu/scratchr2/static/__787158ad1362201586979068ba002765__/help/ru/howto/fly-intro.html
5) https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript

// install, run, open game.html and refresh it to see changes