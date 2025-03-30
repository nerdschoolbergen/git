# Introduksjon til versjonskontroll med Git

Git har blitt et viktig verktøy i verktøykassen som utvikler. Verktøyet er nå det mest brukte versjonskontrollsystemet og er viktig å kunne for å være produktiv som utvikler for å spore endringer i filene våre over tid. Dette er viktig for å både kunne utvikle programvare effektivt, men også for å kunne samhandle med andre effektivt.

I denne workshop'en skal innom git i kommandolinjen, der vi går igjennom de grunnleggende mekanismene rundt å versjonere filer. Vi ser på de viktigste kommandoene, men også lure tips for ro seg i land når ting går galt. Vi skal bruke Github.com for å arbeide mot et repository utenfor egen maskin, der vi også ser på bruk av Pull Requests. For å merge endringer og løse konflikter, bruker vi Visual Studio Code.

## Oppsett på egen maskin

### Git

Sørg for at Git er installert på maskinen din og er tilgjengelig fra kommandolinje/terminal.
Om du alt har git installert, kan du hoppe over dette steget. I Windows, sjekk om du har `git bash` installert. Er du på Mac OS eller Linux, kan du sjekke om git er tilgjengelig med å skrive `git version`.

Har du ikke git installert, finner du oppskrift for å installere på alle operativsystemer her: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

### Editor

Det er fritt frem for å bruke den kode-editoren du selv foretrekker, men vi varmt anbefale Visual Studio Code.

## Kom igang

- Selv om du har denne filen (`README.md`) på egen maskin om du har klonet ned repoet, er det enklere å lese på Github med tanke på formattering. Vi anbefaler derfor at du bruker nettleser til å lese oppgavene.
- Start på oppgave 1, og spør gjerne om det er noe som er uklart eller noe du ønsker å diskutere.

:exclamation: Vi skal ikke bruke GUI-klienten i dette workshopen. Her skal vi bruke terminal/CLI. Det er lurt å unngå klipp-og-lim for å bli vandt til å skrive git-kommandoer, selv om det kan oppleves som tungvindt i starten. Etterhvert som en får det inn i fingrene, blir bruk av CLI-verktøyet en effektiv måte å jobbe på.

## Øvelser

Dette repositoriet har et sett med øvelser organisert i kataloger. Hver katalog inneholder en `README.md` som beskriver oppgaven.

- [Oppgave 1](oppgave-1/README.md)
- [Oppgave 2](oppgave-2/README.md)
- [Oppgave 3](oppgave-3/README.md)
- [Oppgave 4](oppgave-4/README.md)
- [Oppgave 5](oppgave-5/README.md)

### Symboler og ikoner du finner igjen i oppgavene

#### Ikoner med spesiell betydning

- :pencil2: En oppgave du skal utføre
- :bulb: Ekstra informasjon eller tips. Her trenger du ikke å utføre noe, men ta med deg informasjon videre.
- :poop: Dårlig praksis, gjerne en uheldig måte å løse et problem på.
- :star: En bonusoppgave

#### Tastatursnarveier

Tips om snarveier du kan ta ved å bruke tastaturkombinasjoner ser slik ut:

<kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>C</kbd>

#### Diff blocks

En diff-block vil vise om det er tekst som skal legges til eller fjernes (`-` fjernes, `+` legges til)

```diff
- this text was removed
+ and replaced with this text
```
