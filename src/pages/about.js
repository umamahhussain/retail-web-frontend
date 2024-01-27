import React from 'react';

const About = () => {
    return (
        <div className="about">
            <div className="login-container" style={{ position: "relative", border: "5px solid transparent", borderRadius: "15px", overflow: "hidden", boxShadow: "0 0 20px rgba(255, 255, 255, 1)" }}>
                <img src="https://wallpapercave.com/dwp2x/wp12471662.jpg"
                    style={{ height: "100vh", width: "100%", objectFit: "cover", zIndex: "1" }} />

                <div className="overlay">
                    <div className="black" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: "2" }}>
                        <div className="card-content white-text">
                            <h3 className="card-title" style={{ textShadow: "2px 2px 5px rgba(255, 255, 255, 1)", fontFamily: "Audiowide" }}>
                                <u>
                                    About
                                </u>
                            </h3>

                            <h6 style={{ fontFamily: "Audiowide" }}>
                                Welcome to TechWear in Dubai – your chic destination for elevated shopping. Discover curated fashion for men, women, and children, blending luxury with the latest trends. Our store offers a sophisticated haven for style enthusiasts.
                            </h6>
                            <h6 style={{ fontFamily: "Audiowide" }}>
                                Explore high-quality fashion and lifestyle products that redefine elegance. Enjoy seamless online shopping with secure transactions and swift deliveries. Elevate your style effortlessly with Techwear
                            </h6>

                            <h5 style={{ textShadow: "2px 2px 5px rgba(255, 255, 255, 1)", fontFamily: "Audiowide", textAlign: 'center' }}>
                                –Where Chic Meets Sophistication.
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
