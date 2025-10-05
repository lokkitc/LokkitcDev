# Конфигурация портфолио

Этот проект имеет удобную систему конфигурации для настройки цветов, текста и стилей.

## 📁 Структура конфигурации

```
src/config/
├── theme.ts      # Цвета, шрифты, отступы, тени
├── content.ts    # Весь текстовый контент на русском языке
└── themeUtils.ts # Утилиты для работы с темой
```

## 🎨 Настройка цветов и стилей

### Основные цвета (`src/config/theme.ts`)

```typescript
colors: {
  primary: '#2563eb',        // Основной синий цвет
  primaryDark: '#1d4ed8',    // Темно-синий для hover
  secondary: '#667eea',      // Вторичный цвет
  accent: '#fbbf24',         // Акцентный желтый
  accentDark: '#f59e0b',     // Темно-желтый для hover
  
  // Цвета текста
  textPrimary: '#1f2937',    // Основной цвет текста
  textSecondary: '#4b5563',  // Вторичный цвет текста
  textMuted: '#6b7280',      // Приглушенный цвет текста
  textLight: '#9ca3af',      // Светлый цвет текста
  textWhite: '#ffffff',      // Белый цвет текста
  
  // Цвета фона
  backgroundPrimary: '#ffffff',   // Белый фон
  backgroundSecondary: '#f8fafc', // Светло-серый фон
  backgroundDark: '#1f2937',      // Темный фон
}
```

### Как изменить цвета:

1. Откройте `src/config/theme.ts`
2. Измените нужные цвета в объекте `colors`
3. Сохраните файл - изменения применятся автоматически

## 📝 Настройка текста

### Изменение содержимого (`src/config/content.ts`)

Весь текст сайта находится в файле `content.ts`. Структура:

```typescript
export const content = {
  // Навигация
  nav: {
    home: 'Главная',
    about: 'Обо мне',
    skills: 'Навыки',
    projects: 'Проекты',
    contact: 'Контакты'
  },
  
  // Главная секция
  hero: {
    greeting: 'Привет, я',
    name: 'Бекзат',
    title: 'Фулстек разработчик',
    description: 'Описание...',
    viewWorkBtn: 'Посмотреть работы',
    contactBtn: 'Связаться со мной'
  },
  
  // ... остальные секции
}
```

### Как изменить текст:

1. Откройте `src/config/content.ts`
2. Найдите нужную секцию
3. Измените текст
4. Сохраните файл

## 🛠 CSS переменные

В проекте используются CSS переменные для всех цветов и стилей:

```css
:root {
  --color-primary: #2563eb;
  --color-text-primary: #1f2937;
  --font-size-base: 1rem;
  --spacing-lg: 2rem;
  /* ... и многие другие */
}
```

### Использование в CSS:

```css
.my-element {
  color: var(--color-primary);
  font-size: var(--font-size-lg);
  padding: var(--spacing-md);
  border-radius: var(--border-radius-lg);
}
```

## 🎯 Быстрые изменения

### Изменить имя:
1. `src/config/content.ts` → `hero.name: 'Ваше имя'`

### Изменить профессию:
1. `src/config/content.ts` → `hero.title: 'Ваша профессия'`

### Изменить основной цвет:
1. `src/config/theme.ts` → `colors.primary: '#ваш-цвет'`

### Изменить контактную информацию:
1. `src/config/content.ts` → секция `contact.contactInfo`

### Изменить описание проектов:
1. `src/config/content.ts` → массив `projects.projectsList`

## 🌈 Предустановленные темы

Вы можете легко создать новые цветовые схемы, изменив значения в `theme.ts`:

### Темная тема:
```typescript
colors: {
  primary: '#3b82f6',
  backgroundPrimary: '#1f2937',
  textPrimary: '#ffffff',
  // ...
}
```

### Зеленая тема:
```typescript
colors: {
  primary: '#10b981',
  accent: '#34d399',
  // ...
}
```

## 📱 Адаптивность

Все стили автоматически адаптируются под разные экраны. Вы можете настроить брейкпоинты в CSS файлах компонентов.

## 🔧 Дополнительные утилиты

Используйте `themeUtils.ts` для программного изменения темы:

```typescript
import { applyTheme, getCSSVariable } from './config/themeUtils';

// Применить кастомную тему
applyTheme({
  colors: {
    primary: '#ff6b6b'
  }
});

// Получить значение CSS переменной
const primaryColor = getCSSVariable('--color-primary');
```

---

**Совет**: После любых изменений в конфигурации сайт автоматически обновится благодаря горячей перезагрузке Vite!