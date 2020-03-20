|    Data    | Versão |                 Descrição                 |     Autor     |
| :--------: | :----: | :---------------------------------------: | :-----------: |
| 20/03/2020 |  0.1   | Criação do documento e adição da análise. | Pedro Igor, Micaella Gouveia e Gabriel Alves  |
| 20/03/2020 |  0.2   | Adição dos requisitos levantados .| Pedro Igor, Micaella Gouveia e Gabriel Alves  |



# Análise de Discurso
## Introdução 
<!--(quem achar vai ser otimo)-->
## Justificativa para uso da Técnica
Optamos em utilizar a técnica de Análise de Discurso para trazer um melhor entendimento do propósito do projeto. Vimos que nosso escopo abrangia várias funcionalidades, e precisávamos definir o que era prioridade. A técnica nos ajudou pois os participantes deviam expor seus pensamentos de forma sucinta e organizada, além de dar a oportunidade de questionar, contrariar ou complementar ideias.
<!--Micaella-->

## Participantes
* Gabriel Alves
* Micaella Gouveia
* Pedro Igor
## Como foi feito 
<!-- explicar como foi feito e pq mudamos de mediador(por conta do número baixo de pessoas) (gabriel) --> 
## Tema: Definição do Escopo
### Subtemas:
1.  População da base de dados(API, dataset).
2. Funcionalidades individuais para os usuários.
3. Funcionalidades coletivas para os usuários.

### Organização:
1. Fala (1m30s)
2. Uma réplica (1m30s)
3. Uma tréplica (1m)
4. Um complemento (40s)

### Rodada 1 - População da base de dados(API, dataset):

##### Mediadora: 
* Micaella
##### Participantes:
* Gabriel Alves
* Pedro Igor

#### Fala - Pedro Igor: 
"Seria interessante limitarmos a população da base da dados de acordo com um api com uma quantidade limitada de livros, porque dessa forma ficaríamos limitados a uma quantidade de livros interessante. Nosso objetivo principal é trazer interação dos usuários e não criar um catálogo com todos os livros do mundo, o que seria impossível."

#### Réplica - Gabriel:
"Acho muito bom utilizarmos a API, porém ficaríamos limitado à ela, como por exemplo se ela saísse do ar, perderíamos mts dados. Se tivesse uma arquitetura híbrida com uma opção de APIs externas, não ficamos reféns do funcionamento dela."

#### Tréplica - Pedro Igor:
"Estaríamos limitados a API apenas se a API fosse descontinuada, porém é improvável que isso aconteça. Uma API é um serviço online que permite acessarmos uma base de dados. Ela pode até ficar fora do ar por alguns momentos e seria esse um dos motivos da nossa aplicação não ser 24/7."

#### Complemento - Micaella:
"Acredito que api seria a solução mais viável,. Concordo com o pedro dela poder ficar fora do ar em alguns momentos, mas podemos encontrar uma api que agregue bastante ao nosso produto em relação a quantidade de informações."

### Rodada 2 - Funcionalidades individuais para os usuários:
##### Mediador: 
* Gabriel
##### Participantes:
* Micaella
* Pedro Igor

#### Fala - Micaella:
"Acho que seria essencial que houvesse  uma parte de organização individual que a pessoa poderia colocar os livros que já leu e que está lendo e tendo a parte de metas, onde seria legal que fosse automatizados, onde tivesse calendário onde ela pudesse colocar uma data de conclusão do livro e etc. le a criação do perfil dela, pois geraria recomendações de livros, e entraria na parte social do aplicativo, achando outros usuários com mesmo interesse."

#### Réplica - Pedro Igor: 
"Acho que seria realmente muito interessante a funcionalidade onde a pessoa poderia armazenar o que já leu, o que gosta de ler. Mas calcular metas seria muito difícil, cada usuário tem uma velocidade e capacidade de leitura, em determinados dias não se tem tanto tempo disponível para a leitura. Temos que tomar cuidado no quanto prometeremos auxiliar os usuários de forma individual."

#### Tréplica - Micaella:
"Entendi o seu ponto e acho que a gente deveria descobrir o que o público realmente gostaria de ter . Um app que visa metas ou se eles querem algo que visem o social, mas no nosso caso estamos querendo um viés mais social. Talvez algo não necessariamente sofisticado, mas que atendesse às expectativas do usuário final."

#### Complemento - Gabriel:
"Concordo com os pontos levantados, na minha opinião o app deveria ir pro lado mais social realmente pois já existem outros apps que vão para o lado mais individual como o cabeceira e que as reclamações levantadas são a falta da parte social, é aí que vamos trazer nossa solução."

### Rodada 3 - Funcionalidades coletivas para os usuários.

##### Mediador:
* Pedro Igor
##### Participantes:
* Micaella
* Gabriel

#### Fala - Gabriel:
"Pra mim essa é a parte mais importante do nosso aplicativo levando em consideração que é um problema que outros apps possuem atualmente. Para responder a isso é necessário a criação  de grupo de discussão de livros, um chat, um feed onde postam o que estão lendo, pequenas resenhas e recomendações geradas pelo sistema através do gosto do usuário através de interações que ele faz. Focar o chat para o grupo e não para o individual, pois seria um escopo bastante abrangente."

#### Réplica - Micaella:
"Concordo mas acho que a gente poderia dar uns nomes para esses grupos como por exemplo clube do livro. Acho que as pessoa iriam gostar de ter um grupo, colocar metas no clube, a possibilidade de encontrar novas pessoas e alcançar novos interesses, iríamos conquistar muitas pessoas e seria bem inovador e abrangente."

#### Tréplica - Gabriel:
"Perfeito, trazer nomes do mundo real para dentro do app é essencial até para as pessoas se familiarizarem com o aplicativo e a interação delas com o aplicativo é motivador para que continuem crescendo nesse novo hábito de leitura."

#### Complemento - Pedro Igor:
"Concordo, a interação em grupo faz com que uma leitura se torne muito mais agradável, incentiva as pessoas a lerem e a existência de um grupo de discussão motiva as pessoas a lerem até mesmo para evitarem spoilers."

## Requisitos Levantados

### Não Funcionais
|Número|Requisito|
| :--------: | :----: |
|1|O sistema deve oferecer uma base de dados dos livros.

### Funcionais
|Número|Requisito|
| :--------: | :----: |
|1|O usuário deve poder pesquisar por um livro específico.
|2|O usuário deve poder adicionar livros ao seu catálogo.
|3|O usuário deve poder organizar seu catálogo por gêneros.
|4|O usuário deve poder marcar os livros que está lendo no momento.
|5|O usuário deve poder cadastrar suas metas individuais.
|6|O sistema deverá alertar o usuário do cumprimento das suas metas individuais.
|7|O usuário deve poder criar grupos de discussão.
|8|O usuário deve poder entrar em grupos/clubes nos quais ele recebeu o convite.
|9|O usuário deve poder criar clubes do livro.
|10|O usuário deve poder convidar outros usuários para seus clubes/grupos.
|11|O usuário deve poder criar chats individuais.
|12|O usuário deve poder criar o seu perfil.
|13|O usuário deve poder visualizar o perfil de outros usuários.
|14|O usuário pode fornecer metas para clubes do livro.
|15|O sistema deve fazer recomendações de livros conforme o perfil do usuário.

## Referências
[https://requisitos-tinder.github.io/Tinder-2018-1/elicitacao/analise_discurso/](https://requisitos-tinder.github.io/Tinder-2018-1/elicitacao/analise_discurso/) Disponível em 20/03.
