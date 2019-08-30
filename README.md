

1、解决前后端分离产生的跨域问题【尚未完全解决】：
  采用nginx进行域的统一，注意端口号要与版本自带端口号一致，否则部分自动化失效，单是一致又带来了无法区分远程接口的问题。
    server {
        listen              801;
        server_name         app.chongzi.com;
        access_log  C:\Users\Administrator\Desktop\vue\access.log;
        
        location / {
            proxy_pass http://127.0.0.1:8080;
            proxy_redirect off;
            proxy_set_header Host $proxy_host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header Cookie $http_cookie;
        }
        
        location /rai.do/ {
            proxy_pass http://10.177.98.16:8093;
            proxy_redirect off;
            proxy_set_header Host $proxy_host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header Cookie $http_cookie;
        }
    }


# uicli

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
