#!/bin/bash

# Check if file argument is provided
if [ $# -eq 0 ]; then
    echo "Usage: $0 <file>"
    exit 1
fi

file="$1"

# Check if file exists
if [ ! -f "$file" ]; then
    echo "Error: File '$file' not found."
    exit 1
fi

# Temporary file to store modified content
temp_file="$file.temp"

# Replace markdown links with HTML links
sed 's/\[\([^]]*\)\](\([^)]*\))/<a href="\2">\1<\/a>/g' "$file" > "$temp_file"

# Overwrite the original file with modified content
mv "$temp_file" "$file"

echo "Markdown links replaced with HTML links in '$file'."
