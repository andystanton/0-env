# 0-env

Loads the current user's environment variables into Atom, even when not started from the terminal.

## Why?

When Atom is loaded through the launcher it does not include the user's environment variables. Many Atom packages that reference external executables make the assumption that the executable is on the current user's path. As Atom lacks this information when loaded through the launcher, this can result in error messages.

## The name is stupid

Yes, but unfortunately I could not find a better way to get run the code before other packages than choosing a name with a high alphanumerical precedence.
