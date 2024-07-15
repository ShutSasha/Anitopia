# Используем базовый образ для сборки
FROM node:20.15.0 AS builder

WORKDIR /usr/src/app

# Копируем только файлы зависимостей
COPY package.json yarn.lock ./

# Устанавливаем зависимости
RUN yarn install --frozen-lockfile

# Копируем весь исходный код
COPY . .

# Сборка проекта
RUN yarn run build

# Используем более легкий образ для выполнения
FROM node:20.15.0-slim

WORKDIR /usr/src/app

# Копируем только необходимые файлы из сборочного образа
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY package.json yarn.lock ./

# Указываем порт, который будет использоваться
EXPOSE 3030

# Команда для запуска приложения
CMD ["yarn", "run", "start:prod"]
