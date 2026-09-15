export default function Hero() {
    return (
        <div>
           <EditorialHero />
        </div>
    )
}



 function EditorialHero() {
  // Placeholder image URL
  const sampleImg = "src/assets/image.png";

  // Data array for the six IYF Mayapur community tiles
  const centers = [
    { span: "row-span-2 md:col-span-4 md:row-span-2" },
    { span: "md:col-span-5 md:row-span-1" },
    { span: "row-span-2 md:col-span-3 md:row-span-2" },
    { span: "row-span-2 md:col-span-4 md:row-span-2" },
    { span: "md:col-span-4 md:row-span-1 md:col-start-5 md:row-start-4" },
    { span: "row-span-2 md:col-span-4 md:row-span-2 md:col-start-9 md:row-start-3" },
  ];

  return (
    <section className="min-h-screen bg-[#FFFDF9] px-3 py-5 sm:px-5 sm:py-7 md:h-[100svh] md:min-h-0 md:px-12 md:py-6 lg:px-24 flex items-center justify-center font-sans">
      <div className="w-full max-w-7xl md:h-full grid grid-cols-2 md:grid-cols-12 gap-3 sm:gap-4 md:gap-5 auto-rows-[92px] sm:auto-rows-[120px] md:auto-rows-[minmax(0,1fr)] items-stretch">
        
        {/* Center 1: Top Left */}
        <div className={`hero-tile hero-tile--one relative overflow-hidden group rounded-lg md:rounded-xl h-full shadow-sm ${centers[0].span}`}>
          <img src={sampleImg} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>

        {/* Center 2: Top Center-Right */}
        <div className={`hero-tile hero-tile--two relative overflow-hidden group rounded-lg md:rounded-xl h-full shadow-sm ${centers[1].span}`}>
          <img src={sampleImg} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>

        {/* Center 3: Top Right */}
        <div className={`hero-tile hero-tile--three relative overflow-hidden group rounded-lg md:rounded-xl h-full shadow-sm ${centers[2].span}`}>
          <img src={sampleImg} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>

        {/* 🌟 CENTRAL BRANDING CANVAS */}
        <div className="col-span-2 row-span-2 md:col-span-5 md:col-start-5 md:row-start-2 md:row-span-2 flex flex-col items-center justify-center text-center p-4 sm:p-6 bg-amber-50/60 border border-amber-100 rounded-2xl my-1 md:my-0 shadow-inner backdrop-blur-sm z-10">
          <span className="text-xs uppercase tracking-widest text-amber-700 font-bold mb-1">
            ISKCON Youth Forum
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-stone-900 font-bold leading-tight">
            One mission, <br />
            <span className="italic font-normal text-amber-600">many communities</span>
          </h1>
          <p className="text-[11px] sm:text-xs text-stone-600 mt-2 sm:mt-3 max-w-xs leading-relaxed">
            IYF connects young people through spiritual growth, meaningful friendships, learning and service.
          </p>
          <button className="mt-3 sm:mt-4 px-4 sm:px-5 py-2 bg-amber-600 text-white font-medium text-xs rounded-full shadow-md hover:bg-amber-700 transition">
            Explore Centers
          </button>
        </div>

        {/* Center 4: Bottom Left */}
        <div className={`hero-tile hero-tile--four relative overflow-hidden group rounded-lg md:rounded-xl h-full shadow-sm ${centers[3].span}`}>
          <img src={sampleImg} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>

        {/* Center 5: Bottom Center */}
        <div className={`hero-tile hero-tile--five relative overflow-hidden group rounded-lg md:rounded-xl h-full shadow-sm ${centers[4].span}`}>
          <img src={sampleImg} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>

        {/* Center 6: Bottom Right */}
        <div className={`hero-tile hero-tile--six relative overflow-hidden group rounded-lg md:rounded-xl h-full shadow-sm ${centers[5].span}`}>
          <img src={sampleImg} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>

      </div>
    </section>
  );
}
