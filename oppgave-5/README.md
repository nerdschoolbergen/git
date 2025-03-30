# Oppgave 5 - Praktiske tips og verktøy

## :bulb: Mål med Oppgave 5

Etter denne oppgaven skal du lære å:

### 5.1 - Sletting av lokale brancher

:bulb: Det kan fort hope seg opp med brancher. Det er vanlig å slette disse eksempelvis når en merger en pull request, men lokale brancher kan bli liggende. Brancher kan slettes lokalt ved å bruke kommandoen `git branch -D <branchnavn>`, der du erstatter `<branchnavn>` med navn på branch du vil slette.

:pencil2: Rydd i feature branches lokalt. Sjekk alle brancher du har med kommando `git branch`, og slett deretter alle brancher utenom `main`.

### 5.2 - Sjekke ut tidligere commit

:bulb: Av og til trenger vi å gå tilbake i tid (eksempelvis, om en har en feil i produksjon og trenger å finne ut når denne har inntruffet, eller at har et behov for å se hvordan koden så ut en gang i fortiden).

For å sjekke ut en tidligere commit, kan du bruke kommando `git checkout <sha>`, der du erstatter `<sha>` med commit-hashen til en tidligere commit.

:pencil2: Sjekk ut en tidligere commit. Hopp deretter tilbake til HEAD.

### 5.3 - `git reset`

### 5.4 - `git stash`

### 5.5 - `git cherry-pick`

### 5.6 - `git reflog`

### 5.7 - Legge til alias for vanlige git-kommandoer

### 5.8 - Commit hooks

Nyttige ressurser:

- https://ohshitgit.com/
