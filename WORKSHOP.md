# Workshop (react + hooks + typescript)

## Software da istallare

- [vscode](https://code.visualstudio.com/)
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

# FAQ

# TODO

- [ ] context (user session)
- [ ] portal (modale)
- [ ] render prop (lista eterogena)
- [ ] memo (lista)
- [ ] useState (contatore like)
- [ ] useEffect (fetch)
- [ ] useReducer (fetch custom hook)
- [ ] useCallback (on click)
- [ ] useMemo (derived prop)
- [ ] useRef (dom manipulation)
- [ ] useDebugValue
- [ ] https://it.reactjs.org/docs/hooks-rules.html
- [ ] https://it.reactjs.org/docs/hooks-intro.html
- [ ] styled-component
- [ ] styled-component vscode plugin
- [ ] styled-component theme (text color, background color)
- [ ] react dev tools, (filter, rednered by), profiler (why rerender)
- [ ] vscode chrome debugger
- [ ] prettier in vscode, format on save, fformat script
- [ ] git flow
- [ ] custom hooks, useDebounce (ricerca), useThrottle (clicks)
- [ ] spiegazione cra
- [ ] js next, destructuring, spread, const
- [ ] useLocalStorage (dark - white theme)
- [ ] useMediaQuery
- [ ] useMemoizedCallbacks
- [ ] useInterval
- [ ] useExpiration
- [ ] useDebugPropChanges
- [ ] process.env
- [ ] useUndoState
- [ ] useUndoReducer
- [ ] fetch cancel signal
- [ ] react spring useSpring (accordion, svg)
- [ ] useScript
- [ ] useKeyPress
- [ ] useOnScreen (insfinites scroll)
- [ ] usePrevious
- [ ] useHover
- [ ] absolute import