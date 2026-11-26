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

## Testes Usuários
### Login Usuário
<p align="left">
  <img src="./docs/login_usuario.png" alt="Login usuário">
</p>

### Listar Usuário
<p align="left">
  <img src="./docs/listar_usuario.png" alt="Listar usuário">
</p>

### Buscar Usuário
<p align="left">
  <img src="./docs/buscar_usuario.png" alt="Buscar usuário">
</p>

### Cadastrar Usuário
<p align="left">
  <img src="./docs/cadastrar_usuario.png" alt="Cadastrar usuário">
</p>

### Atualizar Usuário
<p align="left">
  <img src="./docs/atualizar_usuario.png" alt="Atualizar usuário">
</p>

### Excluir Usuário
<p align="left">
  <img src="./docs/remover_usuario.png" alt="Excluir usuário">
</p>

## Testes Ocorrências
### Login Ocorrência (Resumo)
<p align="left">
  <img src="./docs/resumo_ocorrencia.png" alt="Resumo ocorrência">
</p>

### Cadastrar Ocorrência
<p align="left">
  <img src="./docs/cadastrar_ocorrencia.png" alt="Cadastrar ocorrência">
</p>

### Listar Ocorrência
<p align="left">
  <img src="./docs/listar_ocorrencia.png" alt="Listar ocorrência">
</p>

### Buscar Ocorrência
<p align="left">
  <img src="./docs/buscar_ocorrencia.png" alt="Buscar ocorrência">
</p>

### Atualizar Ocorrência
<p align="left">
  <img src="./docs/atualizar_ocorrencia.png" alt="Atualizar ocorrência">
</p>

### Deletar Ocorrência
<p align="left">
  <img src="./docs/deletar_ocorrencia.png" alt="Deletar ocorrência">
</p>
```[cite: 1]

---

### 2. Projeto: `backend_energia`[cite: 2]


## Testes do Insomnia

## Testes Usuários
### Login Usuário
<p align="left">
  <img src="./docs/usuario_login.png" alt="Login usuário">
</p>

### Listar Usuário
<p align="left">
  <img src="./docs/usuario_listar.png" alt="Listar usuário">
</p>

### Buscar Usuário
<p align="left">
  <img src="./docs/usuario_buscar.png" alt="Buscar usuário">
</p>

### Cadastrar Usuário
<p align="left">
  <img src="./docs/usuario_cadastrar.png" alt="Cadastrar usuário">
</p>

### Atualizar Usuário
<p align="left">
  <img src="./docs/usuario_atualizar.png" alt="Atualizar usuário">
</p>

### Deletar Usuário
<p align="left">
  <img src="./docs/usuario_deletar.png" alt="Deletar usuário">
</p>

## Testes Consumo
### Resumo Consumo
<p align="left">
  <img src="./docs/consumo_resumo.png" alt="Resumo consumo">
</p>

### Cadastrar Consumo
<p align="left">
  <img src="./docs/consumo_cadastrar.png" alt="Cadastrar consumo">
</p>

### Listar Consumo
<p align="left">
  <img src="./docs/consumo_listar.png" alt="Listar consumo">
</p>

### Buscar Consumo
<p align="left">
  <img src="./docs/consumo_buscar.png" alt="Buscar consumo">
</p>

### Atualizar Consumo
<p align="left">
  <img src="./docs/consumo_atualizar.png" alt="Atualizar consumo">
</p>

### Deletar Consumo
<p align="left">
  <img src="./docs/consumo_deletar.png" alt="Deletar consumo">
</p>
```[cite: 2]

---

### 3. Projeto: `backend_usos_ia`[cite: 3]

## Testes do Insomnia

## Testes Usuários
### Login
<p align="left">
  <img src="./docs/login.png" alt="Login">
</p>

### Cadastrar Usuário
<p align="left">
  <img src="./docs/cadastrar_usuario.png" alt="Cadastrar usuário">
</p>

### Listar Usuário
<p align="left">
  <img src="./docs/listar_usuario.png" alt="Listar usuário">
</p>

### Buscar Usuário
<p align="left">
  <img src="./docs/buscar_usuario.png" alt="Buscar usuário">
</p>

### Atualizar Usuário
<p align="left">
  <img src="./docs/atualizar_usuario.png" alt="Atualizar usuário">
</p>

### Deletar Usuário
<p align="left">
  <img src="./docs/deletar_usuario.png" alt="Deletar usuário">
</p>

## Testes Usos de IA
### Resumo Uso IA
<p align="left">
  <img src="./docs/resumo_usoia.png" alt="Resumo uso IA">
</p>

### Postar Uso IA
<p align="left">
  <img src="./docs/usoia_postar.png" alt="Postar uso IA">
</p>

### Listar Uso IA
<p align="left">
  <img src="./docs/usoia_listar.png" alt="Listar uso IA">
</p>

### Buscar Uso IA
<p align="left">
  <img src="./docs/usoia_buscar.png" alt="Buscar uso IA">
</p>

### Atualizar Uso IA
<p align="left">
  <img src="./docs/usoia_atualizar.png" alt="Atualizar uso IA">
</p>

### Deletar Uso IA
<p align="left">
  <img src="./docs/usoia_deletar.png" alt="Deletar uso IA">
</p>
