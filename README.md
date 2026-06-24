# 🆕 NewTypes

**NewTypes** — это учебный проект, демонстрирующий использование современных типов и возможностей TypeScript в веб-приложении. Проект включает базовую логику корзины, фильмов и приложения, написанную на TypeScript, с последующей сборкой через Webpack.

## 🚀 Технологический стек

- **Языки**: JavaScript, TypeScript, HTML, CSS
- **Сборщик**: Webpack 5
- **Транспиляция**: Babel
- **Тестирование**: Jest (через `__tests__`)
- **Типизация**: TypeScript

## 📦 Установка и запуск

1. **Клонируйте репозиторий:**
   ```bash
   git clone https://github.com/username/NewTypes.git
   cd NewTypes
   ```

2. **Установите зависимости:**
   ```bash
   npm install
   ```

3. **Запустите проект в режиме разработки:**
   ```bash
   npm start
   ```

4. **Соберите проект для продакшена:**
   ```bash
   npm run build
   ```

5. **Запустите тесты:**
   ```bash
   npm test
   ```

## 💡 Примеры использования

### Импорт и использование модуля корзины:
```typescript
import { Cart } from './cart';

const cart = new Cart();
cart.addItem({ id: 1, name: 'Movie', price: 9.99 });
console.log(cart.getTotal()); // 9.99
```

### Работа с типом Movie:
```typescript
import { Movie } from './movie';

const movie: Movie = {
  id: 1,
  title: 'Inception',
  year: 2010,
  genre: 'Sci-Fi'
};
console.log(movie.title); // Inception
```

## 📁 Структура проекта

```
NewTypes/
├── babel.config.json          # Конфигурация Babel
├── package.json               # Зависимости и скрипты
├── package-lock.json          # Lock-файл зависимостей
├── tsconfig.json              # Конфигурация TypeScript
├── webpack.config.js          # Конфигурация Webpack
└── src/
    ├── css/
    │   └── style.css          # Стили приложения
    ├── index.html             # HTML-шаблон
    ├── index.js               # Точка входа JavaScript
    └── scripts/
        ├── __tests__/         # Тесты (Jest)
        ├── app.ts             # Основной модуль приложения
        ├── cart.ts            # Модуль корзины
        └── movie.ts           # Тип/модуль фильма
```

## 📄 Лицензия

Проект распространяется под лицензией **MIT**. Подробнее — в файле `LICENSE`.