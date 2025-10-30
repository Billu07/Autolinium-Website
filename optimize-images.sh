#!/bin/bash

# Autolinium Image Optimization Script
# This script optimizes all images in the project

echo "🚀 Starting Image Optimization for Autolinium..."
echo "================================================"

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if required tools are installed
check_dependencies() {
    echo "Checking dependencies..."
    
    if ! command -v cwebp &> /dev/null; then
        echo -e "${RED}Error: cwebp is not installed${NC}"
        echo "Install with: sudo apt-get install webp"
        exit 1
    fi
    
    if ! command -v convert &> /dev/null; then
        echo -e "${RED}Error: ImageMagick is not installed${NC}"
        echo "Install with: sudo apt-get install imagemagick"
        exit 1
    fi
    
    echo -e "${GREEN}✓ All dependencies installed${NC}"
}

# Create optimized directory
setup_directories() {
    echo "Setting up directories..."
    mkdir -p ./optimized/images/{desktop,tablet,mobile}
    mkdir -p ./optimized/logos
    echo -e "${GREEN}✓ Directories created${NC}"
}

# Optimize hero background images
optimize_hero_images() {
    echo ""
    echo "Optimizing hero images..."
    
    if [ -f "src/assets/hero-bg.png" ]; then
        echo "  Processing hero-bg.png..."
        
        # Desktop version (1920x1080)
        convert src/assets/hero-bg.png -resize 1920x1080^ -gravity center -extent 1920x1080 -quality 85 ./optimized/images/desktop/hero-bg-temp.jpg
        cwebp -q 85 ./optimized/images/desktop/hero-bg-temp.jpg -o ./optimized/images/desktop/hero-bg.webp
        rm ./optimized/images/desktop/hero-bg-temp.jpg
        
        # Tablet version (1024x768)
        convert src/assets/hero-bg.png -resize 1024x768^ -gravity center -extent 1024x768 -quality 85 ./optimized/images/tablet/hero-bg-temp.jpg
        cwebp -q 80 ./optimized/images/tablet/hero-bg-temp.jpg -o ./optimized/images/tablet/hero-bg.webp
        rm ./optimized/images/tablet/hero-bg-temp.jpg
        
        # Mobile version (768x1024)
        convert src/assets/hero-bg.png -resize 768x1024^ -gravity center -extent 768x1024 -quality 80 ./optimized/images/mobile/hero-bg-temp.jpg
        cwebp -q 75 ./optimized/images/mobile/hero-bg-temp.jpg -o ./optimized/images/mobile/hero-bg.webp
        rm ./optimized/images/mobile/hero-bg-temp.jpg
        
        echo -e "  ${GREEN}✓ Hero image optimized (3 versions created)${NC}"
    else
        echo -e "  ${YELLOW}! hero-bg.png not found${NC}"
    fi
}

# Optimize logo images
optimize_logos() {
    echo ""
    echo "Optimizing logos..."
    
    if [ -f "src/assets/auto-logo.png" ]; then
        echo "  Processing auto-logo.png..."
        
        # Large version (512x512)
        convert src/assets/auto-logo.png -resize 512x512 -quality 90 ./optimized/logos/auto-logo-large-temp.png
        cwebp -q 90 -alpha_q 100 ./optimized/logos/auto-logo-large-temp.png -o ./optimized/logos/auto-logo-large.webp
        rm ./optimized/logos/auto-logo-large-temp.png
        
        # Medium version (256x256)
        convert src/assets/auto-logo.png -resize 256x256 -quality 90 ./optimized/logos/auto-logo-medium-temp.png
        cwebp -q 90 -alpha_q 100 ./optimized/logos/auto-logo-medium-temp.png -o ./optimized/logos/auto-logo-medium.webp
        rm ./optimized/logos/auto-logo-medium-temp.png
        
        # Small version (128x128)
        convert src/assets/auto-logo.png -resize 128x128 -quality 90 ./optimized/logos/auto-logo-small-temp.png
        cwebp -q 90 -alpha_q 100 ./optimized/logos/auto-logo-small-temp.png -o ./optimized/logos/auto-logo-small.webp
        rm ./optimized/logos/auto-logo-small-temp.png
        
        echo -e "  ${GREEN}✓ Logo optimized (3 sizes created)${NC}"
    else
        echo -e "  ${YELLOW}! auto-logo.png not found${NC}"
    fi
}

# Optimize background WebP files
optimize_backgrounds() {
    echo ""
    echo "Optimizing background images..."
    
    for file in src/assets/*.webp; do
        if [ -f "$file" ]; then
            filename=$(basename "$file" .webp)
            echo "  Processing $filename.webp..."
            
            # Re-compress with better quality/size ratio
            cwebp -q 80 "$file" -o "./optimized/images/${filename}-optimized.webp"
            
            original_size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file")
            optimized_size=$(stat -f%z "./optimized/images/${filename}-optimized.webp" 2>/dev/null || stat -c%s "./optimized/images/${filename}-optimized.webp")
            reduction=$(( (original_size - optimized_size) * 100 / original_size ))
            
            echo -e "  ${GREEN}✓ Optimized: ${reduction}% size reduction${NC}"
        fi
    done
}

# Generate favicons
generate_favicons() {
    echo ""
    echo "Generating favicons..."
    
    if [ -f "public/assets/autolinium-logo.png" ]; then
        echo "  Creating favicon set..."
        
        # 16x16
        convert public/assets/autolinium-logo.png -resize 16x16 ./optimized/favicon-16x16.png
        
        # 32x32
        convert public/assets/autolinium-logo.png -resize 32x32 ./optimized/favicon-32x32.png
        
        # 180x180 (Apple touch icon)
        convert public/assets/autolinium-logo.png -resize 180x180 ./optimized/apple-touch-icon.png
        
        # 192x192 (Android)
        convert public/assets/autolinium-logo.png -resize 192x192 ./optimized/android-chrome-192x192.png
        
        # 512x512 (Android)
        convert public/assets/autolinium-logo.png -resize 512x512 ./optimized/android-chrome-512x512.png
        
        # favicon.ico (multi-size)
        convert public/assets/autolinium-logo.png -resize 16x16 -resize 32x32 -resize 48x48 ./optimized/favicon.ico
        
        echo -e "  ${GREEN}✓ Favicon set generated${NC}"
    else
        echo -e "  ${YELLOW}! autolinium-logo.png not found${NC}"
    fi
}

# Generate social media images
generate_social_images() {
    echo ""
    echo "Generating social media images..."
    
    if [ -f "src/assets/hero-bg.png" ] && [ -f "public/assets/autolinium-logo.png" ]; then
        echo "  Creating OG image (1200x630)..."
        
        # Create OG image with logo overlay
        convert src/assets/hero-bg.png -resize 1200x630^ -gravity center -extent 1200x630 ./optimized/og-temp.jpg
        convert ./optimized/og-temp.jpg public/assets/autolinium-logo.png -gravity center -composite ./optimized/og-image-temp.jpg
        cwebp -q 85 ./optimized/og-image-temp.jpg -o ./optimized/og-image.webp
        convert ./optimized/og-image-temp.jpg ./optimized/og-image.jpg
        rm ./optimized/og-temp.jpg ./optimized/og-image-temp.jpg
        
        echo "  Creating Twitter card (1200x600)..."
        convert src/assets/hero-bg.png -resize 1200x600^ -gravity center -extent 1200x600 ./optimized/twitter-temp.jpg
        convert ./optimized/twitter-temp.jpg public/assets/autolinium-logo.png -gravity center -composite ./optimized/twitter-card-temp.jpg
        cwebp -q 85 ./optimized/twitter-card-temp.jpg -o ./optimized/twitter-card.webp
        convert ./optimized/twitter-card-temp.jpg ./optimized/twitter-card.jpg
        rm ./optimized/twitter-temp.jpg ./optimized/twitter-card-temp.jpg
        
        echo -e "  ${GREEN}✓ Social media images generated${NC}"
    else
        echo -e "  ${YELLOW}! Required images not found${NC}"
    fi
}

# Generate report
generate_report() {
    echo ""
    echo "================================================"
    echo "📊 Optimization Report"
    echo "================================================"
    
    if [ -d "./optimized" ]; then
        echo ""
        echo "Desktop Hero Images:"
        ls -lh ./optimized/images/desktop/*.webp 2>/dev/null | awk '{print "  " $9 " - " $5}'
        
        echo ""
        echo "Tablet Hero Images:"
        ls -lh ./optimized/images/tablet/*.webp 2>/dev/null | awk '{print "  " $9 " - " $5}'
        
        echo ""
        echo "Mobile Hero Images:"
        ls -lh ./optimized/images/mobile/*.webp 2>/dev/null | awk '{print "  " $9 " - " $5}'
        
        echo ""
        echo "Logo Variations:"
        ls -lh ./optimized/logos/*.webp 2>/dev/null | awk '{print "  " $9 " - " $5}'
        
        echo ""
        echo "Favicons:"
        ls -lh ./optimized/*.{png,ico} 2>/dev/null | awk '{print "  " $9 " - " $5}'
        
        echo ""
        echo "Social Media Images:"
        ls -lh ./optimized/{og-image,twitter-card}.{jpg,webp} 2>/dev/null | awk '{print "  " $9 " - " $5}'
        
        echo ""
        echo -e "${GREEN}✓ Optimization complete!${NC}"
        echo ""
        echo "Next steps:"
        echo "1. Review optimized images in ./optimized/ directory"
        echo "2. Replace original images with optimized versions"
        echo "3. Update image paths in components"
        echo "4. Test on different devices"
    fi
}

# Main execution
main() {
    check_dependencies
    setup_directories
    optimize_hero_images
    optimize_logos
    optimize_backgrounds
    generate_favicons
    generate_social_images
    generate_report
}

# Run the script
main
