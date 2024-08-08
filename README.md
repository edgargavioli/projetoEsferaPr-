# Projeto Esfera Pró - Soluções Empresariais

## Descrição
O Projeto Esfera Pró é uma solução inovadora projetada para aprimorar a comunicação com clientes e fortalecer a conexão entre empresas e seu público. Com um foco em simplicidade, o sistema proporciona uma experiência de uso intuitiva e uma organização eficiente dos contatos. Ideal para call centers em todo o Brasil, o Esfera Pró maximiza a eficiência nas vendas e a gestão de clientes, promovendo uma abordagem mais estratégica e personalizada.

## Funcionalidades

- **Interface Intuitiva:** Design simples e intuitivo, com descrições claras.
- **Gestão de Contatos:** Organização de contatos por e-mail, ligações e WhatsApp.
- **Registro de Interações:** Monitoramento detalhado de interações com clientes, com ênfase em clientes importantes.
- **Relatórios e Análises:** Geração de relatórios em XML e possibilidade de importação de dados de outros sistemas.
- **Treinamento:** Treinamento completo para usuários.
- **Segurança e Privacidade:** Proteção de dados com autenticação JWT (JSON Web Tokens).

## Tecnologias Utilizadas

- **Frontend:** Thymeleaf, HTML5, CSS3 e JavaScript
- **Backend:** Spring Framework
- **Banco de Dados:** MySQL
- **Autenticação e Autorização:** JWT (JSON Web Tokens)
- **Controle de Versão:** Git e GitLab
- **Design e Prototipação:** [Figma](https://www.figma.com/file/iVSkiOSgNceGE3qBFKeggJ/Projeto-Esfera-pr%C3%B3?type=design&t=gQFVr55US3GD0Elw-6)

## Estrutura do Repositório

A estrutura do repositório foi organizada para facilitar a navegação e manutenção do código. Veja abaixo uma visão geral:

```
└───src
    ├───main
    │   ├───java
    │   │   └───com
    │   │       └───projetointegrador
    │   │           └───projetointegrador
    │   │               ├───config           # Configurações da aplicação
    │   │               ├───controllers      # Controladores (Controllers)
    │   │               ├───dto              # DTOs (Data Transfer Objects)
    │   │               ├───middleware       # Middleware ou interceptors
    │   │               ├───models           # Modelos de dados
    │   │               ├───repositories     # Repositórios (acesso a dados)
    │   │               ├───responses        # Respostas ou retornos padronizados
    │   │               ├───seeds            # Dados de inicialização (seed data)
    │   │               ├───services         # Serviços da aplicação
    │   │               ├───utils            # Utilitários ou helpers
    │   │               ├───validators       # Validadores de dados
    │   │               └───views            # Rotas de visualização
    │   └───resources
    │       ├───database                      # Scripts de banco de dados
    │       ├───static
    │       │   ├───images                    # Imagens estáticas
    │       │   ├───models                    # Modelos XLSX
    │       │   ├───scripts
    │       │   │   ├───forms                 # Scripts para formulários
    │       │   │   ├───pages                 # Scripts para páginas
    │       │   │   │   └───configs           # Scripts para páginas de configuração
    │       │   │   └───table-buttons         # Botões de tabela
    │       │   └───styles
    │       │       ├───components            # Estilos para componentes
    │       │       └───pages                 # Estilos para páginas
    │       └───templates
    │           ├───components                # Componentes de template
    │           ├───icons
    │           │   ├───buttons               # Ícones para botões
    │           │   ├───configs               # Ícones para configurações
    │           │   ├───dashboard             # Ícones para dashboard
    │           │   ├───error                 # Ícones para erros
    │           │   ├───header                # Ícones para cabeçalho
    │           │   ├───header-menu           # Ícones para menu de cabeçalho
    │           │   ├───inputs                # Ícones para inputs
    │           │   ├───search                # Ícones para busca
    │           │   └───sidebar               # Ícones para barra lateral
    │           └───pages
    │               └───configs               # Páginas de configuração
    └───test
        └───java
            └───com
                └───projetointegrador
                    └───projetointegrador
                        └───services          # Testes para serviços
```

## Como Rodar o Projeto

1. **Clone o Repositório**
   - Execute o comando para clonar o repositório do projeto:
     ```bash
     git clone <URL-do-repositório>
     ```

2. **Instale as Dependências**
   - Certifique-se de que você tenha o [Java JDK 21](https://www.oracle.com/java/technologies/javase-downloads.html) e [MySQL](https://dev.mysql.com/downloads/) instalados.
   - Escolha uma IDE Java de sua preferência (por exemplo, [IntelliJ IDEA](https://www.jetbrains.com/idea/) ou [Eclipse](https://www.eclipse.org/)).

3. **Configure a Conexão com o Banco de Dados**
   - Abra o projeto na sua IDE.
   - Navegue até o arquivo `application.properties` localizado em `src/main/resources`.
   - Configure a conexão com o seu banco de dados MySQL ajustando as seguintes propriedades:
     ```properties
     spring.datasource.url=jdbc:mysql://localhost:3306/nome_do_banco
     spring.datasource.username=seu_usuario
     spring.datasource.password=sua_senha
     ```

4. **Inicialize o Sistema**
   - Compile e execute o projeto a partir da sua IDE ou utilizando a linha de comando:
     ```bash
     ./mvnw spring-boot:run
     ```

5. **Configure o Banco de Dados**
   - Acesse o MySQL e crie uma nova equipe:
     ```sql
     INSERT INTO equipe (nome, codigo, limite_maximo_usuarios) VALUES ('SeuNomeDaEquipe', 'codigo_da_equipe', limite_maximo);
     ```

6. **Faça Login no Sistema**
   - Acesse a aplicação através do navegador, normalmente disponível em `http://localhost:8080`.
   - Faça login com as credenciais do usuário criado.

7. **Pronto!**
   - O sistema está pronto para uso. Você pode começar a explorar suas funcionalidades e personalizar conforme necessário.

## Equipe

- Samuel Andrei Horn Thomas
- Edgar Ribeiro Gavioli
- Daniel Lopes Rossano
- Víctor Hugo das Neves de Jesus
- Luiz Henrique Schmidt Volkmann

## Licença

Este projeto está licenciado sob a Licença MIT. Para mais detalhes, consulte o arquivo `LICENSE` no repositório.