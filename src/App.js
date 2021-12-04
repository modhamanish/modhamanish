import './dist/css/preview.css';
import './dist/css/yellow-black.css';

function App() {
  return (
    <div className="App">
      <body className="with-header position-relative" data-spy="scroll" data-target="#sections-nav" data-offset="80">

        {/* header */}
        <header className="header">
          <div className="container-fluid-limited d-flex align-items-center justify-content-between">
            <a href="index.html" className="header-brand">
              <img src="/assets/img/logo_b.svg" data-light-src="/assets/img/logo.svg" data-dark-src="/assets/img/logo_b.svg" alt="Your logo" />
            </a>
            <button className="sections-nav-toggler" aria-label="Toggle navigation">
              <span className="sections-nav-toggler-bar"></span>
              <span className="sections-nav-toggler-bar"></span>
              <span className="sections-nav-toggler-bar"></span>
              <span className="sections-nav-toggler-bar"></span>
            </button>
          </div>
        </header>

        {/* Navigation */}
        <nav className="sections-nav-container">
          <ul id="sections-nav" className="nav sections-nav sections-nav-animated">
            <li className="sections-nav-item">
              <a href="#section-01" className="nav-link sections-nav-link goto-section active">
                <span className="sections-nav-counter">01</span>
                Top
              </a>
            </li>
            <li className="sections-nav-item">
              <a href="#section-02" className="nav-link sections-nav-link goto-section">
                <span className="sections-nav-counter">02</span>
                About me
              </a>
            </li>
            <li className="sections-nav-item">
              <a href="#section-03" className="nav-link sections-nav-link goto-section">
                <span className="sections-nav-counter">03</span>
                My services
              </a>
            </li>
            <li className="sections-nav-item">
              <a href="#section-04" className="nav-link sections-nav-link goto-section">
                <span className="sections-nav-counter">04</span>
                Skills
              </a>
            </li>
            <li className="sections-nav-item">
              <a href="#section-05" className="nav-link sections-nav-link goto-section">
                <span className="sections-nav-counter">05</span>
                Facts
              </a>
            </li>
            <li className="sections-nav-item">
              <a href="#section-06" className="nav-link sections-nav-link goto-section">
                <span className="sections-nav-counter">06</span>
                Experiences
              </a>
            </li>
            <li className="sections-nav-item">
              <a href="#section-07" className="nav-link sections-nav-link goto-section">
                <span className="sections-nav-counter">07</span>
                References
              </a>
            </li>
            <li className="sections-nav-item">
              <a href="#section-08" className="nav-link sections-nav-link goto-section">
                <span className="sections-nav-counter">08</span>
                Projects
              </a>
            </li>
            <li className="sections-nav-item">
              <a href="#section-09" className="nav-link sections-nav-link goto-section">
                <span className="sections-nav-counter">09</span>
                Testimonials
              </a>
            </li>
            <li className="sections-nav-item">
              <a href="#section-10" className="nav-link sections-nav-link goto-section">
                <span className="sections-nav-counter">10</span>
                Contact
              </a>
            </li>
            <li className="sections-nav-item">
              <div className="sections-nav-info">
                <a href="mailto:john@wilson.com">john@wilson.com</a><br />
                <a href="tel:+420652887351">+420 652 887 351</a>
              </div>
            </li>
          </ul>
        </nav>

        <main className="content">
          <div className="container-fluid-limited">
            <div className="row">
              <div className="col col-xl-9">
                <section id="section-01" className="section section-sub-header animation interaction-in">
                  <div className="section-body">
                    <div className="jumbotron jumbotron-fluid pt-6 pt-lg-8 pb-0 mb-0">
                      <img src="/assets/img/avatar.jpg" className="jumbotron-img animation-translate animation-item-1" alt="Avatar" />
                      <h1 className="display-1 display-animated display-animated-in animation-translate animation-item-2">John<br />Wilson</h1>
                      <p className="lead animation-translate animation-item-3">FREELANCE WEBDEVELOPER</p>
                    </div>
                  </div>
                  <div className="section-footer animation-translate animation-item-4">
                    <a className="section-next goto-section" href="#section-02">
                      <span className="section-next-counter">01/10</span>
                      <span className="section-next-label">Next chapter</span>
                      <span className="section-next-icon"></span>
                    </a>
                  </div>
                </section>
                <section id="section-02" className="section animation">
                  <div className="section-body">
                    <div className="row">
                      <div className="col col-xl-10">
                        <h2 className="section-title animation-translate-overline animation-item-1">About me</h2>
                        <article className="article animation-translate animation-item-2">
                          <p>
                            I'm freelance webdeveloper lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                            diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                            gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                            amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                            dolores et ea rebum.
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                            sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                            sanctus est Lorem ipsum dolor sit amet.
                          </p>
                        </article>
                      </div>
                    </div>
                  </div>
                  <div className="section-footer animation-translate animation-item-3">
                    <a className="section-next goto-section" href="#section-03">
                      <span className="section-next-counter">02/10</span>
                      <span className="section-next-label">Next chapter</span>
                      <span className="section-next-icon"></span>
                    </a>
                  </div>
                </section>
                <section id="section-03" className="section animation">
                  <div className="section-body">
                    <h2 className="section-title animation-translate-overline animation-item-1">My services</h2>
                    <div className="row animation-translate animation-item-2">
                      <div className="col-12 col-md-4">
                        <div className="card card">
                          <div className="card-body">
                            <strong className="card-counter">1</strong>
                            <h3 className="card-title">Web<br />development</h3>
                            <p className="card-text">
                              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                              erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                              et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-4">
                        <div className="card card">
                          <div className="card-body">
                            <strong className="card-counter">2</strong>
                            <h3 className="card-title">Web<br />design</h3>
                            <p className="card-text">
                              Stet clita kasd gubergren, no sea takimata sanctus est. Lorem ipsum
                              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                              magna aliquyam erat, sed diam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-4">
                        <div className="card card">
                          <div className="card-body">
                            <strong className="card-counter">3</strong>
                            <h3 className="card-title">Web<br />consulting</h3>
                            <p className="card-text">
                              At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                              kasd gubergren, no sea takimata sanctus est. Lorem ipsum dolor sit
                              amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                              diam nonumy eirmod tempor invidunt ut labore et.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="section-footer animation-translate animation-item-3">
                    <a className="section-next goto-section" href="#section-04">
                      <span className="section-next-counter">03/10</span>
                      <span className="section-next-label">Next chapter</span>
                      <span className="section-next-icon"></span>
                    </a>
                  </div>
                </section>
                <section id="section-04" className="section animation">
                  <div className="section-body">
                    <h2 className="section-title animation-translate-overline animation-item-1">Skills</h2>
                    <div className="row animation-translate animation-item-2">
                      <div className="col-12 col-md-6">
                        <strong className="progress-label">CSS</strong>
                        <div className="progress progress-animated mb-9">
                          <div className="progress-bar" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <strong className="progress-label">Html</strong>
                        <div className="progress progress-animated mb-9">
                          <div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <strong className="progress-label">Javascript</strong>
                        <div className="progress progress-animated mb-9">
                          <div className="progress-bar" role="progressbar" style={{ width: "70%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <strong className="progress-label">Adobe XD</strong>
                        <div className="progress progress-animated mb-9">
                          <div className="progress-bar" role="progressbar" style={{ width: "95%" }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <strong className="progress-label">Photoshop</strong>
                        <div className="progress progress-animated mb-9">
                          <div className="progress-bar" role="progressbar" style={{ width: "87%" }} aria-valuenow="87" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <strong className="progress-label">Sketch</strong>
                        <div className="progress progress-animated mb-9">
                          <div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="section-footer animation-translate animation-item-3">
                    <a className="section-next goto-section" href="#section-05">
                      <span className="section-next-counter">04/10</span>
                      <span className="section-next-label">Next chapter</span>
                      <span className="section-next-icon"></span>
                    </a>
                  </div>
                </section>
                <section id="section-05" className="section animation">
                  <div className="section-body">
                    <h2 className="section-title animation-translate-overline animation-item-1">Facts</h2>
                    <div className="row animation-translate animation-item-2">
                      <div className="col-12 col-md-6 col-lg-3">
                        <div className="counter mb-6 mb-lg-0">
                          <span className="counter-label">Coffees / per day</span>
                          <span data-counter-from="0" data-counter-to="6">6</span>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-3">
                        <div className="counter mb-6 mb-lg-0">
                          <span className="counter-label">Launched websites</span>
                          <span data-counter-from="0" data-counter-to="64">64</span>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-3">
                        <div className="counter mb-6 mb-lg-0">
                          <span className="counter-label">Lines of code</span>
                          <span data-counter-from="0" data-counter-to="12000">12&nbsp;000</span>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-3">
                        <div className="counter">
                          <span className="counter-label">Happy clients</span>
                          <span data-counter-from="0" data-counter-to="160">160</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="section-footer animation-translate animation-item-3">
                    <a className="section-next goto-section" href="#section-06">
                      <span className="section-next-counter">05/10</span>
                      <span className="section-next-label">Next chapter</span>
                      <span className="section-next-icon"></span>
                    </a>
                  </div>
                </section>
                <section id="section-06" className="section animation">
                  <div className="section-body">
                    <h2 className="section-title animation-translate-overline animation-item-1">Experiences</h2>
                    <div className="timeline timeline-animated">
                      <div className="timeline-item">
                        <span className="timeline-date">2018&nbsp;–&nbsp;now</span>
                        <h3 className="timeline-title">Freelance</h3>
                        <p className="timeline-text">Full stack web developer</p>
                      </div>
                      <div className="timeline-item">
                        <span className="timeline-date">2015&nbsp;–&nbsp;2018</span>
                        <h3 className="timeline-title">Facebook</h3>
                        <p className="timeline-text">Senior front-end coder, team leader</p>
                      </div>
                      <div className="timeline-item">
                        <span className="timeline-date">2013&nbsp;–&nbsp;2015</span>
                        <h3 className="timeline-title">Amazon</h3>
                        <p className="timeline-text">Junior front-end coder</p>
                      </div>
                      <div className="timeline-item">
                        <span className="timeline-date">2007&nbsp;–&nbsp;2013</span>
                        <h3 className="timeline-title">MIT</h3>
                        <p className="timeline-text">Computer Science &amp; Artificial Intelligence Lab</p>
                      </div>
                    </div>
                  </div>
                  <div className="section-footer animation-translate animation-item-2">
                    <a className="section-next goto-section" href="#section-07">
                      <span className="section-next-counter">06/10</span>
                      <span className="section-next-label">Next chapter</span>
                      <span className="section-next-icon"></span>
                    </a>
                  </div>
                </section>
                <section id="section-07" className="section animation">
                  <div className="section-body">
                    <h2 className="section-title animation-translate-overline animation-item-1">References</h2>
                    <div className="row animation-translate animation-item-2">
                      <div className="col-6 col-lg-3">
                        <a href="#" className="logo-link">
                          <img src="./assets/img/reference_1_b.svg" data-light-src="./assets/img/reference_1.svg" data-dark-src="./assets/img/reference_1_b.svg" className="logo-img" alt="Reference 1" />
                        </a>
                      </div>
                      <div className="col-6 col-lg-3">
                        <a href="#" className="logo-link">
                          <img src="./assets/img/reference_2_b.svg" data-light-src="./assets/img/reference_2.svg" data-dark-src="./assets/img/reference_2_b.svg" className="logo-img" alt="Reference 2" />
                        </a>
                      </div>
                      <div className="col-6 col-lg-3">
                        <a href="#" className="logo-link">
                          <img src="./assets/img/reference_3_b.svg" data-light-src="./assets/img/reference_3.svg" data-dark-src="./assets/img/reference_3_b.svg" className="logo-img" alt="Reference 3" />
                        </a>
                      </div>
                      <div className="col-6 col-lg-3">
                        <a href="#" className="logo-link">
                          <img src="./assets/img/reference_4_b.svg" data-light-src="./assets/img/reference_4.svg" data-dark-src="./assets/img/reference_4_b.svg" className="logo-img" alt="Reference 4" />
                        </a>
                      </div>
                      <div className="col-6 col-lg-3">
                        <a href="#" className="logo-link">
                          <img src="./assets/img/reference_5_b.svg" data-light-src="./assets/img/reference_5.svg" data-dark-src="./assets/img/reference_5_b.svg" className="logo-img" alt="Reference 5" />
                        </a>
                      </div>
                      <div className="col-6 col-lg-3">
                        <a href="#" className="logo-link">
                          <img src="./assets/img/reference_6_b.svg" data-light-src="./assets/img/reference_6.svg" data-dark-src="./assets/img/reference_6_b.svg" className="logo-img" alt="Reference 6" />
                        </a>
                      </div>
                      <div className="col-6 col-lg-3">
                        <a href="#" className="logo-link">
                          <img src="./assets/img/reference_7_b.svg" data-light-src="./assets/img/reference_7.svg" data-dark-src="./assets/img/reference_7_b.svg" className="logo-img" alt="Reference 7" />
                        </a>
                      </div>
                      <div className="col-6 col-lg-3">
                        <a href="#" className="logo-link">
                          <img src="./assets/img/reference_8_b.svg" data-light-src="./assets/img/reference_8.svg" data-dark-src="./assets/img/reference_8_b.svg" className="logo-img" alt="Reference 8" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="section-footer animation-translate animation-item-3">
                    <a className="section-next goto-section" href="#section-08">
                      <span className="section-next-counter">07/10</span>
                      <span className="section-next-label">Next chapter</span>
                      <span className="section-next-icon"></span>
                    </a>
                  </div>
                </section>
                <section id="section-08" className="section animation">
                  <div className="section-body">
                    <h2 className="section-title animation-translate-overline animation-item-1">Projects</h2>
                    <div className="row animation-translate animation-item-2">
                      <div className="col-12 col-md-4">
                        <a className="card" href="#modal-project-1" data-toggle="modal">
                          <img className="card-img-top" src="./assets/img/project_1.jpg" alt="Nanovo" />
                          <div className="card-body">
                            <h3 className="card-title">Nanovo</h3>
                            <h4 className="card-subtitle">Design e-shop</h4>
                            <p className="card-tags">Frontend — Backend</p>
                          </div>
                        </a>
                      </div>
                      <div className="col-12 col-md-4">
                        <a className="card" href="#modal-project-2" data-toggle="modal">
                          <img className="card-img-top" src="./assets/img/project_2.jpg" alt="Bbop" />
                          <div className="card-body">
                            <h3 className="card-title">Bbop</h3>
                            <h4 className="card-subtitle">Social Network for Musicians</h4>
                            <p className="card-tags">Design — Frontend — Backend</p>
                          </div>
                        </a>
                      </div>
                      <div className="col-12 col-md-4">
                        <a className="card" href="#modal-project-3" data-toggle="modal">
                          <img className="card-img-top" src="./assets/img/project_3.jpg" alt="Janja Prokić" />
                          <div className="card-body">
                            <h3 className="card-title">Janja Prokić</h3>
                            <h4 className="card-subtitle">Jewelry e-shop</h4>
                            <p className="card-tags">Frontend — Backend</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="section-footer animation-translate animation-item-3">
                    <a className="section-next goto-section" href="#section-09">
                      <span className="section-next-counter">08/10</span>
                      <span className="section-next-label">Next chapter</span>
                      <span className="section-next-icon"></span>
                    </a>
                  </div>
                </section>
                <section id="section-09" className="section animation">
                  <div className="section-body">
                    <h2 className="section-title animation-translate-overline animation-item-1">Testimonials</h2>
                    <div id="carousel" className="carousel slide animation-translate animation-item-2" data-ride="carousel">
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <div className="testimonial">
                            <img src="./assets/img/testimonial_1.jpg" className="testimonial-img" alt="James Smith" />
                            <div className="testimonial-body">
                              <h3 className="testimonial-title">James Smith</h3>
                              <h4 className="testimonial-subtitle">WEBSITE OWNER — <a href="#">www.website.com</a></h4>
                              <p className="testimonial-text">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.At vero
                                eos et accusam et justo duo dolores et ea rebum.Stet clita kasd gubergren, no sea
                                takimata sanctus est Lorem ipsum dolor sit amet.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="testimonial">
                            <img src="./assets/img/testimonial_2.jpg" className="testimonial-img" alt="James Smith" />
                            <div className="testimonial-body">
                              <h3 className="testimonial-title">Alice Jones</h3>
                              <h4 className="testimonial-subtitle">E-SHOP OWNER — <a href="#">www.eshop.com</a></h4>
                              <p className="testimonial-text">
                                At vero eos et accusam et justo duo dolores et ea rebum.Stet clita kasd
                                gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <ol className="carousel-indicators">
                        <li data-target="#carousel" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel" data-slide-to="1"></li>
                      </ol>
                      <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                      </a>
                      <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                      </a>
                    </div>
                  </div>
                  <div className="section-footer animation-translate animation-item-3">
                    <a className="section-next goto-section" href="#section-10">
                      <span className="section-next-counter">09/10</span>
                      <span className="section-next-label">Next chapter</span>
                      <span className="section-next-icon"></span>
                    </a>
                  </div>
                </section>
                <section id="section-10" className="section animation">
                  <div className="section-body">
                    <h2 className="section-title animation-translate-overline animation-item-1">Contact</h2>
                    <div className="row mb-10 animation-translate animation-item-2">
                      <div className="col-12 col-md-4">
                        <div className="contact">
                          <strong className="contact-label">Stay in touch</strong>
                          <a href="mailto:john@wilson.com">john@wilson.com</a><br />
                          <a href="tel:+420652887351">+420 652 887 351</a>
                        </div>
                      </div>
                      <div className="col-12 col-md-4">
                        <div className="contact">
                          <strong className="contact-label">Social</strong>
                          <a href="https://www.facebook.com/">Facebook</a><br />
                          <a href="https://www.linked.com/">LinekdIn</a><br />
                          <a href="https://www.twitter.com/">Twitter</a>
                        </div>
                      </div>
                      <div className="col-12 col-md-4">
                        <div className="contact">
                          <strong className="contact-label">Address</strong>
                          1234 Houston Street<br />
                          New York<br />
                          NY 123456<br />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-xl-9">
                        <h3 className="section-subtitle animation-translate animation-item-3">Leave a message</h3>
                        <form className="needs-validation animation-translate animation-item-4" novalidate>
                          <div className="row">
                            <div className="col-12 col-md-6">
                              <div className="form-group">
                                <label for="contact-form-name">Name</label>
                                <input type="text" className="form-control" name="name" id="contact-form-name" placeholder="Your name" required />
                                <div className="invalid-feedback">Please enter your name.</div>
                              </div>
                            </div>
                            <div className="col-12 col-md-6">
                              <div className="form-group">
                                <label for="contact-form-name">E-mail</label>
                                <input type="email" className="form-control" name="email" id="contact-form-email" placeholder="@" required />
                                <div className="invalid-feedback">Please enter a valid e-mail address.</div>
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <label for="contact-form-message">Message</label>
                            <textarea className="form-control" name="message" id="contact-form-message" placeholder="Your message" rows="5" required></textarea>
                            <div className="invalid-feedback">Please type some message.</div>
                          </div>
                          <button type="submit" className="btn btn-primary">Send</button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="section-footer animation-translate animation-item-5">
                    <span className="section-next goto-section">
                      <span className="section-next-counter">10/10</span>
                    </span>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>

      </body>
    </div>
  );
}

export default App;
