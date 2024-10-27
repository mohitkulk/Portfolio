import React from 'react';
import kImage from '/Users/mohitkulkarni/Desktop/coding/personal portfoilio/portfolio/src/images/k.jpg';


const Main = () => {
    return (
        <main>
            <section className="firstSection">
                <div className="leftSection">
                    I'm <span class="purple">Mohit</span>,
                    <div>Web Developer</div>
                    <span id="element"></span>
                </div>
                <div className="rightSection">
                    <img src={kImage} alt="" />
                </div>
            </section>
            <hr className="customHr" />
            <section class="secondSection">
                <span class="gray">What i have done so far</span>
                <h1> Work Experience</h1>
                <div class="box">
                    <div class="vertical">
                        <div class="vertical-title">
                            Amazon Web Services
                        </div>
                        <div class="vertical-desc">
                            I have hands-on experience with AWS services like EC2, S3, Lambda, and RDS, focusing on cloud infrastructure and automation.
                            I am seeking opportunities in AWS and cloud-based roles to contribute to innovative, scalable solutions.

                        </div>
                    </div>
                    <div class="vertical">
                        <div class="vertical-title">
                            Full-Stack web Development
                        </div>
                        <div class="vertical-desc">
                            A skilled Full Stack Developer with expertise in front-end and back-end development.

                        </div>
                    </div>
                    <div class="vertical">
                        <div class="vertical-title">
                            Python Developer
                        </div>
                        <div class="vertical-desc">
                            Python libraries
                            Frontend using Python with all attributes (place, pack, buttonClick).
                            Backend using MySQL Server.
                        </div>
                    </div>
                    <div class="vertical">
                        <div class="vertical-title">
                            Oracle-Certification
                        </div>
                        <div class="vertical-desc">
                            I have successfully cleared my Oracle cloud Infrastructure Exam In Courses(AI,ML Dl)

                        </div>
                    </div>
                </div>
            </section >

            <footer>
                <div class="footer">
                    <div class="footer-first">
                        <h3> Mohit Developer</h3>
                    </div>
                    <div class="footer-Second">
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div class="footer-Third">
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
                <div class="text-center">
                    copright&#169; www.mohitportfolio.com | All rights reseved
                </div>
            </footer>


        </main >

    );
}

export default Main;
