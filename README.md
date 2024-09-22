# Raízes de Amor - Site para apoio emocional à perda perinatal
![](./luto-parental/src/assets/logo/Logo%20boutique%20de%20moda%20elegante%20rose%20(3).svg)

## Sobre o projeto
O projeto visa abordar a significativa lacuna de assistência e compreensão da saúde mental perinatal, especialmente para mulheres que enfrentam a perda perinatal. Desenvolvemos uma aplicação web para proporcionar um ambiente acolhedor e informativo, ajudando mães e famílias a expressar seu luto, encontrar apoio emocional e validar seus sentimentos durante este difícil processo.

- ps: Esse é um projeto acadêmico pela disciplina de Desenvolvimento Web.

## Problemática
Considera-se que 22% das mães que tiveram uma perda perinatal sofrem de algum transtorno psicológico, como depressão ou ansiedade, e 15-20% dos casais têm problemas para superar o luto. perda (Iera lisboa, 2023), destacando a urgência de um suporte adequado nesse contexto. 

No entanto, muitas vezes, essas mulheres enfrentam uma falta significativa de compreensão e assistência em relação à saúde mental perinatal, o que as deixa sem o apoio necessário para expressar e vivenciar seu luto de maneira saudável.

## Sobre o site
O Raízes de Amor foi criado com o objetivo de proporcionar um ambiente acolhedor e informativo, onde mães e famílias podem expressar seu luto, validar seus sentimentos e encontrar apoio emocional ao longo desse processo. Para isso, o site oferece as seguintes funcionalidades:

- Murais;
    - O site conta com três tipos de murais: Depoimentos, Direitos e Notícias.

- Envio de história
    - Os usuários podem enviar relatos pessoais para expressar seu luto e validar seus sentimentos. Além disso, eles podem ler outros depoimentos no site, percebendo que não estão sozinhos em sua dor.

- Validações e Verificações;
    - Todos os formulários do site, como o de envio de histórias, a inscrição na newsletter e a seção "Como Ajudar" para doações, passam por validações para garantir a autenticidade das informações. Em especial, cada relato enviado ao mural de histórias passa por uma validação antes de ser publicado.
    No caso das doações, após o preenchimento do formulário, um código de verificação é enviado por e-mail. Somente com esse código é possível liberar o QR Code para doação, oferecendo uma camada extra de segurança contra fraudes.

- Mapeamento das histórias
    -As histórias enviadas e validadas são mapeadas em nosso site. No mural de depoimentos, há um mapa do Brasil que, ao passar o mouse sobre os estados, exibe o total de histórias enviadas por cada região.

---

## Rodar a aplicação

Dentro da pasta `luto-parental` você pode executar a aplicação em diferentes tipos de ambientes, desenvolvimento e produção.

Para rodar o ambiente de produção feito com o Nginx, execute o comando abaixo para rodar o container `Docker`:

```
docker compose up
```

Assim, o site Raízes de Amor irá ser hospedado localmente pelo `Nginx` em produção. Para acessá-lo basta apenas colocar na URL do seu navegador: `localhost`.

Para parar a execução do container e também da aplicação aperte no terminal:

```
CTRL + C
```

E depois use o comando:

```
docker compose down
```

---

Para acessar o ambiente de desenvolvimento, teremos que realizar algumas configuraçãoes em nosso `Dockerfile` e `docker-compose.yaml`.

No `Dockerfile`, localize a seção referente à configuração do `Nginx` e comente todas as linhas dessa configuração. Em seguida, descomente o comando `EXPOSE`, que será responsável por expor a porta do ambiente de desenvolvimento.

- [Dockerfile](./luto-parental/Dockerfile)


No arquivo `docker-compose.yaml`, procure a opção `ports`, que contém duas configurações de portas. Uma delas estará comentada, assim como a opção `command`.

- [docker-compose.yaml](./luto-parental/docker-compose.yml)

A porta` 80:80 `é utilizada para rodar o `Nginx` em ambiente de produção, mas como estamos configurando o ambiente de desenvolvimento, devemos comentá-la. A porta `4300:4200` será a que utilizaremos para o desenvolvimento. Além disso, descomente a opção `command` para habilitá-la no ambiente de desenvolvimento.

Por fim, após todos esses processos, para rodar o ambiente de desenvolvimento execute o comando:

```
docker compose up --build
```

Agradeço o seu tempo de leitura e interesse neste projeto! Espero que tenha gostado :D.




