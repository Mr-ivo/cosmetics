'use client'
import { FaFacebook } from 'react-icons/fa';
import styles from '../app/page.module.css';
import Image from 'next/image';
import Slider from "react-slick";
import { useCart } from './context/CartContext';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BackToTopButton from './BackToTop/BackToTOP';


export default function Page() {
  const { addToCart } = useCart();
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const products = [
    { id: 2, name: "Hydrating Cream Mask", price: 84.0, oldPrice: 100.0, image: "/download.jpeg" },
    { id: 1, name: "Organic High-Curcumin", price: 22.9, oldPrice: 25.0, image: "/toy.jpg" },
    { id: 3, name: "Body Butter", price: 20.0, oldPrice: 30.0, image: "/images.jpeg" }
  ];

  return (
    <>
      <div className={styles.hero}>
        <h1>Discover The Secrets Of Beauty</h1>
        <p>Get them together (for less) for dewy, natural-looking coverage that still looks like skin.</p>
        <button className={styles.shopButton} onClick={() => addToCart(products[0])}>
          Shop Now
        </button>
      </div>

      {/* Promotions Section */}
      <section className={styles.promotions}>
        <Slider {...sliderSettings} className={styles.imageGrid}>
          {products.map((product) => (
            <div key={product.id} className={styles.promotion}>
              <Image
                className={styles.img}
                src={product.image}
                height={250}
                width={250}
                alt={product.name}
              />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <p className={styles.oldPrice}>${product.oldPrice}</p>
              <button className={styles.shopButton} onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))}
        </Slider>
      </section>
      <section className={styles.products}>
  <div className={styles.productSections}>
    {/* Best Seller Section */}
    <div className={styles.productSection}>
      <h2>Best Seller</h2>
      <div className={styles.productCard}>
        <Image
          src={"/toy.jpg"}
          height={100}
          width={100}
        />
        <div>
          <h3>Organic High-Curcumin</h3>
          <p>$22.9</p>
          <p className={styles.oldPrice}>$25.00</p>
          <button className={styles.addToCartButton}
          onClick={() => addToCart(product)}
          >
            Add to Cart</button>
        </div>
      </div>
      <div className={styles.productCard}>
        <Image
          src={"/toy.jpg"}
          height={100}
          width={100}
        />
        <div>
          <h3>Organic High-Curcumin</h3>
          <p>$22.9</p>
          <p className={styles.oldPrice}>$25.00</p>
          <button className={styles.addToCartButton}
          onClick={() => addToCart(product)}
          >
            Add to Cart</button>
        </div>
      </div>
      <div className={styles.productCard}>
        <Image
          src={"/toy.jpg"}
          height={100}
          width={100}
        />
        <div>
          <h3>Organic High-Curcumin</h3>
          <p>$22.9</p>
          <p className={styles.oldPrice}>$25.00</p>
          <button className={styles.addToCartButton}
          onClick={() => addToCart(product)}
          >
            Add to Cart</button>
        </div>
      </div>
      <div className={styles.productCard}>
        <Image
          src={"/toy.jpg"}
          height={100}
          width={100}
        />
        <div>
          <h3>Organic High-Curcumin</h3>
          <p>$22.9</p>
          <p className={styles.oldPrice}>$25.00</p>
          <button className={styles.addToCartButton}
          onClick={() => addToCart(product)}
          >
            Add to Cart</button>
        </div>
      </div>
      {/* Add more Best Seller products */}
    </div>

    {/* Top Rated Section */}
    <div className={styles.productSection}>
      <h2>Top Rated</h2>
      <div className={styles.productCard}>
        <Image
          src={"/download.jpeg"}
          height={100}
          width={100}
        />
        <div>
          <h3>Hydrating Cream Mask</h3>
          <p>$84.00</p>
          <p className={styles.oldPrice}>$100.00</p>
          <button className={styles.addToCartButton}
          onClick={() => addToCart(product)}
          >
            Add to Cart</button>
        </div>
      </div>
      <div className={styles.productCard}>
        <Image
          src={"/download.jpeg"}
          height={100}
          width={100}
        />
        <div>
          <h3>Hydrating Cream Mask</h3>
          <p>$84.00</p>
          <p className={styles.oldPrice}>$100.00</p>
          <button className={styles.addToCartButton}
          onClick={() => addToCart(product)}
          >
            Add to Cart</button>
        </div>
      </div>
      <div className={styles.productCard}>
        <Image
          src={"/download.jpeg"}
          height={100}
          width={100}
        />
        <div>
          <h3>Hydrating Cream Mask</h3>
          <p>$84.00</p>
          <p className={styles.oldPrice}>$100.00</p>
          <button className={styles.addToCartButton}
          onClick={() => addToCart(product)}
          >
            Add to Cart</button>
        </div>
      </div>
      <div className={styles.productCard}>
        <Image
          src={"/download.jpeg"}
          height={100}
          width={100}
        />
        <div>
          <h3>Hydrating Cream Mask</h3>
          <p>$84.00</p>
          <p className={styles.oldPrice}>$100.00</p>
          <button className={styles.addToCartButton}
          onClick={() => addToCart(product)}
          >
            Add to Cart</button>
        </div>
      </div>
   
      {/* Add more Top Rated products */}
    </div>

    {/* On Sale Section */}
    <div className={styles.productSection}>
      <h2>On Sale</h2>
      <div className={styles.productCard}>
        <Image
          src={"/images.jpeg"}
          height={100}
          width={100}
        />
        <div>
          <h3>Body Butter</h3>
          <p>$20.00</p>
          <p className={styles.oldPrice}>$30.00</p>
          <button className={styles.addToCartButton}
          onClick={() => addToCart(product)}
          >
            Add to Cart</button>
        </div>
      </div>
      <div className={styles.productCard}>
        <Image
          src={"/images.jpeg"}
          height={100}
          width={100}
        />
        <div>
          <h3>Body Butter</h3>
          <p>$20.00</p>
          <p className={styles.oldPrice}>$30.00</p>
          <button className={styles.addToCartButton}
          onClick={() => addToCart(product)}
          >
            Add to Cart</button>
        </div>
      </div>
      <div className={styles.productCard}>
        <Image
          src={"/images.jpeg"}
          height={100}
          width={100}
        />
        <div>
          <h3>Body Butter</h3>
          <p>$20.00</p>
          <p className={styles.oldPrice}>$30.00</p>
          <button className={styles.addToCartButton}
          onClick={() => addToCart(product)}
          >
            Add to Cart</button>
        </div>
      </div>
      <div className={styles.productCard}>
        <Image
          src={"/images.jpeg"}
          height={100}
          width={100}
        />
        <div>
          <h3>Body Butter</h3>
          <p>$20.00</p>
          <p className={styles.oldPrice}>$30.00</p>
          <button className={styles.addToCartButton}
          onClick={() => addToCart(product)}
          >
            Add to Cart</button>
        </div>
      </div>

    </div>
  </div>
</section>
<BackToTopButton />
      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; 2024 ApparellGlow. All rights reserved.</p>
        <div className={styles.socialIcons}>
          <FaFacebook />
        </div>
      </footer>
    </>
  );
}
