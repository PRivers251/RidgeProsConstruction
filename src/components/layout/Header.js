import Image from "next/image";
export default function Header(){
    return (
    <header className="bg-gray-200 h-16 mb-4 flex items-center justify-center">
    <nav className="w-full bg-transparent p-4">
       <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
        <Image 
        href='#'
        src='/images/ridgeproslogo.png' 
        width={150} 
        height={15}
        />
        </div>
        <div className="navMenu">
            <a href="/" className="navMenuItem">Home</a>
            <a href="/about" className="navMenuItem">About</a>
            <a href="/services" className="navMenuItem">Services</a>
            <a href="#" className="text-gray-800 border rounded-lg border-solid p-1 callToActionButton">Call Now!</a>
        </div>
        </div>
      </nav>
    </header>
    )
}

