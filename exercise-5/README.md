# Exercise 5 - Practical Tips and Tools

## :bulb: Goals for Exercise 5

After this exercise, you will learn to:

### 5.1 - Deleting Local Branches

:bulb: Branches can quickly accumulate. It's common to delete these when merging a pull request, but local branches can remain. Branches can be deleted locally using the command `git branch -D <branchname>`, where you replace `<branchname>` with the name of the branch you want to delete.

:pencil2: Clean up feature branches locally. Check all your branches with the command `git branch`, and then delete all branches except `main`.

### 5.2 - Checking Out Previous Commits

:bulb: Sometimes we need to go back in time (for example, if there's a bug in production and we need to find out when it occurred, or if we have a need to see how the code looked at some point in the past).

To check out a previous commit, you can use the command `git checkout <sha>`, where you replace `<sha>` with the commit hash of a previous commit.

:pencil2: Check out a previous commit. Then jump back to HEAD.

### 5.3 - `git reset`
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


### 5.4 - `git stash`

:bulb: Sometimes you need to temporarily save changes without committing them. This is where `git stash` comes in handy. It takes your uncommitted changes (both staged and unstaged) and saves them for later use. Common commands:

- `git stash`: Save changes and clean working directory
- `git stash list`: See all stashed changes
- `git stash apply`: Apply most recent stash but keep it in stash list
- `git stash pop`: Apply most recent stash and remove it from stash list
- `git stash drop`: Remove most recent stash without applying it

This is particularly useful when you need to quickly switch branches but aren't ready to commit your current changes.

:pencil2: Try the following:
1. Make some changes to a file
2. Use `git stash` to save the changes
3. Verify your working directory is clean
4. Use `git stash list` to see your stashed changes
5. Use `git stash pop` to recover your changes


### 5.5 - `git cherry-pick`

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


# 5.6 - Useful resources 
"Oh shit git", can be a useful resource for when "crap hits the fan". Take a look at some of the commands here and try to learn some tips and tricks.  

- https://ohshitgit.com/
