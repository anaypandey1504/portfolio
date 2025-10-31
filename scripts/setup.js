#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

console.log('🚀 Setting up Anay Pandey Portfolio...\n')

// Create .env.local file if it doesn't exist
const envPath = path.join(process.cwd(), '.env.local')
if (!fs.existsSync(envPath)) {
  const envContent = `# EmailJS Configuration
# Get these values from https://www.emailjs.com/
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Optional: Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id
`
  fs.writeFileSync(envPath, envContent)
  console.log('✅ Created .env.local file')
} else {
  console.log('ℹ️  .env.local file already exists')
}

// Create public directory if it doesn't exist
const publicDir = path.join(process.cwd(), 'public')
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true })
  console.log('✅ Created public directory')
}

// Create placeholder profile image
const profileImagePath = path.join(publicDir, 'profile.jpg')
if (!fs.existsSync(profileImagePath)) {
  // Create a simple placeholder SVG
  const placeholderSvg = `<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#0ea5e9;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#14b8a6;stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect width="400" height="400" fill="url(#grad)"/>
    <text x="200" y="200" font-family="Arial, sans-serif" font-size="48" font-weight="bold" text-anchor="middle" fill="white">AP</text>
    <text x="200" y="250" font-family="Arial, sans-serif" font-size="16" text-anchor="middle" fill="white">Anay Pandey</text>
  </svg>`
  
  fs.writeFileSync(profileImagePath.replace('.jpg', '.svg'), placeholderSvg)
  console.log('✅ Created placeholder profile image (profile.svg)')
  console.log('ℹ️  Replace profile.svg with your actual profile image (profile.jpg)')
}

console.log('\n🎉 Setup complete!')
console.log('\nNext steps:')
console.log('1. Replace public/profile.svg with your actual profile image (profile.jpg)')
console.log('2. Update your EmailJS credentials in .env.local')
console.log('3. Run: npm run dev')
console.log('\nHappy coding! 🚀')
