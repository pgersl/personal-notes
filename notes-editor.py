#AUTHOR: Petr Geršl (pgersl)
#NAME: notes-editor





#IMPORTS

import os
import argparse
import re

#GLOBAL VARS

FIG_PATTERN_REPLACE = '{{{{< fig class="note-fig" src="{}" alt="" >}}}}'
IMG_PATTERN = re.compile(r"(\s*)-\s*\!\[\]\((.*?)\)")
FIG_PATTERN = re.compile(r'{{< fig class="note-fig" src=".*" alt="" >}}')
FRONTMATTER = "---\n" + 'title: ""\n' + "layout: note\n" + "toc: true\n" + "pm: true\n" + "---\n"

#PARSER

parser = argparse.ArgumentParser(description='Remove indentation from headings in markdown files.')
parser.add_argument('-p', '--path', type=str, help='Path to the args.path containing the markdown files', nargs='?', default=os.getcwd())

args = parser.parse_args()

#DEFS

def edit_headings(file_path):
    '''Removes indentationand bullet points from headings'''
    with open(file_path, "r") as file:
        lines = file.readlines()
    
    with open(file_path, "w") as file:
        for line in lines:
            stripped = line.lstrip(" ")
            if stripped.startswith("- #"):
                line = stripped[2:]
            file.write(line)

def process_section(section):
    '''Builds a list of sections of the file to be edited'''
    indent = len(section[0]) - len(section[0].lstrip())
    processed_section = [line[indent:] for line in section]
    return processed_section

def add_frontmatter(file_path, text_to_add):
    '''Adds frontmatter to the file'''
    with open(file_path, 'r') as file:
        lines = file.readlines()
    with open(file_path, 'w') as file:
        file.write(text_to_add)
        for line in lines:
            file.write(line)

#MAIN

def main():
    for filename in os.listdir(args.path):
        if filename.endswith(".md"):
            file_path = os.path.join(args.path, filename)
            edit_headings(file_path)
            with open(file_path, "r") as file:
                contents = file.read()
            new_contents = IMG_PATTERN.sub(lambda x: "{}\n{}{}\n".format(x.group(1), FIG_PATTERN_REPLACE.format(x.group(2)), x.group(1)), contents)
            with open(file_path, "w") as file:
                file.write(new_contents)
            with open(file_path, "r") as file:
                lines = file.readlines()
                sections = []
                section = []
                for line in lines:
                    if line.startswith("#"):
                        if section:
                            sections.append(section)
                            section = []
                        sections.append([line])
                    elif FIG_PATTERN.search(line):
                        if section:
                            sections.append(section)
                            section = []
                        sections.append([line])
                    else:
                        section.append(line)
                if section:
                    sections.append(section)
            processed_lines = []
            for section in sections:
                processed_section = process_section(section)
                processed_lines.extend(processed_section)
            with open(file_path, "w") as outfile:
                outfile.writelines(processed_lines)
            add_frontmatter(file_path, FRONTMATTER)

    
if __name__ == '__main__':
    main()