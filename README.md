# git
Git has won the source control battle for now, and it is a vital tool to learn for any developer today. Learn the basic commands and workflow in this lesson.

## [Open presentation slides](https://drive.google.com/open?id=1lU3hJgiYhOI1fBQuRpRBunFIGx2euhEbv6Mdf_n1ZBs)

## Remember...

1. **Do not use a GUI client today. Terminal/CLI only.**
1. **Do not copy & paste anything today. Type it out manually.**
1. **Read and do everything in the tutorial.**

## Assignments

### 1.  Do the git-it interactive tutorial.
  * [Download git-it](https://github.com/jlord/git-it-electron/releases)
  * The verify button at the end of each step might not work correctly. You can try run git-it as administrator, but it's not a big issue. If you're confident you've solved the task just move on, or ask an instructor in the room to verify.

### 2. Create aliases for typical git commands
With git you can create short hand aliases for git-commands. A typical alias for the `add` command is `a`. So instead of typing `git add` you can write `git a`.
This alias can e created by configuring git:
```
git config --global alias.a add
```

**Assignment:**

Create your own aliases for the most typical git commands:
* status
* add
* commit
* push
* pull
* merge
* checkout

### Creating custom git commands
With git you can create your own custom commands by writing shell scripts. For this to work you must you a specific naming convention for the script file. The file must start with `git-`. So if you want a custom command for adding every file, and you want this command to be named `addall` the file name for the script must be `git-addall`. Also, every custom git script must be added to your `PATH`. When this is done you can for exampuse use `git addall` as a command.

**Assignment:**

Create a custom git command called `acp` which will add, commit and push (to current repo) in one command. This command should take two paramteres:

1. What to add (and commit), i.e. the path of the file(s).
2. A commit message

### More on forking and pull requests
For this assignment you will fork a repo to your own account, create a pull request and merge the changes from the pull request into the original repo.

1. Fork the repo on https://github.com/nerdschoolbergen/git-forkme to your own GitHub account
2. Add a .md file into the `feedback` folder (in your version of the repo). Name this file `feedback-<lastname>.md` and provide some feedback about the workshop.
3. Create a pull request (let someone else in the workshop handle the PR)
4. Handle someone else's PR and add the changes to the original repo.

### 3. Solving a merge conflict

A merge tool is a tool that compare different versions of a file side by side and let you manually pick and choose lines in order to solve the conflict. First we must install such a tool. We're going to use KDiff3.

* Install a merge tool: KDiff3
  * http://kdiff3.sourceforge.net/
* Configure git to use KDiff3 as the default merge tool.
  * Type the following into your terminal without copy & pasting http://stackoverflow.com/a/33348841
* Go to https://github.com/nerdschoolbergen/git-mergedemo
  * In the "Branches" dropdown list, verify that there are 3 branches: master, develop, and conflict.
  * Change the current branch to be develop and verify that the contents of todo.txt is
  ```
  Things to do today:
  Nothing
  ```
  * Change the current branch to be conflict and verify that the content is now
  ```
  Things to do today:
  All the things!
  ```
4. `git clone` the git-mergedemo repository so you can work with it on your computer.
5. `git status` and verify you're on the master branch.

As you now know, the content of todo.txt is different on the two branches. We're now going to merge both develop and conflict into master since that's where we want to synchronize everything. While in the master branch...

* `git merge develop`
* `git status`

So far, so good.

* `git merge conflict`

```
Auto-merging todo.txt
CONFLICT (add/add): Merge conflict in todo.txt
Automatic merge failed; fix conflicts and then commit the result.
```

This means git couldn't figure out how to combine the todo.txt with the one we already have.

9. Open todo.txt in a text editor.

```
Things to do today:
<<<<<<< HEAD
Nothing
=======
All the things!
>>>>>>> conflict
```

So not only was Git not able to merge the files, it put in some weird stuff and ruined it also! Let's understand what is going on here.
