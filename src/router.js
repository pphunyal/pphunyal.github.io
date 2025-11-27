/**
 * Category Router - Handles routing for category pages
 */

class CategoryRouter {
    constructor() {
        this.blogSystem = new BlogSystem();
        this.currentRoute = '';
        this.init();
    }

    /**
     * Initialize router
     */
    async init() {
        // Load posts first
        await this.blogSystem.loadPosts();

        // Set up routing
        this.bindEvents();
        this.handleInitialRoute();
    }

    /**
     * Bind routing events
     */
    bindEvents() {
        // Handle hash changes
        window.addEventListener('hashchange', () => {
            this.handleRouteChange();
        });

        // Handle category link clicks
        document.addEventListener('click', (e) => {
            const categoryLink = e.target.closest('.category-link');
            if (categoryLink) {
                e.preventDefault();
                const category = categoryLink.getAttribute('data-category');
                this.navigateToCategory(category);
            }
        });

        // Handle back button for home
        window.addEventListener('popstate', () => {
            this.handleRouteChange();
        });
    }

    /**
     * Handle initial route on page load
     */
    handleInitialRoute() {
        const hash = window.location.hash;
        if (hash && hash.startsWith('#category/')) {
            this.handleRouteChange();
        }
    }

    /**
     * Handle route changes
     */
    handleRouteChange() {
        const hash = window.location.hash;

        if (!hash || hash === '#') {
            this.showHomePage();
            return;
        }

        if (hash.startsWith('#category/')) {
            const category = hash.replace('#category/', '');
            // Validate category exists
            if (this.blogSystem.isValidCategory(category)) {
                this.showCategoryPage(category);
            } else {
                this.show404Page('Invalid Category', `The category "${category}" does not exist.`);
            }
            return;
        }

        // Unknown route, show 404
        this.show404Page('Page Not Found', 'The page you are looking for does not exist.');
    }

    /**
     * Navigate to category page
     */
    navigateToCategory(category) {
        window.location.hash = `#category/${category}`;
    }

    /**
     * Show category page
     */
    showCategoryPage(categorySlug) {
        this.currentRoute = `category/${categorySlug}`;

        const categoryName = this.blogSystem.getCategoryName(categorySlug);
        const posts = this.blogSystem.getPostsByCategory(categorySlug);

        // Update page title
        document.title = `${categoryName} | Blog | Prashish Phunyal`;

        // Hide search and categories sections
        this.hideHomeElements();

        // Show category page content
        this.renderCategoryPage(categorySlug, categoryName, posts);

        // Update active category
        this.updateActiveCategoryLink(categorySlug);
    }

    /**
     * Show home page
     */
    showHomePage() {
        this.currentRoute = '';

        // Update page title
        document.title = 'Blog | Prashish Phunyal';

        // Show home elements
        this.showHomeElements();

        // Clear active category
        this.updateActiveCategoryLink(null);

        // Re-render recent posts
        this.renderHomePage();
    }

    /**
     * Render category page
     */
    renderCategoryPage(categorySlug, categoryName, posts) {
        const main = document.querySelector('.main');
        if (!main) return;

        // Remove any existing category page first
        const existingCategoryPage = document.querySelector('.category-page');
        if (existingCategoryPage) {
            existingCategoryPage.remove();
        }

        // Create category page HTML
        const categoryPageHTML = `
            <div class="category-page">
                <div class="category-header">
                    <button class="back-button" onclick="window.location.hash = ''">
                        ← Back to Home
                    </button>
                    <h1 class="category-title">
                        ${categoryName}
                    </h1>
                </div>
                
                <section class="category-posts">
                    <div class="posts-container">
                        <ul class="post-list" id="category-posts">
                            ${posts.length > 0 ? '' : '<li class="no-posts"><p>No posts in this category yet.</p></li>'}
                        </ul>
                    </div>
                </section>
            </div>
        `;

        // Insert category page after hiding home elements
        main.insertAdjacentHTML('beforeend', categoryPageHTML);

        // Render posts if any
        if (posts.length > 0) {
            const postsList = document.getElementById('category-posts');
            this.blogSystem.renderPostList(posts, postsList);
        }
    }

    /**
     * Render home page
     */
    renderHomePage() {
        // Simply show the existing home elements instead of recreating them
        this.showHomeElements();

        // Re-initialize components
        this.reinitializeComponents();
    }

    /**
     * Hide home page elements for category view
     */
    hideHomeElements() {
        const searchContainer = document.querySelector('.search-container');
        const categoriesSection = document.querySelector('.categories-section');
        const postsSection = document.querySelector('.posts-section');

        if (searchContainer) searchContainer.style.display = 'none';
        if (categoriesSection) categoriesSection.style.display = 'none';
        if (postsSection) postsSection.style.display = 'none';
    }

    /**
     * Show home page elements
     */
    showHomeElements() {
        const main = document.querySelector('.main');
        const searchContainer = document.querySelector('.search-container');
        const categoriesSection = document.querySelector('.categories-section');
        const postsSection = document.querySelector('.posts-section');

        // Remove any category page content
        const categoryPage = document.querySelector('.category-page');
        if (categoryPage) {
            categoryPage.remove();
        }

        if (searchContainer) searchContainer.style.display = 'block';
        if (categoriesSection) categoriesSection.style.display = 'block';
        if (postsSection) postsSection.style.display = 'block';
    }

    /**
     * Update active category link
     */
    updateActiveCategoryLink(activeCategory) {
        const categoryLinks = document.querySelectorAll('.category-link');

        categoryLinks.forEach(link => {
            const category = link.getAttribute('data-category');
            if (category === activeCategory) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    /**
     * Re-initialize components after home page render
     */
    async reinitializeComponents() {
        // Wait a bit for DOM to settle
        await new Promise(resolve => setTimeout(resolve, 100));

        // Re-initialize search system
        if (window.SearchSystem) {
            const searchSystem = new SearchSystem();
            searchSystem.init(this.blogSystem.posts, this.blogSystem);
        }

        // Load and display recent posts
        const recentPostsList = document.getElementById('recent-posts');
        if (recentPostsList) {
            const recentPosts = this.blogSystem.getRecentPosts();
            this.blogSystem.renderPostList(recentPosts, recentPostsList);
        }
    }

    /**
     * Show 404 page
     */
    show404Page(title, description) {
        this.currentRoute = '404';

        // Update page title
        document.title = 'Page Not Found | Blog | Prashish Phunyal';

        const main = document.querySelector('.main');
        if (!main) return;

        // Hide all home elements
        this.hideHomeElements();

        // Remove any existing 404 page first
        const existing404 = document.querySelector('.error-container');
        if (existing404) {
            existing404.remove();
        }

        // Create 404 page HTML
        const errorPageHTML = `
            <div class="error-container">
                <svg class="error-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4v2m0 4v2M7.457 20.748a9 9 0 1010.086 0M7.458 3.252a9.003 9.003 0 010 17.496" />
                </svg>

                <div class="error-code">404</div>
                <div class="error-divider"></div>
                
                <h1 class="error-title">${title}</h1>
                <p class="error-description">${description}</p>

                <div class="error-suggestions">
                    <a href="/" class="suggestion-link primary">← Back to Home</a>
                    <a href="/#category/blockchain" class="suggestion-link">Explore Blockchain</a>
                    <a href="/#category/cryptography" class="suggestion-link">Explore Cryptography</a>
                </div>
            </div>
        `;

        // Insert 404 page
        main.insertAdjacentHTML('beforeend', errorPageHTML);
    }
}

// Export for global use
window.CategoryRouter = CategoryRouter;
