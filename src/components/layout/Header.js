import Image from "next/image";
export default function Header(){
    return (
    <header className="bg-white h-24 flex items-center justify-center">
    <nav className="w-full bg-transparent p-4">
       <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
        <Image 
        href='/'
        src='/images/storm-shield-logo.png'
        width={110}
        height={100}
        />
        </div>
        <div className="navMenu">
            <a href="/" className="navMenuItem">Home</a>
            <a href="/about" className="navMenuItem">About</a>
            <a href="/services" className="navMenuItem">Services</a>
            <a href="#" className="headerCTAButton">Call Now!</a>
        </div>

        {/*Hamburger Menue*/}
        <div className="md:hidden">
          <button id="menu-toggle" class="hamburger" aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        </div>
      </nav>
    </header>
    )
}

