
## :star: Exercise 5 - Bonus

### 5. Creating custom git commands
With git you can create your own custom commands by writing shell scripts. For this to work you must you a specific naming convention for the script file. The file must start with `git-`. So if you want a custom command for adding every file, and you want this command to be named `addall` the file name for the script must be `git-addall`. Also, every custom git script must be added to your `PATH`. When this is done you can for exampuse use `git addall` as a command.

**Assignment:**

Create a custom git command called `acp` which will add, commit and push (to current repo) in one command. This command should take two paramteres:

1. What to add (and commit), i.e. the path of the file(s).
2. A commit message
