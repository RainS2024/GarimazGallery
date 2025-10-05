#!/bin/bash

# ============================================================
# Garima's Gallery - Deployment Script
# Builds Angular project and pushes to GitHub Pages
# ============================================================

set -e  # Stop on first error

PROJECT_NAME="garimaz_gallery"
BRANCH="main"
OUTPUT_DIR="docs"

echo "🚀 Starting deployment for $PROJECT_NAME..."

# 1️⃣ Ensure you're on the main branch
git checkout $BRANCH

# 2️⃣ Pull latest changes
echo "📥 Pulling latest changes from origin/$BRANCH..."
git pull origin $BRANCH

# 3️⃣ Build Angular app with Nx
echo "🏗️ Building Angular project..."
nx run $PROJECT_NAME:build:production

# 4️⃣ Move browser build contents into /docs
echo "📦 Moving build output..."
mv $OUTPUT_DIR/browser/* $OUTPUT_DIR/
rm -rf $OUTPUT_DIR/browser

# 5️⃣ Commit new build
echo "📝 Committing build..."
git add $OUTPUT_DIR
git commit -m "Deploy: updated production build for Garima's Gallery"

# 6️⃣ Push to GitHub
echo "⬆️ Pushing to GitHub..."
git push origin $BRANCH

echo "✅ Deployment complete!"
echo "🌐 Check your site: https://www.garimasgallery.com"
