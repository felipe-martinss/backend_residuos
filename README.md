# Gestão de resíduos Sólidos

## Descrição
O projeto **Gestão de resíduos Sólidos** tem como objetivo gerenciar e monitorar a gestão de resíduos sólidos.

O sistema permite realizar o cadastro de usuários, registrar informações, consultar, atualizar e excluir registros e etc.

---

## Diagrama de Classes
<p align="left">
  <img src="./docs/image.png" alt="Diagrama de Classes">
</p>
<p align="left">
  <img src="diagrama.png" alt="Diagrama de Classes">
</p>

---

## Tecnologias
* JavaScript
* Node.js
* Express
* MySQL
* MySQL2
* Insomnia

---

## Passo a passo para testar

### 1. Clonar o repositório
```bash
git clone URL_DO_REPOSITORIO
```

### 2. Acessar a pasta do projeto
```bash
cd NOME_DO_PROJETO
```

### 3. Instalar as dependências
```bash
npm install mysql2, express, cors
```

### 4. Configurar o banco de dados
* Abrir o MySQL.
* Executar o script SQL disponibilizado no projeto.
* O script criará o banco de dados `gestao_residuos`, as tabelas `usuario` e `ocorrencia` e inserirá dados para testes.

### 5. Iniciar o servidor
```bash
npm run dev
```

O servidor estará disponível em:
```text
http://localhost:3000
```

### 6. Testar a API no Insomnia
Utilizar o Insomnia para realizar requisições HTTP e testar as funcionalidades do sistema.

---

## Testes do Insomnia

## Testes usuarios
### Login usuario
<p align="left">
  <img src="./docs/login_usuario.png" alt="Login usuario">
</p>

### Listar usuario
<p align="left">
  <img src="./docs/listar_usuario.png" alt="Listar usuario">
</p>

### Buscar usuario
<p align="left">
  <img src="./docs/buscar_usuario.png" alt="Buscar usuario">
</p>

### Cadastrar usuario
<p align="left">
  <img src="./docs/cadastrar_usuario.png" alt="Cadastrar usuario">
</p>

### Remover usuario
<p align="left">
  <img src="./docs/remover_usuario.png" alt="Remover usuario">
</p>

### Atualizar usuario
<p align="left">
  <img src="./docs/atualizar_usuario.png" alt="Atualizar usuario">
</p>

## Testes ocorrencias
### Listar ocorrencia
<p align="left">
  <img src="./docs/listar_ocorrencia.png" alt="Listar ocorrencia">
</p>

### Buscar ocorrencia
<p align="left">
  <img src="./docs/buscar_ocorrencia.png" alt="Buscar ocorrencia">
</p>

### Cadastrar ocorrencia
<p align="left">
  <img src="./docs/cadastrar_ocorrencia.png" alt="Cadastrar ocorrencia">
</p>

### Deletar ocorrencia
<p align="left">
  <img src="./docs/deletar_ocorrencia.png" alt="Deletar ocorrencia">
</p>

### Atualizar ocorrencia
<p align="left">
  <img src="./docs/atualizar_ocorrencia.png" alt="Atualizar ocorrencia">
</p>

### Resumo ocorrencia
<p align="left">
  <img src="./docs/resumo_ocorrencia.png" alt="Resumo ocorrencia">
</p>
