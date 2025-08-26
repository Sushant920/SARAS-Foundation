# SARAS Foundation Website - Deployment Guide

This guide will help you deploy the SARAS Foundation website to various hosting platforms.

## 🚀 Quick Deploy Options

### 1. Vercel (Recommended - Free)

1. **Fork/Clone this repository** to your GitHub account
2. **Go to [vercel.com](https://vercel.com)** and sign in with GitHub
3. **Click "New Project"**
4. **Import your repository**
5. **Configure project:**
   - Framework Preset: Next.js
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`
6. **Click "Deploy"**

**Benefits:**
- ✅ Automatic deployments on every push
- ✅ Free hosting with custom domains
- ✅ Built-in CDN and edge functions
- ✅ Zero configuration needed

### 2. Netlify (Free)

1. **Go to [netlify.com](https://netlify.com)** and sign in
2. **Click "New site from Git"**
3. **Connect your GitHub repository**
4. **Configure build settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`
5. **Click "Deploy site"**

### 3. GitHub Pages (Free)

1. **Build the project:**
   ```bash
   npm run build
   npm run export
   ```
2. **Push the `out` folder to a `gh-pages` branch**
3. **Enable GitHub Pages in repository settings**

## 🔧 Environment Setup

### Required Environment Variables

Create a `.env.local` file in your project root:

```env
# Next.js
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Contact Form (Optional)
NEXT_PUBLIC_CONTACT_EMAIL=sarasfoundation.org.in@gmail.com
```

### Build Commands

```bash
# Install dependencies
npm install

# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Export static files (for static hosting)
npm run export
```

## 🌐 Domain Configuration

### Custom Domain Setup

1. **Purchase a domain** (e.g., `sarasfoundation.org.in`)
2. **Configure DNS records:**
   - A record: Point to your hosting provider's IP
   - CNAME: Point `www` to your main domain
3. **Add domain in your hosting platform**
4. **Wait for DNS propagation** (24-48 hours)

### SSL Certificate

- **Vercel/Netlify**: Automatic SSL certificates
- **Other platforms**: Use Let's Encrypt or your hosting provider's SSL

## 📱 Performance Optimization

### Before Deployment

1. **Optimize images:**
   - Use WebP format when possible
   - Compress images to reasonable sizes
   - Use Next.js Image component

2. **Check bundle size:**
   ```bash
   npm run build
   # Check the build output for bundle analysis
   ```

3. **Test performance:**
   - Use Lighthouse in Chrome DevTools
   - Aim for 90+ scores on all metrics

### Post-Deployment

1. **Monitor Core Web Vitals**
2. **Set up analytics** (Google Analytics)
3. **Configure error monitoring** (Sentry, LogRocket)

## 🔒 Security Considerations

### Security Headers

The website includes basic security headers. For additional security:

1. **Content Security Policy (CSP)**
2. **HTTPS enforcement**
3. **Rate limiting** (if using custom backend)

### Form Security

- All forms include basic validation
- Consider adding CAPTCHA for production
- Implement rate limiting for contact forms

## 📊 Analytics & Monitoring

### Google Analytics

1. **Create a Google Analytics account**
2. **Get your tracking ID**
3. **Add to environment variables**
4. **Deploy and verify tracking**

### Performance Monitoring

- **Vercel Analytics** (if using Vercel)
- **Web Vitals monitoring**
- **Error tracking**

## 🚨 Troubleshooting

### Common Issues

1. **Build Failures:**
   - Check Node.js version (requires 18+)
   - Clear `node_modules` and reinstall
   - Check for TypeScript errors

2. **Deployment Issues:**
   - Verify build commands
   - Check environment variables
   - Review deployment logs

3. **Performance Issues:**
   - Optimize images
   - Check bundle size
   - Use production build

### Support

- **GitHub Issues**: Report bugs and request features
- **Documentation**: Check Next.js and Tailwind CSS docs
- **Community**: Stack Overflow, Discord communities

## 🎯 Next Steps

After successful deployment:

1. **Test all pages and functionality**
2. **Set up monitoring and analytics**
3. **Configure backup and recovery**
4. **Plan for future updates and maintenance**
5. **Share the website with stakeholders**

---

**Happy Deploying! 🚀**

*Your SARAS Foundation website is now ready to serve the community.*
