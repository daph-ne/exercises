Git Objects:
    1. Blob - contents of a file
    2. Tree - a directory listing
    3. Commit - a snapshot of the working tree
Blob:
    Blob - Binary Large Objects
    In git, the contents of files are stored in objects called Blobs.
    Difference between files and blobs:
        Files - Date and Time of creation is registered.
        Blobs - Doesn't register its creation date , its name, or anything but its contents.
    Identified by SHAH-1 hashes.
    SHAH-1 :
        Consists of 20 bytes
        Represented by 40 characters
        Represented in hexadecimal form
Tree:
    Directory listing referring to blobs and other trees.
    Identified by SHAH-1 hash.
Commit:
    In git, a snapshot is a commit.
    Includes:
        Pointer to main tree
        Meta-data => Committer
            Meta-data(data that escribes other data)
        Commit message
        Commit time
        May have 1 or more parent commits
    Identifid by SHA-1 hashes
    Holds the entire snapshot, not just diffs from the previous commit(s)

Git Branches:
    A named reference to a commit
    Commands: 
        git init - creates master branch
        git branch - creates another branch
        git branch test - creates a branch called test
    HEAD - pointer which shows the pointer we're currently on by pointing to the branch, which in turn points to a commit.

Git Checkout:
    git checkout test - changes active branch to test
                        changes HEAD to point to test


