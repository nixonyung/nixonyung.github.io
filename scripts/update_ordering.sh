#!/usr/bin/env bash

#
# commonly used bash configs:
#
# (ref.) [Shell Script Best Practices](https://sharats.me/posts/shell-script-best-practices/)
if [[ "${TRACE-0}" == "1" ]]; then set -x; fi
# (ref.) [Safer bash scripts with 'set -euxo pipefail'](https://vaneyckt.io/posts/safer_bash_scripts_with_set_euxo_pipefail/)
set -Eeuo pipefail
# (ref.) [Use Bash Strict Mode (Unless You Love Debugging)](http://redsymbol.net/articles/unofficial-bash-strict-mode/)
IFS=$'\n\t'

pathnames_ordered=(
    "/writings/"
    "/writings/growth/"
    "/writings/growth/love/"
    "/writings/growth/love/monologue/"
    "/writings/growth/love/over/"
    "/writings/growth/love/scar/"
    "/writings/growth/love/numb/"
    "/writings/growth/sick/"
    "/writings/growth/sick/futile/"
    "/writings/growth/sick/depression/"
    "/writings/growth/complementation/"
    "/writings/growth/limit-break/"
    "/writings/growth/limit-break/self-actualization/"
    "/writings/growth/limit-break/shuhari/"
    "/writings/growth/limit-break/shuhari/art/"
    "/writings/growth/limit-break/shuhari/tools/"
    "/writings/sins/"
    "/writings/sins/virtue/"
    "/writings/sins/ignorance/"
    "/writings/sins/greed/"
    "/writings/arrogant/"
    "/writings/arrogant/solipsistic/"
    "/writings/arrogant/playful/"
    "/writings/incapable/"
)

function pathname {
    # (ref.) [Using sed get substring between two double quotes](https://superuser.com/questions/515421/using-sed-get-substring-between-two-double-quotes)
    echo "$(echo "$1" | gnucut -d'.' -f 1)/"
}

function weight {
    pathname="$(pathname "$1")"
    # (ref.) [Get the index of a value in a Bash array](https://stackoverflow.com/questions/15028567/get-the-index-of-a-value-in-a-bash-array)
    for i in "${!pathnames_ordered[@]}"; do
        if [[ "${pathnames_ordered["$i"]}" == "$pathname" ]]; then
            echo "$(($i + 1))"
        fi
    done
}

# (ref.) [Minimal safe Bash script template](https://betterdev.blog/minimal-safe-bash-script-template/)
pushd "$(dirname "$0")/.." >/dev/null
{
    # update articles' weights
    # (ref.) [Globbing for only files in Bash](https://stackoverflow.com/questions/20745656/globbing-for-only-files-in-bash)
    for file in $(gfind ./content -name '*.md' -printf '/%P\n'); do
        weight="$(weight "$file")"
        if [[ -n $weight ]]; then
            # (ref.) [How to replace an entire line in a text file by line number](https://stackoverflow.com/questions/11145270/how-to-replace-an-entire-line-in-a-text-file-by-line-number)
            # (ref.) [Environment variable substitution in sed](https://stackoverflow.com/questions/584894/environment-variable-substitution-in-sed)
            gsed -i '5s/.*/weight: '"$weight"'/' "./content""$file"
        fi
    done

    # update navigation_pathnames_ordered.js
    echo "const pathnames_ordered = [" >./themes/MyTheme/assets/navigation_pathnames_ordered.js
    for i in "${!pathnames_ordered[@]}"; do
        echo "  \"${pathnames_ordered["$i"]}\"," >>./themes/MyTheme/assets/navigation_pathnames_ordered.js
    done
    echo "];" >>./themes/MyTheme/assets/navigation_pathnames_ordered.js
}
popd >/dev/null
