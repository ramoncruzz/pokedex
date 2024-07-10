# pokeDex

PokeDex é um projeto simples onde são aplicados conceitos importantes no desenvolvimento de aplicativos com React Native.
Neste projeto você encontrará:

- Hearder customizado nas configurações de rotas de navegação;
- Hook customizado implementado considerando o princípio 'separetion of concerns' do SOLID;
- Páginas/telas com baixo acoplamento;
- Aplicação de gerenciamento de contexto com a ferramenta Redux-toolkit;
- Arquitetura em camadas;

Espero que você goste.

## Arquitetura

Este projeto foi implementando com TypeScript e para prover a melhor organização possível, o `PokeDex` está organizado nos seguintes diretórios:
[`components`](./src/components):

> Contém a implementação dos componentes visuais.
> Uma melhoria que pode ser feita é a aplicação do conceito 'Atomic Design', por prover uma bom compartilhamento do pensamento de reusabilidade com o time de UX/Design.

[`src/hooks`](./src/hooks).

> Neste diretorio está presente o Hook Customizado usePokemon. Ele é um exemplo prático da Separação de Responsábilidades. Neste projeto, usePokemon é responsável por obter os dados fornecidos pela central única da verdade.
> Ele realiza processamentos a serem consumidos por telas e componentes visuais, é possível notar que ele possui um comportamento de Controlador. Há algo similar em arquiteturas MVC.

[`src/routes`](./src/routes).

> Neste diretório estão as configurações de navegação do App, bem como uma customização de Header. Este projeto usa a lib `react-native-navigation` por ser uma lib consolidada e com amplo suporte a Hooks.

[`src/pages`](./src/pages).

> Neste diretório estão presentes as Telas: Home, Detail e Pokedex.

[`src/services`](./src/services).

> Este é um dos diretórios fundamentais neste projeto, ele contem os arquivos: (i) `poke.service.ts` - Responsável por prover uma instância axios contectada ao dominio `pokeapi.co`. ; (ii)`poke.api.ts` - Responsável pelo mapeamento das rotas utilizadas.

[`src/util`](./src/util).

> Este diretorio contém utilizarios importantes no projeto, como tipagem, constantes de cores, funções comuns e constantes de texto.

## Dependências

Este projeto contém as seguintes dependências:

- React Navigation 6.x
- Axios
- React Native Elements
- Redux toolkit

## Instação e execução

## Como executar este projeto

Clone o projeto `git clone git@github.com:ramoncruzz/pokedex.git`

e execute isto no terminal: `yarn install`, `cd ios/`, `pod install`, `cd ..`

> [ios]: `yarn ios` > [android]: `yarn android`
