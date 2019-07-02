# CodeJam-4 "CSS Quick Draw Scoreboard"

- **Deadline:** 20-05-2018 23:00
- **Куда сдавать:** Приватный репозиторий, бранч "code-jam4-scoreboard", папка "code-jam4-scoreboard", минимум 2 коммита, далее Pull Request вешать на своего ментора. Названия коммитов должны следовать гайдлайну по наименованию - https://github.com/rolling-scopes-school/lectures/blob/master/lectures/git.md
После создания Pull Request бросьте ссылку на ваш приватный репозиторий вот сюда - https://docs.google.com/forms/d/e/1FAIpQLSf-AcdmwR8Z553GoRBOgDqvZ1yU0Th-i2r5yhi3tBIcAaXmWg/viewform.
- **Ограничение:**
    - Должно работать в Chrome
    - Активное использование https://lodash.com/ приветствуется 
    - Можно гуглить, общаться между собой и пользоваться stackoverflow

- **Что сдавать / критерии оценки:**
    - +5 баллов
      - Создать пустую html страницу (Например, index.html). 
      - Добавить в index.html radio button для возможности переключения сессии, которую необходимо визуализировать.
    - +55 баллов
      - "Подготовить" любым способом дампы к визуализации (так как их нельзя просто так подключить к index.html).
      - Построить таблицу, в которой первая колонка - GitHub Участника, а далее идут колонки с названием пазла и временем, затраченным участником для его решения. По ховеру на ячейку, показывающей время, должен появляться tooltip, показывающий селектор, который был введен участником при решении пазла. Названия пазлов в таблицы не должны быть захардкоданы, а получены из массива  `puzzles`. Пример таблицы смотрите ниже.
    - +5 баллов
      - По переключению radio button - отображать соответсвующие сессии (`rsschool` или `rsschool-demo`).
    - +35 баллов
      - В таблицу добавить колонку "Comparison", которая будет содержать чекбоксы. "Чекнутые" строки будут отображаться в 
      виде Line Chart (например, http://www.chartjs.org/samples/latest/charts/line/basic.html). Одновременно может быть выбрано до 10 строк. Line Chart по оси Х отображает название пазла, по Y - время решения, в легенде чарта - гитхаб игрока.
      Можно использовать готовый компонент Line Chart. 
    - +20 баллов
        Предложить 3-5 альтернативных вариантов визуализации результатов.  Описание должно быть на английском языке в файле readme.md.
 
Пример таблицы:
  
| DisplayName Участника  | ${Название первого пазла} | ${Название второго пазла} | ${и т.д.} | Общее время |
|-----------|-------------|-------------|-------------|-------------|
| Alexander Gerasimov | 13 | 37 | 42 | 92 |
| Kiril Knysh | 5 | 25 | 125 | 155 |
| Dzmitry Varabei | 15 | 150 | 150 | 315 |  

### Пояснение
Дампы предыдущего CodeJam "CSS Quick Draw" лежат в папке:
https://drive.google.com/open?id=18rs--eJqlngcgd41apA8Kc_CvwkqRFNB

В файле sessions.json одновременно лежат 2 сессии (`rsschool` и `rsschool-demo`), граница на строчке 14391.

Данные по каждому пазлу можно найти в поле `rounds`. Внутри каждого round’a есть хэшмэп `solutions`, где ключ — это id игрока из users.json (`uid`).

Solution каждого игрока — это последний полученный от игрока ввод.
Поэтому для каждого игрока из `users` в каждом раунде солюшен может быть Correct, Incorrect или его может не быть вообще
(если игрок не играл). В этом случае мы просто начисляем полное время пазла (для всех пазлов это 150 секунд).


### My options for data visualization.

* For each task in the session, make a graph showing the solutions. When you hover on solution, you will see a list of users who have solved this task.

* For each task in the session, make a graph showing the time in descending order. When you hover on time, you will see a list of users and their solution.

* Make a visualization of the speed of printing answers to tasks. The formula is simple. It is necessary to divide the time of the task by the number of symbols in the solution.

* Make a graph with the percentage of solving tasks by all students. This will help identify the most difficult tasks.

* Basis of a few sessions make a graph with the percentage of solutions in the sessions. For example, in the first session user decided 40%, and in the second - 10%. This will help to track the dynamics of student learning.