 export default function Footer(){
    return (
      <footer className="bg-pink-200 text-black font-serif py-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} skin bliss Company. All rights reserved.</p>
          <ul className="flex justify-center space-x-4 mt-2">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
          </ul>
        </div>
      </footer>
    );
  };
  
  
  