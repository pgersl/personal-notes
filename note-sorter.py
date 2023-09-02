#AUTHOR: Petr Geršl (pgersl)
#NAME: note-sorter
#CREDIT: vcerny01/rmdc




#imports

import re
import os
import shutil
import sys
import argparse

#global vars

link_patern = re.compile("\[\[(.*?)\]\]")

#defs

def parse_args():
    """Define arguments"""
    parser = argparse.ArgumentParser(description="Sort .md files to directories for better context.")
    parser.add_argument("-F", "--filename", type=str, help="Targeted file", required=True)
    parser.add_argument("-D", "--depth", type=int, help="Link depth", required=True)
    parser.add_argument("-O", "--outdir", type=str, help="Output directory", required=True)
    parser.add_argument("-I", "--indir", type=str, help="Input directory", default=".")
    parser.add_argument("-E", "--exclude", help="Files to exclude", nargs="+", default=[])
    parser.add_argument("-b", "--blank", help="Ignore blank files", action="store_true")
    return parser.parse_args()

def search_links(filename):
    """Search for links in file"""
    try:
        file = open(filename, encoding="utf-8")
    except FileNotFoundError:
        print(f"File '{filename}' doesn't exist!")
        sys.exit(1)
    linked_notes = re.findall(link_patern, file.read())
    return [x + ".md" for x in linked_notes]

def move_notes(notes, directory):
    """Copy selected notes to output directory"""
    try:
        os.mkdir(directory)
    except FileExistsError:
        print(f"Directory '{directory}' already exists!")
        confirm = input("Do you want to delte this directory? (y/n) ")
        if confirm == "y":
            shutil.rmtree(directory)
            os.mkdir(directory)
        else:
            print("Aborting...")
            sys.exit(1)
    for item in notes:
        try:
            shutil.move(item, directory)
        except FileNotFoundError:
            print(f"File '{item}' not found. Skipping...")
            continue
    print(f"{str(len(notes))} files succesfully moved into directory '{directory}'.")

#main

def main():
    args = parse_args()
    print("Following files will be exluded: ")
    for item in args.exclude:
        print(f"- {item}")
    print(f"\n Starting with file '{args.filename}'")
    
    final_files = [os.path.join(args.indir, args.filename)]
    target_files = final_files
    
    for i in range(args.depth):
        next_target_files = ["",]
        for item in target_files:
            new_targets = search_links(item)
            if new_targets is None:
                final_files.remove(item)
                continue
            new_targets = [x for x in new_targets if x not in args.exclude]
            if args.blank:
                new_targets = [x for x in new_targets if (os.stat(x).st_size != 0)]
            next_target_files = list(set(next_target_files + new_targets))
        next_target_files = [os.path.join(args.indir, x) for x in next_target_files if x]
        next_target_files = [x for x in next_target_files if x not in final_files]
        target_files = next_target_files
        final_files = list(set(final_files + target_files))
    
    move_notes(final_files, args.outdir)
    
    print("FINISHED!")

if __name__ == "__main__":
    main()
    
#end