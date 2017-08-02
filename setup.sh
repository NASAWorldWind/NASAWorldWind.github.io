#!/bin/bash

# Check if Hugo is installed
hugo version > /dev/null 2>&1

if [ $? -ne 0 ]
then
    if [[ "$OSTYPE" == "linux-gnu" ]]; then
        export PATH=$PATH:$PWD/bin/linux/
    elif [[ "$OSTYPE" == "darwin"* ]]; then
        export PATH=$PATH:$PWD/bin/macos
    fi
fi
