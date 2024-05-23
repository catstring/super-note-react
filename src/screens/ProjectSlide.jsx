import { useEffect } from "react";

const ProjectSlide = () => {
    useEffect(() => {
        const carousel = document.getElementById('carouselExampleIndicators');
        carousel.addEventListener('slide.bs.carousel', (event) => {
            const activeIndex = event.to;
            document.querySelectorAll('.text-block').forEach((block, index) => {
                if (index === activeIndex) {
                    block.classList.add('active');
                } else {
                    block.classList.remove('active');
                }
            });
        });
    }, []);

    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://via.placeholder.com/800x400" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://via.placeholder.com/800x400" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://via.placeholder.com/800x400" alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                </a>
            </div>
            <div className="text-block-container">
                <div className="text-block active" id="text-block-0">
                    <h5>First Slide Label</h5>
                    <p>First slide text goes here.</p>
                </div>
                <div className="text-block" id="text-block-1">
                    <h5>Second Slide Label</h5>
                    <p>Second slide text goes here.</p>
                </div>
                <div className="text-block" id="text-block-2">
                    <h5>Third Slide Label</h5>
                    <p>Third slide text goes here.</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectSlide;