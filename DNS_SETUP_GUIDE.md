# DNS Setup Guide for net1io.com

## Required DNS Records

After adding the custom domain in Google Cloud Console, you'll get specific DNS records to add at your domain registrar.

### Typical Records You'll Need:

1. **A Records** (for root domain):
   ```
   Type: A
   Name: @ (or leave blank)
   Value: 216.239.32.21
   Value: 216.239.34.21
   Value: 216.239.36.21
   Value: 216.239.38.21
   ```

2. **AAAA Records** (IPv6):
   ```
   Type: AAAA
   Name: @ (or leave blank)
   Value: 2001:4860:4802:32::15
   Value: 2001:4860:4802:34::15
   Value: 2001:4860:4802:36::15
   Value: 2001:4860:4802:38::15
   ```

3. **CNAME Record** (for www subdomain):
   ```
   Type: CNAME
   Name: www
   Value: ghs.googlehosted.com
   ```

## Domain Registrar Steps:

### If using GoDaddy:
1. Log into GoDaddy
2. Go to "My Products" → "DNS"
3. Add the A and AAAA records above
4. Add the CNAME record for www

### If using Namecheap:
1. Log into Namecheap
2. Go to "Domain List" → "Manage"
3. Go to "Advanced DNS"
4. Add the records above

### If using Cloudflare:
1. Log into Cloudflare
2. Select your domain
3. Go to "DNS" → "Records"
4. Add the records above

## SSL Certificate
Google App Engine automatically provisions SSL certificates for custom domains, so your site will be available via HTTPS.

## Verification
After DNS propagation (can take 24-48 hours), your site will be available at:
- https://net1io.com
- https://www.net1io.com