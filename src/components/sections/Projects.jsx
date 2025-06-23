import { RevealOnScroll } from "../RevealOnScroll";
import { useState } from "react";

// export const Projects = () => {
//   return (
//     <section
//       id="projects"
//       className="min-h-screen flex items-center justify-center py-20"
//     >
//       <RevealOnScroll> 
    
//         <div className="max-w-5xl mx-auto px-4">
//           <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
//             Featured Projects
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
//               <h3 className="text-xl font-bold mb-2"> Planadore - CRM Admin Dashboard</h3>
//               <p className="text-gray-400 mb-4">
//               A React-based CRM dashboard for user management, document generation, 
//               and real-time analytics with interactive graphs and reports.
//               </p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {["React.js", "Redux","Tailwind CSS", "Chart.js"].map((tech, key) => (
//                   <span
//                     key={key}
//                     className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
//                                     hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
//                     "
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               <div className="flex justify-between items-center">
//                 <a
//                   href="https://planadore.vercel.app/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-400 hover:text-blue-300 transition-colors my-4"
//                 >
//                   View Project →
//                 </a>
//               </div>
//             </div>


//             <div
//               className="
//               glass p-6 rounded-xl border border-white/10 
//               hover:-translate-y-1 hover:border-blue-500/30
//               hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
//               transition-all
//             "
//             >
//               <h3 className="text-xl font-bold mb-2">Bite-Buddy</h3>
//               <p className="text-gray-400 mb-4">
//                 Bite‑Buddy is a modern and responsive food delivery web app built with React. It 
//                 allows users to browse restaurants, view their menus, search for dishes, filter 
//                 by top-rated options, and manage a shopping cart - all with smooth navigation and a clean UI.
//               </p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {["React.js", "Tailwind CSS", "Redux", "JavaScript", "RESTful APIs", "React Router DOM"].map((tech, key) => (
//                   <span
//                     key={key}
//                     className="
//                       bg-blue-500/10 text-blue-500 py-1 px-3 
//                       rounded-full text-sm
//                       transition
//                       hover:bg-blue-500/20 hover:-translate-y-0.5
//                       hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
//                     "
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//               <div className="flex justify-between items-center ">
//                 <a
//                   href="https://bite-buddy-dun.vercel.app/"
//                   className="text-blue-400 hover:text-blue-300 transition-colors my-4"
//                 >
//                   View Project →
//                 </a>
//               </div>
//             </div>


//             <div
//               className="
//               glass p-6 rounded-xl border border-white/10 
//               hover:-translate-y-1 hover:border-blue-500/30
//               hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
//               transition-all
//             "
//             >
//               <h3 className="text-xl font-bold mb-2">LinkAI</h3>
//               <p className="text-gray-400 mb-4">
//               A modern, responsive landing page for AI services with dark/light mode toggle, email capture, and smooth transitions. 
//               Built using React, TypeScript, Tailwind CSS, and Vite with custom theming and mobile-first design.
//               </p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {["React.js", "Tailwind CSS", "Zustand","TypeScript", "React DOM"].map(
//                   (tech) => (
//                     <span
//                       key={tech}
//                       className="
//                       bg-blue-500/10 text-blue-500 py-1 px-3 
//                       rounded-full text-sm
//                       transition
//                       hover:bg-blue-500/20 hover:-translate-y-0.5
//                       hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
//                     "
//                     >
//                       {tech}
//                     </span>
//                   )
//                 )}
//               </div>
//               <div className="flex justify-between items-center">
//                 <a
//                   href="https://launch-landing.vercel.app/"
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="text-blue-400 hover:text-blue-300 transition-colors my-4"
//                 >
//                   View Project →
//                 </a>
//               </div>
//             </div>

            
//             <div
//               className="
//               glass p-6 rounded-xl border border-white/10 
//               hover:-translate-y-1 hover:border-blue-500/30
//               hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
//               transition-all
//             "
//             >
//               <h3 className="text-xl font-bold mb-2">Real-Time Collaborative Text Editor</h3>
//               <p className="text-gray-400 mb-4">
//               A Google Docs-like text editor built with React & Firebase, enabling 
//               real-time collaboration and seamless text synchronization.
//               </p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {["React.js", "Firebase Firestore", "React Quill", "JavaScript"].map((tech, key) => (
//                   <span
//                     key={key}
//                     className="
//                       bg-blue-500/10 text-blue-500 py-1 px-3 
//                       rounded-full text-sm
//                       transition
//                       hover:bg-blue-500/20 hover:-translate-y-0.5
//                       hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
//                     "
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//               <div className="flex justify-between items-center">
//                 <a
//                   target="_blank" // Opens the link in a new tab
//                   rel="noopener noreferrer" // Prevents security vulnerabilities related to window.opener
//                   href="https://live-text-editor-eight.vercel.app/"
//                   className="text-blue-400 hover:text-blue-300 transition-colors my-4"
//                 >
//                   View Project →
//                 </a>
//               </div>
//             </div>


//             <div
//               className="
//               glass p-6 rounded-xl border border-white/10 
//               hover:-translate-y-1 hover:border-blue-500/30
//               hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
//               transition-all
//             "
//             >
//               <h3 className="text-xl font-bold mb-2">EncryptoGen</h3>
//               <p className="text-gray-400 mb-4">
//               A powerful password generator that allows users to create secure and customizable passwords 
//               based on selected criteria with real-time notifications.
//               </p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {["React.js", "React Toastify", "CSS"].map(
//                   (tech) => (
//                     <span
//                       key={tech}
//                       className="
//                       bg-blue-500/10 text-blue-500 py-1 px-3 
//                       rounded-full text-sm
//                       transition
//                       hover:bg-blue-500/20 hover:-translate-y-0.5
//                       hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
//                     "
//                     >
//                       {tech}
//                     </span>
//                   )
//                 )}
//               </div>
//               <div className="flex justify-between items-center">
//                 <a
//                   href="https://password-generator-app-ten-rho.vercel.app/"
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="text-blue-400 hover:text-blue-300 transition-colors my-4"
//                 >
//                   View Project →
//                 </a>
//               </div>
//             </div>

//           </div>
//         </div>
//       </RevealOnScroll>
//     </section>
//   );
// };



export const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const allProjects = [
    {
      title: "Planadore - CRM Admin Dashboard",
      description: "A React-based CRM dashboard for user management, document generation, and real-time analytics with interactive graphs and reports.",
      tech: ["React.js", "Redux", "Tailwind CSS", "Chart.js"],
      link: "https://planadore.vercel.app/",
    },
    {
      title: "Bite-Buddy",
      description: "A modern and responsive food delivery web app allowing users to browse restaurants, search dishes, and manage a cart with smooth navigation.",
      tech: ["React.js", "Tailwind CSS", "Redux", "JavaScript", "RESTful APIs", "React Router DOM"],
      link: "https://bite-buddy-dun.vercel.app/",
    },
    {
      title: "LinkAI",
      description: "A modern, responsive landing page for AI services with dark/light mode toggle, email capture, and smooth transitions.",
      tech: ["React.js", "Tailwind CSS", "Zustand", "TypeScript", "React DOM"],
      link: "https://launch-landing.vercel.app/",
    },
    {
      title: "Real-Time Collaborative Text Editor",
      description: "A Google Docs-like text editor built with React & Firebase, enabling real-time collaboration and seamless text synchronization.",
      tech: ["React.js", "Firebase Firestore", "React Quill", "JavaScript"],
      link: "https://live-text-editor-eight.vercel.app/",
    },
    {
      title: "EncryptoGen",
      description: "A powerful password generator that allows users to create secure and customizable passwords based on selected criteria with real-time notifications.",
      tech: ["React.js", "React Toastify", "CSS"],
      link: "https://password-generator-app-ten-rho.vercel.app/",
    },
    // Add more projects here as needed
  ];

  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 4);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {displayedProjects.map((project, index) => (
               
              <div
                key={index}
                className="glass p-6 rounded-xl border border-white/10 transform transition duration-500 ease-in-out hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {!showAll && (
            <div className="flex justify-center mt-10">
              <button
                onClick={() => setShowAll(true)}
                //className="relative group px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-medium shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 hover:from-blue-600 hover:to-cyan-600"
                className="text-lg px-6 py-3 transition-all duration-300 transform hover:scale-105 hover:bg-indigo-600 hover:text-white rounded-b-lg"
              >
                View More
              </button>
            </div>
          )}
        </div>
      </RevealOnScroll>
    </section>
  );
};
