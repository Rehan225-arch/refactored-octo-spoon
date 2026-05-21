// Save this file as App.jsx inside your React project
// Run commands:
// npm install
// npm run dev

export default function DryFruitWebsite() {
  const products = [
    {
      name: 'Premium Almonds',
      price: '$18/kg',
      image: 'https://images.unsplash.com/photo-1508747703725-719777637510?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name: 'Organic Cashews',
      price: '$22/kg',
      image: 'https://images.unsplash.com/photo-1606925797303-0e9b4d31f0d3?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name: 'Afghani Pistachios',
      price: '$25/kg',
      image: 'https://images.unsplash.com/photo-1615485925873-6d13d3ef6b6f?q=80&w=1200&auto=format&fit=crop'
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-5 shadow-sm bg-white sticky top-0 z-50">
        <h1 className="text-2xl font-bold tracking-wide">DryFruit Hub</h1>
        <nav className="flex gap-6 text-sm font-medium">
          <a href="#home" className="hover:text-amber-700">Home</a>
          <a href="#products" className="hover:text-amber-700">Products</a>
          <a href="#about" className="hover:text-amber-700">About</a>
          <a href="#contact" className="hover:text-amber-700">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-[80vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1515543904379-3d757afe72e3?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-3xl px-6">
          <h2 className="text-5xl font-bold text-white leading-tight">
            Premium Quality Dry Fruits Delivered Fresh
          </h2>
          <p className="mt-5 text-lg text-stone-200">
            Healthy, organic, and delicious dry fruits for your everyday nutrition.
          </p>
          <button className="mt-8 px-7 py-3 rounded-2xl bg-amber-600 text-white font-semibold hover:bg-amber-700 transition">
            Shop Now
          </button>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="px-8 py-20">
        <div className="text-center mb-14">
          <h3 className="text-4xl font-bold">Our Best Sellers</h3>
          <p className="mt-3 text-stone-600">
            Carefully selected premium dry fruits from trusted farms.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <h4 className="text-2xl font-semibold">{item.name}</h4>
                <p className="mt-2 text-amber-700 font-bold">{item.price}</p>
                <button className="mt-5 w-full py-3 rounded-xl bg-stone-900 text-white hover:bg-stone-700">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-white px-8 py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1200&auto=format&fit=crop"
            alt="Dry Fruits"
            className="rounded-3xl shadow-lg"
          />
          <div>
            <h3 className="text-4xl font-bold">Why Choose Us?</h3>
            <p className="mt-5 text-lg text-stone-600 leading-8">
              We provide fresh and naturally sourced dry fruits with guaranteed quality.
              Our products are packed hygienically and delivered directly to your door.
            </p>
            <ul className="mt-6 space-y-3 text-stone-700">
              <li>✔ 100% Organic Products</li>
              <li>✔ Fast Delivery Service</li>
              <li>✔ Affordable Prices</li>
              <li>✔ Trusted by Hundreds of Customers</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 py-20">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-10">
          <h3 className="text-4xl font-bold text-center">Contact Us</h3>
          <form className="mt-10 space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-xl px-4 py-3"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-xl px-4 py-3"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border rounded-xl px-4 py-3"
            ></textarea>
            <button className="w-full py-3 rounded-xl bg-amber-600 text-white font-semibold hover:bg-amber-700">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-300 py-8 text-center">
        <p>© 2026 DryFruit Hub. All rights reserved.</p>
      </footer>
    </div>
  );
}
