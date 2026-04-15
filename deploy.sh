#!/bin/bash
# Deploy to GitHub and Vercel

echo "🚀 Hospital Management System - Deployment Script"
echo "================================================"
echo ""

# Step 1: GitHub Push
echo "Step 1: Pushing code to GitHub..."
read -p "Enter your new GitHub repository URL (e.g., https://github.com/username/AI_Hospital_manager.git): " REPO_URL

git remote set-url origin "$REPO_URL"
git push -u origin main

if [ $? -eq 0 ]; then
    echo "✅ Code pushed to GitHub successfully!"
else
    echo "❌ Failed to push to GitHub. Check your credentials."
    exit 1
fi

echo ""
echo "Step 2: Frontend Deployment Instructions"
echo "========================================="
echo ""
echo "1. Go to https://vercel.com/dashboard"
echo "2. Click 'Add New Project'"
echo "3. Select your GitHub repository: $(basename $REPO_URL .git)"
echo "4. In 'Root Directory', select: frontend"
echo "5. Add Environment Variables:"
echo "   - VITE_BACKEND_URL: (your backend URL, e.g., https://api-xxx.vercel.app)"
echo "6. Click Deploy"
echo ""
echo "Step 3: Backend Deployment Instructions"
echo "========================================="
echo ""
echo "Option A: Deploy to Railway (Recommended for Node.js servers)"
echo "1. Go to https://railway.app"
echo "2. Create new project from GitHub"
echo "3. Select your repository"
echo "4. In settings, set Root Directory to: backend"
echo "5. Add Environment Variables:"
echo "   - MONGO_URI: (your MongoDB connection string)"
echo "   - BETTER_AUTH_SECRET: (random secret key)"
echo "   - BETTER_AUTH_URL: (your Railway deployment URL)"
echo "   - FRONTEND_URL: (your Vercel frontend URL)"
echo ""
echo "Option B: Use Vercel with custom deployment config"
echo "1. Create backend/vercel.json with proper configuration"
echo "2. Deploy backend as separate project"
echo ""
echo "✅ All steps completed! Your deployment should now be live."
