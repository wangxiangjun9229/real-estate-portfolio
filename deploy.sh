#!/usr/bin/env bash

# Abort on errors
set -e

# Build
echo "Building application..."
npm run build

# Navigate to the build output directory
cd dist

# Create a .nojekyll file to bypass Jekyll processing
echo "Creating .nojekyll file..."
touch .nojekyll

# If deploying to a custom domain
# echo "yourdomain.com" > CNAME

echo "Deployment files prepared successfully!"
echo "Run 'npm run deploy' to publish to GitHub Pages."

# Return to the project root
cd .. 