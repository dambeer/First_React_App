## Описание
#### Первый учебный проект React 18 + React Router 6 + API + Axios + WebPack
> Цель: познакомиться с принципами React, понять концепцию работы и расширить познания используемого стека, реализовать минимальную функциональность, имитировать простое получение данных с backend'а. **Проект рассчитан исключительно на работу с React, без цели создать семантически-правильную HTML** верстку 

#### Какие возможности React использовались:
- JSX для реализации возвращаемых элементов из компонентов
- Функциональные компоненты, классовые в проекте не применяются
- Хуки:
  - useState: хранение состояния. Реализовано двойное связывание, чтобы вызывалась перерисовка элемента при изменении состояния.
  - useEffect: выполнение функций во время первого рендеринга или изменения зависимых переменных в [...]
  - useRef: создание неконтролируемого компонента, получение его значения(HTML-элемент), хранение состояния между перерисовками
  - useMemo: мемоизация для предотвращения лишних перерисовок, если не меняется значение переменных в [...]
  - useNavigate - для редиректа
  - useContext - для хранения глобальных данных, чтобы не передавать Props на большую вложенность
  - useParams - извлечение параметров из строки URL
  - Кастомные хуки
 - Декомпозиция на компоненты и использование export/import
 - CSS modules
 - Props для передачи значения от родительского компонента к дочернему
 - Callback для передачи значения от дочернего компонента к родительскому 
 - Преобразование массива  значений в массив React компонентов и их отрисовка
 - Context
 - React router:
   - BrowserRouter - обозначаем какой роутер будет использоваться (для работы с DOM-элементами в браузере)
   - Routes - содержание различных маршрутов и их сопоставление, согласно указанному пути
   - Route - компонент, который принимает props path и element, необходимый отрисовать
   - Link - создание ссылок
   - Navigate для редиректа
   - NavLink - для редиректа/создания ссылки редиректа
---
#### Функциональность приложения:
1. Добавление постов в модальном окне: при клике вне popup происходит закрытие окна, при этом клик по самому popup не закрывает окно
2. Сортировка по заглавию/описанию
3. Поиск по заглавию
> Использован useMemo для предотвращения лишней траты ресурсов при повторном рендеринге.
4. Удаление постов
5. Пагинация + бесконечная лента
6. Страница поста, открывающаяся по кнопке и комментарии к нему
7. Аунтентификация (формальная, для реализации приватных/публичных полей)
8. Переадресация при login/logOut/неверном URL
9. Приватные и публичные маршруты


## Description
#### First training project React 18 + React Router 6 + API + Axios + WebPack
> Objective: to get acquainted with the principles of React, understand the concept of work and expand knowledge of the stack used, implement minimal functionality, simulate a simple retrieval of data from the backend. **Project is designed to work with React only, without the goal to create semantically correct HTML** layout 

#### What React features were used:
- JSX to implement return elements from components
- Functional components, class components are not used in the project
- Hooks:
  - useState: state storage. Implemented double binding so that element redrawing is called when the state changes.
  - useEffect: execution of functions during the first rendering or change of dependent variables in [...]
  - useRef: create an unsupervised component, get its value(HTML element), store state between redraws
  - useMemo: memoization to prevent unnecessary repaints if variables in [...]
  - useNavigate - for redirect
  - useContext - to store global data so that we don't have to pass Props for large nesting
  - useParams - to extract parameters from URL string
  - Custom hooks
 - Decomposition into components and use/import
 - CSS modules
 - Props to pass values from parent to child
 - Callback for passing a value from a child to a parent 
 - Converting an array of values into an array of React components and rendering them
 - Context
 - React router:
   - BrowserRouter - designate which router will be used (to work with the DOM elements in the browser)
   - Routes - the contents of different routes and their mapping, according to the specified path
   - Route - a component that receives props path and element to render
   - Link - link creation
   - Navigate for redirect
   - NavLink - for redirecting/creating a redirect link
---
#### Application functionality:
1. Adding posts in a modal window: clicking outside the popup will close the window, but clicking on the popup itself will not close the window
2. Sorting by title/description
3. Search by title
> UseMemo is used to prevent unnecessary waste of resources on redrawing.
4. Deleting posts
5. Pagination + infinite ribbon
6. Page of the post opening on the button and comments to it
7. Authentication (formal, to implement private/public fields)
8. Redirect for login/logOut/invalid URL
9. Private and public routes
