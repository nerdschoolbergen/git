# Introduction to Version Control with Git

Git is an essential tool in a developer's toolbox, widely regarded as the most popular version control system. Understanding how to use Git effectively is crucial for tracking changes in files, improving productivity, and collaborating efficiently with others.

In this workshop, we will cover Git in the command line, going through the basic mechanisms of versioning files. We will look at the most important commands, as well as useful tips for getting out of trouble when things go wrong. We will use GitHub.com to work with a repository outside of our local machine, where we will also explore the use of Pull Requests. To merge changes and resolve conflicts, we will use Visual Studio Code.

[Open presentation slides](https://docs.google.com/presentation/d/1POAYb8NomMtVpeVeSkLbC9vL15gVgg-HXr4IrLtdl5Y/edit?usp=sharing)

## Prerequisites

### Git

Ensure that Git is installed on your machine and accessible from the command line/terminal.  
If you already have Git installed, you can skip this step. On Windows, check if you have `git bash` installed. If you are on macOS or Linux, you can check if Git is available by typing `git version`.

If Git is not installed, you can find instructions for installing it on all operating systems here: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

### Editor

You are free to use the code editor of your choice, but we highly recommend [Visual Studio Code](https://code.visualstudio.com/).

### GitHub account

You will need an account on [github.com](https://github.com/). If you don't have one, create it before the workshop starts - it only takes a minute, but it is one less thing to do while everyone else is working.

### GitHub CLI

We use the [GitHub CLI](https://cli.github.com/) (`gh`) to authenticate Git against GitHub over HTTPS, so that pushing and pulling works without setting up SSH keys. Installing it ahead of time is a good idea:

```shell
winget install --id GitHub.cli    # Windows
brew install gh                   # macOS
```

On Linux, see the [installation instructions for your distribution](https://github.com/cli/cli/blob/trunk/docs/install_linux.md). Exercise 1 walks through logging in, and covers what to do if you would rather not install it.

## How to get started

- Clone this repository. Exercises 2 and 4 ask you to copy code from the `code/` folder, so you will want it on your machine:

  ```shell
  git clone https://github.com/nerdschoolbergen/git.git
  ```

- Even though you have this file (`README.md`) on your local machine once you have cloned the repository, it is easier to read on GitHub due to formatting. We therefore recommend using a browser to read the exercises.
- :exclamation: In exercise 1 you will create a **separate** repository of your own to work in. This cloned repository is only the source of the exercise text and the code snippets - you will not be committing to it.
- Start with Exercise 1, and feel free to ask if anything is unclear or if there is something you would like to discuss.

:exclamation: We will not use the GUI client in this workshop. Instead, we will use the terminal/command line (CLI). It is a good idea to avoid copy-pasting commands to get used to typing Git commands, even though it may feel inconvenient at first. Once you get the hang of it, using the CLI tool becomes an efficient way to work.

## Exercises

This repository contains a set of exercises organized in folders. Each folder contains a `README.md` describing the exercise:

- [Exercise 1](exercise-1/README.md)
- [Exercise 2](exercise-2/README.md)
- [Exercise 3](exercise-3/README.md)
- [Exercise 4](exercise-4/README.md)
- [Exercise 5](exercise-5/README.md)

### Symbols and notation used in the exercises

#### Icons with special meaning

:pencil2: - A task you should do  
:book: - A section of text to read (no tasks, just information).  
:bulb: - Additional information.  
:exclamation: - Something important.  
:warning: - A command that can destroy work if used carelessly.  
:question: - Open-ended question for the reader ("What do you think would happen if...")  
:poop: - Bad practice (don't-do-this)  
:star: - A bonus task (not required)  

#### Keyboard keys

Will look like this:

<kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>C</kbd>

#### Diff blocks

Emphasizes how lines of text should change.

```diff
- this text was removed
+ and replaced with this text
```
