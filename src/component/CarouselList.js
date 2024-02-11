
import image1 from "../images/d9.jpg"
import v1 from "../images/video/v1.mp4"
import v2 from "../images/video/v5.mp4"
import v3 from "../images/video/v6.mp4"
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function CarouselList() {
    const all =[
        {title:"v1",imageSrc:"https://www.diyamimpex.com/public/Assets/Admin/img/dshape/Diyam_Marquies_Shape_Diamond.jpg"},
    {title:"v2",imageSrc:"https://www.diyamimpex.com/public/Assets/Admin/img/dshape/Diyam_Emerald_Shape_Diamond.jpg"},
    {title:"v3",imageSrc:"https://www.diyamimpex.com/public/Assets/Admin/img/dshape/Diyam_Pear_Shape_Diamond.jpg"},
    {title:"v1",imageSrc:"https://www.diyamimpex.com/public/Assets/Admin/img/dshape/Diyam_Heart_Shape_Diamond.jpg"},
    {title:"v3",imageSrc:"https://www.diyamimpex.com/public/Assets/Admin/img/dshape/Diyam_Round_Shape_Diamond.jpg"},

   ]
    return (
        <>
            <div id="template-mo-zay-hero-carousel" className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="1"></li>
                    <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="container">
                            <div className="row p-5">
                                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                    <img className="img-fluid" src={image1} alt="" />
                                </div>
                                <div className="col-lg-6 mb-0 d-flex align-items-center">
                                    <div className="text-align-left align-self-center">
                                        <h1 className="h1 text-success">
                                            <b>Zay</b> eCommerce
                                        </h1>
                                        <h3 className="h2">Tiny and Perfect eCommerce Template</h3>
                                        <p>
                                            Zay Shop is an eCommerce HTML5 CSS template with latest version of Bootstrap 5 (beta 1). This template is 100% free provided by{" "}
                                            <a rel="sponsored" className="text-success" href="https://templatemo.com" target="_blank">
                                                TemplateMo
                                            </a>{" "}
                                            website. Image credits go to{" "}
                                            <a rel="sponsored" className="text-success" href="https://stories.freepik.com/" target="_blank">
                                                Freepik Stories
                                            </a>
                                            ,
                                            <a rel="sponsored" className="text-success" href="https://unsplash.com/" target="_blank">
                                                Unsplash
                                            </a>{" "}
                                            and
                                            <a rel="sponsored" className="text-success" href="https://icons8.com/" target="_blank">
                                                Icons 8
                                            </a>
                                            .
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row p-5">
                                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                    <img className="img-fluid" src={image1} alt="" />
                                </div>
                                <div className="col-lg-6 mb-0 d-flex align-items-center">
                                    <div className="text-align-left">
                                        <h1 className="h1">Proident occaecat</h1>
                                        <h3 className="h2">Aliquip ex ea commodo consequat</h3>
                                        <p>
                                            You are permitted to use this Zay CSS template for your commercial websites. You are <strong>not permitted</strong> to re-distribute the template ZIP file in any kind of template collection websites.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row p-5">
                                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                    <img className="img-fluid" src={image1} alt="" />
                                </div>
                                <div className="col-lg-6 mb-0 d-flex align-items-center">
                                    <div className="text-align-left">
                                        <h1 className="h1">Repr in voluptate</h1>
                                        <h3 className="h2">Ullamco laboris nisi ut </h3>
                                        <p>We bring you 100% free CSS templates for your websites. If you wish to support TemplateMo, please make a small contribution via PayPal or tell your friends about our website. Thank you.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev text-decoration-none w-auto ps-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="prev">
                    <i className="fas fa-chevron-left"></i>
                </a>
                <a className="carousel-control-next text-decoration-none w-auto pe-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="next">
                    <i className="fas fa-chevron-right"></i>
                </a>
            </div>
            <div className="container">
                <h1 className="text-center vision-title my-4 p-3">Video Gallery</h1>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

                    <div className="col">
                        <div className="card">
                            <video className="video-thumbnail " controls style={{ height: "400px" }}>
                                <source src={v1} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <video className="video-thumbnail" controls style={{ height: "400px" }} >
                                <source src={v2} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <video className="video-thumbnail" controls style={{ height: "400px" }}>
                                <source src={v3} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                </div>
            </div>

            <section class="vision-section text-center">
    <div className="container">
      <h2 className="vision-title">Our Vision</h2>
      <p className="vision-statement">
        At Diamonds Direct, our vision is to provide discerning customers with an unparalleled experience in purchasing the finest quality diamonds.
      </p>
      <p className="vision-statement">
        We strive to uphold the highest standards of integrity, transparency, and craftsmanship, ensuring that every diamond we sell is ethically sourced and meticulously inspected for quality.
      </p>
      <p className="vision-statement">
        Our commitment to excellence extends beyond the sale, as we aim to build lasting relationships with our customers based on trust, reliability, and exceptional service.
      </p>
    </div>
  </section> 

  <section class="testimonial-section text-center">
  <div class="container">
  <h2 className="vision-title">Testimonials </h2>
    <div class="row justify-content-center">
      <div class="col-lg-4 col-md-6">
        <div class="testimonial-card">
          <img src="https://via.placeholder.com/100" alt="Avatar" class="testimonial-avatar" />
          <p class="testimonial-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec consequat tortor."</p>
          <p class="testimonial-name">John Doe</p>
          <p class="testimonial-role">CEO, Company Name</p>
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="testimonial-card">
          <img src="https://via.placeholder.com/100" alt="Avatar" class="testimonial-avatar" />
          <p class="testimonial-text">"Sed tincidunt velit eu lorem vestibulum, nec faucibus mi imperdiet. Proin non felis sed nunc cursus ultricies."</p>
          <p class="testimonial-name">Jane Smith</p>
          <p class="testimonial-role">Designer</p>
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="testimonial-card">
          <img src="https://via.placeholder.com/100" alt="Avatar" class="testimonial-avatar" />
          <p class="testimonial-text">"Vivamus eu arcu id ipsum pharetra vehicula. Nulla lacinia auctor tortor ut consequat."</p>
          <p class="testimonial-name">Mike Johnson</p>
          <p class="testimonial-role">Marketing Manager</p>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="product-banner-statistics">
  <div className="container-fluid">
    <div className="row">
      <div className="col-12">
        <div className="product-banner-carousel">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {all.map((e, index) => (
              <div key={index} className="col">
                <div className="banner-slide-item">
                  <figure className="banner-statistics">
                    <img src={e.imageSrc} alt={e.altText} />
                  </figure>
                  <h5 className="banner-text3">{e.title}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
    )
}

export default CarouselList
