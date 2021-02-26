#!/usr/bin/python3
"""copy all selected files to a different name"""

import sys
import glob

if __name__ == "__main__":
    """main"""

    if len(sys.argv) != 3:
        print('Usage: ./copier.py THE_ORIGINAL THE_NEW', file=sys.stderr)
        exit(1)

    old = sys.argv[1]
    new = sys.argv[2]

    old_files = glob.glob(old + '*')
    for old_file in old_files:
        with open(old_file, 'r') as f, open(new + old_file[len(old):],'a') as sf:
            for line in f:
                sf.write(line)

