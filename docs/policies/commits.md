| Data       | Versão | Descrição            | Autor             |
|:----------:|:------:|:--------------------:|:-----------------:|
| 16/03/2020 | 0.1    | Criação do documento com template inicial  | Lucas Fellipe, Guilherme Mendes, Caio Vinicius, Gabriel Alves, João Pedro, Iuri Severo, Sofia Patrocínio, Micaella Gouveia, Gabriel Davi, Pedro Igor e Eduardo Lima  |

Os *commits* devem possuir o seguinte padrão:

* Devem ser escritos em inglês, na forma infinitiva, e ainda conter uma breve descrição:

**Exemplo:**

```Create a new document```

* A *issue* deve ser citada no commit por questões de rastreabilidade, para isso, basta adicionar:

```
#<number_of_issue>
```

**Exemplo:**

```#01 Create a new document```

**Observação:** Por padrão, o caracter '#' define uma linha de comentário na mensagem do *commit*. Para resolver esse problema, digite na linha de comando:

```git config --local core.commentChar '!'```

* Para que uma pessoa seja inclusa como contribuinte no gráfico de *commits* do GitHub, basta incluir a instrução ```Co-authored-By:``` na mensagem:

**Exemplo:**

```
#01 Create a new document


Co-authored-By: Lucas Fellipe <lucasfcm9@gmail.com>
Co-authored-By: Guilherme Mendes <guimendesp12@gmail.com>
```

* Para *commits* que incluem uma pequena alteração em uma *issue* que já teve sua solução encerrada, deve-se iniciar a mensagem do *commit* com HOTFIX ```#<number_of_issue> message```

**Exemplo:**

```HOTFIX #02 Fix errors in document```
