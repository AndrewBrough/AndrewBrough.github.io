#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Copy built files to root for GitHub Pages
echo "Copying built files to root directory..."
cp -r dist/* .

echo "Build complete! Files are ready for GitHub Pages deployment."