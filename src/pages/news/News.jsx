import Navbar from "../../components/Navbar";

const News = () => {
    return (
        <div>
            <div
                className="hero bg-[url(/images/bg.png)] min-h-screen flex items-start">
                <div className="hero-overlay min-h-screen flex flex-col gap-8">
                    <div><Navbar></Navbar></div>
                    <div className="flex flex-col md:flex-row md:justify-between justify-center gap-4">
                        <div className="md:w-2/5">hrd</div>
                        <div className="md:w-3/5">
                            <div className="carousel carousel-center rounded-box w-full space-x-4 p-4">
                                <div className="carousel-item">
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
                                        className="rounded-box" />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
                                        className="rounded-box" />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
                                        className="rounded-box" />
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