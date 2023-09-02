#AUTHOR: Petr Geršl (pgersl)
#NAME: note-cleaner
#CREDIT: vcerny01/rmdc




#imports

import re
import os
import argparse
import time

#global vars

link_patern = re.compile("\[\[(.*?)\]\]")
italic_pattern = re.compile("__(.*?)__")
bold_italic_pattern = re.compile("\*\*_(.*?)_\*\*")
daily_notes_names = "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"

#defs

def parse_args():
    """Define arguments"""
    parser = argparse.ArgumentParser(description="Edit Roam syntax and remove unwanted files.")
    parser.add_argument("-E", "--edit", help="Edit files", action="store_true")
    parser.add_argument("-R", "--remove", help="Remove personal files", action="store_true")
    parser.add_argument("-D", "--daily-notes", help="Remove daily notes", action="store_true")
    parser.add_argument("-I", "--indir", type=str, help="Input directory", default=".")
    parser.add_argument("-f", "--filename", type=str, help="Targeted file for removal (required when removing files)")
    parser.add_argument("-d", "--depth", type=int, help="Link depth")
    parser.add_argument("-o", "--other-files", help="Other files to remove", nargs="+", default=[])
    parser.add_argument("-e", "--exclude-removal", help="Files to exclude from removal", nargs="+", default=[])
    parser.add_argument("-x", "--exclude-editing", help="Files to exclude from editing", nargs="+", default=["note-cleaner.py"])
    return parser.parse_args()

def search_links(filename):
    """Search for links in file"""
    try:
        file = open(filename)
    except FileNotFoundError:
        print(f"File '{filename}' doesn't exist! \n Skipping...")
        return
    linked_files = re.findall(link_patern, file.read())
    return [x + ".md" for x in linked_files]

def scan_dir(directory):
    """Create a list of files in directory"""
    try:
        os.listdir(directory)
    except FileNotFoundError:
        print(f"Directory '{directory}' doesn't exist!")
        return
    return os.listdir(directory)

def edit_syntax(content: str):
    """Edit syntax"""
    italics = re.findall(italic_pattern, content)
    for italic in italics:
        full_italic = "__" + italic + "__"
        content = content.replace(full_italic, "_" + italic + "_")
    bold_italics = re.findall(bold_italic_pattern, content)
    for bold_italic in bold_italics:
        full_bold_italic = "**_" + bold_italic + "_**"
        content = content.replace(full_bold_italic, "**" + bold_italic + "**")
    return content

def remove_files(files):
    """Remove selected files"""
    for item in files:
        try:
            os.remove(item)
        except FileNotFoundError:
            print(f"File '{item}' doesn't exist or was already deleted. Skipping...")
            continue
    print(f"{str(len(files))} files succesfully removed")    

def editing(exclude, input_dir):
    """Editing"""
    print("Following files will be excluded from editing: ")
    for item in exclude:
        print(f"- {item}")
    print("\n Editing files...")
    edit_files = scan_dir(input_dir)
    edit_files = [x for x in edit_files if x not in exclude]
    for filename in edit_files:
        full_path = os.path.join(input_dir, filename)
        if os.path.isdir(full_path):
            edit_files.remove(filename)
        else:    
            with open(full_path, "r+") as file:
                content = edit_syntax(file.read())
                file.seek(0)
                file.write(content)
    print(f"\n {str(len(edit_files))} successfully edited.")
    return

def removing(exclude, filename, input_dir, depth, other):
    """Removing"""
    print("Following files will be excluded from deletion: ")
    for item in exclude:
        print(f"- {item}")
    print("\n Removing files...")
    print(f"\n Starting with file '{filename}'")
    final_files = [os.path.join(input_dir, filename)]
    target_files = final_files
    for i in range(depth):
        next_target_files = ["",]
        for item in target_files:
            new_targets = search_links(item)
            if new_targets is None:
                final_files.remove(item)
                continue
            new_targets = [x for x in new_targets if x not in exclude]
            next_target_files = list(set(next_target_files + new_targets))
        next_target_files = [os.path.join(input_dir, x) for x in next_target_files if x]
        next_target_files = [x for x in next_target_files if x not in final_files]
        target_files = next_target_files
        final_files = list(set(final_files + target_files + other))
    remove_files(final_files)
    return

def daily_notes(input_dir):
    """Removing daily notes"""
    print("\n Removing daily notes...")
    files = scan_dir(input_dir)
    daily_notes = []
    for name in files:
        if name.startswith(daily_notes_names):
            daily_notes.append(name)
    remove_files(daily_notes)
    return
    
#main

def main():
    args = parse_args()
    
    if args.edit:
        editing(args.exclude_editing, args.indir)
        time.sleep(5)
    if args.remove:
        removing(args.exclude_removal, args.filename, args.indir, args.depth, args.other_files)
        time.sleep(5)
    if args.daily_notes:
        daily_notes(args.indir)
    
    print("FINISHED!")     

if __name__ == "__main__":
    main()
    
#end