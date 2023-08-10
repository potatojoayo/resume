export const SMARTER_NGINX = `server {
    server_name www.api.ksmarter.shop;
    
    location / {
      proxy_pass http://127.0.0.1:8000;
    }
 
     listen 443 ssl;
     ssl_certificate /etc/letsencrypt/live/api.wooridong-rep.net/fullchain.pem;
     ssl_certificate_key /etc/letsencrypt/live/api.wooridong-rep.net/privkey.pem;
     include /etc/letsencrypt/options-ssl-nginx.conf;
     ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
    }
    
server {
   if ($host = www.api.ksmarter.shop) {
    return 301 https://$host$request_uri;
   } 
   server_name www.api.ksmarter.shop;
   listen 80;
   return 404; 
} `;
