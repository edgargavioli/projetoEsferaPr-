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

## Equipe

- Samuel Andrei Horn Thomas
- Edgar Ribeiro Gavioli
- Daniel Lopes Rossano
- Víctor Hugo das Neves de Jesus
- Luiz Henrique Schmidt Volkmann

## Licença

Este projeto está licenciado sob a Licença MIT. Para mais detalhes, consulte o arquivo `LICENSE` no repositório.