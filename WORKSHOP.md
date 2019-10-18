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


# FAQ

# TODO

- [ ] vscode chrome debugger
- [ ] styled-component
- [ ] styled-component vscode plugin
- [ ] styled-component theme (text color, background color)
- [ ] absolute import
- [ ] memo (lista)
- [ ] react fragment
- [ ] context (user session)
- [ ] portal (modale)
- [ ] render prop (lista eterogena)
- [ ] useEffect (fetch)
- [ ] useReducer (fetch custom hook)
- [ ] useCallback (on click)
- [ ] useMemo (derived prop)
- [ ] useRef (dom manipulation)
- [ ] https://it.reactjs.org/docs/hooks-rules.html
- [ ] https://it.reactjs.org/docs/hooks-intro.html
- [ ] git flow
- [ ] fetch cancel signal
- [ ] process.env
- [ ] spiegazione cra
- [ ] js next, destructuring, spread, const
- [ ] custom hooks
- [ ] useDebugValue
- [ ] useDebugPropChanges
- [ ] useLocalStorage (dark - white theme)
- [ ] useDebounce (ricerca)
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