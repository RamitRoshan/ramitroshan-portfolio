import { RevealOnScroll } from "../RevealOnScroll";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
export const Home = () => {
    return (
        <section 
          id="home" 
          className="min-h-screen flex items-center justify-center relative"
        >
         <RevealOnScroll>
            <div className="text-center z-10 px-4">
                
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right"> 
                    Hi there,<br/>I'm Ramit Roshan
                </h1>

                <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
                A web developer passionate about crafting clean, scalable, 
                and high-performance web applications. I focus on building 
                solutions that are both efficient and user-friendly, ensuring a seamless experience for users.
                </p>

                <div className="flex justify-center space-x-4">
                    <a 
                    href="#projects"
                    className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
                    >
                        View Projects
                    </a>

                    <a
                    href="#contact"
                    //py-padding in y axis
                    className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
                    hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
                    >
                        Contact Me
                    </a>

                </div>

                    {/* Social Media Icons */}
                    <div className="flex justify-center space-x-6 mt-6">
                    <a 
                    href="https://github.com/RamitRoshan" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-white transition"
                    >
                        <Github size={32} />
                    </a>
                    
                    <a 
                    href="https://www.linkedin.com/in/ramit-roshan32/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-white transition">
                        <Linkedin size={32} />
                    </a>

                    {/* Email */}
                    <a 
                    href="mailto:ramitroshan777777@gmail.com"
                    className="text-gray-400 hover:text-white transition"
                    >
                        <Mail size={32} />
                    </a>

                     {/* WhatsApp */}
                     <a 
                    href="https://wa.me/919798810046"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition"
                    >
                        <MessageCircle size={32} />
                    </a>

                </div>
                  
            </div>
         </RevealOnScroll>
        </section>
    );  
};