export default function Numbers(){
    return (
        <div id="fh5co-counter" className="fh5co-bg fh5co-counter"
             style={{ backgroundImage: "url(images/img_bg_5.jpg)" }}>
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="display-t">
                        <div className="display-tc">
                            <div className="col-md-3 col-sm-6 animate-box">
                                <div className="feature-center">
								<span className="icon">
									<i className="icon-users"></i>
								</span>

                                    <span className="counter js-counter" data-from="0" data-to="500"
                                          data-speed="5000" data-refresh-interval="50">1</span>
                                    <span className="counter-label">Estimated Guest</span>

                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 animate-box">
                                <div className="feature-center">
								<span className="icon">
									<i className="icon-user"></i>
								</span>

                                    <span className="counter js-counter" data-from="0" data-to="1000"
                                          data-speed="5000" data-refresh-interval="50">1</span>
                                    <span className="counter-label">We Catter</span>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 animate-box">
                                <div className="feature-center">
								<span className="icon">
									<i className="icon-calendar"></i>
								</span>
                                    <span className="counter js-counter" data-from="0" data-to="402"
                                          data-speed="5000" data-refresh-interval="50">1</span>
                                    <span className="counter-label">Events Done</span>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 animate-box">
                                <div className="feature-center">
								<span className="icon">
									<i className="icon-clock"></i>
								</span>

                                    <span className="counter js-counter" data-from="0" data-to="2345"
                                          data-speed="5000" data-refresh-interval="50">1</span>
                                    <span className="counter-label">Hours Spent</span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}