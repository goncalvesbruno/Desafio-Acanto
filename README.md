# Desafio-Acanto

[![My Skills](https://skillicons.dev/icons?i=nodejs,sequelize,mysql,express)](https://skillicons.dev)

Este projeto foi desenvolvido a partir da proposta de um teste prático para concorrer à vaga de estagiário em back-end na empresa Acanto. Segue o desafio:

**Descrição do teste:**
Para avaliar suas habilidades e conhecimentos em desenvolvimento backend, solicitamos que você desenvolva uma API utilizando Node.js. A API deverá lidar com duas tabelas relacionadas em um banco de dados SQL, utilizando o ORM de sua escolha. Você pode optar por usar Node puro ou um framework como NestJS, de acordo com sua preferência e conhecimento.
**Instruções:**
Desenvolva a API de acordo com os requisitos mencionados acima.
Forneça um breve documento descrevendo a estrutura da API, as tecnologias utilizadas e quaisquer outras informações relevantes.
Envie o link do repositório do seu projeto concluído para o email tecnologia@acantomed.com.br até 19/04/2024.
**Avaliação:**
Seu projeto será avaliado com base na qualidade do código, organização, eficiência, e se atende aos requisitos solicitados. Além disso, valorizamos a clareza da documentação fornecida.

## O projeto

Foi desenvolvida uma aplicação utilizando Node.js, sendo que a ORM escolhida foi o Sequelize para facilitar a conexão e manipulação no banco de dados.
A API consiste em uma aplicação que lida com duas tabelas: uma tabela de jogadores de futebol, e outra tabela onde constam clubes de futebol. Cada jogador está relacionado a um clube, e cada clube pode ter vários jogadores.

## Rodando a API

#### - Banco de dados
O banco de dados neste projeto está sendo rodado localmente. Como não foi realizada implementação das migrations, foi realizado o export de 2 arquivos .sql correspondentes às tabelas que precisarão ser importados ao inicializar o banco de dados. O arquivo de **configuração do banco de dados**, juntamente com os dois aquivos .sql estão na pasta abaixo: 
```sh
./config.database.js
```

#### - API
Para inicializar a API, basta rodar os seguintes comandos:
```sh
npm install
npm start
```
A aplicação estão escutando em:
```sh
localhost:8080
```
#### - Endpoints
Os endpoints da API são controlados dentro da pasta "./routes". Há o arquivo index.js que é responsável por concentrar a entrada dos endpoints, e dependendo da requisição ele encaminha a "clubeRoutes.js" ou "playerRoutes.js".
Abaixo, segue a lista dos endpoints disponíveis:

| Descrição | Endpoint |
| ------ | ------ |
| Lista todos os jogadores |  /players |
| Adiciona um jogador | /players/add |
| Transfere um jogador de uma equipe para outra | /players/transf |
| Exclui um jogador do banco de dados | /delete |
| Lista todos os clubes | /clubs |
| Adiciona um novo clube | /clubs/add |

Todas as funcionalidades acima esperam um bodr.params na requisição.
**IMPORTANTE**: Na raiz do projeto há o arquivo **Insomnia_JSON** onde estão todas as requisições configuradas. Este arquivo deve ser importado no Insomnia.

