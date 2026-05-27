import './App.css'
import { ShoppingBag } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'

function getRoute() {
  const path = typeof window !== 'undefined' ? window.location.pathname : '/'
  return path === '/about' ? 'about' : path === '/contact' ? 'contact' : 'home'
}

function App() {
  const [route, setRoute] = useState(getRoute)
  const [cartItems, setCartItems] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const onPop = () => setRoute(getRoute())
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const removeFromCart = (title) => {
    setCartItems((prev) =>
      prev.filter((item) => item.title !== title)
    );
  };

  const handleAddToCart = (product) => {
    setCartItems((currentItems) => {
      const existing = currentItems.find((item) => item.title === product.title)

      if (existing) {
        return currentItems.map((item) =>
          item.title === product.title
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      return [...currentItems, { ...product, quantity: 1 }]
    })

    setCartOpen(true)
  }

  const content = useMemo(() => {
    if (route === 'about') return <About />
    if (route === 'contact') return <Contact />
    return <Home onAddToCart={handleAddToCart} />
  }, [route])

  return (
    <div className="app">

      <div className="top-banner">
        <p>Complimentary shipping on orders over $200 · 30-day returns</p>
      </div>


      <nav className="navbar">
        <div className="nav-left">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault()
              window.history.pushState({}, '', '/')
              setRoute('home')
            }}
          >
            SHOP
          </a>
          <a
            href="/about"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault()
              window.history.pushState({}, '', '/about')
              setRoute('about')
            }}
          >
            ABOUT
          </a>
          <a
            href="/contact"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault()
              window.history.pushState({}, '', '/contact')
              setRoute('contact')
            }}
          >
            CONTACT
          </a>
        </div>

        <div className="logo">ATELIER NOIR</div>

        <div className="nav-right" onClick={() => setCartOpen((open) => !open)}>

          <ShoppingBag size={18} strokeWidth={1.5} />

          {totalItems > 0 && (
            <span className="cart-count">
              {totalItems}
            </span>
          )}




          <div
            className={`cart-panel ${cartOpen ? 'open' : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            <h3>Shopping Bag</h3>

            {cartItems.length === 0 ? (
              <p className="cart-empty">
                No items in your bag yet.
              </p>
            ) : (
              <>

                <div className="cart-items">
                  {cartItems.map((item) => (
                    <div
                      className="cart-item"
                      key={item.title}
                    >
                      <div className="cart-item-info">
                        <span className="cart-item-title">
                          {item.title}
                        </span>

                        <span className="cart-item-meta">
                          {item.quantity} × ${item.price.toFixed(0)}
                        </span>
                      </div>

                      <div className="cart-item-actions">
                        <span className="cart-item-total">
                          ${(item.price * item.quantity).toFixed(0)}
                        </span>

                        <button
                          className="delete-item-btn"
                          onClick={() => removeFromCart(item.title)}
                        >
                          X
                        </button>
                      </div>
                    </div>
                  ))}
                </div>


                <div className="cart-total">
                  <span>Total</span>
                  <strong>
                    ${cartTotal.toFixed(0)}
                  </strong>
                </div>


                <button
                  className="checkout-btn"
                  onClick={() => setShowPopup(true)}
                >
                  CHECKOUT
                </button>
              </>
            )}
          </div>
        </div>
        

        {showPopup && (

          <div
            className="popup-overlay"
            onClick={() => setShowPopup(false)}
          >

            <div
              className="popup-box"
              onClick={(e) => e.stopPropagation()}
            >

              <h2>Coming Soon</h2>

              <p>
                Checkout functionality is currently under development.
              </p>

              <button
                className="popup-close-btn"
                onClick={() => setShowPopup(false)}
              >
                CLOSE
              </button>

            </div>

          </div>

        )}
      </nav>

      {content}


      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <h2>ATELIER NOIR</h2>
            <p>
              Quiet luxury, made slowly in small batches. Garments designed to outlast trend cycles.
            </p>

            <form className="footer-form">
              <input type="email" placeholder="Your email" />
              <button type="submit">SUBSCRIBE →</button>
            </form>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <span>SHOP</span>
              <a href="/">All Pieces</a>
              <a href="/">Atelier</a>
            </div>

            <div className="footer-column">
              <span>CARE</span>
              <a href="/">Shipping & Returns</a>
              <a href="/">FAQ</a>
              <a href="/contact">Contact</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Atelier Noir. All rights reserved.</p>
          <span>CRAFTED IN LIMITED EDITIONS</span>
        </div>
      </footer>
    </div>
  )
}

export default App

