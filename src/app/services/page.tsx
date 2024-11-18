// pages/services.js

import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import Image from 'next/image';

export default function Services() {
  return (
    <>
      <Navbar />
      <main className="bg-primary text-textPrimary">
        <section className="px-4 py-12 bg-secondary text-textSecondary">
          <h1 className="text-4xl font-bold text-center mb-6">AI Website Solutions</h1>
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <Image
                src="/ai-solutions.jpg"
                alt="AI Website Solutions"
                width={500}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2 md:pl-6">
              <p className="mb-4">
                At The Template Vault, our AI-generated website solutions provide a fast, efficient, and cost-effective way to build your online presence. Experience cutting-edge technology that delivers personalized and responsive designs tailored to your needs.
              </p>
              <button className="bg-accent hover:bg-opacity-80 text-textSecondary px-6 py-2 rounded-md">
                Learn More
              </button>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 bg-primary text-textPrimary">
          <h2 className="text-3xl font-bold text-center mb-6">Subscription Services</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-secondary p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Domain Management</h3>
              <p className="mb-4">
                Simplify domain management with our expert services. We handle all aspects, from registration to renewal, keeping your online identity secure.
              </p>
            </div>
            <div className="bg-secondary p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">SEO Optimization</h3>
              <p className="mb-4">
                Boost your search visibility with our SEO tools and expertise, ensuring your website reaches the right audience effectively.
              </p>
            </div>
            <div className="bg-secondary p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Booking/CRM Tools</h3>
              <p className="mb-4">
                Enhance customer engagement and streamline your operations with integrated booking and CRM solutions tailored for your business.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 bg-secondary text-textPrimary">
          <h2 className="text-3xl font-bold text-center mb-6">Pricing and Packages</h2>
          <div className="max-w-4xl mx-auto flex flex-wrap justify-center">
            <div className="bg-primary text-textSecondary m-4 p-8 rounded-lg shadow-md w-72">
              <h3 className="text-2xl font-bold mb-4">Basic Package</h3>
              <p className="mb-2">Ideal for small businesses and startups looking for a strong online presence.</p>
              <p className="font-bold text-lg">$199/month</p>
              <button className="mt-4 bg-accent hover:bg-opacity-80 text-textSecondary px-6 py-2 rounded-md">
                Get Started
              </button>
            </div>

            <div className="bg-primary text-textSecondary m-4 p-8 rounded-lg shadow-md w-72">
              <h3 className="text-2xl font-bold mb-4">Premium Package</h3>
              <p className="mb-2">Designed for growth-oriented businesses that need advanced features and support.</p>
              <p className="font-bold text-lg">$399/month</p>
              <button className="mt-4 bg-accent hover:bg-opacity-80 text-textSecondary px-6 py-2 rounded-md">
                Get Started
              </button>
            </div>

            <div className="bg-primary text-textSecondary m-4 p-8 rounded-lg shadow-md w-72">
              <h3 className="text-2xl font-bold mb-4">Enterprise Package</h3>
              <p className="mb-2">Comprehensive solutions for large businesses looking for a complete digital transformation.</p>
              <p className="font-bold text-lg">Contact Us</p>
              <button className="mt-4 bg-accent hover:bg-opacity-80 text-textSecondary px-6 py-2 rounded-md">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}