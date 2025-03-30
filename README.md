# Introduction to Version Control with Git

Git is an essential tool in a developer's toolbox, widely regarded as the most popular version control system. Understanding how to use Git effectively is crucial for tracking changes in files, improving productivity, and collaborating efficiently with others.

In this workshop, we will cover Git in the command line, going through the basic mechanisms of versioning files. We will look at the most important commands, as well as useful tips for getting out of trouble when things go wrong. We will use Github.com to work with a repository outside of our local machine, where we will also explore the use of Pull Requests. To merge changes and resolve conflicts, we will use Visual Studio Code.

[Open presentation slides](#)

## Prerequisites

### Git

Ensure that Git is installed on your machine and accessible from the command line/terminal.  
If you already have Git installed, you can skip this step. On Windows, check if you have `git bash` installed. If you are on macOS or Linux, you can check if Git is available by typing `git version`.

If Git is not installed, you can find instructions for installing it on all operating systems here: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

### Editor

You are free to use the code editor of your choice, but we highly recommend [Visual Studio Code](https://code.visualstudio.com/).

## How to get started

- Even though you have this file (`README.md`) on your local machine if you have cloned the repository, it is easier to read on GitHub due to formatting. We therefore recommend using a browser to read the exercises.
- Start with Exercise 1, and feel free to ask if anything is unclear or if there is something you would like to discuss.

:exclamation: We will not use the GUI client in this workshop. Instead, we will use the terminal/command line (CLI). It is a good idea to avoid copy-pasting commands to get used to typing Git commands, even though it may feel inconvenient at first. Once you get the hang of it, using the CLI tool becomes an efficient way to work.

## Exercises

This repository contains a set of exercises organized in folders. Each folder contains a `README.md` describing the exercise:

- [Exercise 1](oppgave-1/README.md)
- [Exercise 2](oppgave-2/README.md)
- [Exercise 3](oppgave-3/README.md)
- [Exercise 4](oppgave-4/README.md)
- [Exercise 5](oppgave-5/README.md)

### Symbols and notation used in the exercises

#### Icons with special meaning

:pencil2: - A task you should do  
:book: - A section of text to read (no tasks, just information).  
:bulb: - Additional information.  
:exclamation: - Something important.  
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