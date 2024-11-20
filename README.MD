PROJETO DE CONTROLE DE ESTOQUE PARA A MERCEARIA

Este é um aplicativo simples para controle de estoque de uma mercearia. Ele permite adicionar produtos ao estoque, editar produtos existentes, excluir produtos e gerenciar produtos faltando (com a opção de removê-los da lista).

FUNCIONALIDADES

    1 - Adicionar Produto: Permite adicionar novos produtos ao estoque.
    2 - Editar Produto: Permite editar os dados de um produto existente, como o nome e a quantidade.
    3 - Excluir Produto: Permite remover produtos do estoque.
    4 - Ver Produtos Faltando: Exibe uma lista de produtos cujo estoque chegou a zero e permite removê-los dessa lista.
    5 - Alerta de Estoque Baixo: Notifica o usuário quando um produto está com o estoque esgotado.

TECNOLOGIAS UTILIZADAS

    1 - React Native: Framework para desenvolvimento de aplicativos móveis.

    2 - AsyncStorage: Armazenamento persistente de dados simples no dispositivo.

    3 - JavaScript/TypeScript: Linguagens utilizadas para o desenvolvimento.

    4 - React Navigation: Biblioteca para navegação entre as telas do aplicativo.

COMO EXECUTAR O PROJETO

Pré-requisitos

Antes de rodar o projeto, certifique-se de ter o Node.js e o Expo instalados na sua máquina.

    1 - Instale o Node.js (recomenda-se a versão LTS).
    2 - Instale o Expo CLI globalmente: npm install -g expo-cli

Passos para rodar o projeto

    1 - Clone o repositório:
        git clone https://github.com/leiaferreira/CanideStorange.git

    2 - Navegue até o diretório do projeto:
        cd CanideStorange

    3 - Instale as dependências:
        npm install

    4 - Inicie o servidor de desenvolvimento do Expo:
        expo start

    5 - O aplicativo estará acessível em um navegador ou via aplicativo móvel (caso esteja usando o Expo Go).

ESTUTURA DO PROJETO
O projeto está estruturado da seguinte forma:

Copiar código
/src
/screens
AddProductScreen.tsx // Tela de adicionar/editar produto
HomeScreen.tsx // Tela principal com lista de produtos
OutOfStockScreen.tsx // Tela de produtos faltando
/styles
HomeStyles.ts // Estilos para a tela Home
OutOfStockStyles.ts // Estilos para a tela de produtos faltando
/components
ProductList.tsx // Componente de lista de produtos

Como funciona
1 - HomeScreen (Tela Inicial)
A tela inicial exibe uma lista de produtos no estoque. Cada produto tem a opção de ser editado ou excluído. Quando o estoque de um produto chega a zero, ele é automaticamente adicionado à lista de "Produtos Faltando". Além disso, um alerta é disparado quando um produto esgota o estoque.

    2 - AddProductScreen (Adicionar/Editar Produto)
    Esta tela permite adicionar um novo produto ao estoque ou editar um produto existente. O usuário pode especificar o nome e a quantidade de cada produto.

    3 - OutOfStockScreen (Produtos Faltando)
    Exibe os produtos que estão com estoque zero. Para cada produto faltando, há um botão "Remover da lista", que ao ser pressionado, remove o produto da lista de faltando.

PERSISTÊNCIA DE DADOS

O aplicativo usa o AsyncStorage para persistir os dados localmente no dispositivo. Quando um produto é adicionado, editado ou excluído, essas alterações são salvas no dispositivo.

EXEMPLO DE USO
1 - Adicionar Produto: - Navegue até a tela de Adicionar Produto e preencha o nome e a quantidade do produto. - O produto será salvo no estoque e aparecerá na tela principal.

2 - Editar Produto: - Clique no botão Editar ao lado do produto na tela inicial. - Modifique os dados do produto e salve.

3 - Excluir Produto:

- Clique no botão Excluir ao lado do produto na tela inicial para removê-lo do estoque.

4 - Gerenciar Produtos Faltando:

- Se o estoque de um produto chega a zero, ele é adicionado à lista de Produtos Faltando.
- Na tela de Produtos Faltando, clique em Remover da lista para remover o item da lista de faltando.

LICENÇA
Este projeto é licenciado sob a MIT License - veja o arquivo LICENSE para mais detalhes.
