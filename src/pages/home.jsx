
import { useRef, useState } from 'react'
import AddToCartButton from '../components/AddToCartButton'

export default function Home({ onAddToCart }) {
  const collectionRefs = useRef([])
  const [selectedCollection, setSelectedCollection] = useState(null)

  const collections = [
    {
      title: 'Tailoring',
      label: '— 01',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop',
      description: 'Fine wool and tailored cuts made for seasonless wardrobes.',
      price: 420,
    },
    {
      title: 'Knitwear',
      label: '— 02',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop',
      description: 'Soft cashmere and cotton knits designed for layering.',
      price: 190,
    },
    {
      title: 'Essentials',
      label: '— 03',
      image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop',
      description: 'Everyday essentials in natural fabrics, elevated by minimal detailing.',
      price: 140,
    },
    {
      title: 'Outerwear',
      label: '— 04',
      image: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1200&auto=format&fit=crop',
      description: 'Layered coats and jackets finished with hand-sewn details.',
      price: 520,
    },
    {
      title: 'Accessories',
      label: '— 05',
      image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1200&auto=format&fit=crop',
      description: 'Limited-edition leather goods and woven accessories.',
      price: 95,
    },
    {
      title: 'Footwear',
      label: '— 06',
      image: 'https://images.unsplash.com/photo-1521334884684-d80222895322?q=80&w=1200&auto=format&fit=crop',
      description: 'Crafted footwear with sculptural silhouettes and durable soles.',
      price: 260,
    },
  ]

  const handleCollectionClick = (index) => {
    setSelectedCollection(index)

    if (index === 2 && collectionRefs.current[3]) {
      collectionRefs.current[3].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'nearest',
      })
    }
  }

  return (
    <>
      <section className="hero">

        <div className="hero-content">
          <span className="edition">AUTUMN / WINTER — EDITION 07</span>

          <h1> Made slowly, <br />
            <span>worn always.</span>
          </h1>

          <p className="description">
            A small collection of considered garments — Japanese cottons, undyed wools,
            and tailoring cut to last a decade, not a season.
          </p>

          <div className="hero-buttons">
            <a href="#collectiones">
              <button
                className="primary-btn"
                onClick={() => {

                  document
                    .getElementById('collections-section')
                    ?.scrollIntoView({
                      behavior: 'smooth'
                    })

                }}
              >
                SHOP THE EDITION →
              </button>
            </a>
            <button
              className="secondary-btn"
              type="button"
              onClick={(e) => {
                e.preventDefault()
                window.history.pushState({}, '', '/about')
                window.dispatchEvent(new PopStateEvent('popstate'))
              }}
            >
              OUR ATELIER
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1400&auto=format&fit=crop"
            alt="fashion collection"
          />

          <div className="image-tag">LOOK 01 · THE OVERSIZED COAT</div>
        </div>
      </section>

      <div className="marquee">
        <div className="marquee-track">
          <span>MADE IN PORTUGAL & JAPAN</span>
          <span className="diamond">◆</span>
          <span>CARBON-NEUTRAL SHIPPING</span>
          <span className="diamond">◆</span>
          <span>LIFETIME MENDING</span>
          <span className="diamond">◆</span>
          <span>LIMITED EDITIONS</span>
          <span className="diamond">◆</span>
          <span>HAND-FINISHED SEAMS</span>
          <span className="diamond">◆</span>
          <span>MADE IN PORTUGAL & JAPAN</span>
          <span className="diamond">◆</span>
          <span>CARBON-NEUTRAL SHIPPING</span>
          <span className="diamond">◆</span>
          <span>LIFETIME MENDING</span>
          <span className="diamond">◆</span>
          <span>LIMITED EDITIONS</span>
          <span className="diamond">◆</span>
          <span>HAND-FINISHED SEAMS</span>
        </div>
      </div>

      <section className="collections">
        {collections.map((collection, index) => (
          <div
            key={collection.title}
            ref={(el) => (collectionRefs.current[index] = el)}
            className={`collection-card ${selectedCollection === index ? 'active' : ''}`}
            onClick={() => handleCollectionClick(index)}
          >
            <div className="collection-image">
              <img src={collection.image} alt={collection.title} />
            </div>

            <div className="collection-footer">
              <h2>{collection.title}</h2>
              <span>{collection.label}</span>
            </div>

            <div className="collection-meta">
              <p className="collection-description">{collection.description}</p>
              <p className="collection-price">${collection.price.toFixed(0)}</p>
            </div>

            <div className="add-button-wrapper" onClick={(e) => e.stopPropagation()}>
              <AddToCartButton product={collection} onAdd={onAddToCart} />
            </div>
          </div>
        ))}
      </section>

      <section className="values-section">
        <div className="value-card">
          <div className="icon">✂</div>
          <h3>Hand-Tailored</h3>
          <p>Each piece cut and finished by master makers in small ateliers.</p>
        </div>

        <div className="value-card">
          <div className="icon">❍</div>
          <h3>Natural Fibers</h3>
          <p>Organic cotton, undyed wool, Japanese linen — nothing synthetic.</p>
        </div>

        <div className="value-card">
          <div className="icon">◫</div>
          <h3>Plastic-Free</h3>
          <p>Recycled tissue, hemp twine, reusable garment bags.</p>
        </div>

        <div className="value-card">
          <div className="icon">✦</div>
          <h3>Lifetime Mending</h3>
          <p> We repair what we make. Send it back, we'll restore it.</p>
        </div>
      </section>

      <section id="collectiones" className="pieces-section">
        <div className="pieces-header">
          <div>
            <span className="collection-label">THE COLLECTION</span>
            <h1>Pieces, considered.</h1>
          </div>
          <p className="collection-text">
            Each piece is produced in limited quantities
            and rarely restocked.
          </p>
        </div>
        <div className="empty-products">
          <h2>No products found</h2>
          <p>Tell us what to add — name a product and its price in chat.</p>
        </div>
      </section>

      <section className="philosophy-section">
        <div className="philosophy-image">
          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop"
            alt="atelier garments"
          />
        </div>

        <div className="philosophy-content">
          <span className="philosophy-label">OUR PHILOSOPHY</span>
          <h2>We design clothes that <span> disappear into a life.</span></h2>
          <p>
            Founded in 2019 between Porto and Kyoto, Atelier Noir was built on a single refusal:
            the seasonal churn. We release two editions a year. Each piece is patterned by hand,
            cut from natural fibers, and finished by the same maker from start to seam.
          </p>

          <button className="atelier-btn" type="button">
            VISIT THE ATELIER →
          </button>
        </div>
      </section>

      <section className="reviews-newsletter">
        <div className="reviews-section">
          <h2>In their words</h2>
          <div className="reviews-grid">
            <div className="review-card">
              <div className="stars">☆ ☆ ☆ ☆ ☆</div>
              <p>No reviews yet.</p>
            </div>
            <div className="review-card">
              <div className="stars">☆ ☆ ☆ ☆ ☆</div>
              <p>No reviews yet.</p>
            </div>
            <div className="review-card">
              <div className="stars">☆ ☆ ☆ ☆ ☆</div>
              <p>No reviews yet.</p>
            </div>
          </div>
        </div>

        <div className="newsletter-section">
          <span className="newsletter-label">THE LETTER</span>
          <h2>Receive new editions first.</h2>
          <p>Quiet dispatches on new pieces, restocks, and notes from the atelier. No noise.         </p>
          <form className="newsletter-form">
            <input type="email" placeholder="your@email.com" />
            <button type="submit">SUBSCRIBE →</button>
          </form>
        </div>
      </section>
    </>
  )
}

