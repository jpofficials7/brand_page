const HeroSection = () => {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>Your Feet DESERVE THE BEST</h1>
        <p>
          Your Feet deserve the best Your Feet deserve the best Your Feet deserve the best Your Feet deserve the best
          Your Feet deserve the best Your Feet deserve the best Your Feet deserve the best Your Feet deserve the best
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button>Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src="/images/amazon.png" alt="amazon-logo" />
            <img src="/images/flipkart.png" alt="flipkart-logo" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/hero_image.png" alt="hero-image" />
      </div>
    </main>
  );
};
export default HeroSection;
