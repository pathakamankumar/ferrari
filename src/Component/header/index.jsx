const Header = () => {
    return (
        <>
            <nav className="navBar">
                <input type="checkbox" id="menuBtn" className="checkBoxInput" />
                <div className="menuArea">
                    <label for="menuBtn">
                        <h4>MENU</h4>
                    </label>
                </div>
                <ul>
                    <div className="smallDeviceLogo">
                        <img src="/assets/logoBlack.png" />
                    </div>
                    <div className="menuArea w-full mt-5">
                        <label for="menuBtn">
                            <img src="/assets/crosscircle.svg" className="float-right mr-5" />
                        </label>
                    </div>
                    <li>
                        <a href="#"><span>Auto</span> <img src="/assets/menuarrow.svg" /></a>
                        <input type="checkbox" id="autoBtn" className="subMenuBtn" />
                        <label for="autoBtn" className="max-[991px]:mt-20 subLabel ">
                            <div className="sunMenuItem">
                                <span>Auto</span> <img src="/assets/menuarrow.svg" />
                            </div>
                        </label>
                        <div className="contents relative">
                            <div className="w-[50%] h-[100vh]">
                                <div className="flex px-10 py-5">
                                    <img src="/assets/logoBlack.png" className="w-10 h-10" />
                                </div>
                                <hr />
                                <label for="autoBtn" className="px-10 py-3">
                                    <div class="circularProgress mr-3">
                                        <div className="inner flex items-center justify-center">
                                            <img src="/assets/Polygondownarrow.svg" className="rotate-90 w-5" />
                                        </div>
                                    </div>
                                    <span>MENU</span>
                                </label>
                                <div className="mt-3 w-full pl-10">
                                    <h1 className="text-[#8f8f8f] text-2xl">Auto</h1>
                                    <hr className="px-0 py-2 w-14" />
                                    <div className="overflow-auto" style={{height:'calc(100vh - 240px)'}}>
                                        <div>
                                            <a className="hoverItem">Ferrari Purosangue</a>
                                            <div className="showContent absolute top-0 right-0 w-[50%] h-[100vh]">
                                                <img src="/assets/signupimage.png" className="w-[100%] h-[100%]" />
                                            </div>
                                        </div>
                                        <div>
                                            <a className="hoverItem">812 GTS</a>
                                            <div className="showContent absolute top-0 right-0 w-[50%] h-[100vh]">
                                                <img src="/assets/sales1.png" className="w-[100%] h-[100%]" />
                                            </div>
                                        </div>
                                        <div>
                                            <a className="hoverItem">Ferrari Purosangue</a>
                                            <div className="showContent absolute top-0 right-0 w-[50%] h-[100vh]">
                                                <img src="/assets/signupimage.png" className="w-[100%] h-[100%]" />
                                            </div>
                                        </div>
                                        <div>
                                            <a className="hoverItem">812 GTB</a>
                                            <div className="showContent absolute top-0 right-0 w-[50%] h-[100vh]">
                                                <img src="/assets/sales1.png" className="w-[100%] h-[100%]" />
                                            </div>
                                        </div>
                                        <div>
                                            <a className="hoverItem">Ferrari Purosangue</a>
                                            <div className="showContent absolute top-0 right-0 w-[50%] h-[100vh]">
                                                <img src="/assets/signupimage.png" className="w-[100%] h-[100%]" />
                                            </div>
                                        </div>
                                        <div>
                                            <a className="hoverItem">812 GTS</a>
                                            <div className="showContent absolute top-0 right-0 w-[50%] h-[100vh]">
                                                <img src="/assets/sales1.png" className="w-[100%] h-[100%]" />
                                            </div>
                                        </div>
                                        <div>
                                            <a className="hoverItem">Ferrari Purosangue</a>
                                            <div className="showContent absolute top-0 right-0 w-[50%] h-[100vh]">
                                                <img src="/assets/signupimage.png" className="w-[100%] h-[100%]" />
                                            </div>
                                        </div>
                                        <div>
                                            <a className="hoverItem">812 GTS</a>
                                            <div className="showContent absolute top-0 right-0 w-[50%] h-[100vh]">
                                                <img src="/assets/sales1.png" className="w-[100%] h-[100%]" />
                                            </div>
                                        </div>
                                        <div>
                                            <a className="hoverItem">Ferrari Purosangue</a>
                                            <div className="showContent absolute top-0 right-0 w-[50%] h-[100vh]">
                                                <img src="/assets/signupimage.png" className="w-[100%] h-[100%]" />
                                            </div>
                                        </div>
                                        <div>
                                            <a className="hoverItem">812 GTS</a>
                                            <div className="showContent absolute top-0 right-0 w-[50%] h-[100vh]">
                                                <img src="/assets/sales1.png" className="w-[100%] h-[100%]" />
                                            </div>
                                        </div>
                                        <div>
                                            <a className="hoverItem">Ferrari Purosangue</a>
                                            <div className="showContent absolute top-0 right-0 w-[50%] h-[100vh]">
                                                <img src="/assets/signupimage.png" className="w-[100%] h-[100%]" />
                                            </div>
                                        </div>
                                        <div>
                                            <a className="hoverItem">812 GTS</a>
                                            <div className="showContent absolute top-0 right-0 w-[50%] h-[100vh]">
                                                <img src="/assets/sales1.png" className="w-[100%] h-[100%]" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="#"><span>Racing</span><img src="/assets/menuarrow.svg" /></a>
                        <input type="checkbox" id="racingBtn" className="subMenuBtn" />
                        <label for="racingBtn" className="subLabel ">
                            <div className="sunMenuItem">
                                <span>Racing</span> <img src="/assets/menuarrow.svg" />
                            </div>
                        </label>
                        <div className="contents">
                            <label for="racingBtn">
                                <div class="circularProgress mr-3">
                                    <div className="inner flex items-center justify-center">
                                        <img src="/assets/Polygondownarrow.svg" className="rotate-90 w-5" />
                                    </div>
                                </div>
                                <span>MENU</span>
                            </label>
                            <h1>Racing Contents</h1>
                        </div>
                    </li>
                    <li>
                        <a href="#"><span>Collections</span><img src="/assets/menuarrow.svg" /></a>
                        <input type="checkbox" id="collectionBtn" className="subMenuBtn" />
                        <label for="collectionBtn" className="subLabel ">
                            <div className="sunMenuItem">
                                <span>Collections</span> <img src="/assets/menuarrow.svg" />
                            </div>
                        </label>
                        <div className="contents">
                            <label for="collectionBtn">
                                <div class="circularProgress mr-3">
                                    <div className="inner flex items-center justify-center">
                                        <img src="/assets/Polygondownarrow.svg" className="rotate-90 w-5" />
                                    </div>
                                </div>
                                <span>MENU</span>
                            </label>
                            <h1>Collections Contents</h1>
                        </div>
                    </li>
                    <li>
                        <a href="#"><span>Universe</span><img src="/assets/menuarrow.svg" /></a>
                        <input type="checkbox" id="universeBtn" className="subMenuBtn" />
                        <label for="universeBtn" className="subLabel ">
                            <div className="sunMenuItem">
                                <span>Collections</span> <img src="/assets/menuarrow.svg" />
                            </div>
                        </label>
                        <div className="contents">
                            <label for="universeBtn">
                                <div class="circularProgress mr-3">
                                    <div className="inner flex items-center justify-center">
                                        <img src="/assets/Polygondownarrow.svg" className="rotate-90 w-5" />
                                    </div>
                                </div>
                                <span>MENU</span>
                            </label>
                            <h1>Universe Contents</h1>
                        </div>
                    </li>
                    <li>
                        <a href="#"><span>Project</span><img src="/assets/menuarrow.svg" /></a>
                        <input type="checkbox" id="projectBtn" className="subMenuBtn" />
                        <label for="projectBtn" className="subLabel ">
                            <div className="sunMenuItem">
                                <span>Project</span> <img src="/assets/menuarrow.svg" />
                            </div>
                        </label>
                        <div className="contents">
                            <label for="projectBtn">
                                <div class="circularProgress mr-3">
                                    <div className="inner flex items-center justify-center">
                                        <img src="/assets/Polygondownarrow.svg" className="rotate-90 w-5" />
                                    </div>
                                </div>
                                <span>MENU</span>
                            </label>
                            <h1>Project Contents</h1>
                        </div>
                    </li>
                    <li>
                        <a href="#"><span>Corporate</span><img src="/assets/menuarrow.svg" /></a>
                        <input type="checkbox" id="corporateBtn" className="subMenuBtn" />
                        <label for="corporateBtn" className="subLabel ">
                            <div className="sunMenuItem">
                                <span>Corporate</span> <img src="/assets/menuarrow.svg" />
                            </div>
                        </label>
                        <div className="contents">
                            <label for="corporateBtn">
                                <div class="circularProgress mr-3">
                                    <div className="inner flex items-center justify-center">
                                        <img src="/assets/Polygondownarrow.svg" className="rotate-90 w-5" />
                                    </div>
                                </div>
                                <span>MENU</span>
                            </label>
                            <h1>Project Contents</h1>
                        </div>
                    </li>
                </ul>
                <div className="logoArea">
                    <img src="/assets/logoWhite.png" />
                </div>
            </nav>

        </>
    )
}
export default Header