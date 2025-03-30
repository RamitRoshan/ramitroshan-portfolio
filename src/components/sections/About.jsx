import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Redux",
    "Tailwind CSS",
    "Bootstrap",
  ];

  const backendSkills = ["Node.js", "Express.js", "Java", "PHP" ,"REST API", "MYSQL","Firebase", "MongoDB"];

  const toolsAndPlatforms = ["Git","GitHub","Postman", "HOPPSCOTCH","Vercel","Netlify","AWS"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
     <RevealOnScroll> 
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              A passionate developer with expertise in building scalable web applications and crafting 
              innovative solutions. I continuously enhance my skills to stay ahead in the industry. 
              By blending creativity with functionality, I develop web solutions that engage and delight users.
               
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          {/* Tools & Platforms */}
          <div className="rounded-xl p-6 hover:-translate-y-1 transition-all mt-6">
            <h3 className="text-xl font-bold mb-4">Tools & Platforms</h3>
            <div className="flex flex-wrap gap-2">
              {toolsAndPlatforms.map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Education & Work Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">

                  <strong> B.E. in Computer Science </strong> - Chandigarh University
                  (2020-2024)
                
                <li>CGPA: 7.22</li>
                <li>
                  Relevant Coursework: Data Structures & Algorithms, Database Management Systems, Web Development, Object-Oriented Programming, Operating Systems.
                </li>

                <strong> Frontend Development </strong> - Namaste Dev by Akshay Saini
                <li>
                  Relevant Coursework: Namaste JavaScript & Namaste React.js
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Software Engineer - Ansh Soft Tech (Aug 2024 - Jan 2025)
                  </h4>
                  <br/>
                  <p>
                  - Developed responsive web applications using React.js, Redux, Tailwind CSS, and JavaScript.
                  </p>
                  <p>
                  - Integrated REST APIs and managed state efficiently using Redux.
                  </p>
                  <p>
                  - Optimized UI/UX, ensuring cross-browser compatibility and seamless user experience.
                  </p>
                  
                </div>

                <div>
                  <h4 className="font-semibold">
                    Java Trainee - Solitaire Infosys Pvt. Ltd.
                  </h4>
                  <br/>
                  <p>
                  - Trained in Java, OOP, and API integration (MySQL).
                  </p>
                  <p>
                  - Developed a Java-based project with database management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};