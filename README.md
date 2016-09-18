# git
Git has won the source control battle for now, and it is a vital tool to learn for any developer today. Learn the basic commands and workflow in this lesson.

## [Open presentation slides](https://drive.google.com/open?id=1lU3hJgiYhOI1fBQuRpRBunFIGx2euhEbv6Mdf_n1ZBs)

## Remember...

1. **Do not use a GUI client today. Terminal/CLI only.**
1. **Do not copy & paste anything today. Type it out manually.**
1. **Read and do everything in the tutorial.**

## Assignments

1.  Do the git-it interactive tutorial.
  * [Download git-it](https://github.com/jlord/git-it-electron/releases)
  * The verify button at the end of each step might not work correctly. You can try run git-it as administrator, but it's not a big issue. If you're confident you've solved the task just move on, or ask an instructor in the room to verify.

### Solving a merge conflict

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

* Open todo.txt in a text editor.

```
Things to do today:
<<<<<<< HEAD
Nothing
=======
All the things!
>>>>>>> conflict
```

So not only was Git not able to merge the files, it put in some weird stuff and made it all worse! Let's understand what's going on here.

The content between `<<<<<<< HEAD` and `=======` is what git found at it's HEAD, meaning the latest commit on the current branch.

The content between `=======` and `>>>>>>> conflict` is what we tried to merge into master but couldn't.

#### Solving manually

There is nothing magical about the auto generated content in the file. The easiest way to solve this conflict is simply to delete the stuff you don't want and save the file with the content you deem correct. For example,
```
Things to do today:
Nothing
```
If you save the file like this, git is happy and you can continue to commit the changes.

* `git commit -m "Solved nasty merge conflict"`

#### Solving using a merge tool

Sometimes when there are many lines and many files that has conflicts, it can be hard to read and understand a file with the auto generated merge conflict text. After all, this will be in files with hundreds of lines of code that must compile and work after you're done merging. This is where many people turn to using a merge tool (although you don't have to use one if you don't want to).

We're going to undo our last commit and re-do the merge.

In order to undo our local commit, first we must know it's ID.

* `git log`

A series of git commits should be listed along with a long SHA-1 code which is the ID of the commit. Don't worry, you don't need to write it all, typically git understands what you mean by just typing 4-6 of the first characters of the ID.

For me, the the log looks like this:

```
commit 0a4eacc090bfe17400ac8e9847c1d7bc3bd9cb6b
Merge: 336629e fd2417f
Author: Eirik Årdal <eaardal@outlook.com>
Date:   Sun Sep 18 17:25:59 2016 +0200

    Solved merge

commit fd2417f000bb80e62766016802f000d07a339a21
Author: Eirik Årdal <eaardal@outlook.com>
Date:   Sun Sep 18 16:44:09 2016 +0200

    Added todo.txt

commit 336629e4bf3225ff50dd77b8863f4120cd5808ab
Author: Eirik Årdal <eaardal@outlook.com>
Date:   Sun Sep 18 16:43:05 2016 +0200

    Added todo.txt

commit 57191c16a9666137b311a11dd48d62d42adc6312
Author: Eirik Årdal <eaardal@outlook.com>
Date:   Sun Sep 18 16:41:30 2016 +0200

    Initial commit
```

I want to reset to where I had the merge conflict in order to re-do it. This is the commit with ID starting at `fd2417`.

I'm going to use the first bit, `fd2417`, as the ID. Git understands the rest.

* `git reset --hard <YOUR COMMIT ID>`
