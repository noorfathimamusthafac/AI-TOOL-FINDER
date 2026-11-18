/**
 * AI Tool Finder - Core Engine
 * Standard Modern Dashboard (No Emojis, Standard SVG Icons, Vibrant Palette, Simple Free/Paid Tiers)
 */

// Storage Keys
const THEME_STORAGE_KEY = 'ai_tool_finder_theme';
const FAVORITES_STORAGE_KEY = 'ai_tool_finder_favorites';

// Full Curated AI Tools Dataset (Simple Free and Paid Tiers)
const DEFAULT_TOOLS = [
  {
    "id": "chatgpt",
    "name": "ChatGPT",
    "category": "AI Chatbots",
    "pricing": "Free",
    "description": "Conversational AI by OpenAI for advanced dialogue, reasoning, writing, coding assistance, and creative ideation.",
    "website": "https://chatgpt.com",
    "featured": true,
    "tags": ["Conversation", "Assistant", "Reasoning"]
  },
  {
    "id": "claude",
    "name": "Claude",
    "category": "AI Chatbots",
    "pricing": "Free",
    "description": "Next-generation AI assistant by Anthropic known for deep reasoning, nuance, large context windows, and code analysis.",
    "website": "https://claude.ai",
    "featured": true,
    "tags": ["Reasoning", "Analysis", "Writing"]
  },
  {
    "id": "gemini",
    "name": "Gemini",
    "category": "AI Chatbots",
    "pricing": "Free",
    "description": "Google's multimodal flagship AI designed to reason seamlessly across text, code, audio, images, and video.",
    "website": "https://gemini.google.com",
    "featured": true,
    "tags": ["Multimodal", "Google", "Research"]
  },
  {
    "id": "perplexity",
    "name": "Perplexity",
    "category": "Research",
    "pricing": "Free",
    "description": "Conversational search and discovery engine delivering structured answers with verified web citations and sources.",
    "website": "https://www.perplexity.ai",
    "featured": true,
    "tags": ["Search", "Citations", "Fact-Checking"]
  },
  {
    "id": "canva-ai",
    "name": "Canva Magic Studio",
    "category": "Image Generation",
    "pricing": "Free",
    "description": "Creative visual suite with generative AI for image synthesis, presentation design, background removal, and editing.",
    "website": "https://www.canva.com",
    "featured": true,
    "tags": ["Design", "Graphics", "Marketing"]
  },
  {
    "id": "notion-ai",
    "name": "Notion AI",
    "category": "Productivity",
    "pricing": "Paid",
    "description": "Integrated connected workspace AI for document drafting, meeting summary extraction, and workspace Q&A.",
    "website": "https://www.notion.so/product/ai",
    "featured": false,
    "tags": ["Workspace", "Notes", "Summarization"]
  },
  {
    "id": "github-copilot",
    "name": "GitHub Copilot",
    "category": "Coding",
    "pricing": "Paid",
    "description": "AI pair programmer providing context-aware code autocomplete, unit test generation, and CLI terminal assistance.",
    "website": "https://github.com/features/copilot",
    "featured": true,
    "tags": ["Autocomplete", "Development", "Debugging"]
  },
  {
    "id": "cursor",
    "name": "Cursor",
    "category": "Coding",
    "pricing": "Free",
    "description": "AI-first code editor with codebase-wide indexing, natural language editing, multi-file refactoring, and terminal AI.",
    "website": "https://www.cursor.com",
    "featured": true,
    "tags": ["IDE", "Multi-file", "Refactor"]
  },
  {
    "id": "v0",
    "name": "v0 by Vercel",
    "category": "Coding",
    "pricing": "Free",
    "description": "Generative UI system by Vercel that turns natural language prompts into production-ready React, Tailwind, and Next.js code.",
    "website": "https://v0.dev",
    "featured": true,
    "tags": ["React", "UI Components", "Tailwind"]
  },
  {
    "id": "runway",
    "name": "Runway Gen-3",
    "category": "Video Generation",
    "pricing": "Free",
    "description": "Generative video and creative suite supporting text-to-video, image-to-video, camera motion controls, and VFX tools.",
    "website": "https://runwayml.com",
    "featured": true,
    "tags": ["Video Synthesis", "Motion", "VFX"]
  },
  {
    "id": "sora",
    "name": "Sora",
    "category": "Video Generation",
    "pricing": "Paid",
    "description": "OpenAI's high-definition video model capable of generating complex scenes with realistic physics, characters, and motion.",
    "website": "https://openai.com/sora",
    "featured": true,
    "tags": ["Photorealism", "High-Definition", "OpenAI"]
  },
  {
    "id": "midjourney",
    "name": "Midjourney",
    "category": "Image Generation",
    "pricing": "Paid",
    "description": "Premier generative AI art lab known for artistic depth, photorealistic textures, lighting nuance, and stylistic control.",
    "website": "https://www.midjourney.com",
    "featured": true,
    "tags": ["Art", "Photorealism", "Creative"]
  },
  {
    "id": "stable-diffusion",
    "name": "Stable Diffusion",
    "category": "Image Generation",
    "pricing": "Free",
    "description": "Open-weight foundational image generation model ecosystem supporting customizable fine-tunes, LoRAs, and local runs.",
    "website": "https://stability.ai",
    "featured": false,
    "tags": ["Open Source", "Local AI", "Customizable"]
  },
  {
    "id": "grammarly",
    "name": "Grammarly",
    "category": "Writing",
    "pricing": "Free",
    "description": "AI writing companion providing grammar correction, tone adjustment, conciseness feedback, and contextual rewrite recommendations.",
    "website": "https://www.grammarly.com",
    "featured": false,
    "tags": ["Grammar", "Clarity", "Tone"]
  },
  {
    "id": "jasper",
    "name": "Jasper AI",
    "category": "Writing",
    "pricing": "Paid",
    "description": "Enterprise marketing AI platform that generates brand-aligned blog posts, social campaigns, ads, and SEO content.",
    "website": "https://www.jasper.ai",
    "featured": false,
    "tags": ["Marketing", "Copywriting", "SEO"]
  },
  {
    "id": "elevenlabs",
    "name": "ElevenLabs",
    "category": "Productivity",
    "pricing": "Free",
    "description": "Realistic voice synthesis, voice cloning, multilingual speech translation, and sound effects generation platform.",
    "website": "https://elevenlabs.io",
    "featured": true,
    "tags": ["Voice", "Text-to-Speech", "Audio"]
  },
  {
    "id": "suno",
    "name": "Suno",
    "category": "Productivity",
    "pricing": "Free",
    "description": "Generative audio platform creating full-fidelity musical tracks with lyrics, vocals, and instruments from text prompts.",
    "website": "https://suno.com",
    "featured": false,
    "tags": ["Music", "Vocals", "Composition"]
  },
  {
    "id": "otter-ai",
    "name": "Otter.ai",
    "category": "Productivity",
    "pricing": "Free",
    "description": "Automated meeting assistant that joins calls, transcribes conversations in real-time, and extracts key action items.",
    "website": "https://otter.ai",
    "featured": false,
    "tags": ["Transcription", "Meetings", "Action Items"]
  },
  {
    "id": "descript",
    "name": "Descript",
    "category": "Productivity",
    "pricing": "Free",
    "description": "All-in-one video and podcast editor where you edit audio and video as easily as editing a text transcript.",
    "website": "https://www.descript.com",
    "featured": false,
    "tags": ["Podcast", "Video Editing", "Transcription"]
  },
  {
    "id": "deepl",
    "name": "DeepL",
    "category": "Writing",
    "pricing": "Free",
    "description": "High-accuracy neural machine translation and writing refinement tool supporting dozens of global languages.",
    "website": "https://www.deepl.com",
    "featured": false,
    "tags": ["Translation", "Languages", "Precision"]
  },
  {
    "id": "replit-agent",
    "name": "Replit Agent",
    "category": "Coding",
    "pricing": "Paid",
    "description": "Autonomous coding agent that builds, configures, and deploys full-stack software applications from natural language prompts.",
    "website": "https://replit.com",
    "featured": true,
    "tags": ["Full-stack", "Deployment", "Autonomous"]
  },
  {
    "id": "bolt-new",
    "name": "Bolt.new",
    "category": "Coding",
    "pricing": "Free",
    "description": "In-browser development sandbox powered by WebContainers that prompts, executes, and deploys full-stack web applications.",
    "website": "https://bolt.new",
    "featured": true,
    "tags": ["WebContainers", "Full-Stack", "Instant Preview"]
  },
  {
    "id": "lovable",
    "name": "Lovable",
    "category": "Coding",
    "pricing": "Free",
    "description": "Full-stack AI software engineer that creates complete web applications with backend, auth, and database integration.",
    "website": "https://lovable.dev",
    "featured": false,
    "tags": ["App Builder", "Full-Stack", "Fast"]
  },
  {
    "id": "consensus",
    "name": "Consensus",
    "category": "Research",
    "pricing": "Free",
    "description": "Academic search engine using AI to extract verified findings, consensus summaries, and citations from peer-reviewed papers.",
    "website": "https://consensus.app",
    "featured": false,
    "tags": ["Academic", "Science", "Peer-Reviewed"]
  }
];

// App State
const state = {
  tools: [],
  searchQuery: '',
  selectedCategory: 'All',
  selectedPricing: 'All',
  showFeaturedOnly: false,
  showFavoritesOnly: false,
  favorites: new Set()
};

// DOM References
const dom = {
  themeToggleBtn: document.getElementById('theme-toggle'),
  themeIconSun: document.getElementById('theme-icon-sun'),
  themeIconMoon: document.getElementById('theme-icon-moon'),
  themeText: document.getElementById('theme-text'),
  searchInput: document.getElementById('search-input'),
  clearSearchBtn: document.getElementById('clear-search-btn'),
  categoryPills: document.getElementById('category-pills'),
  pricingFilter: document.getElementById('pricing-filter'),
  toggleFeaturedBtn: document.getElementById('toggle-featured-btn'),
  viewFavoritesBtn: document.getElementById('view-favorites-btn'),
  headerFavBadge: document.getElementById('header-fav-badge'),
  toolsGrid: document.getElementById('tools-grid'),
  emptyState: document.getElementById('empty-state'),
  resultsCountText: document.getElementById('results-count-text'),
  resetFiltersBtn: document.getElementById('reset-filters-btn'),
  emptyResetBtn: document.getElementById('empty-reset-btn'),
  brandLink: document.getElementById('brand-link')
};

/* ==========================================================================
   Theme Management (Clean SVG Icons)
   ========================================================================== */
function initTheme() {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

  applyTheme(initialTheme);

  dom.themeToggleBtn?.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem(THEME_STORAGE_KEY, next);
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const isDark = theme === 'dark';

  dom.themeIconSun?.classList.toggle('hidden', !isDark);
  dom.themeIconMoon?.classList.toggle('hidden', isDark);

  if (dom.themeText) {
    dom.themeText.textContent = isDark ? 'Light' : 'Dark';
  }
}

/* ==========================================================================
   Favorites Management (Standard LocalStorage)
   ========================================================================== */
function loadFavorites() {
  try {
    const stored = localStorage.getItem(FAVORITES_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      state.favorites = new Set(Array.isArray(parsed) ? parsed : []);
    }
  } catch (err) {
    state.favorites = new Set();
  }
  updateFavoritesBadge();
}

function saveFavorites() {
  try {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(Array.from(state.favorites)));
  } catch (err) {
    console.warn('Failed to save favorites to LocalStorage:', err);
  }
  updateFavoritesBadge();
}

function toggleFavorite(toolId) {
  if (state.favorites.has(toolId)) {
    state.favorites.delete(toolId);
  } else {
    state.favorites.add(toolId);
  }
  saveFavorites();
  renderTools();
}

function updateFavoritesBadge() {
  const count = state.favorites.size;
  if (dom.headerFavBadge) {
    dom.headerFavBadge.textContent = count;
  }
}

/* ==========================================================================
   Data Ingestion & Loading
   ========================================================================== */
async function loadToolsData() {
  try {
    const response = await fetch('data/tools.json?v=3');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    if (Array.isArray(data) && data.length > 0) {
      state.tools = data;
    } else {
      state.tools = DEFAULT_TOOLS;
    }
  } catch (err) {
    state.tools = DEFAULT_TOOLS;
  }
  renderTools();
}

/* ==========================================================================
   Filtering & Search Pipeline
   ========================================================================== */
function getFilteredTools() {
  const query = state.searchQuery.trim().toLowerCase();

  return state.tools.filter(tool => {
    // 1. Text Search
    if (query) {
      const nameMatch = tool.name.toLowerCase().includes(query);
      const descMatch = tool.description.toLowerCase().includes(query);
      const catMatch = tool.category.toLowerCase().includes(query);
      const tagMatch = tool.tags?.some(tag => tag.toLowerCase().includes(query));

      if (!nameMatch && !descMatch && !catMatch && !tagMatch) {
        return false;
      }
    }

    // 2. Category Filter
    if (state.selectedCategory !== 'All' && tool.category !== state.selectedCategory) {
      return false;
    }

    // 3. Pricing Filter (Simple Free / Paid)
    if (state.selectedPricing !== 'All' && tool.pricing !== state.selectedPricing) {
      return false;
    }

    // 4. Featured Only Filter
    if (state.showFeaturedOnly && !tool.featured) {
      return false;
    }

    // 5. Favorites Only Filter
    if (state.showFavoritesOnly && !state.favorites.has(tool.id)) {
      return false;
    }

    return true;
  });
}

/* ==========================================================================
   Helper Utilities (Monogram & Badges)
   ========================================================================== */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function highlightMatches(text, query) {
  const safeText = escapeHtml(text);
  if (!query) return safeText;
  const safeQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${safeQuery})`, 'gi');
  return safeText.replace(regex, '<mark class="search-highlight">$1</mark>');
}

function getInitials(name) {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

function getCategoryTagClass(category) {
  switch (category.toLowerCase()) {
    case 'ai chatbots': return 'tag-chatbots';
    case 'coding': return 'tag-coding';
    case 'writing': return 'tag-writing';
    case 'research': return 'tag-research';
    case 'image generation': return 'tag-image';
    case 'video generation': return 'tag-video';
    case 'productivity': return 'tag-productivity';
    default: return 'tag-default';
  }
}

function getPricingBadgeClass(pricing) {
  return pricing.toLowerCase() === 'paid' ? 'pricing-paid' : 'pricing-free';
}

/* ==========================================================================
   Rendering View
   ========================================================================== */
function renderTools() {
  const filtered = getFilteredTools();
  const total = state.tools.length;

  // Status text update
  let statusText = `Showing ${filtered.length} of ${total} tools`;
  if (state.searchQuery.trim()) {
    statusText = `Found ${filtered.length} ${filtered.length === 1 ? 'tool' : 'tools'} matching "${escapeHtml(state.searchQuery.trim())}"`;
  } else if (state.showFavoritesOnly) {
    statusText = `Showing ${filtered.length} favorite tools`;
  } else if (state.selectedCategory !== 'All') {
    statusText = `Showing ${filtered.length} tools in ${state.selectedCategory}`;
  }
  if (dom.resultsCountText) {
    dom.resultsCountText.innerHTML = statusText;
  }

  // Active filters reset button visibility
  const hasActiveFilters = Boolean(
    state.searchQuery ||
    state.selectedCategory !== 'All' ||
    state.selectedPricing !== 'All' ||
    state.showFeaturedOnly ||
    state.showFavoritesOnly
  );
  dom.resetFiltersBtn?.classList.toggle('hidden', !hasActiveFilters);

  if (!dom.toolsGrid) return;
  dom.toolsGrid.innerHTML = '';

  // Handle Empty State
  if (filtered.length === 0) {
    dom.emptyState?.classList.remove('hidden');
    dom.toolsGrid.classList.add('hidden');

    const emptyTitle = dom.emptyState?.querySelector('.empty-title');
    const emptyMsg = dom.emptyState?.querySelector('.empty-message');

    if (state.showFavoritesOnly) {
      if (emptyTitle) emptyTitle.textContent = 'No Favorite Tools Saved Yet';
      if (emptyMsg) emptyMsg.textContent = 'Click the bookmark icon on any AI tool card to save it to your favorites.';
    } else {
      if (emptyTitle) emptyTitle.textContent = 'No Tools Found';
      if (emptyMsg) emptyMsg.textContent = 'No results match your active search and filter criteria. Try clearing some filters.';
    }
    return;
  }

  dom.emptyState?.classList.add('hidden');
  dom.toolsGrid.classList.remove('hidden');

  // Render Tool Cards
  const activeQuery = state.searchQuery.trim();

  filtered.forEach(tool => {
    const isFav = state.favorites.has(tool.id);
    const monogram = getInitials(tool.name);
    const tagClass = getCategoryTagClass(tool.category);
    const pricingClass = getPricingBadgeClass(tool.pricing);
    const displayName = highlightMatches(tool.name, activeQuery);
    const displayDesc = highlightMatches(tool.description, activeQuery);

    const card = document.createElement('article');
    card.className = 'tool-card';
    card.setAttribute('data-id', tool.id);

    card.innerHTML = `
      <div class="card-header">
        <div class="card-title-group">
          <div class="tool-monogram" aria-hidden="true">${monogram}</div>
          <div class="tool-name-container">
            <h3 class="tool-name">${displayName}</h3>
            ${
              tool.featured
                ? `<span class="featured-indicator" title="Featured Tool">
                     <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5">
                       <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                     </svg>
                   </span>`
                : ''
            }
          </div>
        </div>
        <button
          class="fav-btn ${isFav ? 'favorited' : ''}"
          aria-label="${isFav ? 'Remove from favorites' : 'Save to favorites'}"
          data-tool-id="${tool.id}"
          title="${isFav ? 'Remove from favorites' : 'Save tool'}"
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
          </svg>
        </button>
      </div>

      <div class="card-badges">
        <span class="category-tag ${tagClass}">${tool.category}</span>
        <span class="pricing-badge ${pricingClass}">${tool.pricing}</span>
      </div>

      <p class="card-description">${displayDesc}</p>

      ${
        tool.tags && tool.tags.length > 0
          ? `<div class="tool-tags">
              ${tool.tags.map(t => `<span class="tool-subtag">#${t}</span>`).join('')}
            </div>`
          : ''
      }

      <div class="card-footer">
        <a
          href="${tool.website}"
          target="_blank"
          rel="noopener noreferrer"
          class="visit-btn"
          aria-label="Visit ${tool.name} official website"
        >
          <span>Visit Platform</span>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </a>
      </div>
    `;

    // Favorite toggle listener
    const favBtn = card.querySelector('.fav-btn');
    favBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFavorite(tool.id);
    });

    dom.toolsGrid.appendChild(card);
  });
}

/* ==========================================================================
   Event Handlers Setup
   ========================================================================== */
function setupEventListeners() {
  // Global Keyboard Shortcut: '/' or 'Ctrl+K' to focus search, 'Escape' to clear
  document.addEventListener('keydown', (e) => {
    const isInputFocused = ['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName);

    if (e.key === '/' && !isInputFocused) {
      e.preventDefault();
      dom.searchInput?.focus();
      dom.searchInput?.select();
    } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      dom.searchInput?.focus();
      dom.searchInput?.select();
    } else if (e.key === 'Escape' && document.activeElement === dom.searchInput) {
      if (state.searchQuery) {
        state.searchQuery = '';
        if (dom.searchInput) dom.searchInput.value = '';
        dom.clearSearchBtn?.classList.add('hidden');
        renderTools();
      }
      dom.searchInput?.blur();
    }
  });

  // 1. Search input
  dom.searchInput?.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    dom.clearSearchBtn?.classList.toggle('hidden', state.searchQuery.length === 0);
    renderTools();
  });

  // Clear search button
  dom.clearSearchBtn?.addEventListener('click', () => {
    state.searchQuery = '';
    if (dom.searchInput) dom.searchInput.value = '';
    dom.clearSearchBtn?.classList.add('hidden');
    dom.searchInput?.focus();
    renderTools();
  });

  // 2. Category pills
  dom.categoryPills?.addEventListener('click', (e) => {
    const target = e.target.closest('.pill');
    if (!target) return;

    dom.categoryPills.querySelectorAll('.pill').forEach(pill => {
      pill.classList.remove('active');
      pill.setAttribute('aria-selected', 'false');
    });
    target.classList.add('active');
    target.setAttribute('aria-selected', 'true');

    state.selectedCategory = target.getAttribute('data-category') || 'All';
    renderTools();
  });

  // 3. Pricing filter
  dom.pricingFilter?.addEventListener('change', (e) => {
    state.selectedPricing = e.target.value;
    renderTools();
  });

  // 4. Featured filter toggle
  dom.toggleFeaturedBtn?.addEventListener('click', () => {
    state.showFeaturedOnly = !state.showFeaturedOnly;
    dom.toggleFeaturedBtn.classList.toggle('active', state.showFeaturedOnly);
    dom.toggleFeaturedBtn.setAttribute('aria-pressed', String(state.showFeaturedOnly));
    renderTools();
  });

  // 5. Favorites view toggle
  dom.viewFavoritesBtn?.addEventListener('click', () => {
    state.showFavoritesOnly = !state.showFavoritesOnly;
    dom.viewFavoritesBtn.classList.toggle('active-filter', state.showFavoritesOnly);
    renderTools();
  });

  // 6. Reset Filters
  const resetAllFilters = () => {
    state.searchQuery = '';
    state.selectedCategory = 'All';
    state.selectedPricing = 'All';
    state.showFeaturedOnly = false;
    state.showFavoritesOnly = false;

    if (dom.searchInput) dom.searchInput.value = '';
    dom.clearSearchBtn?.classList.add('hidden');

    if (dom.pricingFilter) dom.pricingFilter.value = 'All';
    dom.toggleFeaturedBtn?.classList.remove('active');
    dom.toggleFeaturedBtn?.setAttribute('aria-pressed', 'false');

    dom.viewFavoritesBtn?.classList.remove('active-filter');

    dom.categoryPills?.querySelectorAll('.pill').forEach(pill => {
      const isAll = pill.getAttribute('data-category') === 'All';
      pill.classList.toggle('active', isAll);
      pill.setAttribute('aria-selected', String(isAll));
    });

    renderTools();
  };

  dom.resetFiltersBtn?.addEventListener('click', resetAllFilters);
  dom.emptyResetBtn?.addEventListener('click', resetAllFilters);
  dom.brandLink?.addEventListener('click', (e) => {
    e.preventDefault();
    resetAllFilters();
  });
}

/* ==========================================================================
   Initialization
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  loadFavorites();
  setupEventListeners();
  loadToolsData();
  console.log('AI Tool Finder: Clean Free & Paid Dashboard loaded.');
});
