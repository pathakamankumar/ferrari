import Colors from "../circularProgress"

const Category = () => {
    return (
        <>
            <section>
                <div className="grid grid-cols-2 max-[640px]:grid-cols-1">
                    <div class="group relative flex items-center justify-center overflow-hidden shadow-xl w-full cursor-pointer h-[80vh] lg:h-[80vh] md:h-[70vh] sm:h-[60vh] max-[640px]:h-[50vh]">
                        <div class="absolute w-full h-full transition-all duration-[10000ms] ease-in-out transform bg-center bg-cover bg-collection group-hover:scale-150"></div>
                        <div class="absolute mt-32 text-5xl font-black text-white text-center">
                            <h5 className="text-2xl">Collections</h5>
                            <h1 className="uppercase">Innovative Materials</h1>
                            <a className=" uppercase text-lg mt-10 flex items-center justify-center">
                                <div className="flex items-center">
                                    <span>Explore</span>

                                    <i className="fas fa-bars"></i>
                                    {/* <span className="ml-4 border-2 border-gray-600 rounded-full h-10 w-10 flex items-center justify-center hover:border-slate-100 hover:animate-spin">
                                        <img src="/assets/Polygondownarrow.svg" className="rotate-90 w-5" />
                                    </span> */}
                                    <div class="circularProgress ml-3">
                                        <div className="inner flex items-center justify-center">
                                            <img src="/assets/Polygondownarrow.svg" className="rotate-90 w-5" />
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="group relative flex items-center justify-center overflow-hidden shadow-xl w-full cursor-pointer h-[80vh] lg:h-[80vh] md:h-[70vh] sm:h-[60vh] max-[640px]:h-[50vh]">
                        <div class="absolute w-full h-full transition-all duration-[10000ms] ease-in-out transform bg-center bg-cover bg-magazine group-hover:scale-150"></div>
                        <div class="absolute mt-32 text-5xl font-black text-white text-center">
                            <h5 className="text-2xl">Magazine</h5>
                            <h1 className="uppercase">Soft Power</h1>
                            <a className=" uppercase text-lg mt-10 flex items-center justify-center">
                                <div className="flex items-center">
                                    <span>Discover More</span>
                                    {/* <span className="ml-4 border-2 border-gray-600 rounded-full h-10 w-10 flex items-center justify-center hover:border-slate-100 hover:animate-spin">
                                        <img src="/assets/Polygondownarrow.svg" className="rotate-90 w-5" />
                                    </span> */}
                                    <div class="circularProgress ml-3">
                                        <div className="inner flex items-center justify-center">
                                            <img src="/assets/Polygondownarrow.svg" className="rotate-90 w-5" />
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="group relative flex items-center justify-center overflow-hidden shadow-xl w-full cursor-pointer h-[80vh] lg:h-[80vh] md:h-[70vh] sm:h-[60vh] max-[640px]:h-[50vh]">
                        <div class="absolute w-full h-full transition-all duration-[10000ms] ease-in-out transform bg-center bg-cover bg-approved group-hover:scale-150"></div>
                        <div class="absolute mt-32 text-5xl font-black text-white text-center">
                            <h5 className="text-2xl">Ferrari Approved</h5>
                            <h1 className="uppercase">Pre-owned</h1>
                            <a className=" uppercase text-lg mt-10 flex items-center justify-center">
                                <div className="flex items-center">
                                    <span>Discover More</span>
                                    {/* <span className="ml-4 border-2 border-gray-600 rounded-full h-10 w-10 flex items-center justify-center hover:border-slate-100 hover:animate-spin">
                                        <img src="/assets/Polygondownarrow.svg" className="rotate-90 w-5" />
                                    </span> */}
                                    <div class="circularProgress ml-3">
                                        <div className="inner flex items-center justify-center">
                                            <img src="/assets/Polygondownarrow.svg" className="rotate-90 w-5" />
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="group relative flex items-center justify-center overflow-hidden shadow-xl w-full cursor-pointer h-[80vh] lg:h-[80vh] md:h-[70vh] sm:h-[60vh] max-[640px]:h-[50vh]">
                        <div class="absolute w-full h-full transition-all duration-[10000ms] ease-in-out transform bg-center bg-cover bg-pilota group-hover:scale-150"></div>
                        <div class="absolute mt-32 text-5xl font-black text-white text-center">
                            <h1 className="uppercase">Corsi Pilota</h1>
                            <a className=" uppercase text-lg mt-10 flex items-center justify-center">
                                <div className="flex items-center">
                                    <span>Discover More</span>
                                    {/* <span className="ml-4 border-2 border-gray-600 rounded-full h-10 w-10 flex items-center justify-center hover:border-slate-100 hover:animate-spin">
                                        <img src="/assets/Polygondownarrow.svg" className="rotate-90 w-5" />
                                    </span> */}
                                    <div class="circularProgress ml-3">
                                        <div className="inner flex items-center justify-center">
                                            <img src="/assets/Polygondownarrow.svg" className="rotate-90 w-5" />
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="group relative flex items-center justify-center overflow-hidden shadow-xl w-full cursor-pointer h-[80vh] lg:h-[80vh] md:h-[70vh] sm:h-[60vh] max-[640px]:h-[50vh]">
                        <div class="absolute w-full h-full transition-all duration-[10000ms] ease-in-out transform bg-center bg-cover bg-pastModel group-hover:scale-150"></div>
                        <div class="absolute mt-32 text-5xl font-black text-white text-center">
                            <h1 className="uppercase">The Ferrari 499p in the fia WEC</h1>
                            <a className=" uppercase text-lg mt-10 flex items-center justify-center">
                                <div className="flex items-center">
                                    <span>Discover The World Endurance championship</span>
                                    {/* <span className="ml-4 border-2 border-gray-600 rounded-full h-10 w-10 flex items-center justify-center hover:border-slate-100 hover:animate-spin">
                                        <img src="/assets/Polygondownarrow.svg" className="rotate-90 w-5" />
                                    </span> */}
                                    <div class="circularProgress ml-3">
                                        <div className="inner flex items-center justify-center">
                                            <img src="/assets/Polygondownarrow.svg" className="rotate-90 w-5" />
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="group relative flex items-center justify-center overflow-hidden shadow-xl w-full cursor-pointer h-[80vh] lg:h-[80vh] md:h-[70vh] sm:h-[60vh] max-[640px]:h-[50vh]">
                        <div class="absolute w-full h-full transition-all duration-[10000ms] ease-in-out transform bg-center bg-cover bg-fia group-hover:scale-150"></div>
                        <div class="absolute mt-32 text-5xl font-black text-white text-center">
                            <h1 className="uppercase">Past Models</h1>
                            <a className=" uppercase text-lg mt-10 flex items-center justify-center">
                                <div className="flex items-center">
                                    <span>Discover More</span>
                                    {/* <span className="ml-4 border-2 border-gray-600 rounded-full h-10 w-10 flex items-center justify-center hover:border-slate-100 hover:animate-spin">
                                        <img src="/assets/Polygondownarrow.svg" className="rotate-90 w-5" />
                                    </span> */}
                                    <div class="circularProgress ml-3">
                                        <div className="inner flex items-center justify-center">
                                            <img src="/assets/Polygondownarrow.svg" className="rotate-90 w-5" />
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bg-[#303030] pt-1 pb-5 text-white max-[640px]:px-5">
                    <a className=" uppercase text-lg mt-10 flex items-center justify-center cursor-pointer">
                        <div className="flex items-center">
                            <span className="mr-3">Subscribe to the ferrari Newsletters</span>
                            {/* <span>Subscribe to the ferrari Newsletters</span>
                            <span className="ml-4 border-2 border-gray-600 rounded-full h-10 w-10 flex items-center justify-center hover:border-slate-100 hover:animate-spin">
                                <img src="/assets/Polygondownarrow.svg" className="rotate-90 w-5" />
                            </span> */}
                            <div class="circularProgress">
                                <div className="inner flex items-center justify-center">
                                    <img src="/assets/Polygondownarrow.svg" className="rotate-90 w-5" />
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </section>
        </>
    )
}
export default Category