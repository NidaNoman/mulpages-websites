import Image from "next/image";
import Footer from "./footer";


interface CardProps {
  title: string;
  description: string;
  imgSrc: string;
}

const Card = ({ title, description, imgSrc }: CardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-xs">
      <Image
        src={imgSrc}
        alt={title}
        width={400}
        height={250}
        className="object-cover w-full h-auto"
      />
      <div className="p-4">
        <h2 className="font-bold text-lg">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default function Home() {
  const cards = [
    {
      title: "Serums",
      description: "Brightening serum",
      imgSrc: "/image/serum-pic.jpeg",
    },
    {
      title: "Moisturizer",
      description: "Barrier repair Moisturizer",
      imgSrc: "/image/moits-img.jpeg",
    },
    {
      title: "Sunscreens",
      description: "Tinted sunscreen SPF60",
      imgSrc: "/image/sun-image.jpeg",
    },
  ];

  return (
    <div className="w-full min-h-screen">
      
      <div
        className="relative w-full h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/image/skin-pic.jpg')" }}
      >
        
        <div className="flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-white italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Welcome to Skin Bliss Skincare
          </h1>
          <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl mt-4">
            Your one stop for your skincare solutions
          </p>
          <button className="mt-6 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300">
            Shop Now
          </button>
        </div>
      </div>

    
      <div className="py-10 bg-white">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-serif mb-6">
          Latest Products
        </h2>
        <div className="flex flex-wrap justify-center gap-4 px-4">
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              imgSrc={card.imgSrc}
            />
          ))}
        </div>
      </div>

      
      <Footer />
    </div>
  );
}
