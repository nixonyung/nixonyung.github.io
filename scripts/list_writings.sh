gfind ./content -name "*.md" -not -name "*.en.md" -printf "/%P\n" | cut -d"." -f 1
