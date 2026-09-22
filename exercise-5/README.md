# Exercise 5 - Practical Tips and Tools

## :bulb: Goals for Exercise 5

After this exercise, you will be able to:

- Delete local branches you no longer need
- Check out an earlier commit, and understand what "detached HEAD" means
- Use `git reset` to move your branch pointer around
- Use `git stash` to put changes aside temporarily
- Use `git cherry-pick` to pull a single commit across branches
- Know where to look when things go wrong

## 5.1 - Deleting Local Branches

:bulb: Branches can quickly accumulate. It's common to delete these when merging a pull request, but local branches can remain. Branches can be deleted locally using the command `git branch -d <branchname>`, where you replace `<branchname>` with the name of the branch you want to delete.

:bulb: Use lowercase `-d` by default. It refuses to delete a branch whose commits have not been merged anywhere else, which protects you from throwing away work by accident. If Git refuses and you are certain you want the branch gone, `git branch -D <branchname>` (uppercase) forces the deletion.

:exclamation: Treat `-D` the same way you treat `git push --force`: reach for the safe version first, and only escalate when you have read what Git is warning you about.

:pencil2: Clean up feature branches locally. Check all your branches with the command `git branch`, and then delete all branches except `main`.

## 5.2 - Checking Out Previous Commits

:bulb: Sometimes we need to go back in time (for example, if there's a bug in production and we need to find out when it occurred, or if we have a need to see how the code looked at some point in the past).

To check out a previous commit, you can use the command `git checkout <sha>`, where you replace `<sha>` with the commit hash of a previous commit. You can find the hashes with `git log --oneline`.

:exclamation: When you check out a commit instead of a branch, Git puts you in a state called **detached HEAD**. You are no longer "on" a branch - you are standing on a specific commit. Git will tell you so in a fairly long message. Looking around is perfectly safe, but any commit you make here belongs to no branch, and will be hard to find again once you leave.

:pencil2: Check out a previous commit and look at the files. Then return to your branch with `git checkout main` (or `git switch -`, which means "go back to where I just was").

## 5.3 - `git reset`
:bulb: Sometimes you want to undo changes and move your branch pointer to a different commit. `git reset` is a powerful command that can help with this. There are three main modes:

- `git reset --soft`: Moves the branch pointer but keeps changes staged
- `git reset --mixed` (default): Moves the branch pointer and unstages changes 
- `git reset --hard`: Moves the branch pointer and discards all changes

:warning: Be careful with `git reset --hard` as it permanently deletes changes!

:pencil2: Try the following:
1. Make some changes and commit them
2. Use `git reset --soft HEAD~1` to undo the commit but keep changes staged
3. Use `git reset --mixed HEAD~1` on another commit to move changes to working directory
4. Create a test file and commit it
5. Use `git reset --hard HEAD~1` to completely remove that commit and its changes

:bulb: `--hard` feels final, but it usually isn't. Git keeps a log of every position your branch has pointed at, which you can see with `git reflog`. If you reset too far, find the commit you want in the reflog and `git reset --hard <sha>` back to it. This is the single most useful command for getting out of trouble, and it is worth remembering before you need it.


## 5.4 - `git stash`

:bulb: Sometimes you need to temporarily save changes without committing them. This is where `git stash` comes in handy. It takes your uncommitted changes (both staged and unstaged) and saves them for later use. Common commands:

- `git stash`: Save changes and clean working directory
- `git stash list`: See all stashed changes
- `git stash apply`: Apply most recent stash but keep it in stash list
- `git stash pop`: Apply most recent stash and remove it from stash list
- `git stash drop`: Remove most recent stash without applying it

This is particularly useful when you need to quickly switch branches but aren't ready to commit your current changes.

:exclamation: By default `git stash` only stashes files that Git already tracks. Brand new, untracked files are left behind in your working directory, which is a common surprise. Use `git stash -u` to include them.

:pencil2: Try the following:
1. Make some changes to a file
2. Use `git stash` to save the changes
3. Verify your working directory is clean
4. Use `git stash list` to see your stashed changes
5. Use `git stash pop` to recover your changes


## 5.5 - `git cherry-pick`

:bulb: `git cherry-pick` allows you to take specific commits from one branch and apply them to another branch. This can be useful when you want to bring in specific changes without merging entire branches.

The basic syntax is: `git cherry-pick <commit-hash>`

However, cherry-picking should be used with caution:
- It creates duplicate commits with different hashes
- It can make the history harder to understand
- If the changes depend on other changes, it might cause conflicts
- It can make future merges more complicated

Generally, it's better to use merging or rebasing for bringing changes between branches. Cherry-picking is best reserved for specific cases where you truly only need an isolated change.

:pencil2: Try the following:
1. Create a new branch and make a few commits
2. Switch back to main
3. Use `git cherry-pick` to bring one specific commit from your new branch to main
4. Look at the git log to see how the history looks after cherry-picking


## 5.6 - Useful resources 
"Oh shit git", can be a useful resource for when "crap hits the fan". Take a look at some of the commands here and try to learn some tips and tricks.  

- https://ohshitgit.com/

---

That's the end of the workshop. Thanks for joining!

[:arrow_left: Back to the overview](../README.md)
