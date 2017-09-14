# Exercise 2 - Create aliases for typical git commands

With git you can create short hand aliases for git-commands. A typical alias for the `add` command is `a`. So instead of typing `git add` you can write `git a`.
This alias can e created by configuring git:
```
git config --global alias.a add
```

## In this exercise we will

- Learn how to create your own aliases for the most typical git commands
- Setup alias to set up an improved commit log printout in the terminal

## 2.1 - Create your own aliases

:pencil2: Create your own aliases for the most typical git commands

* status
* add
* commit
* push
* pull
* merge
* checkout

## 2.2 - Create alias for improved commit log

A useful command is `git log` which will list the latest commits done. The default log is pretty basic though. A common tool for understanding git logs is a graph showing how branches and commits diverge and relate.

:bulb: When in git log mode, exit by typing ":q" as in vim

For example, in SourceTree, a log is shown like this:
<br/>
![source-tree-1](./images/react-fastclick-1.png)


We can achieve this in the terminal as well by using an alias.

First, we need a bigger repo to play with to illustrate the point.

* `git clone https://github.com/JakeSidSmith/react-fastclick` to your computer
* `git log` in the directory.

Add the following as aliases in your `.gitconfig`

```
[alias] <- Skip this header if it exists in the file already and just append the lines below to it
	lg1 = log --graph --abbrev-commit --decorate --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(bold yellow)%d%C(reset)' --all
	lg2 = log --graph --abbrev-commit --decorate --format=format:'%C(bold blue)%h%C(reset) - %C(bold cyan)%aD%C(reset) %C(bold green)(%ar)%C(reset)%C(bold yellow)%d%C(reset)%n''          %C(white)%s%C(reset) %C(dim white)- %an%C(reset)' --all
	lg = !"git lg1"
```

This adds 3 aliases. The `lg1` and `lg2` aliases is slightly different. Try them out. The `lg` alias basically just calls `lg1` as your default. Change it if you want to.

Using `git lg` (mapped to lg2 instead of lg1) I get the following. Note the commit history in the margin.
![source-tree-2](./images/react-fastclick-2.png)

(You can delete the react-fastclick repository)