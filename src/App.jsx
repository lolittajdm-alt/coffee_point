import { useEffect, useMemo, useRef, useState } from "react";
import { categories } from "./data/products.js";
import heroPackageOne from "./assets/Gemini_Generated_Image_bd7kqfbd7kqfbd7k.png";
import heroPackageTwo from "./assets/Gemini_Generated_Image_nqg1jjnqg1jjnqg1.png";
import heroPackageThree from "./assets/Gemini_Generated_Image_p9qyqfp9qyqfp9qy.png";
import heroReference from "./assets/hero-coffee-reference.svg";

const heroSlides = [
  {
    id: "reference",
    accent: "#e3a767",
    image: heroReference,
    artClass: "hero-art-image",
    kicker: ["ПАУЗА", "З"],
    highlight: "КАВОЮ",
    repeat: ["КАВА", "КАВА", "КАВА", "КАВА", "КАВА"],
  },
  {
    id: "package-one",
    accent: "#e3a767",
    poster: heroPackageOne,
  },
  {
    id: "package-two",
    accent: "#c28b4f",
    poster: heroPackageTwo,
  },
  {
    id: "package-three",
    accent: "#7b4d37",
    poster: heroPackageThree,
  },
];

function productLabel(product) {
  return product.name.split(" ").slice(0, 2).join("\n");
}

function ProductLabel({ value }) {
  return value.split("\n").map((line, index) => (
    <span key={`${line}-${index}`}>
      {index > 0 && <br />}
      {line}
    </span>
  ));
}

function packSizeClass(product) {
  return product.packSize ? `pack-size-${product.packSize}` : "";
}

function ProductVisual({ product, className }) {
  if (product.image) {
    return (
      <div
        className={`${className} has-pack-image ${packSizeClass(product)}`.trim()}
        data-shape={product.shape}
      >
        <img className="product-pack-image" src={product.image} alt="" />
      </div>
    );
  }

  return (
    <div className={className} data-shape={product.shape}>
      <ProductLabel value={productLabel(product)} />
    </div>
  );
}

function Header({ isFloating, isMenuOpen, isCartOpen, onToggleMenu, onCloseMenu, onOpenCart }) {
  return (
    <header className={`site-header${isFloating ? " is-floating" : ""}`} data-header>
      <a className="hero-logo" href="#top" aria-label="Coffee Point головна" onClick={onCloseMenu}>
        <span className="hero-logo-mark" aria-hidden="true">CP</span>
        <span>Coffee Point</span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-label="Відкрити меню"
        aria-expanded={isMenuOpen}
        onClick={onToggleMenu}
      >
        <span></span>
        <span></span>
      </button>
      <nav className={`main-nav${isMenuOpen ? " is-open" : ""}`} data-nav>
        <a href="#top" onClick={onCloseMenu}>Home</a>
        <a href="#products" onClick={onCloseMenu}>Menu</a>
        <a href="#how-it-works" onClick={onCloseMenu}>Deals</a>
        <a href="#wholesale" onClick={onCloseMenu}>Favourite</a>
        <button
          className="cart-link"
          type="button"
          aria-label="Відкрити кошик"
          aria-expanded={isCartOpen}
          onClick={onOpenCart}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M7 8h12l-1.2 7.2a2 2 0 0 1-2 1.7H9.1a2 2 0 0 1-2-1.7L5.8 5.8H3.6" />
            <path d="M9 8a3 3 0 0 1 6 0" />
            <circle cx="9.5" cy="20" r="1" />
            <circle cx="16.5" cy="20" r="1" />
          </svg>
        </button>
      </nav>
    </header>
  );
}

function HeroArt({ slide }) {
  if (slide.image) {
    return (
      <div className={`hero-art ${slide.artClass}`} aria-hidden="true">
        <img className="hero-reference-image" src={slide.image} alt="" />
        <span className="paper-ring"></span>
        <span className="coffee-wall">COFFEE<br />COFFEE<br />COFFEE</span>
        <span className="coffee-splash"></span>
        <span className="macaron macaron-one"></span>
        <span className="macaron macaron-two"></span>
        <span className="pack pack-large">Coffee<br />Point</span>
        <span className="cup">CP</span>
        <span className="bean bean-1"></span>
        <span className="bean bean-2"></span>
        <span className="bean bean-3"></span>
        <span className="bean bean-4"></span>
        <span className="bean bean-5"></span>
      </div>
    );
  }

  if (slide.id === "office") {
    return (
      <div className={`hero-art ${slide.artClass}`} aria-hidden="true">
        <span className="paper-ring"></span>
        <span className="coffee-wall">COFFEE<br />COFFEE<br />COFFEE</span>
        <span className="coffee-splash"></span>
        <span className="pack pack-large">Office<br />Blend</span>
        <span className="takeaway-cup">HOT</span>
        <span className="bean bean-1"></span>
        <span className="bean bean-2"></span>
        <span className="bean bean-3"></span>
        <span className="bean bean-4"></span>
      </div>
    );
  }

  return (
    <div className={`hero-art ${slide.artClass}`} aria-hidden="true">
      <span className="paper-ring"></span>
      <span className="coffee-wall">COFFEE<br />COFFEE<br />COFFEE</span>
      <span className="coffee-splash"></span>
      <span className="stick stick-one">Latte</span>
      <span className="stick stick-two">Cappuccino</span>
      <span className="stick stick-three">Classic</span>
      <span className="cup">CP</span>
      <span className="bean bean-1"></span>
      <span className="bean bean-2"></span>
      <span className="bean bean-3"></span>
    </div>
  );
}

function Hero({ heroIndex, onHeroChange }) {
  useEffect(() => {
    const timer = window.setInterval(() => onHeroChange((heroIndex + 1) % heroSlides.length), 5000);
    return () => window.clearInterval(timer);
  }, [heroIndex, onHeroChange]);

  return (
    <section className="hero" aria-label="Акції Coffee Point">
      <div className="hero-slider" data-hero-slider>
        {heroSlides.map((slide, index) => (
          <article
            className={`hero-slide${slide.poster ? " hero-slide-poster" : ""}${index === heroIndex ? " is-active" : ""}`}
            data-accent={slide.accent}
            key={slide.id}
          >
            {slide.poster ? (
              <img className="hero-poster-image" src={slide.poster} alt="Coffee Point coffee banner" />
            ) : (
              <>
                <div className="hero-copy hero-copy-reference">
                  <p className="hero-kicker">
                    <span>{slide.kicker[0]}</span>
                    <span>{slide.kicker[1]} <strong>{slide.highlight}</strong></span>
                  </p>
                  <h1 className="coffee-repeat" aria-label="Coffee">
                    {slide.repeat.map((item, repeatIndex) => <span key={`${slide.id}-${repeatIndex}`}>{item}</span>)}
                  </h1>
                </div>
                <HeroArt slide={slide} />
              </>
            )}
          </article>
        ))}
      </div>
      <div className="hero-controls" aria-label="Керування банером">
        <button type="button" aria-label="Попередній слайд" onClick={() => onHeroChange((heroIndex - 1 + heroSlides.length) % heroSlides.length)}>‹</button>
        <div className="hero-dots" data-hero-dots>
          {heroSlides.map((slide, index) => (
            <button
              className={`hero-dot${index === heroIndex ? " is-active" : ""}`}
              type="button"
              aria-label={`Показати слайд ${index + 1}`}
              key={`${slide.id}-dot`}
              onClick={() => onHeroChange(index)}
            ></button>
          ))}
        </div>
        <button type="button" aria-label="Наступний слайд" onClick={() => onHeroChange((heroIndex + 1) % heroSlides.length)}>›</button>
      </div>
    </section>
  );
}

function CategoryTabs({ activeCategoryIndex, onCategoryChange }) {
  return (
    <div className="category-tabs" role="tablist" aria-label="Розділи товарів" data-category-tabs>
      {categories.map((category, index) => (
        <button
          className="category-tab"
          type="button"
          role="tab"
          aria-selected={index === activeCategoryIndex}
          key={category.id}
          onClick={() => onCategoryChange(index)}
        >
          {index === activeCategoryIndex && <span className="tab-bean" aria-hidden="true"></span>}
          {category.title}
        </button>
      ))}
    </div>
  );
}

function CategoryOverview({ category, activeProduct, quantity, onQuantityChange, onOpenCart }) {
  const orbitProduct = activeProduct ?? category.visual;
  const featuredProduct = activeProduct ?? category.products[0];

  return (
    <div className="category-overview category-overview--featured">
      <div className="category-visual" aria-hidden="true">
        <div className="product-orbit">
          <div className="orbit-ring"></div>
          <span className="orbit-label orbit-label--top">Світлий</span>
          <span className="orbit-label orbit-label--left">Молоко</span>
          <span className="orbit-label orbit-label--right">Темний</span>
          {orbitProduct.image ? (
            <div
              className={`orbit-product has-pack-image ${packSizeClass(orbitProduct)}`.trim()}
              data-shape={orbitProduct.shape}
            >
              <img className="product-pack-image" src={orbitProduct.image} alt="" />
            </div>
          ) : (
            <div className="orbit-product" data-shape={category.visual.shape}>
              <ProductLabel value={category.visual.label} />
            </div>
          )}
        </div>
      </div>
      <div className="category-copy category-copy--featured">
        <span className="eyebrow">{category.kicker}</span>
        <h3>{featuredProduct.name}</h3>
        <div className="featured-meta">
          <span className="featured-rating" aria-label="5 зірок">★★★★★</span>
          <span className="featured-price">{featuredProduct.price}</span>
        </div>
        <p>{featuredProduct.taste ?? category.description}</p>
        <p className="featured-weight">{featuredProduct.weight}</p>
        <div className="featured-actions">
          <div className="quantity-control" aria-label="Кількість">
            <button type="button" aria-label="Зменшити" onClick={() => onQuantityChange(Math.max(1, quantity - 1))}>
              −
            </button>
            <span>{quantity}</span>
            <button type="button" aria-label="Збільшити" onClick={() => onQuantityChange(quantity + 1)}>
              +
            </button>
          </div>
          <button className="buy-button buy-button--featured" type="button" onClick={onOpenCart}>
            Додати в кошик
          </button>
        </div>
      </div>
    </div>
  );
}

const POPULAR_PRODUCT_COUNT = 4;

function ProductGrid({ activeCategoryIndex, hoveredProductIndex, onProductHover, onProductChange, onOpenCart }) {
  const category = categories[activeCategoryIndex];
  const popularProducts = category.products.slice(0, POPULAR_PRODUCT_COUNT);
  const rowRef = useRef(null);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(row);
    return () => observer.disconnect();
  }, [activeCategoryIndex, popularProducts]);

  return (
    <div className="product-showcase product-showcase--popular">
      <h2 className="popular-section-title">Наші популярні смаки</h2>
      <div className="product-grid product-grid--popular" data-product-grid aria-live="polite">
        <div
          className="product-grid-row"
          key={`${category.id}-popular`}
          ref={rowRef}
        >
          {popularProducts.map((product, productIndex) => (
            <article
              className={`product-card${productIndex % 2 === 1 ? " product-card--alt-btn" : ""}`}
              data-product-index={productIndex}
              key={`${category.id}-${product.name}-${productIndex}`}
              onMouseEnter={() => onProductHover(productIndex)}
              onMouseLeave={() => onProductHover(null)}
              onFocus={() => onProductHover(productIndex)}
              onBlur={() => onProductHover(null)}
            >
              <div className="product-card-top">
                <span className="product-flavor-tag">{category.title}</span>
                <ProductVisual product={product} className="product-image" />
              </div>
              <div className="product-card-bottom">
                <div className="product-card-copy">
                  <h4>{product.name}</h4>
                  <p>{product.taste}</p>
                  <span className="product-card-meta">{product.price}</span>
                </div>
                <button
                  className="buy-button buy-button--card"
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    onProductChange(productIndex);
                    onOpenCart();
                  }}
                >
                  Купити
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="popular-pagination" aria-hidden="true">
        <span className="popular-dot is-active"></span>
        <span className="popular-dot"></span>
        <span className="popular-dot"></span>
      </div>
    </div>
  );
}

function Categories({
  activeCategoryIndex,
  activeProductIndex,
  hoveredProductIndex,
  featuredQuantity,
  onFeaturedQuantityChange,
  onCategoryChange,
  onProductHover,
  onProductChange,
  onOpenCart,
}) {
  const category = categories[activeCategoryIndex];
  const overviewProduct =
    hoveredProductIndex != null ? category.products[hoveredProductIndex] : null;

  function handleFeaturedAdd() {
    if (overviewProduct) {
      const index = category.products.indexOf(overviewProduct);
      if (index >= 0) {
        onProductChange(index);
      }
    } else {
      onProductChange(0);
    }
    onOpenCart();
  }

  return (
    <section className="categories" id="products">
      <CategoryTabs activeCategoryIndex={activeCategoryIndex} onCategoryChange={onCategoryChange} />
      <CategoryOverview
        category={category}
        activeProduct={overviewProduct}
        quantity={featuredQuantity}
        onQuantityChange={onFeaturedQuantityChange}
        onOpenCart={handleFeaturedAdd}
      />
      <ProductGrid
        activeCategoryIndex={activeCategoryIndex}
        hoveredProductIndex={hoveredProductIndex}
        onProductHover={onProductHover}
        onProductChange={onProductChange}
        onOpenCart={onOpenCart}
      />
    </section>
  );
}

function Steps() {
  return (
    <section className="steps steps--layout-ref" id="how-it-works">
      <div className="steps-header-split">
        <div className="steps-header-title">
          <span className="eyebrow">Просто замовити</span>
          <h2>Найкращий смак від процесу</h2>
        </div>
        <p>
          Купуйте у нас, якщо хочете швидко отримати зрозумілий вибір, стабільну якість
          та підтримку на кожному кроці — від зерна до чашки.
        </p>
      </div>
      <div className="step-grid">
        <article className="step-card">
          <span className="step-icon step-icon--roast" aria-hidden="true"></span>
          <h3>Ручна обсмажка</h3>
          <p>Контрольована обсмажка для стабільного аромату в кожній пачці.</p>
        </article>
        <article className="step-card step-card--accent">
          <span className="step-icon step-icon--trade" aria-hidden="true"></span>
          <h3>Пряма закупівля</h3>
          <p>Працюємо без зайвих посередників — свіжіше зерно та чесніша ціна.</p>
        </article>
        <article className="step-card">
          <span className="step-icon step-icon--organic" aria-hidden="true"></span>
          <h3>Органічний смак</h3>
          <p>Збалансовані суміші для щоденної чашки вдома та в офісі.</p>
        </article>
      </div>
      <div className="scroll-hint" aria-hidden="true">
        <span className="scroll-hint-ring"></span>
        <span className="scroll-hint-label">Гортайте вниз</span>
      </div>
    </section>
  );
}

function Wholesale() {
  return (
    <section className="wholesale wholesale--layout-ref" id="wholesale">
      <div className="wholesale-copy">
        <span className="eyebrow">Співпраця</span>
        <h2>Новини та знижки для партнерів</h2>
        <p>
          Працюємо з офісами, магазинами, кав'ярнями та партнерами. Підпишіться на розсилку —
          дізнавайтесь про акції, нові пачки та умови оптових поставок.
        </p>
        <form
          className="subscribe-form"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <input type="email" name="email" placeholder="Ваш email..." required />
          <button className="buy-button buy-button--subscribe" type="submit">
            Підписатися
          </button>
        </form>
        <div className="messenger-buttons" aria-label="Зв'язатися">
          <a href="https://t.me/" target="_blank" rel="noreferrer">Telegram</a>
          <a href="viber://chat" rel="noreferrer">Viber</a>
          <a href="https://wa.me/" target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div>
      <div className="wholesale-art" aria-hidden="true">
        <span className="bag">COFFEE<br />POINT</span>
        <span className="dark-cup">CP</span>
        <span className="bean bean-1"></span>
        <span className="bean bean-2"></span>
        <span className="bean bean-3"></span>
        <span className="bean bean-4"></span>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer footer--layout-ref" id="contacts">
      <div className="footer-grid">
        <div className="footer-brand">
          <a className="logo footer-logo" href="#top">
            <span className="logo-mark">CP</span>
            <span>Coffee Point</span>
          </a>
          <p>
            Свіжа кава для дому, офісу та бізнесу. Допомагаємо обрати формат, який
            стабільно смакує саме вам.
          </p>
        </div>
        <div className="footer-col">
          <h3>Сторінки</h3>
          <a href="#top">Головна</a>
          <a href="#products">Товари</a>
          <a href="#how-it-works">Як купити</a>
          <a href="#wholesale">Опт</a>
        </div>
        <div className="footer-col">
          <h3>Зв'язок</h3>
          <a href="https://t.me/" target="_blank" rel="noreferrer">Telegram</a>
          <a href="https://wa.me/" target="_blank" rel="noreferrer">WhatsApp</a>
          <a href="mailto:hello@coffee-point.ua">Email</a>
        </div>
        <div className="footer-col footer-contacts">
          <h3>Контакти</h3>
          <p>м. Київ, Україна</p>
          <p>+38 (000) 000-00-00</p>
          <p>hello@coffee-point.ua</p>
          <p>coffee-point.ua</p>
        </div>
      </div>
      <div className="footer-bottom">© 2026 Coffee Point. Усі права захищені.</div>
    </footer>
  );
}

function CartDrawer({ isOpen, activeCategoryIndex, activeProductIndex, onClose }) {
  const category = categories[activeCategoryIndex];
  const product = category.products[activeProductIndex ?? 0];

  return (
    <>
      <aside className="cart-drawer" aria-hidden={!isOpen} aria-labelledby="cart-title" data-cart-drawer>
        <div className="cart-drawer-header">
          <div>
            <span className="cart-eyebrow">Ваш вибір</span>
            <h2 id="cart-title">Кошик</h2>
          </div>
          <button className="cart-close" type="button" aria-label="Закрити кошик" onClick={onClose}>×</button>
        </div>
        <div className="cart-product">
          <ProductVisual product={product} className="cart-product-image" />
          <div className="cart-product-info">
            <span>{category.title}</span>
            <h3>{product.name}</h3>
            <p>{product.taste}</p>
            <div className="cart-product-meta">
              <span>{product.weight}</span>
              <strong>{product.price}</strong>
            </div>
          </div>
        </div>
        <button className="cart-checkout" type="button">Оформити замовлення</button>
      </aside>
      <button className="cart-scrim" type="button" aria-label="Закрити кошик" onClick={onClose}></button>
    </>
  );
}

export default function App() {
  const [isFloating, setIsFloating] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [activeProductIndex, setActiveProductIndex] = useState(null);
  const [hoveredProductIndex, setHoveredProductIndex] = useState(null);
  const [featuredQuantity, setFeaturedQuantity] = useState(2);

  const bodyClassName = useMemo(() => {
    const classes = [];
    if (isMenuOpen) classes.push("menu-open");
    if (isCartOpen) classes.push("cart-open");
    return classes.join(" ");
  }, [isCartOpen, isMenuOpen]);

  useEffect(() => {
    document.body.className = bodyClassName;
    return () => {
      document.body.className = "";
    };
  }, [bodyClassName]);

  useEffect(() => {
    const updateHeader = () => setIsFloating(window.scrollY > 20);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key === "Escape") {
        setIsCartOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, []);

  function handleCategoryChange(index) {
    setActiveCategoryIndex(index);
    setActiveProductIndex(null);
    setHoveredProductIndex(null);
    setFeaturedQuantity(2);
  }

  function openCart() {
    setIsMenuOpen(false);
    setIsCartOpen(true);
  }

  return (
    <>
      <Header
        isFloating={isFloating}
        isMenuOpen={isMenuOpen}
        isCartOpen={isCartOpen}
        onToggleMenu={() => setIsMenuOpen((value) => !value)}
        onCloseMenu={() => setIsMenuOpen(false)}
        onOpenCart={openCart}
      />
      <CartDrawer
        isOpen={isCartOpen}
        activeCategoryIndex={activeCategoryIndex}
        activeProductIndex={activeProductIndex}
        onClose={() => setIsCartOpen(false)}
      />
      <main id="top">
        <Hero heroIndex={heroIndex} onHeroChange={setHeroIndex} />
        <Categories
          activeCategoryIndex={activeCategoryIndex}
          activeProductIndex={activeProductIndex}
          hoveredProductIndex={hoveredProductIndex}
          featuredQuantity={featuredQuantity}
          onFeaturedQuantityChange={setFeaturedQuantity}
          onCategoryChange={handleCategoryChange}
          onProductHover={setHoveredProductIndex}
          onProductChange={setActiveProductIndex}
          onOpenCart={openCart}
        />
        <Steps />
        <Wholesale />
      </main>
      <Footer />
    </>
  );
}
