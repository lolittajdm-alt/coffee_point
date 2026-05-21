import { categories } from "../data/products.js";
import heroCoffeeReference from "../assets/hero-coffee-reference.svg";
import "../styles/main.css";

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
const heroReferenceImage = document.querySelector("[data-hero-reference-image]");
const cartToggle = document.querySelector("[data-cart-toggle]");
const cartDrawer = document.querySelector("[data-cart-drawer]");
const cartClose = document.querySelector("[data-cart-close]");
const cartScrim = document.querySelector("[data-cart-scrim]");
const cartCategory = document.querySelector("[data-cart-category]");
const cartProductTitle = document.querySelector("[data-cart-product-title]");
const cartProductDescription = document.querySelector("[data-cart-product-description]");
const cartProductWeight = document.querySelector("[data-cart-product-weight]");
const cartProductPrice = document.querySelector("[data-cart-product-price]");
const cartProductImage = document.querySelector("[data-cart-image]");

if (heroReferenceImage) {
  heroReferenceImage.src = heroCoffeeReference;
}

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

function getActiveProduct() {
  const category = categories[activeCategoryIndex];
  return {
    category,
    product: category.products[activeProductIndex],
  };
}

function renderCartProduct() {
  const { category, product } = getActiveProduct();
  cartCategory.textContent = category.title;
  cartProductTitle.textContent = product.name;
  cartProductDescription.textContent = product.taste;
  cartProductWeight.textContent = product.weight;
  cartProductPrice.textContent = product.price;
  cartProductImage.innerHTML = productLabel(product).replace("\n", "<br />");
  cartProductImage.dataset.shape = product.shape;
}

function openCart() {
  renderCartProduct();
  document.body.classList.add("cart-open");
  cartDrawer.setAttribute("aria-hidden", "false");
  cartToggle.setAttribute("aria-expanded", "true");
}

function closeCart() {
  document.body.classList.remove("cart-open");
  cartDrawer.setAttribute("aria-hidden", "true");
  cartToggle.setAttribute("aria-expanded", "false");
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
  const productIndex = Number(card.dataset.productIndex);
  setActiveProduct(productIndex);
  if (event.target.closest(".buy-button")) {
    openCart();
  }
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

cartToggle.addEventListener("click", () => {
  closeMenu();
  openCart();
});

cartClose.addEventListener("click", closeCart);
cartScrim.addEventListener("click", closeCart);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCart();
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
renderCartProduct();
updateHeader();
