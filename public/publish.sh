#!/bin/bash

# Requires a clean working tree
# https://gist.github.com/ssbarnea/6089714
require_clean_work_tree_git () {
    git rev-parse --verify HEAD >/dev/null || exit 1
    git update-index -q --ignore-submodules --refresh
    err=0

    if ! git diff-files --quiet --ignore-submodules
    then
        echo >&2 "Cannot $1: You have unstaged changes."
        err=1
    fi

    if ! git diff-index --cached --quiet --ignore-submodules HEAD --
    then
        if [ $err = 0 ]
        then
            echo >&2 "Cannot $1: Your index contains uncommitted changes."
        else
            echo >&2 "Additionally, your index contains uncommitted changes."
        fi
        err=1
    fi

    if [ $err = 1 ]
    then
        test -n "$2" && echo >&2 "$2"
        exit 1
    fi
}

require_clean_work_tree_git
echo "Enter your netid"
read netid
# rsync over the public directory
# from Angrave's original publish script
rsync -ar --no-links --exclude /publish.sh * "$netid"@ssh.courses.engr.illinois.edu:/courses/cs241/sp2015/
