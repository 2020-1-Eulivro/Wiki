# Introspecção

|    Data    | Versão |                 Descrição                 |     Autor     |
| :--------: | :----: | :---------------------------------------: | :-----------: |
| 20/03/2020 |  0.1   | Criação do documento inicial de introspecção. | [Lucas Fellipe](https://github.com/lucasfcm9) e [Caio Vinícius](https://github.com/caiovfernandes)  |

## Introdução

### Definição
Na técnica de introspecção o Engenheiro de Requisitos “imagina” que tipo de sistema é necessário para realizar o trabalho exigido ou usando o equipamento disponível. A introspecção é um método contribui para o entendimento de quais propriedades um sistema deve apresentar para ter sucesso.

### Justificativa para uso da Técnica
Optamos por usar a técnica de introspecção pois ela permite que você imagine como o sistema deve ser para obter sucesso. Devido a isso, a técnica possui muita eficiência na elicitação de requisitos.

### Ao acessar o aplicativo:
* Deve ser possível visualizar uma tela com as opções de cadastro e login, oferecendo ao usuário a opção de login via google.

### Ao selecionar a opção de login:
* Deve ser possível realizar o login por e-mail e senha cadastrados ou login integrado com o google. Além de uma opção "esqueceu a senha" caso o usuário tenha esquecido a senha.

### Ao selecionar a opção de cadastro:
* Deve apresentar três campo para cadastrar seu "nome", "data de nascimento", "e-mail" e "senha", em que estes são obrigatórios e "número de telefone" , que é opcional.
* Deve apresentar uma caixa de seleção para que o usuário visualize, aceite ou recuse os termos de uso do aplicativo.
* Deve apresentar um campo para digitar o código de verificação recebida por e-mail ou número de telefone, a depender da escolha do usuário.

### Ao realizar o cadastro:
* Deve apresentar uma tela com uma série de informações adicionais sobre o usuário.
* Deve ser possível que o usuário adicione uma foto de perfil e que o usuário faça uma pequena biografia.
* Deve ser possível, através de caixas de seleções, que o usuário indique seus gêneros favoritos de livros.

### Ao acessar a tela inicial:

* Deve possuir 4 páginas principais, divididas por abas, que são as seguintes:
  * Feed;
  * Livros;
  * Amigos, Clube do Livro e Chat;
  * Configurações do usuário;

### Ao acessar a aba "feed":
* Deve possuir um conjunto de publicações dos amigos do usuário havendo interações entre eles.
* Deve possuir indicações de livros.
* Deve possuir uma caixa de texto para que o usuário possa escrever para fazer as suas publicações.
* Deve possuir publicações de amigos para que o usuário possa curtir ou comentar.

### Ao acessar a aba "Livros":
* Deve possuir uma página de interação com os livros do usuário, onde ele poderá acessar e editar seu catálogo de livros - Livros lidos, livros que o usuário gostaria de ler e livros que o usuário está lendo.
* Deve possuir um campo de pesquisa para que o usuário consiga pesquisar os livros do seu interesse.
* Assim que o usuário pesquisar pelo livro do seu interesse, deve-se abrir uma página com as informações do livro, como o nome do livro, o autor do livro, uma descrição breve do livro e links funcionais para que o usuário possa comprar o livro. Nesta página, também estará disponível a avaliação do livro, quais amigos já leram/estão lendo e comentários de amigos sobre tal livro.

### Ao acessar a página "Amigos, clube do Livro e Chat":
* Página destinada a retornar a lista de amigos do usuário dentro do próprio aplicativo, bem como a listagem dos clubes do livro que o usuário está participando.
* Deve ser possível abrir uma conversa - Chat - com um amigo ou com algum integrante do clube do livro.
* Deve ser possível adicionar ou remover amigos.
* Deve ser possível criar um chat individual ou em grupo com os amigos de um determinado usuário.

### Ao acessar as "Configurações do usuário":
* Essa página está destinada a acessar todas as configurações da aplicação, que são as seguintes:
  * Edição de perfil:
    1. Deve ser possível que o usuário edite sua foto de perfil;
    2. Deve ser possível que o usuário altere sua foto de perfil;
    3. Deve ser possível alterar sua biografia;
    4. Deve ser possível adicionar ou remover gêneros de livros, através de caixas de seleção, do seu interesse;
    5. Deve ser possível que o usuário altere sua senha;
    6. Deve ser possível alterar o número de telefone ou e-mail cadastrados;
  * Configurações de privacidade:
    1. Restringir acesso ao perfil do usuário;
    2. Restringir conversas de chat com o usuário;
  * Configurações de notificações:
    1. Deve ser possível permitir ou não receber notificações do aplicativo;
    2. Deve ser possível filtrar quais notificações o aplicativo irá enviar, tais como, notificações de leitura, notificações de desafios, notificação de chat, notificação de feed, etc.

## Referências
[http://www2.dbd.puc-rio.br/pergamum/tesesabertas/0521479_08_cap_02.pdf](http://www2.dbd.puc-rio.br/pergamum/tesesabertas/0521479_08_cap_02.pdf)
