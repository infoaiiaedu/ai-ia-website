#!/bin/bash

# EduAI Website Deployment Script
# For hosting on eduaiia.com without Docker

echo "🚀 Starting deployment for eduaiia.com..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "📦 Installing PM2 globally..."
    npm install -g pm2
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the application
echo "🏗️ Building the application..."
npm run build

# Create logs directory if it doesn't exist
mkdir -p logs

# Start the application with PM2
echo "▶️ Starting application with PM2..."
pm2 start ecosystem.config.js

# Show PM2 status
echo "📊 Application status:"
pm2 list

echo "✅ Deployment complete!"
echo "🌐 Your website should be running on http://localhost:3000"
echo "🔗 Configure your reverse proxy (Nginx/Apache) to point eduaiia.com to this port"