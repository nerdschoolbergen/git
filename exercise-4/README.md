# Exercise 4 - Rebasing

## :bulb: Goals for Exercise 4

After this exercise, you will be able to:

- Use `git rebase` to merge changes
- Use `git rebase` in interactive mode
- Use `git pull --rebase` to use rebase when pulling down changes

### 4.1 - Git rebase

We will now put ourselves in a situation similar to before, where we need to merge changes. Instead of using `git merge`, we will use `git rebase`.

:pencil2: Check out a feature branch, `feature-branch-5`, from the `main` branch. Replace the contents of `index.ts` with the contents of `code/4.1-change-1.ts`. Commit the changes in your branch.

:pencil2: Check out the `main` branch, and from the `main` branch, create a new branch, `feature-branch-6`. Replace the contents of `code/index.ts` with the contents of `code/4.1-change-2.ts`.

:pencil2: Merge `feature-branch-5` into `main`.

:pencil2: Go into `feature-branch-5`. Rebase the changes from `main` into `feature-branch-5`. You can do this with the following command:

```
git rebase main
```

:bulb: You generally never want to rebase in main. That would rewrite the history in the shared working branch.

### 4.2 - Git rebase interactive

When you're in a feature branch, you might sometimes want to rewrite commits you've checked in, for example by combining commits or changing the commit message for a commit. You can do this with `git rebase` in interactive mode.

:bulb: When pushing changes after a rebase, you'll need to use `--force` since you've rewritten history. However, using `git push --force-with-lease` is safer than `git push --force`. The `--force-with-lease` flag will check if someone else has pushed changes to the branch since your last fetch. If there are new changes you haven't incorporated, the push will fail, preventing you from accidentally overwriting others' work. This is especially important when working on shared feature branches where multiple developers might be contributing.

### 4.3 - Git pull --rebase

:bulb: When you run `git pull`, Git performs a `git fetch` followed by a `git merge`. However, you can use `git pull --rebase` to perform a `git fetch` followed by a `git rebase` instead. This can help maintain a cleaner, more linear history by avoiding merge commits.

When using `git pull --rebase`, your local commits are temporarily set aside, the remote changes are pulled down, and then your local commits are replayed on top of the updated branch. This creates a linear history instead of creating a merge commit like a regular `git pull` would do.

:pencil2:  Let's simulate this difference:
1. Create a new branch called `pull-test` from main
2. Make a change and commit it
3. Go back to main and make a different change and commit it
4. Go to `pull-test` and try `git pull` to merge main's changes - notice the merge commit
5. Reset the branch with `git reset --hard HEAD~2`
6. Try `git pull --rebase` instead - notice the linear history

---

[:arrow_right: Go to next exercise](../exercise-5/README.md)
