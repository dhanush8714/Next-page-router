"use client";

import React, { useEffect } from "react";
import Head from "next/head";

export default function Home() {
  useEffect(() => {
    const interval = setInterval(() => {
      const carouselElement = document.getElementById("carouselExampleIndicators");

      
      if (carouselElement && (window as any).bootstrap) {
        new (window as any).bootstrap.Carousel(carouselElement, {
          interval: 3000,
          wrap: true,
        });
        clearInterval(interval); 
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="container-fluid p-5">
       <Head>
        <title>Shopzzy</title>
      </Head>


      {/* ================= CAROUSEL ================= */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide mb-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5"></button>
        </div>

        <div className="carousel-inner rounded-5">
          <div className="carousel-item active">
            <img src="/banner1 (2).png" className="d-block w-100" alt="Banner 1" />
          </div>
          <div className="carousel-item">
            <img src="/banner2 (2).png" className="d-block w-100" alt="Banner 2" />
          </div>
          <div className="carousel-item">
            <img src="/banner3.png" className="d-block w-100" alt="Banner 3" />
          </div>
          <div className="carousel-item">
            <img src="/banner4.png" className="d-block w-100" alt="Banner 4" />
          </div>
          <div className="carousel-item">
            <img src="/banner5.png" className="d-block w-100" alt="Banner 5" />
          </div>
          <div className="carousel-item">
            <img src="/banner6.png" className="d-block w-100" alt="Banner 6" />
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* ================= PRODUCT CARDS ================= */}
      <h2 className="mb-4 fw-bold">Featured Products</h2>

      <div className="product-grid">

        {/* Product 1 */}
        <div className="product-card">
          <div className="product-badge">Premium</div>
          <div className="product-tilt-effect">
            <div className="product-image">
              <img src="/Product-img-1.jpg" alt="Running Shoe" />
            </div>
          </div>

          <div className="product-info">
            <div className="product-category">Running Shoes</div>
            <h2 className="product-title">Campus Men Crunch Running Shoes</h2>

            <div className="product-description">
              <p>Allow your pair of shoes to air and de-odorize at a regular basis</p>
            </div>

            <div className="product-features">
              <span className="feature">Synthetic Rubber</span>
              <span className="feature">Flat</span>
              <span className="feature">Mesh</span>
            </div>

            <div className="product-bottom">
              <div className="product-price">
                <span className="price-was">$1,299</span>
                <span className="price-now">$1,099</span>
              </div>
              <button className="product-button">
                <span className="button-text">Add to Cart</span>
              </button>
            </div>

            <div className="product-meta">
              <div className="product-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} width="16" height="16" fill="#FFD700">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27" />
                  </svg>
                ))}
                <span className="rating-count">232 Reviews</span>
              </div>

              <div className="product-stock">In Stock</div>
            </div>
          </div>
        </div>

        {/* Product 2 */}
        <div className="product-card">
          <div className="product-badge">Premium</div>
          <div className="product-tilt-effect">
            <div className="product-image">
              <img src="/Product-img-2.jpg" alt="Premium Watch 2" />
            </div>
          </div>

          <div className="product-info">
            <div className="product-category">Luxury Timepiece</div>
            <h2 className="product-title">Chrono S-Series Watch 2</h2>

            <div className="product-description">
              <p>Precision engineering meets timeless design.</p>
            </div>

            <div className="product-features">
              <span className="feature">Water Resistant</span>
              <span className="feature">5-Year Warranty</span>
              <span className="feature">Swiss Made</span>
            </div>

            <div className="product-bottom">
              <div className="product-price">
                <span className="price-was">$1,299</span>
                <span className="price-now">$899</span>
              </div>
              <button className="product-button">
                <span className="button-text">Add to Cart</span>
              </button>
            </div>

            <div className="product-meta">
              <div className="product-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} width="16" height="16" fill="#FFD700">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27" />
                  </svg>
                ))}
                <span className="rating-count">169 Reviews</span>
              </div>

              <div className="product-stock">In Stock</div>
            </div>
          </div>
        </div>

        {/* Product 3 */}
        <div className="product-card">
          <div className="product-badge">Premium</div>
          <div className="product-tilt-effect">
            <div className="product-image">
              <img src="/Product-img-3.jpg" alt="Sunglass" />
            </div>
          </div>

          <div className="product-info">
            <div className="product-category">Sunglass</div>
            <h2 className="product-title">Fastrack 100% UV protected Aviator Sunglasses for Unisex</h2>

            <div className="product-description">
              <p>Fastrack is the most iconic youth brand in the country.</p>
            </div>

            <div className="product-features">
              <span className="feature">Metal</span>
              <span className="feature">100% UV protect</span>
              <span className="feature">31 g</span>
            </div>

            <div className="product-bottom">
              <div className="product-price">
                <span className="price-was">$1,799</span>
                <span className="price-now">$979</span>
              </div>
              <button className="product-button">
                <span className="button-text">Add to Cart</span>
              </button>
            </div>

            <div className="product-meta">
              <div className="product-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} width="16" height="16" fill="#FFD700">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27" />
                  </svg>
                ))}
                <span className="rating-count">278 Reviews</span>
              </div>

              <div className="product-stock">In Stock</div>
            </div>
          </div>
        </div>

        {/* Product 4 */}
        <div className="product-card">
          <div className="product-badge">Premium</div>
          <div className="product-tilt-effect">
            <div className="product-image">
              <img src="/Product-img-4.jpg" alt="Trolley bags" />
            </div>
          </div>

          <div className="product-info">
            <div className="product-category">Bags & Luggage</div>
            <h2 className="product-title">Samsonite Freeform Hardside Spinner 28 Black</h2>

            <div className="product-description">
              <p>Ultra-light, ultra strong shells withstand travel rigors.</p>
            </div>

            <div className="product-features">
              <span className="feature">4 kg 310 g</span>
              <span className="feature">Made in India</span>
              <span className="feature">Durable</span>
            </div>

            <div className="product-bottom">
              <div className="product-price">
                <span className="price-was">$17,299</span>
                <span className="price-now">$15,599</span>
              </div>
              <button className="product-button">
                <span className="button-text">Add to Cart</span>
              </button>
            </div>

            <div className="product-meta">
              <div className="product-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} width="16" height="16" fill="#FFD700">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27" />
                  </svg>
                ))}
                <span className="rating-count">348 Reviews</span>
              </div>

              <div className="product-stock">In Stock</div>
            </div>
          </div>
        </div>

        {/* Product 5 */}
        <div className="product-card">
          <div className="product-badge">Premium</div>
          <div className="product-tilt-effect">
            <div className="product-image">
              <img src="/Product-img-5.jpg" alt="Beauty" />
            </div>
          </div>

          <div className="product-info">
            <div className="product-category">Skin Care</div>
            <h2 className="product-title">Dot & Key Barrier Repair Moisturizer</h2>

            <div className="product-description">
              <p>Ceramides & Hyaluronic Hydrating Face Cream</p>
            </div>

            <div className="product-features">
              <span className="feature">Non Comedogenic</span>
              <span className="feature">100g</span>
              <span className="feature">Ceramides, Japanese Rice Water</span>
            </div>

            <div className="product-bottom">
              <div className="product-price">
                <span className="price-was">$395</span>
                <span className="price-now">$336</span>
              </div>
              <button className="product-button">
                <span className="button-text">Add to Cart</span>
              </button>
            </div>

            <div className="product-meta">
              <div className="product-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} width="16" height="16" fill="#FFD700">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27" />
                  </svg>
                ))}
                <span className="rating-count">438 Reviews</span>
              </div>

              <div className="product-stock">In Stock</div>
            </div>
          </div>
        </div>

        {/* Product 6 — WHITESPACE FIXED HERE */}
        <div className="product-card">
          <div className="product-badge">Premium</div>
          <div className="product-tilt-effect">
            <div className="product-image">
              <img src="/Product-img-6.jpg" alt="Fragrance" />
            </div>
          </div>

          <div className="product-info">
            <div className="product-category">Fragrance</div>
            <h2 className="product-title">Nautica Voyage</h2>

            <div className="product-description">
              <p>Eau de toilette perfect for daily wear.</p>
            </div>

            <div className="product-features">
              <span className="feature">Liquid</span>
              <span className="feature">100 Millilitres</span>
              <span className="feature">Fresh, Aquatic, Fougere</span>
            </div>

            <div className="product-bottom">
              <div className="product-price">
                <span className="price-was">$3,999</span>
                <span className="price-now">$1,794</span>
              </div>
              <button className="product-button">
                <span className="button-text">Add to Cart</span>
              </button>
            </div>

            <div className="product-meta">
              <div className="product-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} width="16" height="16" fill="#FFD700">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27" />
                  </svg>
                ))}
                <span className="rating-count">128 Reviews</span>
              </div>

              <div className="product-stock">In Stock</div>
            </div>
          </div>
        </div>

        {/* Product 7 */}
        <div className="product-card">
          <div className="product-badge">Premium</div>
          <div className="product-tilt-effect">
            <div className="product-image">
              <img src="/Product-img-7.jpg" alt="Sneakers" />
            </div>
          </div>

          <div className="product-info">
            <div className="product-category">Sneakers</div>
            <h2 className="product-title">Puma</h2>

            <div className="product-description">
              <p>Comfortable stylish all-day sneakers.</p>
            </div>

            <div className="product-features">
              <span className="feature">Not Water Resistant</span>
              <span className="feature">Rubber</span>
              <span className="feature">Lace-Up</span>
            </div>

            <div className="product-bottom">
              <div className="product-price">
                <span className="price-was">$5,999</span>
                <span className="price-now">$2,760</span>
              </div>
              <button className="product-button">
                <span className="button-text">Add to Cart</span>
              </button>
            </div>

            <div className="product-meta">
              <div className="product-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} width="16" height="16" fill="#FFD700">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27" />
                  </svg>
                ))}
                <span className="rating-count">768 Reviews</span>
              </div>

              <div className="product-stock">In Stock</div>
            </div>
          </div>
        </div>

        {/* Product 8 */}
        <div className="product-card">
          <div className="product-badge">Premium</div>
          <div className="product-tilt-effect">
            <div className="product-image">
              <img src="/Product-img-8.jpg" alt="Bags" />
            </div>
          </div>

          <div className="product-info">
            <div className="product-category">Premium Bags</div>
            <h2 className="product-title">Tommy Hilfiger Yellow Gym Shoulder Bag</h2>

            <div className="product-description">
              <p>Superior styling and value from TOMMY HILFIGER.</p>
            </div>

            <div className="product-features">
              <span className="feature">Dimensions: 53 cm x 28 cm x 28</span>
              <span className="feature">1-Year Warranty</span>
              <span className="feature">Laptop Compatibility: No</span>
            </div>

            <div className="product-bottom">
              <div className="product-price">
                <span className="price-was">$2,399</span>
                <span className="price-now">$999</span>
              </div>
              <button className="product-button">
                <span className="button-text">Add to Cart</span>
              </button>
            </div>

            <div className="product-meta">
              <div className="product-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} width="16" height="16" fill="#FFD700">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27" />
                  </svg>
                ))}
                <span className="rating-count">236 Reviews</span>
              </div>

              <div className="product-stock">In Stock</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
