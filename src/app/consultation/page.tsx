import React from 'react';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import Image from 'next/image';

const ConsultationPage = () => {
    return (
        <>
            <Navbar />
            <div className="bg-[#383838] min-h-screen text-[#FFFFFF]">
                <div className="container mx-auto px-4 py-16">
                    {/* Hero Section */}
                    <section className="text-center mb-10">
                        <h1 className="text-4xl font-bold mb-4">Consultation with The Template Vault</h1>
                        <p className="text-lg">
                            Explore personalized web solutions with our AI-generated website templates. Get the design services you need for a stunning online presence.
                        </p>
                    </section>

                    {/* Consultation Form */}
                    <section className="bg-[#F4F4F3] text-[#000000] rounded-lg shadow-md p-8 mb-10">
                        <h2 className="text-3xl font-semibold mb-6">Request a Consultation</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-lg font-medium mb-2">Name</label>
                                <input type="text" className="w-full px-4 py-2 border border-[#383838] rounded" placeholder="Your Name" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-lg font-medium mb-2">Email</label>
                                <input type="email" className="w-full px-4 py-2 border border-[#383838] rounded" placeholder="Your Email" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-lg font-medium mb-2">Message</label>
                                <textarea className="w-full px-4 py-2 border border-[#383838] rounded" rows={5} placeholder="How can we help you?"></textarea>
                            </div>
                            <button type="submit" className="bg-[#EC5C39] text-[#FFFFFF] font-bold py-2 px-6 rounded transition duration-300 hover:bg-[#dc4a26]">
                                Submit
                            </button>
                        </form>
                    </section>

                    {/* Benefits of Consultation */}
                    <section className="bg-[#EC5C39] text-[#FFFFFF] rounded-lg shadow-md p-8">
                        <h2 className="text-3xl font-semibold mb-6">Why Consult with Us?</h2>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <Image src="/benefit-icon1.svg" alt="Benefit Icon 1" width={50} height={50} />
                                <p className="ml-4 text-lg">
                                    Tailored solutions that cater to your unique needs, enhancing your website&apos;s performance.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <Image src="/benefit-icon2.svg" alt="Benefit Icon 2" width={50} height={50} />
                                <p className="ml-4 text-lg">
                                    Access to cutting-edge AI technology for website creation and optimization.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <Image src="/benefit-icon3.svg" alt="Benefit Icon 3" width={50} height={50} />
                                <p className="ml-4 text-lg">
                                    Expertise in modern design trends that make your business stand out.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ConsultationPage;