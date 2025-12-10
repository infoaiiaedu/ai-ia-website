# Cloudflare 522 Error Troubleshooting Guide

## Current Server Status ✅
- **Server IP**: 13.60.9.112
- **HTTP Port 80**: Working ✅
- **HTTPS Port 443**: Working ✅
- **Health Check**: `/api/health` responding ✅
- **Next.js App**: Running stable on port 3000 ✅
- **SSL Certificates**: Cloudflare Origin certificates installed ✅
- **Firewall**: Ports 80, 443, 3000 open ✅

## Cloudflare Configuration Checklist

### 1. DNS Settings (Most Important!)
In your Cloudflare Dashboard:
- **A Record**: `eduaiia.com` → `13.60.9.112` (Orange cloud ON)
- **A Record**: `www.eduaiia.com` → `13.60.9.112` (Orange cloud ON)
- **TTL**: Auto or 1 minute for testing

### 2. SSL/TLS Settings
Go to SSL/TLS → Overview:
- **Set to "Full" or "Full (strict)"** ← CRITICAL!
- NOT "Flexible" (causes 522 errors)

### 3. Speed Settings
Go to Speed → Optimization:
- **Disable "Rocket Loader"** temporarily
- **Set "Minification" to Off** temporarily

### 4. Security Settings
Go to Security → WAF:
- **Disable "Bot Fight Mode"** temporarily
- **Set Security Level to "Medium" or "Low"**

### 5. Network Settings
- **HTTP/3**: Can be enabled
- **WebSockets**: Should be enabled
- **gRPC**: Can be disabled

## Testing Commands

### Test Direct Server Access:
```bash
# Test HTTP
curl -I http://13.60.9.112 -H "Host: eduaiia.com"

# Test HTTPS
curl -I https://13.60.9.112 -H "Host: eduaiia.com" -k

# Test Health Check
curl http://13.60.9.112/api/health -H "Host: eduaiia.com"
```

### Test Through Cloudflare:
```bash
# After DNS propagates
curl -I https://eduaiia.com
curl https://eduaiia.com/api/health
```

## Common Causes of 522 Error

1. **Wrong SSL Mode** - Must be "Full" not "Flexible"
2. **DNS not pointing to correct IP** - Verify A record
3. **Origin server timeout** - Already optimized ✅
4. **Cloudflare security blocking** - Temporarily disable
5. **Port not open** - Already fixed ✅

## Next Steps

1. **Check DNS propagation**: https://dnschecker.org
2. **Verify Cloudflare SSL mode is "Full"**
3. **Wait 5-10 minutes after DNS changes**
4. **Test again**

## If Still Not Working

Try these Cloudflare settings:
- **Pause Cloudflare** temporarily (orange cloud → grey cloud)
- Test direct access: `http://13.60.9.112` with `Host: eduaiia.com` header
- If direct access works, the issue is in Cloudflare settings
- Re-enable Cloudflare (grey cloud → orange cloud)

## Support Information
- Server responds correctly on both HTTP and HTTPS
- Origin certificates properly configured
- All ports open and accessible
- Application stable and healthy