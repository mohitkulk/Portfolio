import React from "react";
import './solo.css';
import lsImage from '../../src/assset/kk.jpg'; // Adjust this path based on your project structure

const Project = () => {
    return (
        <main>
            <section className="firstSectio">
                <div className="right">
                    <img src={lsImage} alt="Potrait" /> {/* Added alt attribute for accessibility */}
                </div>
            </section>
            <div className="lef">
                <label htmlFor="myfile">To watch more crazy projects</label>
                <span className="red">Click this &darr; button</span>
                <div>
                    <a 
                        href="https://github.com/Mohitkulkarni123/web-ddevelopment.git" 
                        className="button glow-button" 
                        target="_blank" 
                        rel="noopener noreferrer" // Added for security when using target="_blank"
                    >
                        Press ME
                    </a>
                </div>
            </div>
        </main>
    );
};

export default Project;
