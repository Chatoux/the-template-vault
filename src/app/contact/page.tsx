import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-secondaryColor p-4 md:p-8">
        <section className="text-center py-12">
          <h1 className="text-4xl font-bold text-textAccent">Contact The Template Vault</h1>
          <p className="text-textPrimary mt-4 max-w-2xl mx-auto">
            We at The Template Vault specialize in promoting top-tier website templates and design services. Our AI-generated website solutions are tailored to meet your unique needs. Reach out for consultations and elevate your web presence today.
          </p>
        </section>

        <section className="bg-primaryColor text-textSecondary py-12">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold">Contact Details</h2>
            <ul className="mt-6 space-y-4">
              <li>Email: <a href="mailto:info@thetemplatevault.com" className="text-accentColor">info@thetemplatevault.com</a></li>
              <li>Phone: <a href="tel:+1234567890" className="text-accentColor">+1 234 567 890</a></li>
              <li>Address: 123 Template Street, Design City, ABC 12345</li>
            </ul>
          </div>
        </section>

        <section className="bg-secondaryColor py-12 text-center">
          <h2 className="text-3xl font-bold text-textPrimary">Connect with Us</h2>
          <div className="flex justify-center space-x-6 mt-6">
            <Link href="https://www.facebook.com/TheTemplateVault" className="text-accentColor" aria-label="Facebook">
              <Image src="/facebook-icon.png" width={40} height={40} alt="Facebook" />
            </Link>
            <Link href="https://twitter.com/TheTemplateVault" className="text-accentColor" aria-label="Twitter">
              <Image src="/twitter-icon.png" width={40} height={40} alt="Twitter" />
            </Link>
            <Link href="https://www.instagram.com/TheTemplateVault" className="text-accentColor" aria-label="Instagram">
              <Image src="/instagram-icon.png" width={40} height={40} alt="Instagram" />
            </Link>
          </div>
        </section>

        <section className="bg-primaryColor text-center py-12">
          <h2 className="text-3xl font-bold text-textSecondary">Ready to Elevate Your Online Presence?</h2>
          <p className="mt-4 text-textSecondary max-w-2xl mx-auto">
            Our professional team is ready to help you create engaging and modern websites. Start your journey with us today.
          </p>
          <button className="bg-accentColor text-textSecondary py-2 px-6 mt-6 rounded-full">
            Get in Touch
          </button>
        </section>
      </main>

      <Footer />
    </>
  );
}