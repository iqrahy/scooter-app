import ScooterImg from "../images/scooter.png"

const HeroSection = () => {
    return(
        <>
        <div className="container">
            <div className="row d-flex justify-content-center align-items-center">

                <div className="col-6">
                    <h1 className="display-6 fw-normal">Fair price ride</h1>
                    <h1 className="display-4 fw-bold Dark">Rent our <span className="orange-color">Scooter</span></h1>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>

                <div className="col-6 text-center">
                    <img className="img-fluid" src={ScooterImg} alt="Scooter" />
                </div>

            </div>
        </div>
        </>
    )
}

export default HeroSection;