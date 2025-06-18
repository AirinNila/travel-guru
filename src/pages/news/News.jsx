import Navbar from "../../components/Navbar";
import { GoArrowRight } from "react-icons/go";

const News = () => {
    return (
        <div>
            <div
                className="hero bg-[url(/images/bg.png)] min-h-screen flex items-start">
                <div className="hero-overlay min-h-screen flex flex-col gap-8">
                    <div><Navbar></Navbar></div>
                    <div className="flex flex-col md:flex-row md:justify-between justify-center gap-4">
                        <div className="md:w-2/5 flex flex-col p-4 items-center md:items-start gap-4 md:pl-20 md:pt-6 text-white">
                            <h3 className="text-4xl md:text-7xl font-bold bebas">Cox's bazar</h3>
                            <p className="text-center md:text-left">Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                            <div>
                            <button className="btn primary-bg">Booking <span><GoArrowRight /></span></button>
                            
                            </div>
                        </div>
                        <div className="md:w-3/5">
                            <div className="carousel carousel-center rounded-box w-full space-x-4 p-4">
                                <div className="carousel-item ">
                                    <img
                                        src="/public/images/Sajek.png"
                                        className="rounded-box w-72" />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="/public/images/Sreemongol.png"
                                        className="rounded-box w-72" />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="/public/images/sundorbon.png"
                                        className="rounded-box w-72" />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
                                        className="rounded-box" />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
                                        className="rounded-box" />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
                                        className="rounded-box" />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
                                        className="rounded-box" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default News;