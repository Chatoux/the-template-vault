// pages/about.js
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Navbar />

      <div className="w-full h-full flex flex-col items-center bg-secondary text-text_primary">
        {/* Mission Statement Section */}
        <section className="w-full py-16 bg-secondary text-text_primary text-center px-4 md:px-16">
          <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
          <p className="mt-6 text-lg md:text-xl">
            At The Template Vault, we are dedicated to pushing the boundaries of innovation in design and technology. 
            Our mission is to provide high-quality website templates and cutting-edge AI-generated website solutions 
            to help businesses succeed online. We offer personalized consultations to tailor our services to your needs.
          </p>
        </section>

        {/* Team Section */}
        <section className="w-full bg-primary text-text_primary flex flex-col justify-center items-center">
          <div className="relative w-full h-[70vh]">
            <Image
              src="/image-home-hero-section.jpg"
              alt="Hero"
              layout="fill"
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="mb-8"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-text_primary">Welcome to The Template Vault</h1>
              <p className="mt-4 text-lg text-text_secondary">
                Discover our wide range of website templates and AI-powered solutions to elevate your online presence.
              </p>
              <Link href="/book" passHref>
                <button className="bg-secondary text-text_accent px-4 py-2 rounded font-semibold hover:bg-accent mt-6">
                  Get a Consultation
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="w-full py-16 bg-secondary text-text_primary text-center px-4 md:px-16">
          <h2 className="text-3xl md:text-4xl font-bold">Our Work</h2>
          <p className="mt-6 text-lg md:text-xl mb-8">
            Explore our portfolio of successful projects and visually stunning design templates. We take pride in delivering 
            exceptional results for businesses of all sizes.
          </p>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
            <div className="w-full h-64 relative">
              <Image
                src="/image-about-gallery-section.jpg"
                alt="Gallery"
                layout="fill"
                objectFit="cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            {/* Add more images or repeated elements as needed */}
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}