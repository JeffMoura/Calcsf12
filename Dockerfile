#versão do php
FROM php:8.1-fpm-alpine

#correspondente a pasta SRC
WORKDIR /var/www/html

#adicionando extensões na pasta bin
ADD https://raw.githubusercontent.com/mlocati/docker-php-extension-installer/master/install-php-extensions /usr/local/bin/

#rodar o comando instalando as extensões na pasta definida acima
RUN chmod uga+x /usr/local/bin/install-php-extensions && sync && \
   install-php-extensions gd zip exif  

