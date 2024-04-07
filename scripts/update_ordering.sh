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
    "/writings/limit-break/_index"
    "/writings/limit-break/self-actualization"
    "/writings/limit-break/self-awareness"
    "/writings/limit-break/shuhari/_index"
    "/writings/limit-break/shuhari/art"
    "/writings/limit-break/shuhari/tools"
    "/writings/limit-break/truth-seeking/_index"
    "/writings/limit-break/truth-seeking/complementation"
    "/writings/sick/_index"
    "/writings/sick/mania/_index"
    "/writings/sick/mania/futile"
    "/writings/sick/mania/annoyed"
    "/writings/sick/depression/_index"
    "/writings/sick/depression/numb"
    "/writings/sick/depression/over"
    "/writings/sick/depression/moving-forward"
    "/writings/scar/_index"
    "/writings/scar/incapable"
    "/writings/scar/plastic-love"
    "/writings/perspectives-on-life/_index"
    "/writings/perspectives-on-life/greed"
    "/writings/perspectives-on-life/relationships"
    "/writings/perspectives-on-life/being-toward-death"
    "/writings/solipsistic/_index"
    "/writings/solipsistic/monologue"
    "/writings/solipsistic/solitude"
)

function pathname {
    # (ref.) [Using sed get substring between two double quotes](https://superuser.com/questions/515421/using-sed-get-substring-between-two-double-quotes)
    echo "$(echo "$1" | gnucut -d'.' -f 1)"
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
    # update articles' weights:
    # (ref.) [Globbing for only files in Bash](https://stackoverflow.com/questions/20745656/globbing-for-only-files-in-bash)
    for file in $(gfind ./content -name '*.md' -printf '/%P\n'); do
        weight="$(weight "$file")"
        if [[ -n $weight ]]; then
            # (ref.) [Replace whole line containing a string using Sed](https://stackoverflow.com/questions/11245144/replace-whole-line-containing-a-string-using-sed)
            # (ref.) [Environment variable substitution in sed](https://stackoverflow.com/questions/584894/environment-variable-substitution-in-sed)
            gsed -i 's/weight:.*/weight: '"$weight"'/' "./content""$file"
        fi
    done

    # update navigation_pathnames_ordered.js:
    echo "const pathnames_ordered = [" >./themes/MyTheme/assets/navigation_pathnames_ordered.js
    # (ref.) [Bash For Loop Array: Iterate Through Array Values](https://www.cyberciti.biz/faq/bash-for-loop-array/)
    for pathname in "${pathnames_ordered[@]}"; do
        # (ref.) [Remove a fixed prefix/suffix from a string in Bash](https://stackoverflow.com/questions/16623835/remove-a-fixed-prefix-suffix-from-a-string-in-bash)
        echo "  \"${pathname%"/_index"}/\"," >>./themes/MyTheme/assets/navigation_pathnames_ordered.js
    done
    echo "];" >>./themes/MyTheme/assets/navigation_pathnames_ordered.js
}
popd >/dev/null
