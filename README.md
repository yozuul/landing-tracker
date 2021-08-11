# Landing Tracker
Трекер посетителей сайта. Позволяет получать информацию о визитах и данных из любых форм на сайте.
Node.js, Koa, Sequelize.
##Настройка приложения
Установить приложение в любую папку на сервере:
```
git clone https://github.com/yozuul/landing-tracker.git
```
```
npm i
```
Подключить к серверу домен и настроить SSL

Настроить конфиг `config/config.default.js`
- `server.url` - ваш домен
- `cURL` - если при визите или отправке данных из формы, необходимо выполнить cURL запрос
- `db` - настройки подключения к базе данных
- `tables` - названия таблиц и столбцов в которые будут сохраняться данные
После настройки конфига, пересобрать скрипт трекинга `public/tracker.js`:
```
yarn rollup
```
```
npm run rollup
```
##Настройка домена
Подключенный к основному серверу домен обрабатывает POST запросы от скрипта `public/tracker.js` подключаемого на другие сайты, и перенаправляет на localhost:3000 где работает приложение.
Пример конфига Nginx:
```nginx
server {
    location /api/addUserVisit {
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-NginX-Proxy true;
        proxy_pass http://localhost:3000/addUserVisit;
        proxy_ssl_session_reuse off;
        proxy_set_header Host $http_host;
        proxy_cache_bypass $http_upgrade;
        proxy_redirect off;
    }

    location /api/addFormClick {
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-NginX-Proxy true;
        proxy_pass http://localhost:3000/addFormClick;
        proxy_ssl_session_reuse off;
        proxy_set_header Host $http_host;
        proxy_cache_bypass $http_upgrade;
        proxy_redirect off;
    }

    listen 443 ssl http2;
    listen [::]:443 ssl http2;

    server_name example.ru;
    root /var/www/example.ru/html;
    index index.html index.xml;

    ssl_certificate /etc/letsencrypt/live/example.ru/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.ru/privkey.pem;
    ssl_trusted_certificate /etc/letsencrypt/live/example.ru/chain.pem;

}
```
##Подключение трекинга и запуск приложения

Добавить в исходный код нужных сайтов скрипт трекинга:
```
<script async src="https://domain.ru/tracker.js"></script>
```
Установить глобально пакеты:
```
yarn global add rollup nodemon pm2
```
```
npm i -g rollup nodemon pm2
```
Запуск в режиме отладки через:
```
yarn dev
```
```
npm run dev
```
Запуск в боевом режиме:
```
yarn start
```
```
npm start
```
Остановка приложения:
```
yarn stop
```
```
npm stop
```
Проверка запущенного процесса:
```
pm2 list
```
