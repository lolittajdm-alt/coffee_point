import { useEffect, useMemo, useRef, useState } from "react";
import { categories } from "./data/products.js";
import heroPackageOne from "./assets/Gemini_Generated_Image_bd7kqfbd7kqfbd7k.png";
import heroPackageTwo from "./assets/Gemini_Generated_Image_nqg1jjnqg1jjnqg1.png";
import heroPackageThree from "./assets/Gemini_Generated_Image_p9qyqfp9qyqfp9qy.png";

const heroSlides = [
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
        <span className="pack pack-large">Milton's<br />Coffee</span>
        <span className="cup">Milton's</span>
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
          {category.title}
        </button>
      ))}
    </div>
  );
}

function CategoryOverview({ category, activeProduct }) {
  const orbitProduct = activeProduct ?? category.visual;

  return (
    <div className="category-overview">
      <div className="category-copy">
        <span className="eyebrow">{category.kicker}</span>
        <h3>{category.title}</h3>
        <p>{category.description}</p>
      </div>
      <div className="category-visual" aria-hidden="true">
        <div className="product-orbit">
          <div className="orbit-ring"></div>
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
    </div>
  );
}

const PRODUCT_GRID_ROWS = 3;
const PRODUCT_GRID_COLS = 4;
const PRODUCT_GRID_SIZE = PRODUCT_GRID_ROWS * PRODUCT_GRID_COLS;
const PRODUCT_GRID_BASE_COUNT = 3;

function buildGridProducts(products) {
  const base = products.slice(0, PRODUCT_GRID_BASE_COUNT);
  return Array.from({ length: PRODUCT_GRID_SIZE }, (_, index) => ({
    ...base[index % PRODUCT_GRID_BASE_COUNT],
    gridKey: `${index}-${base[index % PRODUCT_GRID_BASE_COUNT].name}`,
  }));
}

function ProductGrid({ activeCategoryIndex, hoveredProductIndex, onProductHover, onProductChange, onOpenCart }) {
  const category = categories[activeCategoryIndex];
  const gridProducts = useMemo(() => buildGridProducts(category.products), [category.products]);
  const rowRefs = useRef([]);

  useEffect(() => {
    const rows = rowRefs.current.filter(Boolean);
    if (!rows.length) {
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

    rows.forEach((row) => observer.observe(row));
    return () => observer.disconnect();
  }, [activeCategoryIndex, gridProducts]);

  return (
    <div className="product-showcase">
      <div className="product-heading">
        <span className="eyebrow">Детальний вибір</span>
      </div>
      <div className="product-grid" data-product-grid aria-live="polite">
        {Array.from({ length: PRODUCT_GRID_ROWS }, (_, rowIndex) => (
          <div
            className="product-grid-row"
            key={`${category.id}-row-${rowIndex}`}
            ref={(element) => {
              rowRefs.current[rowIndex] = element;
            }}
          >
            {gridProducts
              .slice(rowIndex * PRODUCT_GRID_COLS, rowIndex * PRODUCT_GRID_COLS + PRODUCT_GRID_COLS)
              .map((product, columnIndex) => {
                const gridIndex = rowIndex * PRODUCT_GRID_COLS + columnIndex;
                const productIndex = gridIndex % PRODUCT_GRID_BASE_COUNT;

                return (
                  <article
                    className="product-card"
                    data-grid-index={gridIndex}
                    data-product-index={productIndex}
                    key={`${category.id}-${product.gridKey}`}
                    onMouseEnter={() => onProductHover(productIndex)}
                    onMouseLeave={() => onProductHover(null)}
                    onFocus={() => onProductHover(productIndex)}
                    onBlur={() => onProductHover(null)}
                  >
                    <div className="product-card-top">
                      <ProductVisual product={product} className="product-image" />
                    </div>
                    <div className="product-card-bottom">
                      <div className="product-card-copy">
                        <h4>{product.name}</h4>
                        <p>{product.taste}</p>
                        <span className="product-card-meta">
                          {product.weight} · {product.price}
                        </span>
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
                );
              })}
          </div>
        ))}
      </div>
    </div>
  );
}

function Categories({
  activeCategoryIndex,
  activeProductIndex,
  hoveredProductIndex,
  onCategoryChange,
  onProductHover,
  onProductChange,
  onOpenCart,
}) {
  const category = categories[activeCategoryIndex];
  const overviewProduct =
    hoveredProductIndex != null ? category.products[hoveredProductIndex] : null;

  return (
    <section className="categories" id="products">
      <CategoryTabs activeCategoryIndex={activeCategoryIndex} onCategoryChange={onCategoryChange} />
      <CategoryOverview category={category} activeProduct={overviewProduct} />
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
    <section className="steps" id="how-it-works">
      <div className="section-heading">
        <span className="eyebrow">Просто замовити</span>
        <h2>ОБИРАЙ - СПЛАЧУЙ - СМАКУЙ</h2>
        <p>
          Купуйте у нас, якщо хочете швидко отримати зрозумілий вибір, стабільну якість
          та підтримку на кожному кроці.
        </p>
      </div>
      <div className="step-grid">
        <article className="step-card">
          <span className="step-number">01</span>
          <h3>Обирай</h3>
          <p>Знайдіть категорію, смак і формат фасування під свій сценарій.</p>
          <span className="step-arrow" aria-hidden="true">→</span>
        </article>
        <article className="step-card">
          <span className="step-number">02</span>
          <h3>Сплачуй</h3>
          <p>Підтвердьте замовлення та отримайте швидке погодження деталей.</p>
          <span className="step-arrow" aria-hidden="true">→</span>
        </article>
        <article className="step-card">
          <span className="step-number">03</span>
          <h3>Смакуй</h3>
          <p>Насолоджуйтесь кавою вдома, в офісі або пригощайте гостей бізнесу.</p>
        </article>
      </div>
    </section>
  );
}

function Wholesale() {
  return (
    <section className="wholesale" id="wholesale">
      <div className="wholesale-copy">
        <span className="eyebrow">Співпраця</span>
        <h2>Оптові поставки для бізнесу</h2>
        <p>
          Працюємо з офісами, магазинами, кав'ярнями та партнерами, яким потрібні
          регулярні партії кави. Підберемо асортимент, пакування та умови під ваші
          задачі.
        </p>
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
    <footer className="footer" id="contacts">
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
      <div>
        <h3>Меню</h3>
        <a href="#products">Товари</a>
        <a href="#how-it-works">Як купити</a>
        <a href="#wholesale">Опт</a>
      </div>
      <div>
        <h3>Наші дані</h3>
        <p>м. Київ, Україна</p>
        <p>+38 (000) 000-00-00</p>
        <p>hello@coffee-point.ua</p>
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
