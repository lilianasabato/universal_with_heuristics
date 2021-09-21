# Universal With Heuristics

Trabalho da Disciplina de Teoria da Computação realizado pelos alunos Rafael Porto Vieira de Moura e Liliana Sabata Teodoro.  

A ideia deste trabalho é implementar uma máquina de turing universal para simular o comportamento de outras máquinas de turing.

## Como utilizar a máquina

Para rodar o programa, estando na raiz do diretório universal_with_heuristics, digite o seguinte comando no seu terminal:

```bash
npm run dev nome_do_arquivo
```

*O parâmetro nome_do_arquivo, é o nome do arquivo em que está a representação de uma máquina de Turing qualquer seguida de uma entrada, esse arquivo tem que estar na raiz do projeto (raiz do diretório universal_with_heuristics).*  

**Tabela de símbolos**

| Símbolo       | Codificação |
| :------       | ----------: |
| 𝑎             | 1           |
| 𝑏             | 11          |
| B             | 111         |
| q<sub>0</sub> | 1           |
| q<sub>1</sub> | 11          |
| ...           | ...         |
| q<sub>n</sub> |  1<sup>n+1</sup>      |
| L             | 1           |
| R             | 11          |

Cada transição tem a seguinte forma: δ(q<sub>i</sub>,x) = [q<sub>j</sub>,y,d]

Onde *q<sub>i</sub>* representa o estado inicial, *x* o carácter de leitura, *q<sub>j</sub>* o estado de destino, *y* o carácter a ser escrito e *d* para qual posição a cabeça da fita irá (esquerda ou direita).

A entrada 𝑤 terá sua representação com cada símbolo concatenado por um zero (0). Assim, seja uma máquina de Turing 𝑀, com alfabeto de entrada Σ = {𝑎, 𝑏}, e representações 𝑎 = 1, 𝑏 = 11 e 𝐵 = 111 então, uma entrada 𝑤 = 𝑎𝑎𝑏 terá sua representação (𝑅(𝑤)) igual a 1110101011000. Os três zeros no final indicam o fim da entrada e um símbolo branco (𝐵 = 111) é posto no início da entrada para o processo de ‘inicialização da máquina’.

Para uma entrada da palavra e das transições faz da seguinte forma:

No ínicio se coloca: 000. Logo em seguida as transições onde cada símbolo é separado por um 0 e cada transição por dois 0. No final das transições se coloca três 0 e em sequencia a entrada 𝑤.

