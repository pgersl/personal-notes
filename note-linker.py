#AUTHOR: Petr Geršl (pgersl)
#NAME: note-linker
#CREDIT: vcerny01/rmdc




#imports

import re
import os
import argparse
import sys

#global vars

link_pattern = re.compile("\[\[(.*?)\]\]")
alias_page_pattern = re.compile("\[(.*?)]\(\[\[(.*?)\]\]\)")
alias_block_pattern = re.compile("\[(.*?)\]\(\(\((.*?)\)\)\)")

#defs

def parse_args():
    parser = argparse.ArgumentParser(description="Link your files together and fix Roam syntax.")
    parser.add_argument("-S", "--single", help="Perform linking in a single file", action="store_true")
    parser.add_argument("-M", "--multiple", help="Perform linking in multiple files", action="store_true")
    parser.add_argument("-f", "--filename", type=str, help="File with broken links (required if you choose the SINGLE option)")
    parser.add_argument("-i", "--indir", type=str, help="Direcotry of files to be edited (required if you choose the MULTIPLE option)")
    parser.add_argument("-R", "--root-dir", type=str, help="Root directory of your notes (whole path)", required=True)
    return parser.parse_args()

def create_path(file: str, root_dir):
    """Create a path for linked file"""
    for root, dirs, files in os.walk(root_dir):
        for name in files:
            if name == file:
                path_to_link = root_dir + os.sep + name
                return path_to_link
        if (len(dirs) == 0):
            return
        else:
            for dir in dirs:
                full_path = create_path(file, root_dir + os.sep + dir)
                if full_path != None:
                    return full_path
        return

def scan_dir(directory):
    """Create a list of files in directory"""
    try:
        os.listdir(directory)
    except FileNotFoundError:
        print(f"Directory '{directory}' doesn't exist!")
        sys.exit(1)
    return os.listdir(directory)

def url(name: str, root_dir):
    """Urlize the path"""
    name = name.lower()
    name = name.replace(" ", "-")
    name = name.replace(".md", "")
    name = name.replace(str(root_dir), "")
    return name
    

def edit_links(content: str, root_dir):
    """Edit link syntax"""
    page_aliases = re.findall(alias_page_pattern, content)
    for page_alias in page_aliases:
        full_page_alias = "[" + page_alias[0] + "]([[" + page_alias[1] + "]])"
        path = create_path(page_alias[1] + ".md", root_dir)
        if path == None:
            print(f"File '{page_alias[1]}' not found! Deleting link...")
            content = content.replace(full_page_alias, page_alias[0])
        else:
            path = url(path, root_dir)
            content = content.replace(full_page_alias, "[" + page_alias[0] + "](" + path + ")")
    links = re.findall(link_pattern, content)
    for link in links:
        full_link = "[[" + link + "]]"
        path = create_path(link + ".md", root_dir)
        if path == None:
            print(f"File '{link}' not found! Deleting link...")
            content = content.replace(full_link, link)
        else:
            path = url(path, root_dir)
            content = content.replace(full_link, "[" + link + "](" + path + ")")
    block_aliases = re.findall(alias_block_pattern, content)
    for block_alias in block_aliases:
        full_block_alias = "[" + block_alias[0] + "](((" + block_alias[1] + ")))"
        content = content.replace(full_block_alias, block_alias[0])
    return content

def single_file_edit(filename, root_dir):
    with open(filename, "r+") as file:
        content = edit_links(file.read(), root_dir)
        file.seek(0)
        file.write(content)
    print(f"File {filename} successfully edited.")
    return

def multiple_file_edit(input_dir, root_dir):
    files = scan_dir(input_dir)
    for filename in files:
        full_path = os.path.join(input_dir, filename)
        if os.path.isdir(full_path):
            files.remove(filename)
        else:
            with open(os.path.join(input_dir, filename), "r+") as file:
                content = edit_links(file.read(), root_dir)
                file.seek(0)
                file.write(content)
    print(f"{len(files)} files successfully edited.")
    return
    
#main

def main():
    args = parse_args()
    
    if args.single:
        single_file_edit(args.filename, args.root_dir)
    if args.multiple:
        multiple_file_edit(args.indir, args.root_dir)
        
    print("FINISHED!")
        
if __name__ == "__main__":
    main()

#end