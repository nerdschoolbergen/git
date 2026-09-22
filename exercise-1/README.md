# Exercise 1 - Common Commands

## :bulb: Goal of Exercise 1

After completing this exercise, you should be able to:

- Configure Git on your own machine
- Learn some of the most commonly used Git commands in the CLI:
  - `git init` (Initialize a Git repository tracked both locally and on GitHub)
  - `git add` (Add files to the staging area)
  - `git commit` (Commit files to the local repository)
  - `git push` (Push files to the remote repository)
  - `git pull` (Fetch files from the remote repository)

## 1.1 - Configuring Git

:bulb: In this section, we will set up a configuration that describes "who you are" in Git. You can skip this part if you have already set it up. If `git config --global user.name` and `git config --global user.email` return your name and email address, you have already configured this.

:pencil2: Configure your name and email in the Git configuration:

```shell
git config --global user.name "Your Name"
git config --global user.email your.name@email.com
```

:book: Replace `Your Name` and `your.name@email.com` with your own name and email address.

:bulb: In some cases, you need an editor when using Git via the CLI, for example, when accepting a merge or rewriting commits. Depending on your operating system, the default choice may be set to notepad, vim, or nano. If you want to use a different editor, you can configure this.

### 1.1.1 - Configure the default editor (optional)

:book: If you do not want to configure the default editor for Git (i.e., you are satisfied with the one you are already using, such as vim or nano), you can skip this step.

:pencil2: To configure Git to use Visual Studio Code as the default editor, you can enter the following command in your terminal:

```shell
git config --global core.editor "code --wait"
```

## 1.2 - Create a git repository

:pencil2: Create a new empty directory on your machine that you can call `git-workshop-files` to avoid potential conflict with the name of this repo if you have cloned it. Make sure you are in this directory in your terminal. 

:bulb: **Tip**: You can create a directory with your terminal, using the `mkdir` command. E.g. `mkdir my-folder` to create a folder called `my-folder`. 


:bulb: **Tip**: If you have configured VS Code to be available in your `PATH` variable, you can open VS Code from your terminal by typing `code .` while you are in your directory. 

:pencil2: Make sure you are in your newly created folder in your terminal. Initialize a git repository. You do this with the command `git init`. 
You will see the terminal respond:

```
Initialized empty Git repository in /[path to directory]/git-workshop-files/.git/
```

## 1.3 - First git commit

:pencil2: Add a file called `README.md`. Add appropriate text to the file (e.g., `"Nerdschool git workshop"`).

:pencil2: Check the status of the file using the command `git status`. Here you should see the file you added under `Untracked files`. This means that the file exists in the filesystem, but has not yet been added to the "staging area".

<div align="center">
  <img src="../images/1-untracked-file.png" alt="git status showing README.md as an untracked file" width="600">
</div>

:pencil2: Add the file to the staging area. You can do this with the command `git add README.md`. Check the status again with the command `git status`.

<div align="center">
  <img src="../images/1-staged-file.png" alt="git status showing README.md staged for commit" width="500">
</div>

:pencil2: Create a commit that includes the file you created using the command `git commit -m <message>`. Write an appropriate commit message (`"Initial commit"` is often a suitable message for the first commit in a repository).

:pencil2: Check that you have a commit in your commit log by using the command `git log`. To exit `git log`, press `q`. 

<div align="center">
  <img src="../images/1-git-log-initial-commit.png" alt="git log showing the initial commit" width="500">
</div>

:bulb: You have now created a git repository and made your first commit via the command line. Well done! Now we have all work locally on our own machine, but we would like to check in the code to a central location.




## 1.4 - Create GitHub Repository

### 1.4.1 - Set up GitHub authentication

:bulb: To securely communicate with GitHub, we need to authenticate ourselves. In this workshop we use **HTTPS**, which is the address GitHub shows you by default and needs no key setup.

:exclamation: You cannot use your GitHub account password here. GitHub removed password authentication for Git in 2021, so something has to store a credential on your behalf. We will let the **GitHub CLI** do that for us, since it sets up both itself and Git in one go.

:pencil2: Install the GitHub CLI if you do not already have it. See [cli.github.com](https://cli.github.com/), or use your package manager:

```shell
winget install --id GitHub.cli    # Windows
brew install gh                   # macOS
```

:book: On Linux, follow the [installation instructions for your distribution](https://github.com/cli/cli/blob/trunk/docs/install_linux.md).

:pencil2: Log in:

```shell
gh auth login
```

:book: Answer the prompts as follows:

- **What account do you want to log into?** `GitHub.com`
- **What is your preferred protocol for Git operations?** `HTTPS`
- **Authenticate Git with your GitHub credentials?** `Yes`
- **How would you like to authenticate?** `Login with a web browser`, then follow the steps in your browser

:exclamation: The third answer is the important one. That is what registers `gh` as Git's credential helper, so that `git push` and `git pull` work without asking you for anything.

:pencil2: Check that it worked:

```shell
gh auth status
git config --global --get-regexp '^credential'
```

:bulb: `gh auth status` should report that you are logged in. The second command lists the credential settings Git now has, and should include a line ending in `gh auth git-credential`. If it prints nothing at all, you likely answered "No" to the third prompt - run `gh auth setup-git` to fix it without logging in again.

:bulb: Note that `gh` registers itself only for `github.com`, as `credential.https://github.com.helper`, rather than as a global default. That is why we list all credential settings above instead of asking for plain `credential.helper`, which would look empty even when everything is set up correctly.

:bulb: If you would rather not install the GitHub CLI, the alternative is **Git Credential Manager**. On Windows it is already included with Git for Windows 2.29 and newer. On macOS, `brew install --cask git-credential-manager`. On Linux, see the [installation guide](https://github.com/git-ecosystem/git-credential-manager/blob/main/docs/install.md). GitHub's own write-up of both options is [Caching your GitHub credentials in Git](https://docs.github.com/en/get-started/git-basics/caching-your-github-credentials-in-git).

:bulb: SSH keys are a perfectly good alternative and you will meet them on real projects, but they take longer to set up, so we stick to HTTPS here. If you are curious afterwards, see [Connecting to GitHub with SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh).

### 1.4.2 - Create Github repository

:pencil2: Create a GitHub repository on github.com. If you don't have a GitHub account, you'll need to create one. Go to your profile and select the "Repositories" tab. Here you'll find a large green button labeled "New"

<div align="center">
  <img src="../images/nytt-repo.png" alt="The green New button on the GitHub Repositories tab" width="400" >
</div>

:book: Choose an appropriate name under **`Repository name`** (Suggestion `nerdschool-git-workshop`). Do not select any other settings, and click **`Create repository`**.

:pencil2: You will come to the following screen. Follow bottom instructions (**`push an existing repository from the command line`**)

:exclamation: Make sure the **HTTPS** tab is selected above the address box, so the commands you copy use a remote URL starting with `https://github.com/`. HTTPS is GitHub's default, so this normally needs no change.

<div align="center">
  <img src="../images/opprettet-repo.png" alt="GitHub quick setup page for a newly created empty repository" width="600">
</div>

:bulb: The `git push` at the end is where your credential helper kicks in. Expect a browser window or a prompt the first time, and nothing at all on every push after that.

After following the instructions on Github, you will have:

- Set up your local repository to track a "remote repository" / "remote origin"
- Your Git branch named `main` (If you were on branch `master` it will now be `main`)
- Pushed your changes to remote origin

:pencil2: To simulate a change outside your own machine, click the pencil icon on github.com and edit a file. In your terminal, type `git pull` to fetch the latest changes.

---

[:arrow_right: Go to the next exercise](../exercise-2/README.md)
