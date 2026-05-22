import { useEffect, useMemo, useState } from "react";
import { categories, processFeatures } from "./data/products.js";
import heroReference from "./assets/hero-coffee-reference.svg";

function Header({ isFloating, isMenuOpen, isCartOpen, onToggleMenu, onCloseMenu, onOpenCart }) {
  return (
    <header className={`site-header${isFloating ? " is-floating" : ""}`}>
      <a className="site-logo" href="#top" aria-label="Milton's home" onClick={onCloseMenu}>
        <span className="logo-placeholder">LOGO</span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-label="Open menu"
        aria-expanded={isMenuOpen}
        onClick={onToggleMenu}
      >
        <span></span>
        <span></span>
      </button>
      <nav className={`main-nav${isMenuOpen ? " is-open" : ""}`}>
        <a href="#top" onClick={onCloseMenu}>Home</a>
        <a href="#menu" onClick={onCloseMenu}>Menu</a>
        <a href="#process" onClick={onCloseMenu}>Deals</a>
        <a href="#popular" onClick={onCloseMenu}>Favourite</a>
        <button
          className="cart-link"
          type="button"
          aria-label="Open cart"
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

function Hero() {
  return (
    <section className="hero" aria-label="Milton's hero">
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="hero-kicker">
            <span>IT'S A BREAK</span>
            <span>
              WITH <strong>COFFEE</strong>
            </span>
          </p>
          <h1 className="coffee-repeat" aria-label="Coffee">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i}>COFFEE</span>
            ))}
          </h1>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <img className="hero-image" src={heroReference} alt="" />
        </div>
      </div>
      <div className="hero-indicator" aria-hidden="true">
        <span className="hero-indicator-pill is-active"></span>
        <span className="hero-indicator-pill"></span>
        <span className="hero-indicator-pill"></span>
      </div>
    </section>
  );
}

function CategoryTabs({ activeIndex, onChange }) {
  return (
    <div className="category-tabs" role="tablist" aria-label="Product categories">
      {categories.map((category, index) => (
        <button
          key={category.id}
          className={`category-tab${index === activeIndex ? " is-active" : ""}`}
          type="button"
          role="tab"
          aria-selected={index === activeIndex}
          onClick={() => onChange(index)}
        >
          {index === activeIndex && <span className="tab-bean" aria-hidden="true"></span>}
          {category.title}
        </button>
      ))}
    </div>
  );
}

function FeaturedProduct({ featured, quantity, onQuantityChange, onAddToCart }) {
  return (
    <div className="featured-product">
      <div className="featured-visual" aria-hidden="true">
        <div className="milk-orbit">
          <div className="orbit-center-cup"></div>
          {featured.variants.map((label, index) => (
            <div className={`orbit-node orbit-node-${index + 1}`} key={label}>
              <span className="orbit-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="featured-copy">
        <h2>{featured.name}</h2>
        <div className="featured-rating">
          <span className="stars" aria-label={`${featured.rating} out of 5 stars`}>
            {Array.from({ length: featured.rating }, (_, i) => (
              <span key={i} aria-hidden="true">★</span>
            ))}
          </span>
          <span className="featured-price">{featured.price}</span>
        </div>
        <p>{featured.description}</p>
        <div className="featured-actions">
          <div className="quantity-control" aria-label="Quantity">
            <button type="button" aria-label="Decrease quantity" onClick={() => onQuantityChange(Math.max(1, quantity - 1))}>
              −
            </button>
            <span>{quantity}</span>
            <button type="button" aria-label="Increase quantity" onClick={() => onQuantityChange(quantity + 1)}>
              +
            </button>
          </div>
          <button className="btn-primary" type="button" onClick={onAddToCart}>
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

function ProcessSection() {
  return (
    <section className="process" id="process">
      <div className="process-header">
        <h2>The Best Taste From The Process</h2>
        <p>
          Every cup starts with carefully selected beans, roasted by hand and sourced through
          direct trade partnerships. We believe great coffee is built step by step — from farm to your break.
        </p>
      </div>
      <div className="process-cards">
        {processFeatures.map((feature) => (
          <article className={`process-card process-card--${feature.tone}`} key={feature.title}>
            <span className={`process-icon process-icon--${feature.icon}`} aria-hidden="true"></span>
            <h3>{feature.title}</h3>
          </article>
        ))}
      </div>
      <div className="scroll-hint" aria-hidden="true">
        <span className="scroll-hint-ring"></span>
        <span className="scroll-hint-text">SCROLL DOWN</span>
        <span className="scroll-hint-arrow">↓</span>
      </div>
    </section>
  );
}

function ProductCard({ product, onAddToCart }) {
  return (
    <article className="flavor-card">
      <div className="flavor-card-top">
        <span className="flavor-tag">{product.tag}</span>
        <div className="flavor-cup">
          {product.image ? (
            <img src={product.image} alt="" className="flavor-pack" />
          ) : (
            <span className="flavor-cup-shape" aria-hidden="true"></span>
          )}
        </div>
      </div>
      <div className="flavor-card-bottom">
        <h4>{product.name}</h4>
        <span className="flavor-price">{product.price}</span>
        <button
          className={`flavor-btn flavor-btn--${product.buttonStyle}`}
          type="button"
          onClick={onAddToCart}
        >
          ADD TO CART
        </button>
      </div>
    </article>
  );
}

function PopularFlavors({ products, onAddToCart }) {
  const [page, setPage] = useState(0);
  const pages = 3;

  return (
    <section className="popular" id="popular">
      <h2 className="popular-heading">OUR POPULAR FLAVOUR</h2>
      <div className="popular-grid">
        {products.map((product) => (
          <ProductCard key={product.name} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
      <div className="popular-dots" aria-label="Product pages">
        {Array.from({ length: pages }, (_, i) => (
          <button
            key={i}
            type="button"
            className={`popular-dot${i === page ? " is-active" : ""}`}
            aria-label={`Page ${i + 1}`}
            onClick={() => setPage(i)}
          ></button>
        ))}
      </div>
    </section>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setEmail("");
  }

  return (
    <section className="newsletter" id="newsletter">
      <div className="newsletter-copy">
        <h2>Get New Updates And Discount Offers.</h2>
        <p>
          Subscribe to our newsletter and be the first to know about seasonal blends,
          exclusive deals, and fresh arrivals from Milton's.
        </p>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your Email..."
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <button className="btn-primary" type="submit">
            SUBSCRIBE
          </button>
        </form>
      </div>
      <div className="newsletter-art" aria-hidden="true">
        <span className="newsletter-bag">MILTON'S</span>
        <span className="newsletter-cup"></span>
        <span className="newsletter-bean newsletter-bean-1"></span>
        <span className="newsletter-bean newsletter-bean-2"></span>
        <span className="newsletter-bean newsletter-bean-3"></span>
        <span className="newsletter-bean newsletter-bean-4"></span>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" id="contacts">
      <div className="footer-grid">
        <div className="footer-brand">
          <span className="footer-logo">MILTON'S</span>
          <p>
            Crafting exceptional coffee experiences since day one. From hand-roasted beans
            to your perfect cup — Milton's brings warmth to every break.
          </p>
        </div>
        <div className="footer-col">
          <h3>Page</h3>
          <a href="#top">Home</a>
          <a href="#menu">Menu</a>
          <a href="#process">Deals</a>
          <a href="#popular">Favourite</a>
        </div>
        <div className="footer-col">
          <h3>Links</h3>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://pinterest.com" target="_blank" rel="noreferrer">Pinterest</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
        <div className="footer-col footer-contacts">
          <h3>Contacts</h3>
          <p><span className="contact-icon">📍</span> House No 123, Coffee Street, Bean City</p>
          <p><span className="contact-icon">📞</span> +1 (555) 123-4567</p>
          <p><span className="contact-icon">✉️</span> hello@miltons.coffee</p>
          <p><span className="contact-icon">🌐</span> www.miltons.coffee</p>
        </div>
      </div>
      <div className="footer-bottom">
        All copyrights are reserved by YourCompanyName
      </div>
    </footer>
  );
}

function CartDrawer({ isOpen, product, categoryTitle, onClose }) {
  if (!product) return null;

  return (
    <>
      <aside className={`cart-drawer${isOpen ? " is-open" : ""}`} aria-hidden={!isOpen}>
        <div className="cart-drawer-header">
          <h2>Cart</h2>
          <button className="cart-close" type="button" aria-label="Close cart" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="cart-item">
          <span className="cart-category">{categoryTitle}</span>
          <h3>{product.name}</h3>
          <p>{product.taste ?? product.description ?? ""}</p>
          <strong>{product.price}</strong>
        </div>
        <button className="btn-primary cart-checkout" type="button">
          CHECKOUT
        </button>
      </aside>
      {isOpen && <button className="cart-scrim" type="button" aria-label="Close cart" onClick={onClose}></button>}
    </>
  );
}

export default function App() {
  const [isFloating, setIsFloating] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [quantity, setQuantity] = useState(2);
  const [cartProduct, setCartProduct] = useState(null);

  const category = categories[activeCategoryIndex];
  const featured = category.featured;

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
      if (window.innerWidth > 900) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key === "Escape") setIsCartOpen(false);
    };
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, []);

  function openCart(product) {
    setCartProduct(product ?? { name: featured.name, price: featured.price, description: featured.description });
    setIsMenuOpen(false);
    setIsCartOpen(true);
  }

  return (
    <>
      <Header
        isFloating={isFloating}
        isMenuOpen={isMenuOpen}
        isCartOpen={isCartOpen}
        onToggleMenu={() => setIsMenuOpen((v) => !v)}
        onCloseMenu={() => setIsMenuOpen(false)}
        onOpenCart={() => openCart()}
      />
      <CartDrawer
        isOpen={isCartOpen}
        product={cartProduct}
        categoryTitle={category.title}
        onClose={() => setIsCartOpen(false)}
      />
      <main id="top">
        <Hero />
        <section className="menu-section" id="menu">
          <CategoryTabs activeIndex={activeCategoryIndex} onChange={setActiveCategoryIndex} />
          <FeaturedProduct
            featured={featured}
            quantity={quantity}
            onQuantityChange={setQuantity}
            onAddToCart={() => openCart(featured)}
          />
        </section>
        <ProcessSection />
        <PopularFlavors products={category.products} onAddToCart={(p) => openCart(p)} />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
