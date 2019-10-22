# Workshop (react + hooks + typescript)

## Software da istallare

- [vscode](https://code.visualstudio.com/)
  - estensioni 
    - bookmarks
    - debugger for chrome
    - debugger for firefox
    - error lens
    - git lens
    - live share + live share audio (fare login)
    - markdon all in one
    - one dark pro
    - paste json as code
    - rainbow brackets
    - todo tree
    - tslint
    - eslint
    - vscode icons
    - vscode-styled-components
    - prettier
- [nodejs](https://nodejs.org/en/) 10 (su linux si consiglia [nvm](https://github.com/nvm-sh/nvm))
  - [yarn](https://yarnpkg.com/lang/en/)
- [gitkraken](https://www.gitkraken.com/)
- react dev tools [chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) [firefox](https://addons.mozilla.org/it/firefox/addon/react-devtools/)

## Nozioni

- [destructuring](https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [arrow function](https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Functions_and_function_scope/Arrow_functions)
- [react hoooks](https://it.reactjs.org/docs/hooks-intro.html)
- [typescript import syntax](https://www.typescriptlang.org/docs/handbook/modules.html)
- [template literlas](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [object propertyva lue shorthand](https://alligator.io/js/object-property-shorthand-es6/)
- [computed property names](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names)
- [new javascript features](https://medium.com/@madasamy/javascript-brief-history-and-ecmascript-es6-es7-es8-features-673973394df4)

# Progetto

## Istallare yarn

E un package manager come npm ma più veloce

Lanciare `npm install -g yarn`

Controllare l'istallazione se è andatao a buon fine con `yarn --version`

Chiudere e riaprire la linea di comando eventualmente

Eventualmente aggiungere il comando al PATH

## Setup con create-react-app

- lanciare il comando `yarn create react-app my-app --typescript` (leggere l'output)
- lanciare vscode
  - andare su `file` -> `open folder` e selezionare la cartella che è stata appena create col comando precedente
- lanciare gitkraken
  - aprire il repository che corrisponde alla cartella creata in precedenza
  - si vedrà il primo commit già presente

## Sviluppo

- in vscode
  - premere `ctrl+shift+p` (su linux)
    - scrivere `integrated` (versione inglese) e premere invio
    - si aprira un terminale, già impostato alla cartella corrente
  - lanciare il comando `yarn start`
    - questo farà partire l' applicazione
    - leggere l'output del comando per i dettagli
- nel browser andare sulla url `localhost:3000`
  - vedremo l'app in esecuzione
- in vscode
  - aprire (nel pannello di sinistra) l'esplora file
    - aprire il file `src/App.tsx`
  - cambiare il titolo da `Learn React` a `Workshop (react + hooks + typescript)`
  - salvare il file premendo `ctrl+s`
  - verificare nel browser la modifica (il reload è automatico)
  - aprire (nel pannello di sinistra) `source control`
    - qui si possono vedere i file modificati dall'ultimo commit
    - passando sopra al nome compaiono dei bottoni
    - aggiungere il file appena modificato all'area di staging (col pulsante `+`)
    - scrivere il messaggio di commit `ch: title`
    - committare (pulsante `✓`)
- in gitkraken
  - verificare che sia visibile il commit appena fatto

## Struttura direcotry

- package.json
  - è il manifest del package manager
  - è presente l'elenco delle dipendenze del progetto
  - va committato quando modificato
  - contiene gli script per le fasi di build del progetto
- tsconfig.json
  - contiene la configurazione di typescript
- yarn.lock
  - è un file utilizzato da yarn per ricordare le sottodipendenze dei pacchetti
  - va committato se modificato
- .gitignore
  - contiene la lista dei file e cartelle da ignorare durante i commit
- public
  - contiene alcuni asset statici per generare la pagina html finale
  - contiene altri file necessari perchè l'app sia una [PWA](https://developers.google.com/web/progressive-web-apps)
- src
  - contiene i file sorgenti

## Like counter

andremo a realizzare bottone `like` con conteggio di click

- in vscode
  - creaiamo un nuovo file `src/LikeCounter.tsx`
  - con il contenuto
      ```typescript
      import React from "react"

      export function LikeCounter(){
        return <button>👍</button>
      }
      ```
  - nel file `src/App`
    - premendo `ctrl+p` (linux) si apre la ricerca veloce dei file (aiuta molto quando il numero di file è molto grande, per questo è consigliato chiamare i file con nomi univoci all'interno del progetto e dargli lo stesso nome del componente che esporta)
    - aggiungere `<LikeCounter/>`
      - mentre si digita il nome, si può gia apprezzare l'autocomplete
      - premendo invio dovrebbe aggiungersi l'import in automatico
        - nel caso contrario controllare nelle impostazioni (`ctrl+,` su linux) la voce `auto imports typescript` sia abilitata
        - posizionare il cursore alla fine del nome del componennte `<LikeComponent`**|**`/>` e premere `ctrl+space` poi `invio`
  - salvare le modifiche in tutti i file con il pulsante `save all` 💾 in alto a sinistra nel menu esplora
- nel browser
  - verificare le modifiche
- in vscode, file `src/LikeCounter`
  - aggiungamo una riga, ci servira per portare il conto dei click
    ```typescript
    import React, { useState } from "react"

    export function LikeCounter(){
      const [likes, setLikes] = useState(0)
      return <button>{likes} 👍</button>
    }
    ```
  - useState è una react hook, serve per mantenere lo stato
  - come unico parametro gli passiamo lo stato iniziale
  - ritorna un array di due elementi
    - 1 lo stato attuale
    - 2 la funzione che useremo per modificare lo stato
  - si notera che al click non succede nulla
  - aggiungiamo un azione sul click
    ```typescript
    import React, { useState } from "react"

    export function LikeCounter(){
      const [likes, setLikes] = useState(0)
      return <button onClick={() => setLikes(likes + 1)}>{likes} 👍</button>
    }
    ```
  - salva, verifica, commit

## Formattazione automatica

Per velocizzare la scrittura, e mantenere il codice indentato in maniera omogenea anche avendo più collaboratori si puo usare lo strumento `prettier`

- in vscode
  - istallare l'estensione `prettier`
  - nelle impostazioni (`ctrl+,` su linux)
    - nella sezione `workspace`
      - spuntare la voce `format on save`
    - noterete nel pannello `source control` che si è aggiunto il file `.vscode/settings.json`
      - va committato
    - la sezione `User` sono impostazioni globali per vscode
    - la sezione `Workspace` sono impostazioni della cartella corrente
  - in questo modo, ogni volta che salviamo un file, verrà formattato automaticamente con gli standard della community
  - è possibile formattare il file anche con
    - `ctrl+shift+i` su linux
    - `ctrl+shift+p` -> `format document`

- per formattare l'intero progetto
  - nel file `package.json`, nella sezione `scripts` aggiungiamo
    ```
    "scripts": {
      "start": "react-scripts start",
      "build": "react-scripts build",
      "test": "react-scripts test",
      "eject": "react-scripts eject",
      "format": "prettier --write \"./**/*.{js,jsx,json,ts,tsx}\""
    }
    ```
  - lanciamo il comando `yarn add -D prettier`
    - `-D` sta per dipendenza di sviluppo, ovvero che non serve quando il progetto va in produzione. noterete infatti che la dipendenza viene salvata in una sezione diversa (`devDependencies`) del `package.json`
  - da ora in poi ci basterà lanciare `yarn format` per formattare l'intero progetto
    - usando la formula `yarn <il tuo comando>` si possono eseguire gli scripts custom che avete aggiunto nel `package.json`

approfondimenti: [struttura package.json](https://docs.npmjs.com/files/package.json), [prettier pre-commit hook](https://prettier.io/docs/en/precommit.html)

formattare l'intero progetto, verificare, commit

## React dev tools

- aprire l'app nel browser
- assicurarsi di aver istallato l'estensione react-dev-tools
- aprire il pannello sviluppatori del browser
- andare nel tab `⚛️Components`
  - si vedrà la struttura dei componenti nella pagina
  - per utilizzare a pieno questo strumento
    - nelle impostazioni (bottone `⚙`)
      - `⚙General` -> `highlight updates` -> `✓`
      - `<>Components` -> `hide components where` -> `type` `equals` `host`
        - questo nasconde i componenti come div, span ecc
        - questa impostazione è anche molto utile se si vogliono nascondere componenti presenti ovunque ma non significativi (es: Context.Consumer)
  - clicchiamo sul componente `LikeCounter`
    - sul lato destro vedremo
      - props (attributi passati al componente)
      - hooks (contenuti delle hook, non tutte si possono ispezionare)
      - renderedBy (da chi è estato richiamato il componente)
        - la parte sinistra visualizza la gerarchia dei componenti nella pagina
        - invece renderedBy il `call stack` dei componenti
  - sperimentare col contatore like
    - alcuni campi nel pannello ispezione sono editabili
    - è molto utile il bottone `<>` che ci riporta al file sorgente che ha generato il componente selezionato
- andare nel tab `⚛️Profiler`
  - qui possiamo controllare le performance della nostra app
  - clicchiamo sul bottone start profiling `⏺`
  - clicchiamo sul bottone stop profiling `⏺`
  - possiamo vedere le misurazioni di quanto tempo i vari componenti hanno impiegato per renderizzare
  - è anche possibile vedere perchè un componente si aggiornato
  - è consigliabile tenere il tempo di rendering sotto i 17ms, sia dei singoli elementi che dell'intera app

## Debug in vscode

E possibile usare il debugger direttamente in vscode, velocizzando cosi molto il debug

- istallare l'estensione `chrome debugger`
- andare nella sezione `debug 🐛` del panneello di sinistra
- in alto clicare su `add configuration` -> `add configuration` -> `Chrome`
- modificare la configurazione come segue
  ```json
  {
    "type": "chrome",
    "request": "launch",
    "name": "Launch Chrome against localhost",
    "url": "http://localhost:3000",
    "webRoot": "${workspaceFolder}",
    "runtimeExecutable": "/usr/bin/chromium" // on linux, adjust for your system
  }
  ```
- chiudere tutte le finestre di chrome aperte (altrimenti non funzionerà)
- cliccare sul pulsante `debug ▷`
- verificare la funzionalità
  - mettere un punto di debug all'interno del componente `LikeCounter`
    - si fa cliccando alla sinistra del numero della riga quando compare un `⏺` rosso
  - sperimetnare
  - è molto consigliato usare il debugger invece dei `console.log`

## Title Changer

- creiamo il file `src/TitleChanger`
  ```typescript
  import React, { useState, useEffect } from "react";

  export function TitleChanger() {
    const [title, setTitle] = useState("React Workshop");
    // useEffect è una hook che ci permette di eseguire un comando imperativo al cambiamento di alcuni valori
    // primo parametro: funzione eseguita ogni volta che i valori cambiano
    // secondo parametro: lista dei valori usati all'interno dell'effect
    useEffect(() => {
      document.title = title;
    }, [title]);
    return (
      <div>
        page title:{" "}
        <input
          value={title} // bisogna specificare quale sia il valore contenuto nell'input
          onChange={event => {
            // aggiorniamo lo stato prendendo il valore del campo di input dall'evento
            setTitle(event.target.value);
          }}
        />
      </div>
    );
  }
  ```
- ed inseriamo il componente in `src/App.tsx`
- sperimentare il funzionamento, salva, commit

## vscode utilities

- rinominare una variabile o l'attributo di un oggetto
  - click destro sul nome della variabile
  - `rename symbol`
  - il nome verrà cambiato anche in tutti i posti in cui viene usato
- esportare in un nuovo file
  - click destro sul nome di una funzione
  - `refactor` -> `move to new file`
  - sposterà la funzione in un nuovo file, con tutti gli import necessari
  - utile quando un file è cresciuto troppo e si vuole riorganizzare il codice
  - funziona anche su una selezione (piu funzioni)
- spostare i file
  - spostando i file typescript (.ts e .tsx) nel pannello esplora, vscode vi darà la possibilita di aggiustare automaticamente tutti gli import relativi
  - utile quando si spostano file, non si rompe il progetto
- finda all references
  - utile quando si vuole controllare in quanti punti viene utilizzata una funzione
  - click destro sul nome della funzione `find all references`
- vai alla definizione
  - utile quando si vuole vedere la definizione di una funzione
  - `ctrl`+click sul nome della funzione
  - `ctrl+alt`+click sul nome della funzione per aprire accanto
  - click destro sul nome della funzione `peek references` per aprire in un popup

## [styled-components](https://www.styled-components.com/)

E la soluzione [css-in-js](https://codeburst.io/styling-in-react-css-in-js-47a68c15a770) più utilizzata nel mondo react.

Css-in-js permette di organizzare meglio gli stili, offre strumenti più potenti ed evita tutta una serie di problematiche come la collisione dei nome delle classi.

- installare l'estensione styled-component
- istallare la dipendenza `yarn add styled-component` (ci fornisce autoformattazione, colorazione del codice, e suggerimenti)
- istallare l'integrazione con typescript `yarn add -D @types/styled-components`

creare il file `src/Arcobaleno.tsx`

```typescript
import React from "react";
import styled from "styled-components/macro";

export function Arcobaleno() {
  return (
    <StyledBorder>
      <StyledBody>
        <StyledRed size={12}>R</StyledRed>
        <StyledGreen size={16}>G</StyledGreen>
        <StyledBlue size={14}>B</StyledBlue>
      </StyledBody>
    </StyledBorder>
  );
}

// gli styled component dovrebbero avere il prefisso Styled

const StyledBorder = styled.div`
  background: linear-gradient(
    45deg,
    rgba(255, 0, 0, 1) 0%,
    rgba(245, 255, 0, 1) 17%,
    rgba(9, 255, 0, 1) 32%,
    rgba(0, 245, 255, 1) 50%,
    rgba(38, 0, 255, 1) 67%,
    rgba(239, 0, 255, 1) 83%,
    rgba(255, 0, 0, 1) 100%
  );
  border-radius: 8px;
  padding: 4px;
`;

const StyledBody = styled.div`
  display: flex;
  border-radius: 4px;
  overflow: hidden;
`;

// si possono specificare parametri aggiuntivi per il componente styled
// oltre a quelli dell'elemento html presenti di default
const StyledTile = styled.div<{ size: number }>`
  color: white;
  text-shadow: 0px 0px 4px black;
  font-size: ${({ size }) => size}px; /* si può accedere ai parametri aggiuntivi */
  padding: 0.5em;
  opacity: 0.8;
  &:hover {
    transform: scale(1.5);
    opacity: 1;
    transition: 1s;
  }
  user-select: none;
`;

// un componente styled può ereditare da un altro componente styled
const StyledRed = styled(StyledTile)`
  background-color: red;
`;

const StyledGreen = styled(StyledTile)`
  background-color: green;
`;

const StyledBlue = styled(StyledTile)`
  background-color: blue;
`;
```

## Tema styled-components

Stabilire un tema per l'applicazione è molto ricorrente ed è utile sopratutto in 2 casi:

- colori/bordi/spaziatura utilizzati in modo omogeneo tra i componenti grafici
- applicazioni con piu temi

inoltre ci permette di avere un unico punto centralizzato per modificare valori globali

- Aggiungiamo il file `src/theme/theme.d.ts`
  ```typescript
  import { CSSProp } from "styled-components";

  /*
    Questa definizione di tipo ci permette avere il tema tipizzato.
    Qui stiamo dicendo a typescript che stiamo aggiungendo degli attrbibuti
    all'interface DefaultTheme del modulo "styled-components"
  */
  declare module "styled-components" {
    export interface DefaultTheme {
      backgroundColor: string;
      textColor: string;
    }
  }

  /*
    Questa definizione di tipo ci permette di utilizzare
    <div css={css`backgrouns-color: black;`}>
    Per il css inline (qualora fosse troppo oneroso definire componenti styled)
  */
  declare module "react" {
    interface Attributes {
      css?: CSSProp;
    }
  }
  ```
- Aggiumgiamo il file `src/mytheme.ts`
  ```typescript
  import React from "react";
  import { ThemeName, themes } from "src/theme/mytheme";

  type ThemeSwitcherProps = {
    current: ThemeName;
    onChange(themeName: ThemeName): void;
  };

  /**
   * Un componente che ci fa selezionare il nome del tema
   */
  export function ThemeSwitcher({ current, onChange }: ThemeSwitcherProps) {
    return (
      <>
        {/*
          Questa è un syntax sugar per utilizzare <React.Fragment>
          React.Fragment è come un div, solo che al suo posto non viene renderizzato nulla,
          è utile quando si ha bisogno di ragruppare un insieme di elementi jsx senza aggiungere qualcosa al dom.
          Nel caso in cui venga utilizzato con una lista, bisogna utilizzare la notazione per intero
          <React.Fragment key={key}>...</React.Fragment>
          poichè è necessario specificare la key per gli elementi di un array
        */}
        theme:&nbsp;
        <select
          value={current}
          onChange={event => onChange(event.target.value as ThemeName)}
        >
          {Object.keys(themes).map(themeName => (
            <option key={themeName} value={themeName}>
              {themeName}
            </option>
          ))}
        </select>
      </>
    );
  }
  ```
- Aggiungiamo il file `src/theme/ThemeSwitcher.tsx`
  ```typescript
  import React from "react";
  import { ThemeName, themes } from "./mytheme";

  type ThemeSwitcherProps = {
    onChange(themeName: ThemeName): void;
  };

  /**
  * Un componente che ci fa selezionare il nome del tema
  */
  export function ThemeSwitcher({ onChange }: ThemeSwitcherProps) {
    return (
      <>
        {/*
          Questa è un syntax sugar per utilizzare <React.Fragment>
          React.Fragment è come un div, solo che al suo posto non viene renderizzato nulla,
          è utile quando si ha bisogno di ragruppare un insieme di elementi jsx senza aggiungere qualcosa al dom.
          Nel caso in cui venga utilizzato con una lista, bisogna utilizzare la notazione per intero
          <React.Fragment key={key}>...</React.Fragment>
          poichè è necessario specificare la key per gli elementi di un array
        */}
        theme:&nbsp;
        <select onChange={event => onChange(event.target.value as ThemeName)}>
          {Object.keys(themes).map(themeName => (
            <option key={themeName} value={themeName}>
              {themeName}
            </option>
          ))}
        </select>
      </>
    );
  }
  ```
- nel file `src/App.tsx` aggiungiamo
```typescript
import { useMyTheme } from "./theme/mytheme";
import styled, { ThemeProvider, css } from "styled-components/macro";
import { ThemeSwitcher } from "./theme/ThemeSwitcher";

const App = () => {
  const [themeName, theme, setThemeName] = useMyTheme(); // utilizziamo la custom hook del nostro tema
  return (
    <ThemeProvider
      theme={theme}
      // forniamo agli styled component il contesto del tema
    >
      <StyledContainer>
        <ThemeSwitcher current={themeName} onChange={setThemeName} />
        Lorem ipsum
      </StyledContainer>
    </ThemeProvider>
  )
}

// il tema è accessibile tramite la prop theme
const StyledContainer = styled.div`
  background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
  color: ${({ theme: { textColor } }) => textColor};
`;
```

## Intellisense & [JSDoc](https://devdocs.io/jsdoc/)

Questi due strumenti possono rendere un progetto di grandi dimensioni facilmente gestibile.

Cercando sempre di annotatare correttamente i tipi ci permette di scoprire i conteneti e forme dei parametri e delle varaibili con un semplice hover del mouse. Ci avvisano in fase di scrittura di eventuali errori. Ci danno l'autocompletamneto in ogni parte del programma (`ctrl+spazio`). E ci permettono ache di fare refactor facile e sicuro.

Scrivendo i commenti nel formato [JSDoc](https://devdocs.io/jsdoc/), all'hover del mouse possiamo avere la documentazione a portata di mano senza dover cambiare file.

Si consiglia di sperimentare, e far entrare nella propria routine entrambi gli strumenti.

## Impostazioni utili

- Quando il progetto diventa grande, file e cartelle si moltiplicano, è utili sia per fini di refactor che leggibilita utilizzare gli import assoluti.
  - nel file `.vscode/setting.json` agggiungere `"typescript.preferences.importModuleSpecifier": "non-relative"`, questo imposterà gli import automatici sulla modalita assoluta
  - nel file `tsconfig.json` aggiungere `"baseUrl": "."`, questo indicherà da che punto partiranno i nostri perorsi di import
    - impostandolo a `"."` i nostri import avranno forma `src/miacartella/miofile`, questo è ideale perchè `src` non collide con i nomi di altri moduli installati tramite npm
- nel file `tsconfig.json` aggiungere `"noImplicitAny": true,` questo indicherà a typescript di avvisarci quando innavertitamente ci dimentichiamo di annotare i tipi
- nel file `.vscode/settings.json` aggiunger
  - `"editor.formatOnSave": true,`
  - `"editor.tabSize": 2,` indentare con due spazi è la convenzione in ambito js
  - `"typescript.tsdk": "./node_modules/typescript/lib",` questo dice a vscode di utilizzare la versione di typescript usata dal progetto (vscode ha una propria versione di typescript istallata), cosi da prevenire incongruenze
  - `"search.exclude": { "**/.git": true, "**/node_modules": true }` se nella cartella del progetto sono presenti cartelle che volete escludere dalla ricerca globale (`ctrl+shift+f`)

## More Shortcuts

[tips and tricks](https://code.visualstudio.com/docs/getstarted/tips-and-tricks)

- `ctrl+p` ![quick open](https://code.visualstudio.com/assets/docs/getstarted/tips-and-tricks/QuickOpen.gif)
- `ctrl+tab` ![navigation history](https://code.visualstudio.com/assets/docs/getstarted/tips-and-tricks/navigate_history.gif)
- `shift-alt-↑` ![multiple selection](https://code.visualstudio.com/assets/docs/getstarted/tips-and-tricks/multicursor.gif)
- `ctrl+d` ![select occurrences](https://code.visualstudio.com/assets/docs/getstarted/tips-and-tricks/add_cursor_current_selection_one_by_one.gif)
- `alt+↑` `alt+↓` ![move line](https://code.visualstudio.com/assets/docs/getstarted/tips-and-tricks/move_line.gif)
- `shift+alt+←` `shift+alt+→` ![srhink expand selection](https://code.visualstudio.com/assets/docs/getstarted/tips-and-tricks/shrink_expand_selection.gif)
- `@:` ![got to symbol grpuped](https://code.visualstudio.com/assets/docs/getstarted/tips-and-tricks/group_symbols_by_kind.png)
- `ctrl+p` `:134` vai alla linea
- `ctrl+l` seleziona linea (premuto più volte continua)

# FAQ

## Nomenclatura hooks

Tutti gli hook devono avere il prefisso `use`, non è solo estetico, è necessario per alcuni parti del framework. Inoltre è anche utile per fare una ricerca su tutto il progetto, per esempio cercando `function use` troverete tutti gli hook custom presenti

## .ts .tsx

I file typescript possono essere salvati con due estensioni

- .ts per file che non contengono [JSX](https://it.reactjs.org/docs/introducing-jsx.html)
- .tsx per i file che contengono [JSX]

ci sono alcune differenze nella sinstassi per i due tipi di file

## styled-components/macro

utilizzando questo import sfruttiamo le [babel-macro](https://babeljs.io/blog/2017/09/11/zero-config-with-babel-macros), per precompilare gli stili (miglioramento performance)

## d.ts

I file con estensione .d.ts sono file che possiamo utilizzare per arricchire la tipizzazione del progetto

- possiamo definire il tipi di un file javascript tradizionale in modo da poterlo importare nei file typescript
  - deve avere lo stesso nome del file javascript e trovarsi nella stessa cartella ed avere l'estensione .d.ts
- possiamio definire i tipi contenuti in un modulo (dipendenza istallata con npm)
  - il file si può trovare ovunque nella cartella sorgente
  - la sintassi è `declare module "miomodulo" {}`

# TODO

- [ ] todo list
- [ ] portal (modale)
- [ ] useDebounce (ricerca)
- [ ] memo (lista)
- [ ] context (user session)
- [ ] render prop (lista eterogena)
- [ ] useReducer (fetch custom hook)
- [ ] useCallback (on click)
- [ ] useMemo (derived prop)
- [ ] useRef (dom manipulation)
- [ ] (fetch)
- [ ] git flow
- [ ] fetch cancel signal
- [ ] process.env
- [ ] spiegazione cra
- [ ] useDebugValue
- [ ] useDebugPropChanges
- [ ] useLocalStorage (dark - white theme)
- [ ] useThrottle (clicks)
- [ ] useMediaQuery
- [ ] useMemoizedCallbacks
- [ ] useInterval
- [ ] useExpiration
- [ ] useUndoReducer
- [ ] state strategy (useState, useUndoState, useLocalStorage)
- [ ] useUndoState
- [ ] react spring useSpring (accordion, svg)
- [ ] useScript
- [ ] useKeyPress
- [ ] useOnScreen (insfinites scroll)
- [ ] usePrevious
- [ ] useHover