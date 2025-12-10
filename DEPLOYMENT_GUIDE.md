# EduAI Website Deployment Guide

This guide will help you deploy your Next.js application to https://eduaiia.com/ without Docker.

## Prerequisites

1. **Server with Ubuntu/Debian** (or similar Linux distribution)
2. **Node.js 18+** installed
3. **Nginx** installed
4. **Domain configured** with Cloudflare (already done ✅)

## Step-by-Step Deployment

### 1. Install Required Software

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 20 (LTS)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install Nginx
sudo apt install nginx -y

# Install PM2 globally
sudo npm install -g pm2
```

### 2. Deploy the Application

```bash
# Make the deployment script executable
chmod +x deploy.sh

# Run the deployment script
./deploy.sh
```

### 3. Configure Nginx

```bash
# Copy the nginx configuration
sudo cp nginx.conf /etc/nginx/sites-available/eduaiia.com

# Create symbolic link to enable the site
sudo ln -s /etc/nginx/sites-available/eduaiia.com /etc/nginx/sites-enabled/

# Remove default nginx site (optional)
sudo rm /etc/nginx/sites-enabled/default

# Test nginx configuration
sudo nginx -t

# Restart nginx
sudo systemctl restart nginx
sudo systemctl enable nginx
```

### 4. Configure PM2 for Auto-Start

```bash
# Generate PM2 startup script
pm2 startup

# Save current PM2 processes
pm2 save
```

### 5. Configure Firewall (if needed)

```bash
# Allow HTTP and HTTPS traffic
sudo ufw allow 80
sudo ufw allow 443
sudo ufw allow 22  # SSH
```

## Cloudflare Configuration

Since you're using Cloudflare:

1. **SSL/TLS Mode**: Set to "Full" or "Full (strict)" in Cloudflare dashboard
2. **Always Use HTTPS**: Enable this option
3. **Origin Certificates**: Optionally generate origin certificates for added security

## Monitoring Commands

```bash
# Check PM2 status
pm2 list
pm2 logs
pm2 monit

# Check Nginx status
sudo systemctl status nginx

# View Nginx logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log

# Restart services if needed
pm2 restart all
sudo systemctl restart nginx
```

## Updating the Application

```bash
# Pull latest changes (if using git)
git pull origin main

# Rebuild and restart
npm run build
pm2 restart all
```

## Troubleshooting

### Common Issues:

1. **Port 3000 already in use**:
   ```bash
   sudo lsof -i :3000
   pm2 kill
   ```

2. **Nginx configuration errors**:
   ```bash
   sudo nginx -t
   ```

3. **Permission issues**:
   ```bash
   sudo chown -R $USER:$USER /path/to/your/app
   ```

### Health Check

Your application includes a health check endpoint at `/api/health`. Test it:
```bash
curl http://localhost:3000/api/health
```

## File Locations

- **Application**: Current directory
- **Nginx Config**: `/etc/nginx/sites-available/eduaiia.com`
- **PM2 Logs**: `./logs/` directory
- **Nginx Logs**: `/var/log/nginx/`

## Security Notes

- Keep Node.js and dependencies updated
- Configure proper SSL certificates through Cloudflare
- Monitor application logs regularly
- Set up automated backups