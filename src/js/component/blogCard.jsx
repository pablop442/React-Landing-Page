//Import React
import React from "react";

//Import styles
import { FcLike } from "react-icons/fc";
import porto from "../../img/PortoOk.jpg";

const BlogCard = () => {
	return (
		<div className="container">
			<div className="card mb-3">
				<div className="row g-0">
					<div className="col-md-4">
						<img
							src={porto}
							className="img-fluid rounded-start"
							alt="..."
						/>
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<p className="card-text">
								<small className="text-muted">
									For limited time only...
								</small>
							</p>
							<h5 className="card-title">
								Special Sale! we <FcLike size="35px" /> New York{" "}
							</h5>
							<p className="card-text">
								There is no place on the planet even remotely
								like Iceland. Incomparable and amazing, an
								Iceland vacation should be on every travel
								enthusiast’s bucket list.
							</p>
							<button
								type="button"
								className="btn btn-info"
								data-bs-toggle="modal"
								data-bs-target="#exampleModal"
								data-bs-whatever="@mdo">
								Contact us for more details
							</button>
							<div
								className="modal fade"
								id="exampleModal"
								tabIndex="-1"
								aria-labelledby="exampleModalLabel"
								aria-hidden="true">
								<div className="modal-dialog">
									<div className="modal-content">
										<div className="modal-header">
											<h5
												className="modal-title"
												id="exampleModalLabel">
												Leave us your contact
												information and we will call you
											</h5>
											<button
												type="button"
												className="btn-close"
												data-bs-dismiss="modal"
												aria-label="Close"></button>
										</div>
										<div className="modal-body">
											<form>
												<div className="mb-3">
													<label
														htmlFor="recipient-name"
														className="col-form-label">
														Name and last name:
													</label>
													<input
														type="text"
														className="form-control"
														id="recipient-name"
													/>
												</div>
												<div className="mb-3">
													<label
														htmlFor="recipient-name"
														className="col-form-label">
														Email:
													</label>
													<input
														type="text"
														className="form-control"
														id="recipient-name"
													/>
												</div>
											</form>
										</div>
										<div className="modal-footer">
											<button
												type="button"
												className="btn btn-secondary"
												data-bs-dismiss="modal">
												Close
											</button>
											<button
												type="button"
												className="btn btn-primary">
												Submit
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogCard;
