# Aplicação web para controle e automação de recepção de arquivos de adquirentes

## Descrição e funcionalidades

Aplicação web com intuito de controlar e automatizar o recepcionamento de arquivos enviados pelas adquirentes.
A aplicação conta com um dashboard voltado a equipe de operações com as seguintes funcionalidades:
* Uma seção para verificar de forma gráfica o recepcionamento das adquirentes;
* Uma seção de controle dos arquivos enviados pelas adquirentes, podendo aprovar ou reijeita-los e fazer download dos mesmo para backup;
* Seção para cadastro de adquirentes, junto da informação de quantos clientes ela tem;
* Seção para cadastro de clientes, junto da informação de quantas adquirentes eles têm contadas;
* Uma seção para gerenciamento dos contratos entre adquirentes e clientes.

> Estas funcionalidades podem ser encontradas na rota /

A aplicação conta também com uma página onde as adquirentes podem fazer envio de seus arquivos para serem recepcionados.

> Esta funcionalidade pode ser encontrada na rota /envio

## Como executar

> Necessário npm e Vue-cli instalados  
> Utiliza as funções da [acquirer-data-control-api](https://github.com/DaniloGN/acquirer-data-control-api)

```
* Clone ou faça download do projeto
* Navegue até a pasta raiz cd/adquirer-data-control-web
* Execute o comando: npm install para resolver as dependências
* Execute o comando: npm run serve para executar a aplicação
* Tudo pronto para usar!
```
> Utilize a branch master para execução do código mais estável