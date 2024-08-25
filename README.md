# React + Vite

## Run using docker

- docker build -t mark-ii-react .
- docker run -p 5173:5173 mark-ii-react

## Run with package manager

- yarn install
- yarn dev

## Run storybook

- yarn storybook

## Backend

- Uses api from Mark-i https://github.com/SandipBajracharya/Mark-i

### Note for self
- uses High Order component for Dashboard layout and route layout for general Guest layout
- uses High Order Component for admin auth check and for general there is logic in parent component in route layout for normal user
