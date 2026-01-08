// Product Database with Real Images
const productsDatabase = {
    luxury: [
        {
            id: 1,
            name: 'Designer Leather Handbag',
            category: 'fashion',
            price: 1299.99,
            originalPrice: 1599.99,
            description: 'Premium Italian leather handbag with gold hardware. Limited edition from luxury fashion house.',
            rating: 4.9,
            reviewCount: 127,
            badge: 'Limited Edition',
            image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=300&fit=crop',
            persona: 'homeowner',
            tags: ['luxury', 'designer', 'handmade', 'exclusive']
        },
        {
            id: 2,
            name: 'Swiss Luxury Watch',
            category: 'accessories',
            price: 4599.99,
            originalPrice: 5999.99,
            description: 'Automatic Swiss watch with sapphire crystal and genuine leather strap.',
            rating: 4.8,
            reviewCount: 89,
            badge: 'Swiss Made',
            image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&h=300&fit=crop',
            persona: 'homeowner',
            tags: ['luxury', 'watch', 'swiss', 'premium']
        },
        {
            id: 3,
            name: 'Cashmere Sweater',
            category: 'clothing',
            price: 299.99,
            originalPrice: 399.99,
            description: '100% Mongolian cashmere sweater, ultra-soft and warm.',
            rating: 4.7,
            reviewCount: 203,
            badge: 'Cashmere',
            image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=300&fit=crop',
            persona: 'homeowner',
            tags: ['luxury', 'cashmere', 'premium', 'winter']
        },
        {
            id: 4,
            name: 'Designer Sunglasses',
            category: 'accessories',
            price: 349.99,
            originalPrice: 449.99,
            description: 'Designer sunglasses with UV400 protection and polarized lenses.',
            rating: 4.6,
            reviewCount: 156,
            badge: 'Designer',
            image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop',
            persona: 'homeowner',
            tags: ['luxury', 'sunglasses', 'designer', 'summer']
        },
        {
            id: 5,
            name: 'Premium Noise-Cancelling Headphones',
            category: 'electronics',
            price: 549.99,
            originalPrice: 699.99,
            description: 'Wireless headphones with industry-leading noise cancellation.',
            rating: 4.9,
            reviewCount: 312,
            badge: 'Premium Audio',
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
            persona: 'homeowner',
            tags: ['electronics', 'audio', 'premium', 'wireless']
        },
        {
            id: 6,
            name: 'Italian Leather Shoes',
            category: 'shoes',
            price: 499.99,
            originalPrice: 649.99,
            description: 'Handcrafted Italian leather shoes with premium construction.',
            rating: 4.7,
            reviewCount: 178,
            badge: 'Handcrafted',
            image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=300&fit=crop',
            persona: 'homeowner',
            tags: ['luxury', 'shoes', 'italian', 'leather']
        }
    ],
    
    budget: [
        {
            id: 7,
            name: 'Wireless Earbuds',
            category: 'electronics',
            price: 49.99,
            originalPrice: 79.99,
            description: 'Affordable wireless earbuds with good sound quality and battery life.',
            rating: 4.3,
            reviewCount: 1245,
            badge: 'Student Favorite',
            image: 'https://images.unsplash.com/photo-1590658165737-15a047b8b5e9?w=400&h=300&fit=crop',
            persona: 'student',
            tags: ['budget', 'electronics', 'wireless', 'student']
        },
        {
            id: 8,
            name: 'Casual Backpack',
            category: 'accessories',
            price: 34.99,
            originalPrice: 49.99,
            description: 'Durable casual backpack perfect for school or travel.',
            rating: 4.2,
            reviewCount: 876,
            badge: 'Best Value',
            image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop',
            persona: 'student',
            tags: ['budget', 'backpack', 'casual', 'student']
        },
        {
            id: 9,
            name: 'Graphic T-Shirt',
            category: 'clothing',
            price: 19.99,
            originalPrice: 29.99,
            description: 'Comfortable cotton t-shirt with trendy graphic design.',
            rating: 4.4,
            reviewCount: 567,
            badge: 'Trending',
            image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop',
            persona: 'student',
            tags: ['budget', 'clothing', 'casual', 'trendy']
        },
        {
            id: 10,
            name: 'Running Shoes',
            category: 'shoes',
            price: 59.99,
            originalPrice: 89.99,
            description: 'Affordable running shoes with good cushioning and support.',
            rating: 4.3,
            reviewCount: 932,
            badge: 'Student Deal',
            image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop',
            persona: 'student',
            tags: ['budget', 'shoes', 'sports', 'student']
        },
        {
            id: 11,
            name: 'Laptop Sleeve',
            category: 'accessories',
            price: 24.99,
            originalPrice: 34.99,
            description: 'Protective laptop sleeve with water-resistant material.',
            rating: 4.1,
            reviewCount: 345,
            badge: 'Essential',
            image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&h=300&fit=crop',
            persona: 'student',
            tags: ['budget', 'accessories', 'laptop', 'protection']
        },
        {
            id: 12,
            name: 'Water Bottle',
            category: 'accessories',
            price: 14.99,
            originalPrice: 19.99,
            description: 'Insulated water bottle that keeps drinks cold for 24 hours.',
            rating: 4.5,
            reviewCount: 678,
            badge: 'Eco-Friendly',
            image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400&h=300&fit=crop',
            persona: 'student',
            tags: ['budget', 'accessories', 'eco-friendly', 'health']
        }
    ],
    
    professional: [
        {
            id: 13,
            name: 'Professional Blazer',
            category: 'clothing',
            price: 199.99,
            originalPrice: 249.99,
            description: 'Tailored professional blazer suitable for business meetings.',
            rating: 4.6,
            reviewCount: 234,
            badge: 'Professional',
            image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=300&fit=crop',
            persona: 'business',
            tags: ['professional', 'business', 'formal', 'office']
        },
        {
            id: 14,
            name: 'Leather Briefcase',
            category: 'accessories',
            price: 299.99,
            originalPrice: 399.99,
            description: 'Professional leather briefcase with multiple compartments.',
            rating: 4.7,
            reviewCount: 156,
            badge: 'Executive',
            image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=300&fit=crop',
            persona: 'business',
            tags: ['professional', 'business', 'leather', 'office']
        },
        {
            id: 15,
            name: 'Business Laptop',
            category: 'electronics',
            price: 1299.99,
            originalPrice: 1599.99,
            description: 'High-performance laptop designed for business professionals.',
            rating: 4.8,
            reviewCount: 89,
            badge: 'Business Pro',
            image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop',
            persona: 'business',
            tags: ['professional', 'electronics', 'laptop', 'business']
        },
        {
            id: 16,
            name: 'Dress Shoes',
            category: 'shoes',
            price: 149.99,
            originalPrice: 199.99,
            description: 'Classic dress shoes suitable for office and formal occasions.',
            rating: 4.5,
            reviewCount: 189,
            badge: 'Formal',
            image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=300&fit=crop',
            persona: 'business',
            tags: ['professional', 'shoes', 'formal', 'office']
        },
        {
            id: 17,
            name: 'Smartwatch',
            category: 'electronics',
            price: 349.99,
            originalPrice: 449.99,
            description: 'Smartwatch with productivity features and health tracking.',
            rating: 4.6,
            reviewCount: 267,
            badge: 'Productivity',
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop',
            persona: 'business',
            tags: ['professional', 'electronics', 'smartwatch', 'productivity']
        },
        {
            id: 18,
            name: 'Professional Portfolio',
            category: 'accessories',
            price: 79.99,
            originalPrice: 99.99,
            description: 'Professional portfolio for documents and presentations.',
            rating: 4.4,
            reviewCount: 123,
            badge: 'Presentation',
            image: 'https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?w=400&h=300&fit=crop',
            persona: 'business',
            tags: ['professional', 'accessories', 'office', 'presentation']
        }
    ],
    
    family: [
        {
            id: 19,
            name: 'Family Board Game',
            category: 'home',
            price: 34.99,
            originalPrice: 49.99,
            description: 'Educational board game suitable for the whole family.',
            rating: 4.7,
            reviewCount: 456,
            badge: 'Family Fun',
            image: 'https://images.unsplash.com/photo-1585647347483-22b66260dfff?w=400&h=300&fit=crop',
            persona: 'family',
            tags: ['family', 'home', 'games', 'kids']
        },
        {
            id: 20,
            name: 'Kids Backpack',
            category: 'accessories',
            price: 29.99,
            originalPrice: 39.99,
            description: 'Durable kids backpack with multiple compartments.',
            rating: 4.5,
            reviewCount: 289,
            badge: 'Kid-Friendly',
            image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop',
            persona: 'family',
            tags: ['family', 'accessories', 'kids', 'school']
        },
        {
            id: 21,
            name: 'Family Tent',
            category: 'outdoor',
            price: 199.99,
            originalPrice: 249.99,
            description: 'Spacious family tent for camping adventures.',
            rating: 4.6,
            reviewCount: 178,
            badge: 'Outdoor',
            image: 'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=400&h=300&fit=crop',
            persona: 'family',
            tags: ['family', 'outdoor', 'camping', 'adventure']
        },
        {
            id: 22,
            name: 'Kitchen Set',
            category: 'home',
            price: 149.99,
            originalPrice: 199.99,
            description: 'Complete kitchen set for family cooking.',
            rating: 4.4,
            reviewCount: 234,
            badge: 'Home Essentials',
            image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
            persona: 'family',
            tags: ['family', 'home', 'kitchen', 'cooking']
        },
        {
            id: 23,
            name: 'Family Photo Frame',
            category: 'home',
            price: 39.99,
            originalPrice: 49.99,
            description: 'Digital photo frame for family memories.',
            rating: 4.3,
            reviewCount: 167,
            badge: 'Memories',
            image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop',
            persona: 'family',
            tags: ['family', 'home', 'photos', 'memories']
        },
        {
            id: 24,
            name: 'Kids Tablet',
            category: 'electronics',
            price: 129.99,
            originalPrice: 169.99,
            description: 'Educational tablet designed for kids with parental controls.',
            rating: 4.5,
            reviewCount: 312,
            badge: 'Educational',
            image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&h=300&fit=crop',
            persona: 'family',
            tags: ['family', 'electronics', 'kids', 'education']
        }
    ]
};

// Global Variables
let shoppingCart = [
    {
        id: 1,
        name: 'Designer Leather Handbag',
        price: 1299.99,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=300&fit=crop'
    },
    {
        id: 5,
        name: 'Premium Noise-Cancelling Headphones',
        price: 549.99,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop'
    }
];

let wishlist = [2, 3, 6]; // Product IDs in wishlist
let currentPersona = 'homeowner';
let currentCategory = null;

// DOM Elements
const cartBtn = document.getElementById('cartBtn');
const cartModal = document.getElementById('cartModal');
const cartCloseBtn = document.getElementById('cartCloseBtn');
const cartItemsList = document.getElementById('cartItemsList');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');

const wishlistBtn = document.getElementById('wishlistBtn');
const wishlistModal = document.getElementById('wishlistModal');
const wishlistCloseBtn = document.getElementById('wishlistCloseBtn');
const wishlistItems = document.getElementById('wishlistItems');
const wishlistCount = document.getElementById('wishlistCount');

const productsGrid = document.getElementById('productsGrid');
const themeToggle = document.getElementById('themeToggle');
const personaBtns = document.querySelectorAll('.persona-btn');

const cartItems = document.getElementById('cartItems');
const cartItemCount = document.getElementById('cartItemCount');
const cartTotalPreview = document.getElementById('cartTotalPreview');
const cartRecommendations = document.getElementById('cartRecommendations');

const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendChatBtn = document.getElementById('sendChatBtn');
const resetChatBtn = document.getElementById('resetChatBtn');

const navigationModal = document.getElementById('navigationModal');
const navigationModalBody = document.getElementById('navigationModalBody');
const navigationModalTitle = document.getElementById('navigationModalTitle');
const navigationCloseBtn = document.getElementById('navigationCloseBtn');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Load initial products
    loadProductsForPersona(currentPersona);
    
    // Initialize cart
    updateCartDisplay();
    updateCartPreview();
    updateCartRecommendations();
    updateCartBadge();
    updateWishlistBadge();
    
    // Set up event listeners
    setupEventListeners();
    
    // Initialize chat
    initChat();
    
    // Apply default persona
    applyShoppingPersona(currentPersona);
    
    // Setup navigation
    setupNavigation();
});

// Event Listeners Setup
function setupEventListeners() {
    // Cart functionality
    cartBtn.addEventListener('click', openCart);
    cartCloseBtn.addEventListener('click', closeCart);
    
    // Wishlist functionality
    wishlistBtn.addEventListener('click', openWishlist);
    wishlistCloseBtn.addEventListener('click', closeWishlist);
    
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Persona switcher
    personaBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const persona = this.dataset.persona;
            currentPersona = persona;
            
            // Update UI
            personaBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Apply persona
            applyShoppingPersona(persona);
            
            // Update persona display
            document.getElementById('currentPersona').textContent = 
                getPersonaName(persona);
            
            // Save preference
            localStorage.setItem('shoppingPersona', persona);
            
            // Show notification
            showNotification(`Switched to ${getPersonaName(persona)} shopping experience`);
            
            // Load products for this persona
            loadProductsForPersona(persona);
        });
    });
    
    // Search functionality
    document.getElementById('searchInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch(this.value);
        }
    });
    
    document.querySelector('.search-btn').addEventListener('click', function() {
        const query = document.getElementById('searchInput').value;
        performSearch(query);
    });
    
    // Sort functionality
    document.getElementById('sortSelect').addEventListener('change', function() {
        sortProducts(this.value);
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === cartModal) {
            closeCart();
        }
        if (event.target === wishlistModal) {
            closeWishlist();
        }
        if (event.target === navigationModal) {
            closeNavigationModal();
        }
    });
    
    // Chat functionality
    sendChatBtn.addEventListener('click', sendChatMessage);
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendChatMessage();
        }
    });
    resetChatBtn.addEventListener('click', resetChat);
    
    // Slider controls
    setupSliderControls();
    
    // Navigation modal close
    navigationCloseBtn.addEventListener('click', closeNavigationModal);
}

// Initialize Chat
function initChat() {
    chatMessages.innerHTML = '';
    
    // Add initial messages
    addChatMessage('Hello! I\'ve noticed you prefer luxury brands. Would you like me to show you the new designer collection that just arrived?', 'ai');
    addChatMessage('Show me premium watches under $5000', 'user');
    addChatMessage('Based on your taste, I recommend these luxury watches. I\'ve filtered for brands you\'ve shown interest in before.', 'ai');
}

// Setup Slider Controls
function setupSliderControls() {
    const sliders = [
        { id: 'personalizationSlider', valueId: 'personalizationValue' },
        { id: 'priceSlider', valueId: 'priceValue' },
        { id: 'trendSlider', valueId: 'trendValue' }
    ];
    
    sliders.forEach(slider => {
        const sliderElement = document.getElementById(slider.id);
        const valueElement = document.getElementById(slider.valueId);
        
        // Set initial value display
        valueElement.textContent = `${sliderElement.value}%`;
        
        // Update value on change
        sliderElement.addEventListener('input', function() {
            valueElement.textContent = `${this.value}%`;
        });
    });
}

// Apply Shopping Persona
function applyShoppingPersona(persona) {
    // Remove existing persona classes
    document.body.classList.remove('student-persona', 'homeowner-persona', 'business-persona', 'family-persona');
    
    // Add new persona class
    document.body.classList.add(`${persona}-persona`);
    
    // Update UI elements based on persona
    updateWelcomeMessage(persona);
    updateSearchHint(persona);
    updatePersonalizedDeals(persona);
    updateCategoriesSubtitle(persona);
    updateRecommendationsSubtitle(persona);
    updateSliderValues(persona);
}

// Load Products for Persona
function loadProductsForPersona(persona) {
    productsGrid.innerHTML = '';
    
    let products = [];
    
    switch(persona) {
        case 'student':
            products = [...productsDatabase.budget, ...productsDatabase.luxury.slice(0, 2)];
            break;
        case 'homeowner':
            products = [...productsDatabase.luxury, ...productsDatabase.professional.slice(0, 2)];
            break;
        case 'business':
            products = [...productsDatabase.professional, ...productsDatabase.luxury.slice(0, 2)];
            break;
        case 'family':
            products = [...productsDatabase.family, ...productsDatabase.budget.slice(0, 2)];
            break;
    }
    
    // Shuffle and display products
    shuffleArray(products).forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Create Product Card
function createProductCard(product) {
    const isInWishlist = wishlist.includes(product.id);
    const hasDiscount = product.originalPrice > product.price;
    const discountPercent = hasDiscount ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;
    
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.id = product.id;
    
    card.innerHTML = `
        ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
        ${hasDiscount ? `<div class="product-badge" style="left: auto; right: var(--spacing-sm); background: var(--danger-color);">-${discountPercent}%</div>` : ''}
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
        </div>
        <div class="product-content">
            <div class="product-category">
                <i class="fas fa-tag"></i>
                ${product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </div>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">
                <div>
                    <div class="price-current">$${product.price.toFixed(2)}</div>
                    ${hasDiscount ? `<div class="price-original">$${product.originalPrice.toFixed(2)}</div>` : ''}
                </div>
                <div class="product-rating">
                    <div class="stars">
                        ${generateStars(product.rating)}
                    </div>
                    <span class="rating-count">(${product.reviewCount})</span>
                </div>
            </div>
            <div class="product-actions">
                <button class="btn-add-to-cart" onclick="addToCart(${product.id})">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
                <button class="btn-wishlist ${isInWishlist ? 'active' : ''}" onclick="toggleWishlist(${product.id})">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// Navigation Functions
function setupNavigation() {
    // Main navigation items
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all nav items
            navItems.forEach(navItem => navItem.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            const section = this.dataset.section;
            const category = this.dataset.category;
            
            if (section) {
                showSection(section);
                
                // If it's a main section, open navigation modal
                if (section !== 'home') {
                    openNavigationModal(section);
                }
            } else if (category) {
                // Handle category navigation
                showCategoryProducts(category);
            }
        });
    });
    
    // Footer links
    const footerLinks = document.querySelectorAll('.footer-column a');
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.dataset.section;
            const category = this.dataset.category;
            
            if (section) {
                // Update active nav item
                const correspondingNav = document.querySelector(`.nav-item[data-section="${section}"]`);
                if (correspondingNav) {
                    navItems.forEach(nav => nav.classList.remove('active'));
                    correspondingNav.classList.add('active');
                }
                
                showSection(section);
                
                if (section !== 'home') {
                    openNavigationModal(section);
                }
            }
        });
    });
}

function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    const targetSection = document.getElementById(`${sectionId}-section`);
    if (targetSection) {
        targetSection.classList.add('active');
        
        // Load section content if needed
        switch(sectionId) {
            case 'shop':
                loadShopSection();
                break;
            case 'ai-features':
                loadAIFeaturesSection();
                break;
            case 'help':
                loadHelpSection();
                break;
            case 'about':
                loadAboutSection();
                break;
        }
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function showCategoryProducts(category) {
    currentCategory = category;
    
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show category section
    const categorySection = document.getElementById('category-section');
    categorySection.classList.add('active');
    
    // Load category products
    loadCategoryProducts(category);
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function loadCategoryProducts(category) {
    const categoryProducts = document.getElementById('categoryProducts');
    const categoryTitle = document.getElementById('categoryTitle');
    const categorySubtitle = document.getElementById('categorySubtitle');
    
    if (!categoryProducts) return;
    
    // Category data
    const categories = {
        'clothing': {
            title: 'Clothing & Apparel',
            icon: 'fas fa-tshirt',
            subtitle: 'Browse our collection of clothing for all occasions',
            description: 'From casual wear to formal attire, find the perfect outfit for every occasion.'
        },
        'shoes': {
            title: 'Footwear',
            icon: 'fas fa-shoe-prints',
            subtitle: 'Discover comfortable and stylish shoes',
            description: 'Step out in style with our collection of shoes for every activity.'
        },
        'jewelry': {
            title: 'Jewelry & Accessories',
            icon: 'fas fa-gem',
            subtitle: 'Accessorize with our premium jewelry collection',
            description: 'Add the perfect finishing touch with our selection of jewelry and accessories.'
        },
        'electronics': {
            title: 'Electronics',
            icon: 'fas fa-laptop',
            subtitle: 'Latest gadgets and tech devices',
            description: 'Stay connected with our range of electronics and smart devices.'
        },
        'home-decor': {
            title: 'Home Decor',
            icon: 'fas fa-home',
            subtitle: 'Transform your living space',
            description: 'Create the perfect ambiance with our home decor collection.'
        },
        'deals': {
            title: 'Special Deals',
            icon: 'fas fa-percent',
            subtitle: 'Limited time offers and discounts',
            description: 'Save big with our exclusive deals and promotions.'
        },
        'new-arrivals': {
            title: 'New Arrivals',
            icon: 'fas fa-star',
            subtitle: 'Fresh products just added',
            description: 'Be the first to explore our latest additions.'
        }
    };
    
    const categoryData = categories[category] || {
        title: 'Category',
        icon: 'fas fa-tag',
        subtitle: 'Browse products',
        description: 'Explore our collection'
    };
    
    // Update category header
    categoryTitle.innerHTML = `<i class="${categoryData.icon}"></i> ${categoryData.title}`;
    categorySubtitle.textContent = categoryData.subtitle;
    
    // Get products for this category
    let products = [];
    
    // Filter products based on category
    Object.values(productsDatabase).forEach(categoryArray => {
        categoryArray.forEach(product => {
            if (category === 'clothing' && (product.category === 'clothing' || product.category === 'fashion')) {
                products.push(product);
            } else if (category === 'shoes' && product.category === 'shoes') {
                products.push(product);
            } else if (category === 'electronics' && product.category === 'electronics') {
                products.push(product);
            } else if (category === 'home-decor' && (product.category === 'home' || product.category === 'outdoor')) {
                products.push(product);
            } else if (category === 'deals') {
                // Show products with discounts
                if (product.originalPrice && product.originalPrice > product.price) {
                    products.push(product);
                }
            } else if (category === 'new-arrivals') {
                // Show newer products (IDs 15-24 for demo)
                if (product.id >= 15) {
                    products.push(product);
                }
            }
        });
    });
    
    // If no specific products found, show all products
    if (products.length === 0 && (category === 'jewelry' || category === 'deals' || category === 'new-arrivals')) {
        products = [...productsDatabase.luxury, ...productsDatabase.budget, ...productsDatabase.professional, ...productsDatabase.family].slice(0, 12);
    }
    
    // Limit to 12 products
    products = products.slice(0, 12);
    
    // Create category header
    categoryProducts.innerHTML = `
        <div class="category-filter">
            <div class="category-info">
                <div class="category-icon-large">
                    <i class="${categoryData.icon}"></i>
                </div>
                <div>
                    <h3>${categoryData.title}</h3>
                    <p>${categoryData.description}</p>
                </div>
            </div>
            <div class="category-stats">
                <div class="category-stat">
                    <div class="category-stat-value">${products.length}</div>
                    <div class="category-stat-label">Products</div>
                </div>
                <div class="category-stat">
                    <div class="category-stat-value">${Math.floor(products.length * 0.3)}</div>
                    <div class="category-stat-label">On Sale</div>
                </div>
                <div class="category-stat">
                    <div class="category-stat-value">${Math.floor(products.length * 0.4)}</div>
                    <div class="category-stat-label">In Stock</div>
                </div>
            </div>
            <a href="#" class="back-to-home" onclick="showSection('home')">
                <i class="fas fa-arrow-left"></i> Back to Home
            </a>
        </div>
        <div class="products-grid">
            ${products.map(product => `
                <div class="product-card">
                    ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
                    ${product.originalPrice && product.originalPrice > product.price ? 
                        `<div class="product-badge" style="left: auto; right: var(--spacing-sm); background: var(--danger-color);">
                            -${Math.round((1 - product.price / product.originalPrice) * 100)}%
                        </div>` : ''}
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}" loading="lazy">
                    </div>
                    <div class="product-content">
                        <div class="product-category">
                            <i class="fas fa-tag"></i>
                            ${product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                        </div>
                        <h3 class="product-name">${product.name}</h3>
                        <p class="product-description">${product.description}</p>
                        <div class="product-price">
                            <div>
                                <div class="price-current">$${product.price.toFixed(2)}</div>
                                ${product.originalPrice && product.originalPrice > product.price ? 
                                    `<div class="price-original">$${product.originalPrice.toFixed(2)}</div>` : ''}
                            </div>
                            <div class="product-rating">
                                <div class="stars">
                                    ${generateStars(product.rating)}
                                </div>
                                <span class="rating-count">(${product.reviewCount})</span>
                            </div>
                        </div>
                        <div class="product-actions">
                            <button class="btn-add-to-cart" onclick="addToCart(${product.id})">
                                <i class="fas fa-shopping-cart"></i> Add to Cart
                            </button>
                            <button class="btn-wishlist ${wishlist.includes(product.id) ? 'active' : ''}" onclick="toggleWishlist(${product.id})">
                                <i class="fas fa-heart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function openNavigationModal(section) {
    navigationModal.classList.add('active');
    loadNavigationContent(section);
}

function closeNavigationModal() {
    navigationModal.classList.remove('active');
}

function loadNavigationContent(section) {
    navigationModalBody.innerHTML = '';
    
    // Navigation data
    const navData = {
        shop: [
            {
                title: 'Women\'s Fashion',
                icon: 'fas fa-female',
                items: ['Dresses', 'Tops & Blouses', 'Bottoms', 'Outerwear', 'Activewear', 'Accessories']
            },
            {
                title: 'Men\'s Fashion',
                icon: 'fas fa-male',
                items: ['Shirts & Polos', 'Pants & Jeans', 'Suits & Blazers', 'Activewear', 'Shoes', 'Accessories']
            },
            {
                title: 'Electronics',
                icon: 'fas fa-laptop',
                items: ['Smartphones', 'Laptops', 'Tablets', 'Wearables', 'Audio', 'Gaming']
            },
            {
                title: 'Home & Kitchen',
                icon: 'fas fa-home',
                items: ['Furniture', 'Decor', 'Kitchenware', 'Bedding', 'Appliances', 'Storage']
            },
            {
                title: 'Beauty & Health',
                icon: 'fas fa-spa',
                items: ['Skincare', 'Makeup', 'Fragrance', 'Hair Care', 'Wellness', 'Personal Care']
            }
        ],
        
        'ai-features': [
            {
                title: 'Personalized Recommendations',
                description: 'AI analyzes your preferences to suggest products you\'ll love.',
                icon: 'fas fa-brain'
            },
            {
                title: 'AI Style Assistant',
                description: 'Get personalized style advice and outfit recommendations.',
                icon: 'fas fa-robot'
            },
            {
                title: 'Smart Price Tracking',
                description: 'AI monitors prices and alerts you when they drop.',
                icon: 'fas fa-chart-line'
            },
            {
                title: 'Virtual Try-On',
                description: 'Use AR to virtually try on clothes and accessories.',
                icon: 'fas fa-magic'
            },
            {
                title: 'Style Predictions',
                description: 'AI predicts upcoming fashion trends for you.',
                icon: 'fas fa-crystal-ball'
            }
        ],
        
        help: [
            {
                title: 'Customer Service',
                icon: 'fas fa-headset',
                items: ['24/7 Support', 'Contact Us', 'Live Chat', 'Email Support']
            },
            {
                title: 'Shipping & Returns',
                icon: 'fas fa-shipping-fast',
                items: ['Shipping Info', 'Delivery Times', 'Returns Policy', 'Order Tracking']
            },
            {
                title: 'Account & Payment',
                icon: 'fas fa-credit-card',
                items: ['Payment Methods', 'Order History', 'Account Settings', 'Security']
            },
            {
                title: 'FAQs',
                icon: 'fas fa-question-circle',
                items: ['General Questions', 'Order Issues', 'Product Info', 'Technical Support']
            }
        ],
        
        about: [
            {
                title: 'Our Story',
                description: 'Founded in 2020 to revolutionize online shopping through AI.',
                icon: 'fas fa-book'
            },
            {
                title: 'Our Technology',
                description: 'Proprietary AI engine using machine learning algorithms.',
                icon: 'fas fa-cogs'
            },
            {
                title: 'Our Mission',
                description: 'Make personalized, enjoyable shopping accessible to everyone.',
                icon: 'fas fa-bullseye'
            },
            {
                title: 'Our Team',
                description: '150+ fashion stylists, AI researchers, and customer experts.',
                icon: 'fas fa-users'
            }
        ]
    };
    
    const sectionData = navData[section];
    if (!sectionData) return;
    
    // Set title
    const titles = {
        shop: 'Shop Categories',
        'ai-features': 'AI Features',
        help: 'Help Center',
        about: 'About StyleHub'
    };
    
    navigationModalTitle.textContent = titles[section];
    
    // Create grid
    const grid = document.createElement('div');
    grid.className = 'navigation-grid';
    
    sectionData.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'navigation-category';
        
        if (section === 'ai-features' || section === 'about') {
            itemDiv.innerHTML = `
                <h4><i class="${item.icon}"></i> ${item.title}</h4>
                <p>${item.description}</p>
            `;
        } else {
            let itemsHTML = '';
            item.items.forEach(subItem => {
                itemsHTML += `
                    <li>
                        <a href="#">
                            <span>${subItem}</span>
                        </a>
                    </li>
                `;
            });
            
            itemDiv.innerHTML = `
                <h4><i class="${item.icon}"></i> ${item.title}</h4>
                <ul>${itemsHTML}</ul>
            `;
        }
        
        grid.appendChild(itemDiv);
    });
    
    navigationModalBody.appendChild(grid);
}

// Section content loading functions
function loadShopSection() {
    const shopContainer = document.getElementById('shopCategories');
    if (!shopContainer) return;
    
    shopContainer.innerHTML = `
        <div class="shop-categories">
            <div class="shop-category-card" onclick="showCategoryProducts('clothing')">
                <div class="shop-category-image">
                    <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=400&fit=crop" alt="Clothing">
                </div>
                <h3>Clothing</h3>
                <p>Discover fashionable clothing for all occasions</p>
                <div class="welcome-stats">
                    <div class="stat">
                        <div class="stat-value">450+</div>
                        <div class="stat-label">Items</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value">30%</div>
                        <div class="stat-label">On Sale</div>
                    </div>
                </div>
            </div>
            
            <div class="shop-category-card" onclick="showCategoryProducts('shoes')">
                <div class="shop-category-image">
                    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=400&fit=crop" alt="Shoes">
                </div>
                <h3>Shoes</h3>
                <p>Comfortable and stylish footwear for every activity</p>
                <div class="welcome-stats">
                    <div class="stat">
                        <div class="stat-value">200+</div>
                        <div class="stat-label">Pairs</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value">25%</div>
                        <div class="stat-label">On Sale</div>
                    </div>
                </div>
            </div>
            
            <div class="shop-category-card" onclick="showCategoryProducts('electronics')">
                <div class="shop-category-image">
                    <img src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&h=400&fit=crop" alt="Electronics">
                </div>
                <h3>Electronics</h3>
                <p>Latest gadgets and tech devices</p>
                <div class="welcome-stats">
                    <div class="stat">
                        <div class="stat-value">300+</div>
                        <div class="stat-label">Devices</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value">20%</div>
                        <div class="stat-label">On Sale</div>
                    </div>
                </div>
            </div>
            
            <div class="shop-category-card" onclick="showCategoryProducts('home-decor')">
                <div class="shop-category-image">
                    <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop" alt="Home Decor">
                </div>
                <h3>Home Decor</h3>
                <p>Transform your living space with beautiful decor</p>
                <div class="welcome-stats">
                    <div class="stat">
                        <div class="stat-value">350+</div>
                        <div class="stat-label">Items</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value">35%</div>
                        <div class="stat-label">On Sale</div>
                    </div>
                </div>
            </div>
            
            <div class="shop-category-card" onclick="showCategoryProducts('jewelry')">
                <div class="shop-category-image">
                    <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop" alt="Jewelry">
                </div>
                <h3>Jewelry</h3>
                <p>Accessorize with our premium jewelry collection</p>
                <div class="welcome-stats">
                    <div class="stat">
                        <div class="stat-value">150+</div>
                        <div class="stat-label">Pieces</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value">15%</div>
                        <div class="stat-label">On Sale</div>
                    </div>
                </div>
            </div>
            
            <div class="shop-category-card" onclick="showCategoryProducts('deals')">
                <div class="shop-category-image">
                    <img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=400&fit=crop" alt="Deals">
                </div>
                <h3>Special Deals</h3>
                <p>Limited time offers and exclusive discounts</p>
                <div class="welcome-stats">
                    <div class="stat">
                        <div class="stat-value">100+</div>
                        <div class="stat-label">Deals</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value">Up to 70%</div>
                        <div class="stat-label">Off</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function loadAIFeaturesSection() {
    const aiFeaturesContainer = document.getElementById('aiFeatures');
    if (!aiFeaturesContainer) return;
    
    aiFeaturesContainer.innerHTML = `
        <div class="ai-features-grid">
            <div class="ai-feature-card">
                <div class="ai-feature-icon">
                    <i class="fas fa-brain"></i>
                </div>
                <h3>Personalized Recommendations</h3>
                <p>AI analyzes your preferences, browsing history, and purchase patterns to suggest products you'll love with 95% accuracy.</p>
                <div class="ai-feature-status">
                    <span class="status-dot"></span>
                    <span>Active</span>
                </div>
            </div>
            
            <div class="ai-feature-card">
                <div class="ai-feature-icon">
                    <i class="fas fa-robot"></i>
                </div>
                <h3>AI Style Assistant</h3>
                <p>Get personalized style advice and outfit recommendations based on your body type, preferences, and current trends.</p>
                <div class="ai-feature-status">
                    <span class="status-dot"></span>
                    <span>Active</span>
                </div>
            </div>
            
            <div class="ai-feature-card">
                <div class="ai-feature-icon">
                    <i class="fas fa-chart-line"></i>
                </div>
                <h3>Smart Price Tracking</h3>
                <p>AI monitors prices across competitors and alerts you when prices drop on items you're interested in. Save up to 40%.</p>
                <div class="ai-feature-status">
                    <span class="status-dot"></span>
                    <span>Active</span>
                </div>
            </div>
            
            <div class="ai-feature-card">
                <div class="ai-feature-icon">
                    <i class="fas fa-magic"></i>
                </div>
                <h3>Virtual Try-On</h3>
                <p>Use augmented reality to virtually try on clothes, accessories, and makeup before buying. See how items look on you.</p>
                <div class="ai-feature-status">
                    <span class="status-dot"></span>
                    <span>Beta</span>
                </div>
            </div>
            
            <div class="ai-feature-card">
                <div class="ai-feature-icon">
                    <i class="fas fa-crystal-ball"></i>
                </div>
                <h3>Style Predictions</h3>
                <p>AI predicts upcoming fashion trends and suggests items that will match your personal style before they become popular.</p>
                <div class="ai-feature-status">
                    <span class="status-dot"></span>
                    <span>Active</span>
                </div>
            </div>
            
            <div class="ai-feature-card">
                <div class="ai-feature-icon">
                    <i class="fas fa-headset"></i>
                </div>
                <h3>AI Help Center</h3>
                <p>24/7 AI-powered customer support that understands natural language and provides instant help with any questions.</p>
                <div class="ai-feature-status">
                    <span class="status-dot"></span>
                    <span>Active</span>
                </div>
            </div>
        </div>
    `;
}

function loadHelpSection() {
    const helpContainer = document.getElementById('helpCategories');
    if (!helpContainer) return;
    
    helpContainer.innerHTML = `
        <div class="help-categories">
            <div class="help-category">
                <h3><i class="fas fa-headset"></i> Customer Service</h3>
                <ul>
                    <li><a href="#"><i class="fas fa-clock"></i> 24/7 Support</a></li>
                    <li><a href="#"><i class="fas fa-phone"></i> Contact Us</a></li>
                    <li><a href="#"><i class="fas fa-comments"></i> Live Chat</a></li>
                    <li><a href="#"><i class="fas fa-envelope"></i> Email Support</a></li>
                </ul>
            </div>
            
            <div class="help-category">
                <h3><i class="fas fa-shipping-fast"></i> Shipping & Returns</h3>
                <ul>
                    <li><a href="#"><i class="fas fa-truck"></i> Shipping Info</a></li>
                    <li><a href="#"><i class="fas fa-calendar-alt"></i> Delivery Times</a></li>
                    <li><a href="#"><i class="fas fa-exchange-alt"></i> Returns Policy</a></li>
                    <li><a href="#"><i class="fas fa-map-marker-alt"></i> Order Tracking</a></li>
                </ul>
            </div>
            
            <div class="help-category">
                <h3><i class="fas fa-credit-card"></i> Account & Payment</h3>
                <ul>
                    <li><a href="#"><i class="fas fa-wallet"></i> Payment Methods</a></li>
                    <li><a href="#"><i class="fas fa-history"></i> Order History</a></li>
                    <li><a href="#"><i class="fas fa-user-cog"></i> Account Settings</a></li>
                    <li><a href="#"><i class="fas fa-lock"></i> Security</a></li>
                </ul>
            </div>
            
            <div class="help-category">
                <h3><i class="fas fa-question-circle"></i> FAQs</h3>
                <ul>
                    <li><a href="#"><i class="fas fa-question"></i> General Questions</a></li>
                    <li><a href="#"><i class="fas fa-shopping-cart"></i> Order Issues</a></li>
                    <li><a href="#"><i class="fas fa-tag"></i> Product Info</a></li>
                    <li><a href="#"><i class="fas fa-cog"></i> Technical Support</a></li>
                </ul>
            </div>
            
            <div class="help-category" style="grid-column: 1 / -1;">
                <h3><i class="fas fa-robot"></i> AI Assistant Help</h3>
                <p>Our AI assistant can help you with most questions instantly. Click the button below to start a conversation.</p>
                <button class="btn btn-deal" style="margin-top: var(--spacing-md);" onclick="openAIAssistant()">
                    <i class="fas fa-comments"></i> Chat with AI Assistant
                </button>
            </div>
        </div>
    `;
}

function loadAboutSection() {
    const aboutContainer = document.getElementById('aboutContent');
    if (!aboutContainer) return;
    
    aboutContainer.innerHTML = `
        <div class="about-content">
            <div class="about-section">
                <h3><i class="fas fa-book"></i> Our Story</h3>
                <p>StyleHub was founded in 2020 with a simple mission: to revolutionize online shopping through artificial intelligence. Our team of fashion experts, data scientists, and AI engineers work together to create a truly personalized shopping experience for every customer.</p>
                <p>We believe that shopping should be enjoyable, personalized, and efficient. That's why we've built the most advanced AI shopping platform that learns your preferences and helps you discover products you'll love.</p>
            </div>
            
            <div class="about-section">
                <h3><i class="fas fa-cogs"></i> Our Technology</h3>
                <p>Our proprietary AI engine uses machine learning algorithms to analyze over 100 data points per customer, including browsing behavior, purchase history, style preferences, and even current fashion trends. This allows us to provide recommendations that are 95% accurate in predicting what customers will love.</p>
                <p>The system continuously learns and adapts to your changing preferences, ensuring that every shopping experience is better than the last.</p>
            </div>
            
            <div class="about-section">
                <h3><i class="fas fa-users"></i> Our Team</h3>
                <p>Our diverse team of 150+ includes fashion stylists, AI researchers, data scientists, and customer experience experts who are passionate about reinventing how people shop online.</p>
                <p>We come from different backgrounds but share a common goal: to make personalized shopping accessible to everyone through the power of artificial intelligence.</p>
            </div>
            
            <div class="about-section">
                <h3><i class="fas fa-bullseye"></i> Our Mission & Values</h3>
                <p><strong>Mission:</strong> To make personalized, enjoyable shopping accessible to everyone through the power of artificial intelligence.</p>
                
                <div class="about-values">
                    <div class="value-card">
                        <i class="fas fa-lightbulb"></i>
                        <h4>Innovation</h4>
                        <p>Constantly pushing the boundaries of what AI can do for shopping</p>
                    </div>
                    
                    <div class="value-card">
                        <i class="fas fa-user-circle"></i>
                        <h4>Personalization</h4>
                        <p>Every customer gets a unique shopping experience tailored just for them</p>
                    </div>
                    
                    <div class="value-card">
                        <i class="fas fa-star"></i>
                        <h4>Quality</h4>
                        <p>Curating only the best products from trusted brands and designers</p>
                    </div>
                    
                    <div class="value-card">
                        <i class="fas fa-shield-alt"></i>
                        <h4>Privacy</h4>
                        <p>Your data is protected and you control your personalization settings</p>
                    </div>
                </div>
            </div>
            
            <div class="about-section">
                <h3><i class="fas fa-chart-line"></i> Our Impact</h3>
                <div class="welcome-stats">
                    <div class="stat">
                        <div class="stat-value">1M+</div>
                        <div class="stat-label">Happy Customers</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value">95%</div>
                        <div class="stat-label">Satisfaction Rate</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value">50K+</div>
                        <div class="stat-label">Products Curated</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value">40%</div>
                        <div class="stat-label">Average Savings</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function openAIAssistant() {
    // Scroll to AI assistant section
    const aiSection = document.querySelector('.ai-assistant-section');
    if (aiSection) {
        showSection('home');
        setTimeout(() => {
            aiSection.scrollIntoView({ behavior: 'smooth' });
            showNotification('AI Assistant is ready to help you!');
        }, 100);
    }
}

// Cart Functions
function addToCart(productId) {
    // Find product
    let product = null;
    
    // Search in all product categories
    for (const category in productsDatabase) {
        const found = productsDatabase[category].find(p => p.id === productId);
        if (found) {
            product = found;
            break;
        }
    }
    
    if (!product) return;
    
    // Check if already in cart
    const existingItem = shoppingCart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        shoppingCart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            image: product.image
        });
    }
    
    // Update UI
    updateCartDisplay();
    updateCartPreview();
    updateCartBadge();
    
    // Show notification
    showNotification(`Added ${product.name} to your cart`);
}

function removeFromCart(productId) {
    const itemIndex = shoppingCart.findIndex(item => item.id === productId);
    
    if (itemIndex !== -1) {
        const itemName = shoppingCart[itemIndex].name;
        shoppingCart.splice(itemIndex, 1);
        
        // Update UI
        updateCartDisplay();
        updateCartPreview();
        updateCartBadge();
        
        // Show notification
        showNotification(`Removed ${itemName} from your cart`);
    }
}

function updateCartQuantity(productId, change) {
    const item = shoppingCart.find(item => item.id === productId);
    
    if (item) {
        item.quantity += change;
        
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartDisplay();
            updateCartPreview();
            updateCartBadge();
        }
    }
}

function updateCartDisplay() {
    cartItemsList.innerHTML = '';
    
    if (shoppingCart.length === 0) {
        cartItemsList.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <h3>Your cart is empty</h3>
                <p>Add some products to see them here</p>
            </div>
        `;
        cartTotal.textContent = '$0.00';
        return;
    }
    
    let total = 0;
    
    shoppingCart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item-modal';
        cartItem.innerHTML = `
            <div class="cart-item-image-modal">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details-modal">
                <div class="cart-item-name-modal">${item.name}</div>
                <div class="cart-item-price-modal">$${item.price.toFixed(2)} × ${item.quantity} = $${itemTotal.toFixed(2)}</div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        `;
        
        cartItemsList.appendChild(cartItem);
    });
    
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

function updateCartPreview() {
    cartItems.innerHTML = '';
    
    if (shoppingCart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: var(--gray-600);">Your cart is empty</p>';
        cartItemCount.textContent = '0 items';
        cartTotalPreview.textContent = '$0.00';
        return;
    }
    
    let total = 0;
    let itemCount = 0;
    
    shoppingCart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        itemCount += item.quantity;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
            </div>
            <div class="cart-item-quantity">
                <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, -1)">-</button>
                <span class="quantity-value">${item.quantity}</span>
                <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, 1)">+</button>
            </div>
            <div class="cart-item-remove" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i>
            </div>
        `;
        
        cartItems.appendChild(cartItem);
    });
    
    cartItemCount.textContent = `${itemCount} item${itemCount !== 1 ? 's' : ''}`;
    cartTotalPreview.textContent = `$${total.toFixed(2)}`;
}

function updateCartBadge() {
    const totalItems = shoppingCart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

function updateCartRecommendations() {
    cartRecommendations.innerHTML = '';
    
    // Get recommendations based on current persona
    let recommendations = [];
    
    switch(currentPersona) {
        case 'student':
            recommendations = productsDatabase.budget.filter(p => !shoppingCart.find(item => item.id === p.id)).slice(0, 3);
            break;
        case 'homeowner':
            recommendations = productsDatabase.luxury.filter(p => !shoppingCart.find(item => item.id === p.id)).slice(0, 3);
            break;
        case 'business':
            recommendations = productsDatabase.professional.filter(p => !shoppingCart.find(item => item.id === p.id)).slice(0, 3);
            break;
        case 'family':
            recommendations = productsDatabase.family.filter(p => !shoppingCart.find(item => item.id === p.id)).slice(0, 3);
            break;
    }
    
    // Display recommendations
    recommendations.forEach(product => {
        const recItem = document.createElement('div');
        recItem.className = 'cart-recommendation-item';
        recItem.innerHTML = `
            <div class="recommendation-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="recommendation-details">
                <h5>${product.name}</h5>
                <div class="price">$${product.price.toFixed(2)}</div>
            </div>
        `;
        
        recItem.addEventListener('click', () => addToCart(product.id));
        
        cartRecommendations.appendChild(recItem);
    });
}

function toggleWishlist(productId) {
    const index = wishlist.indexOf(productId);
    const wishlistBtn = document.querySelector(`.btn-wishlist[data-id="${productId}"]`);
    
    if (index === -1) {
        wishlist.push(productId);
        if (wishlistBtn) wishlistBtn.classList.add('active');
        showNotification('Added to wishlist!');
    } else {
        wishlist.splice(index, 1);
        if (wishlistBtn) wishlistBtn.classList.remove('active');
        showNotification('Removed from wishlist');
    }
    
    updateWishlistBadge();
    updateWishlistDisplay();
}

function updateWishlistDisplay() {
    wishlistItems.innerHTML = '';
    
    if (wishlist.length === 0) {
        wishlistItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-heart"></i>
                <h3>Your wishlist is empty</h3>
                <p>Add some products to see them here</p>
            </div>
        `;
        return;
    }
    
    wishlist.forEach(productId => {
        // Find product
        let product = null;
        for (const category in productsDatabase) {
            const found = productsDatabase[category].find(p => p.id === productId);
            if (found) {
                product = found;
                break;
            }
        }
        
        if (product) {
            const wishlistItem = document.createElement('div');
            wishlistItem.className = 'cart-item-modal';
            wishlistItem.innerHTML = `
                <div class="cart-item-image-modal">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="cart-item-details-modal">
                    <div class="cart-item-name-modal">${product.name}</div>
                    <div class="cart-item-price-modal">$${product.price.toFixed(2)}</div>
                </div>
                <button class="btn-add-to-cart" onclick="addToCart(${product.id})" style="padding: 8px 12px; font-size: 0.8rem;">
                    <i class="fas fa-cart-plus"></i> Add
                </button>
            `;
            
            wishlistItems.appendChild(wishlistItem);
        }
    });
}

function updateWishlistBadge() {
    wishlistCount.textContent = wishlist.length;
}

function openCart() {
    cartModal.classList.add('active');
    updateCartDisplay();
}

function closeCart() {
    cartModal.classList.remove('active');
}

function openWishlist() {
    wishlistModal.classList.add('active');
    updateWishlistDisplay();
}

function closeWishlist() {
    wishlistModal.classList.remove('active');
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const icon = themeToggle.querySelector('i');
    
    if (document.body.classList.contains('dark-mode')) {
        icon.className = 'fas fa-sun';
        localStorage.setItem('theme', 'dark');
        showNotification('Switched to dark mode for comfortable shopping');
    } else {
        icon.className = 'fas fa-moon';
        localStorage.setItem('theme', 'light');
        showNotification('Switched to light mode');
    }
}

// Helper Functions
function generateStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'ai-notification';
    notification.innerHTML = `
        <i class="fas fa-robot"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function getPersonaName(persona) {
    switch(persona) {
        case 'student': return 'Student';
        case 'homeowner': return 'Luxury Shopper';
        case 'business': return 'Professional';
        case 'family': return 'Family Shopper';
        default: return 'Shopper';
    }
}

// UI Update Functions
function updateWelcomeMessage(persona) {
    const titles = {
        student: 'Welcome Back, Student!',
        homeowner: 'Welcome Back, Luxury Shopper!',
        business: 'Welcome Back, Professional!',
        family: 'Welcome Back, Family Shopper!'
    };
    
    const messages = {
        student: 'Your AI assistant found the best student deals and trendy items just for you. Check out budget-friendly picks and exclusive student discounts.',
        homeowner: 'Your AI assistant has curated premium fashion items based on your taste. Discover exclusive brands and limited edition pieces.',
        business: 'Your AI assistant has selected professional attire and productivity tools tailored to your career needs.',
        family: 'Your AI assistant found practical family items and kid-friendly products perfect for your household.'
    };
    
    document.getElementById('welcomeTitle').textContent = titles[persona];
    document.getElementById('welcomeMessage').textContent = messages[persona];
}

function updateSearchHint(persona) {
    const hints = {
        student: 'affordable tech and trendy fashion',
        homeowner: 'premium fashion items',
        business: 'professional attire and office tools',
        family: 'family-friendly products'
    };
    
    document.getElementById('searchHint').textContent = hints[persona];
}

function updatePersonalizedDeals(persona) {
    const personalDeal = document.getElementById('personalDeal');
    
    const deals = {
        student: `
            <div class="deal-badge">
                <i class="fas fa-graduation-cap"></i>
                Student Exclusive
            </div>
            <div class="deal-content">
                <h3>Extra 15% Off for Students</h3>
                <p>Verify your student status to unlock additional savings on thousands of items.</p>
                <div class="deal-cta">
                    <button class="btn btn-deal">
                        <i class="fas fa-university"></i> Verify Now
                    </button>
                </div>
            </div>
        `,
        homeowner: `
            <div class="deal-badge">
                <i class="fas fa-crown"></i>
                VIP Access
            </div>
            <div class="deal-content">
                <h3>Early Access to Designer Collection</h3>
                <p>Get 24-hour early access to new designer arrivals. Limited to premium members.</p>
                <div class="deal-cta">
                    <button class="btn btn-deal">
                        <i class="fas fa-unlock"></i> Unlock Access
                    </button>
                </div>
            </div>
        `,
        business: `
            <div class="deal-badge">
                <i class="fas fa-briefcase"></i>
                Business Discount
            </div>
            <div class="deal-content">
                <h3>Corporate Volume Discounts</h3>
                <p>Save up to 30% on bulk orders for your business. Free expedited shipping on qualifying orders.</p>
                <div class="deal-cta">
                    <button class="btn btn-deal">
                        <i class="fas fa-building"></i> Business Portal
                    </button>
                </div>
            </div>
        `,
        family: `
            <div class="deal-badge">
                <i class="fas fa-users"></i>
                Family Bundle
            </div>
            <div class="deal-content">
                <h3>Family & Bundle Savings</h3>
                <p>Save 25% when you buy 3 or more qualifying family items. Free gift wrapping available.</p>
                <div class="deal-cta">
                    <button class="btn btn-deal">
                        <i class="fas fa-gift"></i> Shop Bundles
                    </button>
                </div>
            </div>
        `
    };
    
    personalDeal.innerHTML = deals[persona];
    
    // Update shipping deal text
    const shippingTexts = {
        student: 'Free shipping on orders over $35. Student Prime available for $6.99/month.',
        homeowner: 'All orders ship free with 2-day delivery. Upgrade to same-day for $9.99.',
        business: 'Free next-day shipping on business essentials. Dedicated business support.',
        family: 'Free shipping on family essentials. Scheduled deliveries available.'
    };
    
    document.getElementById('shippingDealText').textContent = shippingTexts[persona];
}

function updateCategoriesSubtitle(persona) {
    const subtitles = {
        student: 'Categories selected based on student lifestyle and budget',
        homeowner: 'Categories selected based on your luxury preferences',
        business: 'Categories selected based on professional needs',
        family: 'Categories selected based on family requirements'
    };
    
    document.getElementById('categoriesSubtitle').textContent = subtitles[persona];
}

function updateRecommendationsSubtitle(persona) {
    const subtitles = {
        student: 'Curated for your student budget and trendy style',
        homeowner: 'Curated exclusively for your luxury lifestyle',
        business: 'Selected to enhance your professional image',
        family: 'Chosen for practical family living'
    };
    
    document.getElementById('recommendationSubtitle').textContent = subtitles[persona];
}

function updateDealsSubtitle(persona) {
    const subtitles = {
        student: 'Special student deals and discounts just for you',
        homeowner: 'Exclusive offers tailored to your shopping profile',
        business: 'Professional discounts and business benefits',
        family: 'Family savings and bundle offers'
    };
    
    document.getElementById('dealsSubtitle').textContent = subtitles[persona];
}

function updateSliderValues(persona) {
    const values = {
        student: { personalization: 75, price: 85, trend: 90 },
        homeowner: { personalization: 85, price: 25, trend: 90 },
        business: { personalization: 80, price: 40, trend: 70 },
        family: { personalization: 70, price: 60, trend: 50 }
    };
    
    document.getElementById('personalizationSlider').value = values[persona].personalization;
    document.getElementById('priceSlider').value = values[persona].price;
    document.getElementById('trendSlider').value = values[persona].trend;
    
    document.getElementById('personalizationValue').textContent = `${values[persona].personalization}%`;
    document.getElementById('priceValue').textContent = `${values[persona].price}%`;
    document.getElementById('trendValue').textContent = `${values[persona].trend}%`;
}

// Sort Products
function sortProducts(sortBy) {
    let products = [];
    
    switch(currentPersona) {
        case 'student':
            products = [...productsDatabase.budget, ...productsDatabase.luxury.slice(0, 2)];
            break;
        case 'homeowner':
            products = [...productsDatabase.luxury, ...productsDatabase.professional.slice(0, 2)];
            break;
        case 'business':
            products = [...productsDatabase.professional, ...productsDatabase.luxury.slice(0, 2)];
            break;
        case 'family':
            products = [...productsDatabase.family, ...productsDatabase.budget.slice(0, 2)];
            break;
    }
    
    switch(sortBy) {
        case 'price-high':
            products.sort((a, b) => b.price - a.price);
            break;
        case 'price-low':
            products.sort((a, b) => a.price - b.price);
            break;
        case 'rating':
            products.sort((a, b) => b.rating - a.rating);
            break;
        case 'newest':
            products = shuffleArray(products);
            break;
        case 'relevance':
        default:
            // Already sorted by relevance
            break;
    }
    
    // Update display
    productsGrid.innerHTML = '';
    products.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Search Functionality
function performSearch(query) {
    if (!query.trim()) return;
    
    addChatMessage(`Searching for: ${query}`, 'user');
    
    setTimeout(() => {
        let response = '';
        
        switch(currentPersona) {
            case 'student':
                response = `I found 12 affordable options for "${query}". Showing the best student deals first.`;
                break;
            case 'homeowner':
                response = `I found 8 premium options for "${query}". Filtered to show luxury brands only.`;
                break;
            case 'business':
                response = `I found 10 professional options for "${query}". Prioritized business-appropriate items.`;
                break;
            case 'family':
                response = `I found 15 family-friendly options for "${query}". Showing practical and durable choices.`;
                break;
        }
        
        addChatMessage(response, 'ai');
        showNotification(`Found personalized results for "${query}"`);
    }, 1000);
}

// Chat Functions
function sendChatMessage() {
    const message = chatInput.value.trim();
    if (!message) return;
    
    addChatMessage(message, 'user');
    chatInput.value = '';
    
    // Simulate AI response
    setTimeout(() => {
        let response = '';
        
        // Simple keyword matching for demo
        if (message.toLowerCase().includes('watch') || message.toLowerCase().includes('timepiece')) {
            response = currentPersona === 'homeowner' 
                ? 'I recommend our Swiss luxury watches. They offer exceptional craftsmanship and prestige.'
                : 'Check out our affordable smartwatches with great features for the price.';
        } else if (message.toLowerCase().includes('bag') || message.toLowerCase().includes('purse')) {
            response = currentPersona === 'homeowner'
                ? 'Our designer leather handbags are perfect for luxury shoppers. Limited editions available.'
                : 'I found some stylish and affordable backpacks and casual bags for you.';
        } else if (message.toLowerCase().includes('discount') || message.toLowerCase().includes('sale')) {
            response = currentPersona === 'student'
                ? 'As a student, you qualify for extra discounts. Check the student deals section!'
                : 'I\'ve highlighted the best current deals for you in the personalized offers section.';
        } else {
            response = getGenericResponse(currentPersona);
        }
        
        addChatMessage(response, 'ai');
    }, 1500);
}

function addChatMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    messageDiv.innerHTML = `
        <div class="message-avatar">
            <i class="fas fa-${sender === 'ai' ? 'robot' : 'user'}"></i>
        </div>
        <div class="message-content">
            <p>${message}</p>
            <span class="message-time">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
        </div>
    `;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function resetChat() {
    chatMessages.innerHTML = '';
    addChatMessage('Hello! How can I assist with your shopping today?', 'ai');
}

function getGenericResponse(persona) {
    switch(persona) {
        case 'student':
            return 'I can help you find affordable, trendy items. Try searching for specific products or ask about student discounts!';
        case 'homeowner':
            return 'I specialize in luxury and premium items. Looking for designer fashion, high-end electronics, or exclusive brands?';
        case 'business':
            return 'I focus on professional needs. Need business attire, office supplies, or productivity tools?';
        case 'family':
            return 'I can help with family-friendly products. Looking for kids items, home essentials, or practical solutions?';
        default:
            return 'How can I help with your shopping today?';
    }
}
// Add this to your existing productsDatabase
const subcategoryProducts = {
    'dresses': [
        {
            id: 101,
            name: 'Elegant Evening Gown',
            category: 'clothing',
            price: 299.99,
            originalPrice: 399.99,
            description: 'Stunning evening gown perfect for special occasions.',
            rating: 4.8,
            reviewCount: 156,
            badge: 'Best Seller',
            image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=300&fit=crop',
            tags: ['dress', 'formal', 'evening', 'gown']
        },
        {
            id: 102,
            name: 'Summer Floral Dress',
            category: 'clothing',
            price: 89.99,
            originalPrice: 119.99,
            description: 'Lightweight floral dress perfect for summer days.',
            rating: 4.6,
            reviewCount: 234,
            badge: 'Summer Collection',
            image: 'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=400&h=300&fit=crop',
            tags: ['dress', 'summer', 'floral', 'casual']
        },
        {
            id: 103,
            name: 'Casual Maxi Dress',
            category: 'clothing',
            price: 79.99,
            description: 'Comfortable maxi dress for everyday wear.',
            rating: 4.5,
            reviewCount: 189,
            badge: 'Everyday Wear',
            image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400&h=300&fit=crop',
            tags: ['dress', 'casual', 'maxi', 'comfort']
        }
    ],
    
    'tops-blouses': [
        {
            id: 104,
            name: 'Silk Blouse',
            category: 'clothing',
            price: 129.99,
            originalPrice: 159.99,
            description: 'Premium silk blouse for professional settings.',
            rating: 4.7,
            reviewCount: 178,
            badge: 'Premium',
            image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=300&fit=crop',
            tags: ['top', 'blouse', 'silk', 'professional']
        },
        {
            id: 105,
            name: 'Casual T-Shirt',
            category: 'clothing',
            price: 24.99,
            description: 'Comfortable cotton t-shirt for everyday wear.',
            rating: 4.4,
            reviewCount: 345,
            badge: 'Essential',
            image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop',
            tags: ['top', 't-shirt', 'casual', 'cotton']
        }
    ],
    
    'smartphones': [
        {
            id: 106,
            name: 'Latest Smartphone Pro',
            category: 'electronics',
            price: 999.99,
            originalPrice: 1199.99,
            description: 'Flagship smartphone with advanced camera system.',
            rating: 4.9,
            reviewCount: 567,
            badge: 'New Arrival',
            image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=300&fit=crop',
            tags: ['smartphone', 'mobile', 'flagship', 'camera']
        },
        {
            id: 107,
            name: 'Budget Smartphone',
            category: 'electronics',
            price: 299.99,
            originalPrice: 399.99,
            description: 'Affordable smartphone with great features.',
            rating: 4.3,
            reviewCount: 456,
            badge: 'Budget Friendly',
            image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop',
            tags: ['smartphone', 'budget', 'affordable', 'mobile']
        }
    ],
    
    'laptops': [
        {
            id: 108,
            name: 'Gaming Laptop',
            category: 'electronics',
            price: 1499.99,
            originalPrice: 1799.99,
            description: 'High-performance gaming laptop with RTX graphics.',
            rating: 4.8,
            reviewCount: 234,
            badge: 'Gaming',
            image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop',
            tags: ['laptop', 'gaming', 'performance', 'gaming']
        },
        {
            id: 109,
            name: 'Ultrabook Pro',
            category: 'electronics',
            price: 1299.99,
            description: 'Lightweight ultrabook for professionals.',
            rating: 4.7,
            reviewCount: 189,
            badge: 'Professional',
            image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop',
            tags: ['laptop', 'ultrabook', 'professional', 'lightweight']
        }
    ],
    
    'accessories': [
        {
            id: 110,
            name: 'Designer Handbag',
            category: 'accessories',
            price: 499.99,
            originalPrice: 699.99,
            description: 'Luxury designer handbag with premium materials.',
            rating: 4.9,
            reviewCount: 123,
            badge: 'Designer',
            image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=300&fit=crop',
            tags: ['accessory', 'handbag', 'designer', 'luxury']
        },
        {
            id: 111,
            name: 'Silver Necklace',
            category: 'accessories',
            price: 89.99,
            originalPrice: 129.99,
            description: 'Elegant silver necklace with gemstone pendant.',
            rating: 4.6,
            reviewCount: 278,
            badge: 'Jewelry',
            image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=300&fit=crop',
            tags: ['accessory', 'necklace', 'jewelry', 'silver']
        }
    ]
};

// Update the navigation setup to include subcategories
function setupNavigation() {
    // Main navigation items
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all nav items
            navItems.forEach(navItem => navItem.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            const section = this.dataset.section;
            
            if (section) {
                showSection(section);
                
                // If it's a main section, open navigation modal
                if (section !== 'home') {
                    openNavigationModal(section);
                }
            }
        });
    });
    
    // Footer links
    const footerLinks = document.querySelectorAll('.footer-column a');
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.dataset.section;
            const subcategory = this.dataset.subcategory;
            
            if (section) {
                // Update active nav item
                const correspondingNav = document.querySelector(`.nav-item[data-section="${section}"]`);
                if (correspondingNav) {
                    navItems.forEach(nav => nav.classList.remove('active'));
                    correspondingNav.classList.add('active');
                }
                
                showSection(section);
                
                // If there's a specific subcategory, show it
                if (subcategory) {
                    setTimeout(() => {
                        showSubcategoryProducts(subcategory);
                    }, 100);
                }
            }
        });
    });
}

// Add new function to show subcategory products
function showSubcategoryProducts(subcategory) {
    currentCategory = subcategory;
    
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show subcategory section
    const subcategorySection = document.getElementById('subcategory-section');
    subcategorySection.classList.add('active');
    
    // Load subcategory products
    loadSubcategoryProducts(subcategory);
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Update the section loading functions
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    const targetSection = document.getElementById(`${sectionId}-section`);
    if (targetSection) {
        targetSection.classList.add('active');
        
        // Load section content if needed
        switch(sectionId) {
            case 'subcategories':
                loadSubcategoriesSection();
                break;
            case 'ai-features':
                loadAIFeaturesSection();
                break;
            case 'help':
                loadHelpSection();
                break;
            case 'about':
                loadAboutSection();
                break;
        }
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Add new function to load subcategories section
function loadSubcategoriesSection() {
    const subcategoriesContainer = document.getElementById('subcategoriesContainer');
    if (!subcategoriesContainer) return;
    
    subcategoriesContainer.innerHTML = `
        <div class="subcategory-section">
            <!-- Women's Fashion -->
            <div class="subcategory-card">
                <div class="subcategory-header">
                    <div class="subcategory-icon womens">
                        <i class="fas fa-female"></i>
                    </div>
                    <div class="subcategory-info">
                        <h3>Women's Fashion</h3>
                        <p>Trendy clothing & accessories</p>
                    </div>
                </div>
                <div class="subcategory-items">
                    <div class="subcategory-item" onclick="showSubcategoryProducts('dresses')">Dresses</div>
                    <div class="subcategory-item" onclick="showSubcategoryProducts('tops-blouses')">Tops & Blouses</div>
                    <div class="subcategory-item" onclick="showSubcategoryProducts('bottoms')">Bottoms</div>
                    <div class="subcategory-item" onclick="showSubcategoryProducts('outerwear')">Outerwear</div>
                    <div class="subcategory-item" onclick="showSubcategoryProducts('activewear')">Activewear</div>
                    <div class="subcategory-item" onclick="showSubcategoryProducts('accessories')">Accessories</div>
                </div>
            </div>
            
            <!-- Men's Fashion -->
            <div class="subcategory-card">
                <div class="subcategory-header">
                    <div class="subcategory-icon mens">
                        <i class="fas fa-male"></i>
                    </div>
                    <div class="subcategory-info">
                        <h3>Men's Fashion</h3>
                        <p>Stylish menswear & accessories</p>
                    </div>
                </div>
                <div class="subcategory-items">
                    <div class="subcategory-item" onclick="showSubcategoryProducts('shirts-polos')">Shirts & Polos</div>
                    <div class="subcategory-item" onclick="showSubcategoryProducts('pants-jeans')">Pants & Jeans</div>
                    <div class="subcategory-item" onclick="showSubcategoryProducts('suits-blazers')">Suits & Blazers</div>
                    <div class="subcategory-item" onclick="showSubcategoryProducts('activewear')">Activewear</div>
                    <div class="subcategory-item" onclick="showSubcategoryProducts('shoes')">Shoes</div>
                    <div class="subcategory-item" onclick="showSubcategoryProducts('accessories')">Accessories</div>
                </div>
            </div>
            
            <!-- Electronics -->
            <div class="subcategory-card">
                <div class="subcategory-header">
                    <div class="subcategory-icon electronics">
                        <i class="fas fa-laptop"></i>
                    </div>
                    <div class="subcategory-info">
                        <h3>Electronics</h3>
                        <p>Latest gadgets & devices</p>
                    </div>
                </div>
                <div class="subcategory-items">
                    <div class="subcategory-item" onclick="showSubcategoryProducts('smartphones')">Smartphones</div>
                    <div class="subcategory-item" onclick="showSubcategoryProducts('laptops')">Laptops</div>
                    <div class="subcategory-item" onclick="showSubcategoryProducts('tablets')">Tablets</div>
                    <div class="subcategory-item" onclick="showSubcategoryProducts('wearables')">Wearables</div>
                    <div class="subcategory-item" onclick="showSubcategoryProducts('audio')">Audio</div>
                    <div class="subcategory-item" onclick="showSubcategoryProducts('gaming')">Gaming</div>
                </div>
            </div>
            
            <!-- Home & Kitchen -->
            <div class="subcategory-card">
                <div class="subcategory-header">
                    <div class="subcategory-icon home">
                        <i class="fas fa-home"></i>
                    </div>
                    <div class="subcategory-info">
                        <h3>Home & Kitchen</h3>
                        <p>Home essentials & appliances</p>
                    </div>
                </div>
                <div class="subcategory-items">
                    <div class="subcategory-item" onclick="showSubcategoryProducts('cookware')">Cookware</div>
                    <div class="subcategory-item" onclick="showSubcategoryProducts('appliances')">Appliances</div>
                    <div class="subcategory-item" onclick="showSubcategoryProducts('furniture')">Furniture</div>
                    <div class="subcategory-item" onclick="showSubcategoryProducts('bedding-bath')">Bedding & Bath</div>
                    <div class="subcategory-item" onclick="showSubcategoryProducts('home-decor')">Home Decor</div>
                    <div class="subcategory-item" onclick="showSubcategoryProducts('storage')">Storage</div>
                </div>
            </div>
        </div>
    `;
}

// Add new function to load subcategory products
function loadSubcategoryProducts(subcategory) {
    const subcategoryProductsContainer = document.getElementById('subcategoryProducts');
    const subcategoryTitle = document.getElementById('subcategoryName');
    const subcategorySubtitle = document.getElementById('subcategorySubtitle');
    
    if (!subcategoryProductsContainer) return;
    
    // Subcategory data
    const subcategoryData = {
        'dresses': {
            name: 'Dresses',
            icon: 'fas fa-tshirt',
            color: 'womens',
            description: 'Discover our collection of beautiful dresses for every occasion.'
        },
        'tops-blouses': {
            name: 'Tops & Blouses',
            icon: 'fas fa-tshirt',
            color: 'womens',
            description: 'Stylish tops and blouses for your wardrobe.'
        },
        'smartphones': {
            name: 'Smartphones',
            icon: 'fas fa-mobile-alt',
            color: 'electronics',
            description: 'Latest smartphones with advanced features.'
        },
        'laptops': {
            name: 'Laptops',
            icon: 'fas fa-laptop',
            color: 'electronics',
            description: 'High-performance laptops for work and play.'
        },
        'accessories': {
            name: 'Accessories',
            icon: 'fas fa-gem',
            color: 'womens',
            description: 'Complete your look with our accessory collection.'
        },
        'shirts-polos': {
            name: 'Shirts & Polos',
            icon: 'fas fa-tshirt',
            color: 'mens',
            description: 'Classic shirts and polos for men.'
        },
        'pants-jeans': {
            name: 'Pants & Jeans',
            icon: 'fas fa-tshirt',
            color: 'mens',
            description: 'Comfortable pants and jeans collection.'
        }
    };
    
    const data = subcategoryData[subcategory] || {
        name: subcategory.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()),
        icon: 'fas fa-tag',
        color: 'electronics',
        description: 'Browse our collection of products.'
    };
    
    // Update subcategory header
    subcategoryTitle.textContent = data.name;
    subcategorySubtitle.textContent = data.description;
    
    // Get products for this subcategory
    let products = subcategoryProducts[subcategory] || [];
    
    // If no specific products found, show related products from main database
    if (products.length === 0) {
        products = getRelatedProducts(subcategory);
    }
    
    // Create subcategory header
    subcategoryProductsContainer.innerHTML = `
        <div class="subcategory-filter">
            <div class="subcategory-info-large">
                <div class="subcategory-icon-large ${data.color}">
                    <i class="${data.icon}"></i>
                </div>
                <div>
                    <h3>${data.name}</h3>
                    <p>${data.description}</p>
                </div>
            </div>
            <div class="subcategory-stats">
                <div class="subcategory-stat">
                    <div class="subcategory-stat-value">${products.length}</div>
                    <div class="subcategory-stat-label">Products</div>
                </div>
                <div class="subcategory-stat">
                    <div class="subcategory-stat-value">${Math.floor(products.length * 0.3)}</div>
                    <div class="subcategory-stat-label">On Sale</div>
                </div>
                <div class="subcategory-stat">
                    <div class="subcategory-stat-value">${Math.floor(products.length * 0.4)}</div>
                    <div class="subcategory-stat-label">In Stock</div>
                </div>
            </div>
            <a href="#" class="back-to-categories" onclick="showSection('subcategories')">
                <i class="fas fa-arrow-left"></i> Back to Categories
            </a>
        </div>
        <div class="products-grid">
            ${products.map(product => `
                <div class="product-card">
                    ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
                    ${product.originalPrice && product.originalPrice > product.price ? 
                        `<div class="product-badge" style="left: auto; right: var(--spacing-sm); background: var(--danger-color);">
                            -${Math.round((1 - product.price / product.originalPrice) * 100)}%
                        </div>` : ''}
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}" loading="lazy">
                    </div>
                    <div class="product-content">
                        <div class="product-category">
                            <i class="fas fa-tag"></i>
                            ${product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                        </div>
                        <h3 class="product-name">${product.name}</h3>
                        <p class="product-description">${product.description}</p>
                        <div class="product-price">
                            <div>
                                <div class="price-current">$${product.price.toFixed(2)}</div>
                                ${product.originalPrice && product.originalPrice > product.price ? 
                                    `<div class="price-original">$${product.originalPrice.toFixed(2)}</div>` : ''}
                            </div>
                            <div class="product-rating">
                                <div class="stars">
                                    ${generateStars(product.rating)}
                                </div>
                                <span class="rating-count">(${product.reviewCount})</span>
                            </div>
                        </div>
                        <div class="product-actions">
                            <button class="btn-add-to-cart" onclick="addToCart(${product.id})">
                                <i class="fas fa-shopping-cart"></i> Add to Cart
                            </button>
                            <button class="btn-wishlist ${wishlist.includes(product.id) ? 'active' : ''}" onclick="toggleWishlist(${product.id})">
                                <i class="fas fa-heart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// Helper function to get related products
function getRelatedProducts(subcategory) {
    let relatedProducts = [];
    
    // Map subcategories to product tags
    const subcategoryTags = {
        'dresses': ['dress', 'gown'],
        'tops-blouses': ['top', 'blouse', 't-shirt'],
        'smartphones': ['smartphone', 'mobile'],
        'laptops': ['laptop', 'computer'],
        'accessories': ['accessory', 'handbag', 'necklace', 'jewelry'],
        'shirts-polos': ['shirt', 'polo'],
        'pants-jeans': ['pants', 'jeans'],
        'suits-blazers': ['suit', 'blazer'],
        'activewear': ['activewear', 'sports'],
        'shoes': ['shoes', 'footwear'],
        'tablets': ['tablet'],
        'wearables': ['watch', 'wearable'],
        'audio': ['headphones', 'earbuds', 'audio'],
        'gaming': ['gaming'],
        'cookware': ['kitchen', 'cookware'],
        'appliances': ['appliance'],
        'furniture': ['furniture'],
        'bedding-bath': ['bedding', 'bath'],
        'home-decor': ['decor', 'home'],
        'storage': ['storage']
    };
    
    const tags = subcategoryTags[subcategory] || [subcategory];
    
    // Search in all products
    Object.values(productsDatabase).forEach(categoryArray => {
        categoryArray.forEach(product => {
            // Check if product has matching tags
            if (product.tags && product.tags.some(tag => 
                tags.some(searchTag => 
                    tag.toLowerCase().includes(searchTag.toLowerCase()) || 
                    searchTag.toLowerCase().includes(tag.toLowerCase())
                )
            )) {
                relatedProducts.push(product);
            }
        });
    });
    
    // If still no products, return some sample products
    if (relatedProducts.length === 0) {
        relatedProducts = [...productsDatabase.luxury, ...productsDatabase.budget].slice(0, 6);
    }
    
    return relatedProducts.slice(0, 12);
}

// Add this function to your existing script.js file
window.showSubcategoryProducts = showSubcategoryProducts;

// Update initialization to include subcategories
document.addEventListener('DOMContentLoaded', function() {
    // Load initial products
    loadProductsForPersona(currentPersona);
    
    // Initialize cart
    updateCartDisplay();
    updateCartPreview();
    updateCartRecommendations();
    updateCartBadge();
    updateWishlistBadge();
    
    // Set up event listeners
    setupEventListeners();
    
    // Initialize chat
    initChat();
    
    // Apply default persona
    applyShoppingPersona(currentPersona);
    
    // Setup navigation
    setupNavigation();
});
// Make functions available globally
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartQuantity = updateCartQuantity;
window.toggleWishlist = toggleWishlist;
window.showSection = showSection;
window.showCategoryProducts = showCategoryProducts;
window.openAIAssistant = openAIAssistant;