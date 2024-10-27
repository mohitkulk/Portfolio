import React from "react";
import KpImage from '/Users/mohitkulkarni/Desktop/coding/personal portfoilio/portfolio/src/images/12.jpeg';

const About = () => {
    return (
        <div className="container">
            <h1>About Me</h1>
            <section className="content">
                <div className="left">
                    <img src={KpImage} alt="Portrait" />
                </div>
                <div className="right">
                    <p>
                        Completed my education at Jawaharlal Nehru Engineering. My father is a business Manager,
                        managing enterprise, while my mother is a dedicated housewife. I have a younger
                        sister who brings joy and energy to our family.
                    </p>
                    <p>
                        Inspired by my father's entrepreneurial spirit, I am eager to apply my education and skills
                        to contribute to the success of his enterprise or explore new opportunities in the business realm.
                        My father's guidance and mentorship have been invaluable in shaping my understanding of the
                        business world.My mother, a dedicated housewife, has been the pillar of support for our family. Her nurturing
                        presence has created a warm and harmonious environment at home. I have always admired her
                        resilience and ability to balance the responsibilities of a homemaker.
                    </p>
                    <p>
                        When not working alongside clients, I thoroughly enjoy getting to create and spend time on personal projects,
                        whether that’s a new project I am lifting off the ground or exhibiting new work.
                    </p>
                    <h2>Competitions</h2>
                    <ul>
                            <li>Participated in the District-Level Swimming Competition during school, showcasing athletic skill and commitment to sports.</li>
                            <li>Awarded Runner-Up in the Inter-College Badminton Competition as part of a group event, demonstrating teamwork and competitive spirit.</li>
                            <li>Active participant in the PICT International Hackathon, where I collaborated with peers to solve real-world problems through innovative technology solutions.</li>
                            <li>Competed in the Vaarroc International Competition, an event that allowed me to challenge myself alongside talented individuals from various backgrounds.</li>
                            <li>Achieved Oracle Cloud Infrastructure Certification, enhancing my knowledge and expertise in cloud technologies and infrastructure.</li>

                    </ul>
                </div>
            </section>
        </div>
    );
};

export default About;
