
import Link from 'next/link';
import Footer from '../footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex items-center justify-center bg-gray-100 py-10">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-4xl font-bold text-center mb-6">About Skin Bliss</h1>
          <p className="text-lg text-gray-700 mb-4">
            Welcome to Skin Bliss, your go-to destination for all things skincare. We believe that
            everyone deserves healthy, radiant skin, and we are dedicated to helping you achieve
            just that.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Our team of skincare enthusiasts curates the best products and shares expert tips to
            guide you on your skincare journey. Whether you&apos;re looking for solutions for acne,
            hydration, anti-aging, or simply want to pamper yourself, we have something for you.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            At Skin Bliss, we prioritize quality and sustainability. We partner with brands that
            align with our values, ensuring that our products are not only effective but also safe
            for you and the environment.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Join our community of skincare lovers and embark on your journey to glowing skin.
            Remember, every skin type is unique, and we are here to support you every step of the
            way!
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Thank you for choosing Skin Bliss, where your skincare journey begins!
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
