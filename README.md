OmniStack11 - Be The Hero

Stack - NodeJs, React, React-Native

aqui você irá encontrar um resumo do que foi feito em cada dia que foi disponibilizado o conteúdo pela rocketseat, Aproveite!

----------------------------------------------------------------dia 1 -----------------------------------------------------------------

-instalação do nodeJs usando Chocolatey, para faclitar na hora de atualizar etc

-baixar VScode e adicionar extensões como Dracula(tema) e Material Icon Theme(icones para os tipos de arquivos)

-criar pasta backend e rodar no cmd "npm init-y"

-instalação do "npm install express" que auxilia nas rotas

-criar arquivo index.js e importar o express

-criar porta para acessar a aplicação

-rodar aplicação usando "node index.js"

-criar projeto React usando "npx create-react-app frontend"

-rodar projeto usando "npm start"

----------------------------------------------------------------dia 2 -----------------------------------------------------------------

-Download do Insomnia, para simular os métodos HTTP(parecido com o Postman)

-instalação do "Nodemon" para monitorar o código usando "npm install nodemon -D"(-D para ser uma dependência de desenvolvimento)

-adição do nodemon no script do arquivo package.json, rodar usando "npm + nome do script"

-instalação do queryBuilder "Knexjs" usando "npm install knex" para conexão com banco

-instalação do "SqlLite" usando "npm install sqlite3"

-execução do pacote do knex com "npx knex init" (vai criar arquivo "knexfile.js")

-criação pasta src, colocar as rotas em um arquivo separado

-criação da pasta database

-criação da pasta migration na pasta database, criação do diretorio na migration no knexfile.js com destino onde vão ficar as migrations

-criação migration do knex usando "npx knex migrate:make + "nome da migration""

-execução da migration usando "npx knex migrate:latest"

-criação pasta controllers na pasta src (importação dos controllers no routes.js para usar os endpoints)

-instalação do cors usando "npm install cors" para determinar quem acessa nossa aplicação
