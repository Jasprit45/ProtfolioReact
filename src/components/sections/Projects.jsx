import { RevealOnScroll } from "../RevealOnScroll";


export const Projects = () => {

    return ( <section id="projects" 
    className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Featured Projects
            </h2>

            <div className="grid grid-cols-1 grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border  border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">

                    <h3 className="text-xl font-bold mb-2">Protfolio</h3>
                    <p className="text-gray-400 mb-4 ">
                    A personal portfolio website showcasing my projects, technical skills, and development journey. Built with React and Tailwind CSS with responsive design and modern UI. 
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["React", "TailwindCSS", "HTML", "emailJS"].map((tech,key) => (
                        <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            {tech}
                        </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project →</a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border  border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">

                    <h3 className="text-xl font-bold mb-2">Web Chat</h3>
                    <p className="text-gray-400 mb-4 ">
                        Designed the backend architecture of a real-time chat application using Node.js, Express, and WebSockets to manage user connections and enable seamless real-time messaging.
                    </p>
                    <div>
                        {["React", "Node.js", "WebSocket"].map((tech,key) => (
                        <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            {tech}
                        </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <a href="https://github.com/Jasprit45/Chat-app-NodeJs.git"  target="_blank"
  rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project →</a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border  border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">

                    <h3 className="text-xl font-bold mb-2">Auth System</h3>
                    <p className="text-gray-400 mb-4 ">
                        Microservice - Backend authentication system built with Node.js, Express, and JWT for secure user login, registration.
                    </p>
                    <div>
                        {["Express.js", "Node.js", "JWT","bcrypt","MySQL"].map((tech,key) => (
                        <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            {tech}
                        </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <a href="https://github.com/Jasprit45/AuthService.git" target="_blank"
  rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project →</a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border  border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">

                    <h3 className="text-xl font-bold mb-2">Thread-Platform</h3>
                    <p className="text-gray-400 mb-4 ">
                       Built Twitter-like microblogging features including 250-character posts, hashtags, likes, comments, and nested comments-on-comments.
                    </p>
                    <div>
                        {[ "Node.js", "passport", "MongoDB", "bcrypt", "JWT"].map((tech,key) => (
                        <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            {tech}
                        </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <a href="https://github.com/Jasprit45/Twitter-Dev.git"  target="_blank"
  rel="noopener noreferrer"  className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project →</a>
                    </div>
                </div>
            </div>

        </div>
        </RevealOnScroll>
    </section>
    );
};