import { RevealOnScroll } from "../RevealOnScroll";


export const About = () => {

    const frontendSkills = ["React", "TailwindCSS", "HTML", "CSS", "JavaScript"];
    const backendSkills = ["Node.js", "Express.js", "MongoDB", "MySQL", "WebSockets"];

    return <section id="about" className="min-h-screen flex justify-center items-center py-20">

        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
               About Me 
            </h2>

            <div className="rounded-xl border-white/10 border hover:-translate-y-1 transition-all">

                <p className="text-gray-300 mb-6">
                    I’m a Full-Stack Developer focused on building modern web applications using React, Node.js, and MongoDB while continuously improving my problem-solving skills through DSA.
                </p>
           
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech,key)=> (
                                <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>

                    </div>
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((tech,key)=> (
                                <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>

                    </div>

                </div>
            </div>
            {/* <div className="grid grid-cols-1 
            // grid-cols-2
             gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Education </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                        <strong>B.tech in CSE specialization in Data Science and Artificial Intelligence
                        </strong> - IIIT Ranchi {"2023-Present"}
                    </li>
                    <li>
                        <strong>B.tech in Computer Science and Engineering specialization in Data Science and Artificial Intelligence
                        </strong> - IIIT Ranchi {"2023-Present"}
                    </li>
                </ul>

                </div>

            </div> */}
        </div>
        </RevealOnScroll>
    </section>

};