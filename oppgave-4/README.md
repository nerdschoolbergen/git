# Oppgave 4 - Rebasing

## :bulb: Mål med Oppgave 4

Etter denne oppgaven skal du kunne å:

- Bruke `git rebase` for å flette endringer
- Bruke `git rebase` i interaktiv-modus
- Bruke `git pull --rebase` for å bruke rebase når du drar ned endringer

### 4.1 - Git rebase

Vi skal nå sette oss i en situasjon lik før, der vi har behov for å merge endringer. I stedet for å bruke `git merge`, skal vi bruke `git rebase`.

:pencil2: Sjekk ut en feature-branch, `feature-branch-5`, fra `main` branch. Erstatt innholdet i `index.ts` med innholdet i `code/4.1-endring-1.ts`. Sjekk endringene inn i en commit i branchen din.

:pencil2: Sjekk ut `main` branch, og ut i fra `main` branch, opprett en ny branch, `feature-branch-6`. Erstatt innholdet i `code/index.ts` med innholdet i `code/4.1-endring-2.ts`.

:pencil2: Merge `feature-branch-5` inn i `main`.

:pencil2: Gå inn i `feature-branch-5`. Rebase endringene fra `main` inn i `feature-branch-5`. Dette kan du gjøre med følgende kommando:

```
git rebase main
```

:bulb: Du ønsker som regel aldri å rebase i main. Da skriver du om historikken i felles arbeidsbranch.

### Git rebase interactive

Når du står i en feature-branch, vil du i noen tilfeller skrive om commits du har sjekket inn, f.eks. ved å slå sammen commits eller endre commit-melding for en commit. Dette kan du gjøre med `git rebase` i interaktiv modus.

TODO: Beskrive git push --force-with-lease

### Git pull --rebase

---

[:arrow_right: Gå til neste oppgave](../oppgave-5/README.md)
