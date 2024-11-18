import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

export default function HomePage() {
    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <section className="w-full bg-#383838 text-black flex flex-col justify-center items-center">
                <div className="relative w-full h-[70vh]">
                    <Image
                        src="/image-home-hero-section.jpg"
                        alt="Hero"
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-black">Welcome to The Template Vault</h1>
                        <p className="mt-4 text-lg text-white">Discover innovative website templates and AI-generated solutions to elevate your business.</p>
                        <Link href="/book">
                        <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                            Explore Our Services
                        </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-#F4F4F3 text-black py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-semibold text-#EC5C39">Our Features</h2>
                    <div className="flex flex-col md:flex-row justify-around mt-10">
                        <div className="max-w-sm p-4">
                            <h3 className="text-2xl">AI-Generated Websites</h3>
                            <p className="mt-2">Leverage AI to create stunning websites effortlessly.</p>
                        </div>
                        <div className="max-w-sm p-4">
                            <h3 className="text-2xl">Domain Management</h3>
                            <p className="mt-2">Seamless management of your web presence.</p>
                        </div>
                        <div className="max-w-sm p-4">
                            <h3 className="text-2xl">SEO Tools</h3>
                            <p className="mt-2">Optimize your site and boost search engine rankings.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="bg-#F4F4F3 text-black py-16">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-semibold text-#EC5C39">Client Testimonials</h2>
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-around">
                    <div className="p-6 max-w-md bg-white rounded shadow-md text-center mb-6 lg:mb-0">
                        <p className="text-white">&quot;Choosing The Template Vault revolutionized my online business presence!&quot;</p>
                        <span className="block mt-4 text-#EC5C39">- Satisfied Client</span>
                    </div>
                    <div className="p-6 max-w-md bg-white rounded shadow-md text-center">
                        <p className="text-white">&quot;Incredible design services and user-friendly templates!&quot;</p>
                        <span className="block mt-4 text-#EC5C39">- Happy Customer</span>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-#383838 text-white py-16 text-center">
                <h2 className="text-3xl font-bold">Ready to Transform Your Website?</h2>
                <p className="mt-4">Contact us today for a consultation or to explore our wide range of templates.</p>
                <Link href="/contact">
                    <button className="mt-6 bg-#EC5C39 text-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-#EC5C39">
                        Get Started
                    </button>
                </Link>
            </section>

            <Footer />
        </>
    );
}