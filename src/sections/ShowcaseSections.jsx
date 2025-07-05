import React, { use } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSections = () => {
    const sectionRef = React.useRef(null);
    const project1Ref = React.useRef(null);
    const project2Ref = React.useRef(null);
    const project3Ref = React.useRef(null);

    // everything inside useGSAP will be executed when the component mounts, once!
    useGSAP(() => {
    // gathering all project refs into an array so I can animate them together one by one, on scroll
    const projects = [project1Ref.current, project2Ref.current, project3Ref.current];
    //opening new function block for each card
    projects.forEach((card, index) => {
        // using gsap to animate each project card
        gsap.fromTo(card, 
            { opacity: 0, y: 50 }, 
            { 
                opacity: 1, 
                y: 0, 
                duration: 1, 
                delay: (index + 1) * 0.3, // stagger effect
                scrollTrigger: {
                    trigger: card,
                    start: "top bottom-=100", // when the top of the card reaches the bottom of the viewport minus 100px
                    toggleActions: "play none none reverse",
                    markers: true, // for debugging purposes
                }
            });
    })
        gsap.fromTo(sectionRef.current, 
            { opacity: 0 },
            { opacity: 1, duration: 1.5})
    }, []);
  return (
    <section id='work' ref={sectionRef} className='app-showcase'>
        <div className="w-full">
            <div className="showcaselayout">
                {/* Left */}
                <div className="first-project-wrapper" ref={project1Ref}>
                    <div className="image-wrapper">
                        <img src="/images/project1.png" alt="Ryde" />
                    </div>
                    <div className="text-content">
                        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                        <p className="text-white-50 md:text-xl">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error fugit aperiam, ab quos provident maxime est ipsa dolore excepturi dolor iusto, sapiente, reprehenderit exercitationem eveniet soluta quisquam! Quo, excepturi dolorum?
                        </p>
                    </div>
                </div>
                {/* Right */}
                <div className="project-list-wrapper overflow-hidden">
                    <div className="project" ref={project2Ref}>
                        <div className='image-wrapper bg-[#ffefdb]'>
                            <img src="/images/project2.png" alt="Library Management" />
                        </div>
                        <h2>Library Management</h2>
                    </div>

                    <div className="project" ref={project3Ref}>
                        <div className='image-wrapper bg-[#ffe7eb]'>
                            <img src="/images/project2.png" alt="Library Management" />
                        </div>
                        <h2>Management Platform</h2>
                    </div>

                    <div className="project">
                        <div className='image-wrapper bg-[#e9ffdb]'>
                            <img src="/images/project3.png" alt="YC Management" />
                        </div>
                        <h2>YC Directory Platform</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShowcaseSections