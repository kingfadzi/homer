#!/bin/bash
# Example script to modify Nginx configs or perform other runtime setup

# Start Nginx in the foreground
exec nginx -g 'daemon off;'
