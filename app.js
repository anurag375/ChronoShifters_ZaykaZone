// Recipe data
const recipes = [
  {
    id: 1,
    title: "Creamy Tomato Basil Pasta",
    description: "Rich and creamy pasta with fresh basil and tomatoes, perfect for a quick dinner",
    cookingTime: 25,
    difficulty: "Easy",
    servings: "4",
    calories: 420,
    image: "🍝",
    ingredients: [
      "12 oz penne pasta",
      "2 cups heavy cream",
      "1 can (14 oz) crushed tomatoes",
      "3 cloves garlic, minced",
      "1/2 cup fresh basil, chopped",
      "1/2 cup parmesan cheese, grated",
      "2 tbsp olive oil",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Cook pasta according to package directions until al dente",
      "Heat olive oil in a large pan over medium heat",
      "Add minced garlic and cook for 1 minute until fragrant",
      "Add crushed tomatoes and simmer for 5 minutes",
      "Pour in heavy cream and stir to combine",
      "Add cooked pasta and toss to coat",
      "Stir in fresh basil and parmesan cheese",
      "Season with salt and pepper, serve immediately"
    ],
    tags: ["vegetarian", "pasta", "italian"]
  },
  {
    id: 2,
    title: "Grilled Chicken Caesar Salad",
    description: "Classic Caesar salad topped with perfectly grilled chicken breast",
    cookingTime: 20,
    difficulty: "Easy",
    servings: "2",
    calories: 350,
    image: "🥗",
    ingredients: [
      "2 chicken breasts",
      "1 large romaine lettuce head",
      "1/2 cup caesar dressing",
      "1/4 cup parmesan cheese, grated",
      "1 cup croutons",
      "2 tbsp olive oil",
      "1 tsp garlic powder",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Season chicken breasts with salt, pepper, and garlic powder",
      "Heat grill or grill pan to medium-high heat",
      "Grill chicken for 6-7 minutes per side until fully cooked",
      "Let chicken rest for 5 minutes, then slice",
      "Wash and chop romaine lettuce",
      "Toss lettuce with caesar dressing",
      "Top with sliced chicken, croutons, and parmesan",
      "Serve immediately while chicken is still warm"
    ],
    tags: ["chicken", "salad", "healthy"]
  },
  {
    id: 3,
    title: "Vegetarian Buddha Bowl",
    description: "Nutritious bowl packed with quinoa, roasted vegetables, and tahini dressing",
    cookingTime: 35,
    difficulty: "Medium",
    servings: "3",
    calories: 380,
    image: "🥙",
    ingredients: [
      "1 cup quinoa",
      "1 sweet potato, cubed",
      "1 cup broccoli florets",
      "1 cup chickpeas, drained",
      "2 cups spinach",
      "1/4 cup tahini",
      "2 tbsp lemon juice",
      "2 tbsp olive oil",
      "1 tsp cumin",
      "Salt to taste"
    ],
    instructions: [
      "Preheat oven to 400°F (200°C)",
      "Cook quinoa according to package instructions",
      "Toss sweet potato, broccoli, and chickpeas with olive oil and cumin",
      "Roast vegetables for 25 minutes until tender",
      "Mix tahini with lemon juice and water to make dressing",
      "Assemble bowls with quinoa base",
      "Top with roasted vegetables and fresh spinach",
      "Drizzle with tahini dressing before serving"
    ],
    tags: ["vegetarian", "vegan", "healthy", "bowl"]
  },
  {
    id: 4,
    title: "Honey Garlic Salmon",
    description: "Flaky salmon glazed with sweet and savory honey garlic sauce",
    cookingTime: 18,
    difficulty: "Easy",
    servings: "4",
    calories: 310,
    image: "🐟",
    ingredients: [
      "4 salmon fillets",
      "3 tbsp honey",
      "3 cloves garlic, minced",
      "2 tbsp soy sauce",
      "1 tbsp olive oil",
      "1 tbsp lemon juice",
      "1 tsp ginger, grated",
      "Green onions for garnish"
    ],
    instructions: [
      "Preheat oven to 425°F (220°C)",
      "Mix honey, garlic, soy sauce, lemon juice, and ginger",
      "Place salmon on lined baking sheet",
      "Brush salmon with half of the honey mixture",
      "Bake for 12-15 minutes until fish flakes easily",
      "Heat remaining sauce in a small pan until thickened",
      "Drizzle cooked salmon with reduced sauce",
      "Garnish with chopped green onions"
    ],
    tags: ["fish", "healthy", "quick"]
  },
  {
    id: 5,
    title: "Mushroom Risotto",
    description: "Creamy Italian rice dish with mixed mushrooms and parmesan",
    cookingTime: 40,
    difficulty: "Medium",
    servings: "4",
    calories: 290,
    image: "🍚",
    ingredients: [
      "1 1/2 cups arborio rice",
      "4 cups chicken or vegetable broth",
      "2 cups mixed mushrooms, sliced",
      "1/2 cup white wine",
      "1/2 cup parmesan cheese",
      "1 onion, diced",
      "3 tbsp butter",
      "2 tbsp olive oil",
      "Fresh herbs for garnish"
    ],
    instructions: [
      "Heat broth in a separate pot and keep warm",
      "Sauté mushrooms in olive oil until golden, set aside",
      "In same pan, cook onion in butter until soft",
      "Add rice and stir for 2 minutes until translucent",
      "Pour in wine and stir until absorbed",
      "Add warm broth one ladle at a time, stirring constantly",
      "Continue for 20 minutes until rice is creamy",
      "Stir in mushrooms and parmesan, garnish with herbs"
    ],
    tags: ["vegetarian", "italian", "rice"]
  },
  {
    id: 6,
    title: "Chocolate Chip Cookies",
    description: "Classic soft and chewy chocolate chip cookies, perfect for dessert",
    cookingTime: 15,
    difficulty: "Easy",
    servings: "24",
    calories: 180,
    image: "🍪",
    ingredients: [
      "2 1/4 cups all-purpose flour",
      "1 cup butter, softened",
      "3/4 cup brown sugar",
      "1/2 cup granulated sugar",
      "2 large eggs",
      "2 tsp vanilla extract",
      "1 tsp baking soda",
      "1 tsp salt",
      "2 cups chocolate chips"
    ],
    instructions: [
      "Preheat oven to 375°F (190°C)",
      "Mix butter with both sugars until fluffy",
      "Beat in eggs and vanilla extract",
      "Combine flour, baking soda, and salt in separate bowl",
      "Gradually mix dry ingredients into wet mixture",
      "Stir in chocolate chips until evenly distributed",
      "Drop rounded tablespoons onto ungreased cookie sheets",
      "Bake 9-11 minutes until golden brown, cool on sheets"
    ],
    tags: ["dessert", "cookies", "baking"]
  },
  {
    id: 7,
    title: "Thai Green Curry",
    description: "Aromatic coconut curry with vegetables and fragrant herbs",
    cookingTime: 30,
    difficulty: "Medium",
    servings: "4",
    calories: 320,
    image: "🍛",
    ingredients: [
      "2 tbsp green curry paste",
      "1 can coconut milk",
      "1 chicken breast, sliced",
      "1 eggplant, cubed",
      "1 bell pepper, sliced",
      "1 tbsp fish sauce",
      "1 tbsp brown sugar",
      "Thai basil leaves",
      "Jasmine rice for serving"
    ],
    instructions: [
      "Heat coconut cream in a wok until oil separates",
      "Add curry paste and fry until fragrant",
      "Add chicken and cook until sealed",
      "Pour in remaining coconut milk",
      "Add vegetables and simmer until tender",
      "Season with fish sauce and sugar",
      "Stir in Thai basil leaves",
      "Serve over jasmine rice"
    ],
    tags: ["thai", "curry", "spicy"]
  },
  {
    id: 8,
    title: "Mediterranean Quinoa Salad",
    description: "Fresh and healthy salad with quinoa, olives, and feta cheese",
    cookingTime: 20,
    difficulty: "Easy",
    servings: "4",
    calories: 280,
    image: "🥗",
    ingredients: [
      "1 cup quinoa",
      "1 cucumber, diced",
      "1 cup cherry tomatoes, halved",
      "1/2 red onion, sliced",
      "1/2 cup kalamata olives",
      "1/2 cup feta cheese, crumbled",
      "1/4 cup olive oil",
      "2 tbsp lemon juice",
      "Fresh herbs (parsley, mint)"
    ],
    instructions: [
      "Cook quinoa according to package instructions and cool",
      "Dice cucumber and halve cherry tomatoes",
      "Slice red onion thinly",
      "Combine quinoa with vegetables and olives",
      "Whisk olive oil with lemon juice",
      "Toss salad with dressing",
      "Top with crumbled feta and fresh herbs",
      "Chill before serving for best flavor"
    ],
    tags: ["vegetarian", "mediterranean", "healthy", "salad"]
  }
];

// Global variables
let filteredRecipes = [...recipes];
let ingredientTags = [];
let currentSection = 'home';
let isVoiceRecording = false;

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    displayFeaturedRecipes();
    displayAllRecipes();
    showSection('home'); // Start with home section
}

function setupEventListeners() {
    // Navigation buttons
    document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = e.target.getAttribute('data-section');
            if (section) {
                showSection(section);
            }
        });
    });

    // See All Recipes / Browse Recipes buttons
    document.querySelectorAll('[data-section="recipes"]').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            showSection('recipes');
        });
    });

    // Recipe cards
    document.addEventListener('click', (e) => {
        const recipeCard = e.target.closest('.recipe-card');
        if (recipeCard) {
            e.preventDefault();
            const recipeId = parseInt(recipeCard.getAttribute('data-recipe-id'));
            if (recipeId) {
                openRecipeModal(recipeId);
            }
        }
    });
    
    // Modal close button and backdrop
    const modalClose = document.getElementById('modal-close');
    const modalBackdrop = document.querySelector('.modal__backdrop');
    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

    // Search and filters
    const searchInput = document.getElementById('recipe-search');
    const sortSelect = document.getElementById('sort-select');
    const dietaryFilter = document.getElementById('dietary-filter');
    
    if (searchInput) searchInput.addEventListener('input', debounce(filterRecipes, 300));
    if (sortSelect) sortSelect.addEventListener('change', sortRecipes);
    if (dietaryFilter) dietaryFilter.addEventListener('change', filterRecipes);

    // File upload
    const fileInput = document.getElementById('file-input');
    const fileUploadArea = document.querySelector('.file-upload__area');
    
    if (fileUploadArea && fileInput) {
        fileUploadArea.addEventListener('click', () => fileInput.click());
        fileUploadArea.addEventListener('dragover', handleDragOver);
        fileUploadArea.addEventListener('drop', handleDrop);
        fileInput.addEventListener('change', handleFileUpload);
    }

    // Camera and Voice buttons
    const cameraBtn = document.getElementById('camera-btn');
    const voiceBtn = document.getElementById('voice-btn');
    
    if (cameraBtn) cameraBtn.addEventListener('click', handleCameraCapture);
    if (voiceBtn) voiceBtn.addEventListener('click', handleVoiceInput);

    // Text input for ingredients
    const ingredientTextInput = document.getElementById('ingredient-text');
    if (ingredientTextInput) {
        ingredientTextInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && e.target.value.trim()) {
                addIngredientTag(e.target.value.trim());
                e.target.value = '';
            }
        });
    }

    // Advanced options toggle
    const advancedToggle = document.getElementById('advanced-toggle');
    if (advancedToggle) {
        advancedToggle.addEventListener('click', toggleAdvancedOptions);
    }

    // Start Cooking button
    const startCookingBtns = document.querySelectorAll('[onclick="scrollToIngredientInput()"]');
    startCookingBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            scrollToIngredientInput();
        });
    });

    // Handle escape key for modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const modal = document.getElementById('recipe-modal');
            if (modal && !modal.classList.contains('hidden')) {
                closeModal();
            }
        }
    });

    // Global smooth scroll function
    window.scrollToIngredientInput = function() {
        const ingredientSection = document.getElementById('ingredient-input');
        if (ingredientSection) {
            ingredientSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
}

// Navigation - Fixed to properly hide/show sections
function showSection(sectionName) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('section--active');
    });

    // Show selected section
    const targetSection = document.getElementById(`${sectionName}-section`);
    if (targetSection) {
        targetSection.classList.add('section--active');
    }

    // Update nav links
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.classList.remove('nav__link--active');
        if (link.getAttribute('data-section') === sectionName) {
            link.classList.add('nav__link--active');
        }
    });

    currentSection = sectionName;
    
    // Scroll to top when changing sections
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Recipe display - Show only 3 on home, all on recipes page
function displayFeaturedRecipes() {
    const featuredRecipes = recipes.slice(0, 3); // Only show first 3 recipes
    const featuredRecipesContainer = document.getElementById('featured-recipes');
    if (featuredRecipesContainer) {
        featuredRecipesContainer.innerHTML = featuredRecipes.map(recipe => createRecipeCard(recipe)).join('');
    }
}

function displayAllRecipes() {
    const allRecipesContainer = document.getElementById('all-recipes');
    if (!allRecipesContainer) return;
    
    if (filteredRecipes.length === 0) {
        allRecipesContainer.innerHTML = `
            <div style="text-align: center; padding: 3rem; grid-column: 1 / -1;">
                <span style="font-size: 3rem; color: var(--orange-primary); opacity: 0.5; margin-bottom: 1rem; display: block;">🔍</span>
                <h3 style="color: var(--orange-dark); margin-bottom: 1rem;">No recipes found</h3>
                <p style="color: rgba(45, 45, 45, 0.6);">Try adjusting your search or filter criteria</p>
            </div>
        `;
        return;
    }

    allRecipesContainer.innerHTML = filteredRecipes.map(recipe => createRecipeCard(recipe)).join('');
}

function createRecipeCard(recipe) {
    return `
        <div class="recipe-card" data-recipe-id="${recipe.id}">
            <div class="recipe-card__image">
                ${recipe.image}
            </div>
            <div class="recipe-card__content">
                <h3 class="recipe-card__title">${recipe.title}</h3>
                <p class="recipe-card__description">${recipe.description}</p>
                <div class="recipe-card__meta">
                    <div class="recipe-meta__item">
                        <span class="meta-icon">⏰</span>
                        ${recipe.cookingTime} min
                    </div>
                    <div class="recipe-meta__item">
                        <span class="meta-icon">📶</span>
                        ${recipe.difficulty}
                    </div>
                    <div class="recipe-meta__item">
                        <span class="meta-icon">🔥</span>
                        ${recipe.calories} cal
                    </div>
                </div>
                <div class="recipe-card__tags">
                    ${recipe.tags.slice(0, 2).map(tag => `<span class="recipe-tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
}

// Recipe modal
function openRecipeModal(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) return;

    const modal = document.getElementById('recipe-modal');
    if (!modal) return;

    // Populate modal content
    const elements = {
        'modal-title': recipe.title,
        'modal-emoji': recipe.image,
        'modal-time': `${recipe.cookingTime} mins`,
        'modal-difficulty': recipe.difficulty,
        'modal-servings': `${recipe.servings} servings`,
        'modal-calories': `${recipe.calories} cal`,
        'modal-description': recipe.description
    };

    Object.entries(elements).forEach(([id, content]) => {
        const element = document.getElementById(id);
        if (element) element.textContent = content;
    });

    // Populate ingredients
    const ingredientsList = document.getElementById('modal-ingredients');
    if (ingredientsList) {
        ingredientsList.innerHTML = recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('');
    }

    // Populate instructions
    const instructionsList = document.getElementById('modal-instructions');
    if (instructionsList) {
        instructionsList.innerHTML = recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('');
    }

    // Show modal
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('recipe-modal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

// Search and filter functionality
function filterRecipes() {
    let filtered = [...recipes];
    const searchInput = document.getElementById('recipe-search');
    const dietaryFilter = document.getElementById('dietary-filter');
    
    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const dietaryValue = dietaryFilter ? dietaryFilter.value : '';

    // Filter by search term
    if (searchTerm) {
        filtered = filtered.filter(recipe => 
            recipe.title.toLowerCase().includes(searchTerm) ||
            recipe.description.toLowerCase().includes(searchTerm) ||
            recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
    }

    // Filter by dietary preference
    if (dietaryValue) {
        filtered = filtered.filter(recipe => 
            recipe.tags.includes(dietaryValue)
        );
    }

    filteredRecipes = filtered;
    displayAllRecipes();
}

function sortRecipes() {
    const sortSelect = document.getElementById('sort-select');
    const sortValue = sortSelect ? sortSelect.value : '';
    
    switch (sortValue) {
        case 'time-asc':
            filteredRecipes.sort((a, b) => a.cookingTime - b.cookingTime);
            break;
        case 'time-desc':
            filteredRecipes.sort((a, b) => b.cookingTime - a.cookingTime);
            break;
        case 'calories-asc':
            filteredRecipes.sort((a, b) => a.calories - b.calories);
            break;
        case 'calories-desc':
            filteredRecipes.sort((a, b) => b.calories - a.calories);
            break;
        case 'difficulty':
            const difficultyOrder = { 'Easy': 1, 'Medium': 2, 'Hard': 3 };
            filteredRecipes.sort((a, b) => difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]);
            break;
        default:
            // No sorting
            break;
    }

    displayAllRecipes();
}

// File upload handling
function handleDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    const fileUploadArea = document.querySelector('.file-upload__area');
    if (fileUploadArea) {
        fileUploadArea.style.borderColor = 'var(--orange-accent)';
        fileUploadArea.style.background = 'rgba(255, 149, 0, 0.1)';
    }
}

function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
        processImageFile(files[0]);
    }
    
    // Reset styles
    const fileUploadArea = document.querySelector('.file-upload__area');
    if (fileUploadArea) {
        fileUploadArea.style.borderColor = 'var(--orange-primary)';
        fileUploadArea.style.background = 'rgba(255, 149, 0, 0.05)';
    }
}

function handleFileUpload(e) {
    const file = e.target.files[0];
    if (file) {
        processImageFile(file);
    }
}

function processImageFile(file) {
    if (!file.type.startsWith('image/')) {
        showNotification('Please select an image file', 'error');
        return;
    }

    // Simulate AI processing
    showNotification('Analyzing image for ingredients...', 'info');
    
    setTimeout(() => {
        // Simulate detected ingredients
        const detectedIngredients = ['tomatoes', 'basil', 'garlic', 'cheese'];
        detectedIngredients.forEach(ingredient => addIngredientTag(ingredient));
        showNotification('Ingredients detected successfully!', 'success');
    }, 2000);
}

// Camera capture
function handleCameraCapture() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        showNotification('Camera feature would open here in a real app', 'info');
        
        setTimeout(() => {
            const mockIngredients = ['chicken', 'vegetables', 'rice'];
            mockIngredients.forEach(ingredient => addIngredientTag(ingredient));
            showNotification('Photo captured and processed!', 'success');
        }, 1500);
    } else {
        showNotification('Camera not available on this device', 'error');
    }
}

// Voice input
function handleVoiceInput() {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        showNotification('Voice recognition not supported in this browser', 'error');
        return;
    }

    if (isVoiceRecording) {
        stopVoiceRecording();
        return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
        isVoiceRecording = true;
        const voiceBtn = document.getElementById('voice-btn');
        const voiceBtnText = document.getElementById('voice-btn-text');
        if (voiceBtn) voiceBtn.classList.add('recording');
        if (voiceBtnText) voiceBtnText.textContent = 'Listening...';
        showNotification('Speak your ingredients now', 'info');
    };

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript.toLowerCase();
        const ingredients = transcript.split(/[,\s]+/).filter(word => word.length > 2);
        
        ingredients.forEach(ingredient => {
            if (ingredient.trim()) {
                addIngredientTag(ingredient.trim());
            }
        });
        
        showNotification('Voice input processed successfully!', 'success');
    };

    recognition.onerror = (event) => {
        showNotification('Voice recognition error: ' + event.error, 'error');
    };

    recognition.onend = () => {
        stopVoiceRecording();
    };

    recognition.start();
}

function stopVoiceRecording() {
    isVoiceRecording = false;
    const voiceBtn = document.getElementById('voice-btn');
    const voiceBtnText = document.getElementById('voice-btn-text');
    if (voiceBtn) voiceBtn.classList.remove('recording');
    if (voiceBtnText) voiceBtnText.textContent = 'Start Speaking';
}

// Ingredient tags
function addIngredientTag(ingredient) {
    if (!ingredientTags.includes(ingredient.toLowerCase())) {
        ingredientTags.push(ingredient.toLowerCase());
        renderIngredientTags();
    }
}

function removeIngredientTag(ingredient) {
    const index = ingredientTags.indexOf(ingredient.toLowerCase());
    if (index > -1) {
        ingredientTags.splice(index, 1);
        renderIngredientTags();
    }
}

function renderIngredientTags() {
    const ingredientTagsContainer = document.getElementById('ingredient-tags');
    if (ingredientTagsContainer) {
        ingredientTagsContainer.innerHTML = ingredientTags.map(ingredient => `
            <div class="ingredient-tag">
                <span>${ingredient}</span>
                <button class="ingredient-tag__remove" onclick="removeIngredientTag('${ingredient}')">
                    ✖️
                </button>
            </div>
        `).join('');
    }
}

// Advanced options
function toggleAdvancedOptions() {
    const advancedContent = document.getElementById('advanced-content');
    const advancedToggle = document.getElementById('advanced-toggle');
    
    if (advancedContent && advancedToggle) {
        const isActive = advancedContent.classList.contains('active');
        
        if (isActive) {
            advancedContent.classList.remove('active');
            advancedToggle.classList.remove('active');
        } else {
            advancedContent.classList.add('active');
            advancedToggle.classList.add('active');
        }
    }
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());

    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    
    const icon = getNotificationIcon(type);
    notification.innerHTML = `
        <div class="notification__content">
            <span>${icon}</span>
            <span>${message}</span>
        </div>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: white;
        border: 1px solid var(--orange-primary);
        border-radius: 12px;
        padding: 1rem 1.5rem;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        z-index: 1001;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 350px;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    `;

    // Add to document
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Auto remove
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

function getNotificationIcon(type) {
    switch (type) {
        case 'success': return '✅';
        case 'error': return '❌';
        case 'warning': return '⚠️';
        default: return 'ℹ️';
    }
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Global smooth scroll function for hero button
function scrollToIngredientInput() {
    const ingredientSection = document.getElementById('ingredient-input');
    if (ingredientSection) {
        ingredientSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Make functions globally available
window.removeIngredientTag = removeIngredientTag;