import React from "react";

const CardContainer = () => {
	return (
		<div className="container mt-4">
			<ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
				<li className="nav-item" role="presentation">
					<button
						className="nav-link active"
						id="pills-home-tab"
						data-bs-toggle="pill"
						data-bs-target="#pills-home"
						type="button"
						role="tab"
						aria-controls="pills-home"
						aria-selected="true">
						Mejores destinos
					</button>
				</li>
				<li className="nav-item" role="presentation">
					<button
						className="nav-link"
						id="pills-offers-tab"
						data-bs-toggle="pill"
						data-bs-target="#pills-offers"
						type="button"
						role="tab"
						aria-controls="pills-offers"
						aria-selected="false">
						Ofertas
					</button>
				</li>
			</ul>
			<div className="tab-content" id="pills-tabContent">
				<div
					className="tab-pane fade show active"
					id="pills-home"
					role="tabpanel"
					aria-labelledby="pills-home-tab">
					<div className="row">
						<div className="col-12 col-md-12 col-lg-4">
							<div className="card text-white mb-4">
								<img
									src="http://lorempixel.com/300/200/nature"
									className="card-img"
									alt="..."
								/>
								<div className="card-img-overlay">
									<h5 className="card-title">Málaga</h5>
									<p className="card-text">
										5 días y 3 noches
									</p>
									<a
										type="button"
										className="btn btn-primary position-absolute bottom-0 end-0 mb-2 me-2 fw-bold">
										Reserva ahora
									</a>
								</div>
							</div>
						</div>
						<div className="col-12 col-md-6 col-lg-4">
							<div className="card text-white mb-4">
								<img
									src="http://lorempixel.com/300/200/nature"
									className="card-img"
									alt="..."
								/>
								<div className="card-img-overlay">
									<h5 className="card-title">Málaga</h5>
									<p className="card-text">
										5 días y 3 noches
									</p>
									<a
										type="button"
										className="btn btn-primary position-absolute bottom-0 end-0 mb-2 me-2 fw-bold">
										Reserva ahora
									</a>
								</div>
							</div>
						</div>
						<div className="col-12 col-md-6 col-lg-4">
							<div className="card text-white mb-4">
								<img
									src="http://lorempixel.com/300/200/nature"
									className="card-img"
									alt="..."
								/>
								<div className="card-img-overlay">
									<h5 className="card-title">Málaga</h5>
									<p className="card-text">
										5 días y 3 noches
									</p>
									<a
										type="button"
										className="btn btn-primary position-absolute bottom-0 end-0 mb-2 me-2 fw-bold">
										Reserva ahora
									</a>
								</div>
							</div>
						</div>
						<div className="col-12 col-md-6 col-lg-4">
							<div className="card text-white mb-4">
								<img
									src="http://lorempixel.com/300/200/city"
									className="card-img"
									alt="..."
								/>
								<div className="card-img-overlay">
									<h5 className="card-title">Málaga</h5>
									<p className="card-text">
										5 días y 3 noches
									</p>
									<a
										type="button"
										className="btn btn-primary position-absolute bottom-0 end-0 mb-2 me-2 fw-bold">
										Reserva ahora
									</a>
								</div>
							</div>
						</div>
						<div className="col-12 col-md-6 col-lg-4">
							<div className="card text-white mb-4">
								<img
									src="http://lorempixel.com/300/200/city"
									className="card-img"
									alt="..."
								/>
								<div className="card-img-overlay">
									<h5 className="card-title">Málaga</h5>
									<p className="card-text">
										5 días y 3 noches
									</p>
									<a
										type="button"
										className="btn btn-primary position-absolute bottom-0 end-0 mb-2 me-2 fw-bold">
										Reserva ahora
									</a>
								</div>
							</div>
						</div>
						<div className="col-12 col-md-6 col-lg-4">
							<div className="card text-white mb-4">
								<img
									src="http://lorempixel.com/300/200/city"
									className="card-img"
									alt="..."
								/>
								<div className="card-img-overlay">
									<h5 className="card-title">Málaga</h5>
									<p className="card-text">
										5 días y 3 noches
									</p>
									<a
										type="button"
										className="btn btn-primary position-absolute bottom-0 end-0 mb-2 me-2 fw-bold">
										Reserva ahora
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					className="tab-pane fade"
					id="pills-offers"
					role="tabpanel"
					aria-labelledby="pills-offers-tab">
					<div className="row">
						<div className="col-12 col-md-12 col-lg-4">
							<div className="card text-white mb-4">
								<img
									src="http://lorempixel.com/300/200/nature"
									className="card-img"
									alt="..."
								/>
								<div className="card-img-overlay">
									<h5 className="card-title">Málaga</h5>
									<p className="card-text">
										5 días y 3 noches
									</p>
									<a
										type="button"
										className="btn btn-primary position-absolute bottom-0 end-0 mb-2 me-2 fw-bold">
										Reserva ahora
									</a>
								</div>
							</div>
						</div>
						<div className="col-12 col-md-6 col-lg-4">
							<div className="card text-white mb-4">
								<img
									src="http://lorempixel.com/300/200/nature"
									className="card-img"
									alt="..."
								/>
								<div className="card-img-overlay">
									<h5 className="card-title">Málaga</h5>
									<p className="card-text">
										5 días y 3 noches
									</p>
									<a
										type="button"
										className="btn btn-primary position-absolute bottom-0 end-0 mb-2 me-2 fw-bold">
										Reserva ahora
									</a>
								</div>
							</div>
						</div>
						<div className="col-12 col-md-6 col-lg-4">
							<div className="card text-white mb-4">
								<img
									src="http://lorempixel.com/300/200/nature"
									className="card-img"
									alt="..."
								/>
								<div className="card-img-overlay">
									<h5 className="card-title">Málaga</h5>
									<p className="card-text">
										5 días y 3 noches
									</p>
									<a
										type="button"
										className="btn btn-primary position-absolute bottom-0 end-0 mb-2 me-2 fw-bold">
										Reserva ahora
									</a>
								</div>
							</div>
						</div>
						<div className="col-12 col-md-6 col-lg-4">
							<div className="card text-white mb-4">
								<img
									src="http://lorempixel.com/300/200/city"
									className="card-img"
									alt="..."
								/>
								<div className="card-img-overlay">
									<h5 className="card-title">Málaga</h5>
									<p className="card-text">
										5 días y 3 noches
									</p>
									<a
										type="button"
										className="btn btn-primary position-absolute bottom-0 end-0 mb-2 me-2 fw-bold">
										Reserva ahora
									</a>
								</div>
							</div>
						</div>
						<div className="col-12 col-md-6 col-lg-4">
							<div className="card text-white mb-4">
								<img
									src="http://lorempixel.com/300/200/city"
									className="card-img"
									alt="..."
								/>
								<div className="card-img-overlay">
									<h5 className="card-title">Málaga</h5>
									<p className="card-text">
										5 días y 3 noches
									</p>
									<a
										type="button"
										className="btn btn-primary position-absolute bottom-0 end-0 mb-2 me-2 fw-bold">
										Reserva ahora
									</a>
								</div>
							</div>
						</div>
						<div className="col-12 col-md-6 col-lg-4">
							<div className="card text-white mb-4">
								<img
									src="http://lorempixel.com/300/200/city"
									className="card-img"
									alt="..."
								/>
								<div className="card-img-overlay">
									<h5 className="card-title">Málaga</h5>
									<p className="card-text">
										5 días y 3 noches
									</p>
									<a
										type="button"
										className="btn btn-primary position-absolute bottom-0 end-0 mb-2 me-2 fw-bold">
										Reserva ahora
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default CardContainer;
