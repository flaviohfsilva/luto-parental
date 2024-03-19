# Instalação do node com a sua imagem oficial
FROM node as angular

# Pasta onde vai armazenar os dados
WORKDIR /usr/local/app

# Adição dos dados a pasta
COPY . /usr/local/app/

# Desabilitar o compartilhamento de dados de uso pseudônimo
ENV NG_CLI_ANALYTICS=false

# Instala a versão do Angular
RUN npm install -g @angular/cli

RUN npm install

# EXPOSE 4300

# Ambiente de produção da aplicação

# RUN ng build

# Imagem do nginx
# FROM nginx:latest as nginx

# # Copia a saída do angular e coloca no espaço padrão do nginx
# COPY --from=angular /usr/local/app/dist/luto-parental usr/share/nginx/html

# COPY /nginx.conf /etc/nginx/conf.d/default.conf

# # Expor a porta
# EXPOSE 80
