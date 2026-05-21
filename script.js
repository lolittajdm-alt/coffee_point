const categories = [
  {
    id: "beans",
    title: "Зерно",
    kicker: "Для кавомашин та млина",
    description:
      "Цілі зерна з виразним ароматом для тих, хто любить контролювати помел і отримувати максимально свіжий смак у чашці.",
    visual: { label: "Fresh\nBeans", shape: "pack" },
    products: [
      {
        name: "Arabica Gold",
        taste: "Карамель, горіх, м'яка кислинка",
        weight: "1 кг",
        price: "від 640 грн",
        shape: "pack",
      },
      {
        name: "Espresso Bar",
        taste: "Щільне тіло, шоколад і пряний післясмак",
        weight: "1 кг",
        price: "від 590 грн",
        shape: "pack",
      },
      {
        name: "Crema Office",
        taste: "Збалансована суміш для щоденного еспресо",
        weight: "500 г",
        price: "від 360 грн",
        shape: "pack",
      },
      {
        name: "Dark Roast",
        taste: "Глибоке обсмаження з нотами какао",
        weight: "1 кг",
        price: "від 610 грн",
        shape: "pack",
      },
    ],
  },
  {
    id: "ground",
    title: "Молотий",
    kicker: "Готовий помел",
    description:
      "Зручний формат для турки, фільтра або гейзерної кавоварки. Просто відкрийте пачку та приготуйте улюблений напій.",
    visual: { label: "Ground\nCoffee", shape: "pack" },
    products: [
      {
        name: "Classic Ground",
        taste: "Солодка основа, горіх і легка гірчинка",
        weight: "250 г",
        price: "від 180 грн",
        shape: "pack",
      },
      {
        name: "Filter Morning",
        taste: "Чиста чашка з нотами сухофруктів",
        weight: "250 г",
        price: "від 210 грн",
        shape: "pack",
      },
      {
        name: "Turkish Fine",
        taste: "Дрібний помел, насичений аромат",
        weight: "200 г",
        price: "від 165 грн",
        shape: "pack",
      },
      {
        name: "Moka Blend",
        taste: "Для гейзерної кавоварки з шоколадним профілем",
        weight: "250 г",
        price: "від 195 грн",
        shape: "pack",
      },
    ],
  },
  {
    id: "instant",
    title: "Растворимый",
    kicker: "Швидка чашка",
    description:
      "Розчинні кавові напої для моментів, коли потрібен стабільний смак без обладнання та довгого приготування.",
    visual: { label: "Instant\nCup", shape: "cup" },
    products: [
      {
        name: "Instant Classic",
        taste: "М'який кавовий смак без зайвої гіркоти",
        weight: "150 г",
        price: "від 220 грн",
        shape: "cup",
      },
      {
        name: "Choco Coffee",
        taste: "Какао, вершковість і кавовий баланс",
        weight: "200 г",
        price: "від 245 грн",
        shape: "cup",
      },
      {
        name: "Latte Mix",
        taste: "Молочна текстура та делікатна солодкість",
        weight: "180 г",
        price: "від 235 грн",
        shape: "cup",
      },
      {
        name: "Strong Instant",
        taste: "Більш інтенсивний смак для ранкового старту",
        weight: "150 г",
        price: "від 230 грн",
        shape: "cup",
      },
    ],
  },
  {
    id: "sticks",
    title: "Стики",
    kicker: "Порційний формат",
    description:
      "Окремі порції для дороги, офісних кухонь, готелів і переговорних кімнат. Легко рахувати залишки та брати з собою.",
    visual: { label: "Coffee\nStick", shape: "stick" },
    products: [
      {
        name: "3 in 1 Classic",
        taste: "Кава, вершки та цукор в одній порції",
        weight: "20 шт",
        price: "від 150 грн",
        shape: "stick",
      },
      {
        name: "Latte Stick",
        taste: "М'який молочний напій для швидкої паузи",
        weight: "20 шт",
        price: "від 170 грн",
        shape: "stick",
      },
      {
        name: "Cappuccino Stick",
        taste: "Пінка, кава і легкий ванільний акцент",
        weight: "20 шт",
        price: "від 175 грн",
        shape: "stick",
      },
      {
        name: "No Sugar Stick",
        taste: "Збалансований смак без доданого цукру",
        weight: "20 шт",
        price: "від 165 грн",
        shape: "stick",
      },
    ],
  },
];

const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const heroSlides = Array.from(document.querySelectorAll(".hero-slide"));
const heroDots = document.querySelector("[data-hero-dots]");
const tabsContainer = document.querySelector("[data-category-tabs]");
const categoryKicker = document.querySelector("[data-category-kicker]");
const categoryTitle = document.querySelector("[data-category-title]");
const categoryDescription = document.querySelector("[data-category-description]");
const categoryVisual = document.querySelector("[data-category-visual]");
const productCarousel = document.querySelector("[data-product-carousel]");

let heroIndex = 0;
let activeCategoryIndex = 0;
let activeProductIndex = 0;
let heroTimer;

function updateHeader() {
  header.classList.toggle("is-floating", window.scrollY > 20);
}

function closeMenu() {
  document.body.classList.remove("menu-open");
  nav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
}

function renderHeroDots() {
  heroDots.innerHTML = heroSlides
    .map(
      (_, index) =>
        `<button class="hero-dot${index === heroIndex ? " is-active" : ""}" type="button" aria-label="Показати слайд ${index + 1}" data-hero-dot="${index}"></button>`,
    )
    .join("");
}

function setHeroSlide(index) {
  heroIndex = (index + heroSlides.length) % heroSlides.length;
  heroSlides.forEach((slide, slideIndex) => {
    slide.classList.toggle("is-active", slideIndex === heroIndex);
  });
  renderHeroDots();
}

function startHeroAutoplay() {
  window.clearInterval(heroTimer);
  heroTimer = window.setInterval(() => setHeroSlide(heroIndex + 1), 5000);
}

function renderTabs() {
  tabsContainer.innerHTML = categories
    .map(
      (category, index) =>
        `<button class="category-tab" type="button" role="tab" aria-selected="${index === activeCategoryIndex}" data-category-index="${index}">${category.title}</button>`,
    )
    .join("");
}

function productLabel(product) {
  return product.name.split(" ").slice(0, 2).join("\n");
}

function renderProducts(category) {
  productCarousel.innerHTML = category.products
    .map(
      (product, index) => `
        <article class="product-card${index === activeProductIndex ? " is-active" : ""}" tabindex="0" data-product-index="${index}">
          <div class="product-image" data-shape="${product.shape}">${productLabel(product).replace("\n", "<br />")}</div>
          <h4>${product.name}</h4>
          <p>${product.taste}</p>
          <div class="product-meta">
            <span>${product.weight}</span>
            <strong>${product.price}</strong>
          </div>
          <button class="buy-button" type="button">Купити / в кошик</button>
        </article>
      `,
    )
    .join("");
}

function setActiveProduct(index, shouldScroll = true) {
  const products = categories[activeCategoryIndex].products;
  activeProductIndex = (index + products.length) % products.length;

  productCarousel.querySelectorAll(".product-card").forEach((card, cardIndex) => {
    const isActive = cardIndex === activeProductIndex;
    card.classList.toggle("is-active", isActive);
    if (isActive && shouldScroll) {
      card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  });
}

function setCategory(index) {
  activeCategoryIndex = index;
  activeProductIndex = 0;

  const category = categories[activeCategoryIndex];
  categoryKicker.textContent = category.kicker;
  categoryTitle.textContent = category.title;
  categoryDescription.textContent = category.description;
  categoryVisual.innerHTML = category.visual.label.replace("\n", "<br />");
  categoryVisual.dataset.shape = category.visual.shape;

  renderTabs();
  renderProducts(category);
}

document.querySelector("[data-hero-prev]").addEventListener("click", () => {
  setHeroSlide(heroIndex - 1);
  startHeroAutoplay();
});

document.querySelector("[data-hero-next]").addEventListener("click", () => {
  setHeroSlide(heroIndex + 1);
  startHeroAutoplay();
});

heroDots.addEventListener("click", (event) => {
  const dot = event.target.closest("[data-hero-dot]");
  if (!dot) return;
  setHeroSlide(Number(dot.dataset.heroDot));
  startHeroAutoplay();
});

tabsContainer.addEventListener("click", (event) => {
  const tab = event.target.closest("[data-category-index]");
  if (!tab) return;
  setCategory(Number(tab.dataset.categoryIndex));
});

productCarousel.addEventListener("click", (event) => {
  const card = event.target.closest("[data-product-index]");
  if (!card) return;
  setActiveProduct(Number(card.dataset.productIndex));
});

productCarousel.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const card = event.target.closest("[data-product-index]");
  if (!card) return;
  event.preventDefault();
  setActiveProduct(Number(card.dataset.productIndex));
});

document.querySelector("[data-products-prev]").addEventListener("click", () => {
  setActiveProduct(activeProductIndex - 1);
});

document.querySelector("[data-products-next]").addEventListener("click", () => {
  setActiveProduct(activeProductIndex + 1);
});

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  document.body.classList.toggle("menu-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    closeMenu();
  }
});

window.addEventListener("scroll", updateHeader, { passive: true });
window.addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    closeMenu();
  }
});

renderHeroDots();
setHeroSlide(0);
startHeroAutoplay();
setCategory(0);
updateHeader();
