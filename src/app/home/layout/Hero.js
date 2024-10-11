export default function Hero(){
    return (
        <section className="heroSection">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="titleContainer">
          <h1 className="text-6xl font-bold text-white">RidgePros Construction</h1>
          <h1 className="heroSubtitle">Your Trusted Local Roofing Experts </h1>
          </div>
          <div className="w-full md:flex md:justify-center relative text-center top-44 text-2xl font-bold text-white">
            <a href="#" className="border-solid border-2 md:max-w-40 p-2 rounded-lg hover:bg-white hover:text-black">Call Today</a>
            </div>
        </section>
    )
}