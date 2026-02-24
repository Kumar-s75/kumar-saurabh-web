import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { projectsData } from "@/data/projects";

export default function ProjectsPage() {
  const FrontendProjects = projectsData.filter((p) => p.category === "Frontend");
  const FullstackProjects = projectsData.filter(
    (p) => p.category === "FullStack"
  );
  const BackendProjects = projectsData.filter(
    (p) => p.category === "Backend"
  );
  const MERNProjects = projectsData.filter((p) => p.category === "Mern");
  // const generalProjects = projectsData.filter((p) => p.category === "general");

  return (
    <div className="bg-background text-neutral-300 font-figtree antialiased selection:bg-pink-500/20 selection:text-white relative overflow-x-hidden min-h-screen">
      {/* Ambient Background Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-pink-900/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <Navbar />

      <main className="w-full max-w-6xl mx-auto px-6 py-32 relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-32 gap-12">
          <div>
            <h1 className="text-4xl md:text-6xl font-figtree font-normal text-white mb-6 tracking-tight leading-tight">
              Projects <span className="text-pink-500">Work</span>
            </h1>
            <p className="text-neutral-500 text-xl font-light">
              (2023 — Present)
            </p>
          </div>
          <div className="max-w-md flex flex-col justify-between h-full pt-2">
            <p className="text-neutral-400 text-lg leading-relaxed font-light mb-12">
              Have a look at some of the projects I've worked on. 
            </p>
            <div className="flex flex-col gap-2">
              <span className="text-white font-medium">Projects</span>
              <a
                href="mailto:kumarsaurabh27d@gmail.com"
                className="text-neutral-500 hover:text-white transition-colors"
              >
                kumarsaurabh27d@gmail.com
              </a>
            </div>
          </div>
        </div>


        {/* Agency Section */}
        {FrontendProjects.length > 0 && (
          <section className="mb-32">
            <h2 className="text-2xl font-figtree font-light text-white mb-12 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-pink-500"></span>
               Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20">
              {FrontendProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </section>
        )}

        {/* UI/UX Section */}
        {FullstackProjects.length > 0 && (
          <section className="mb-32">
            <h2 className="text-2xl font-figtree font-light text-white mb-12 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-pink-500"></span>
              Frontend Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20">
              {FullstackProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index + FrontendProjects.length}
                />
              ))}
            </div>
          </section>
        )}

        {/* Full Stack Section */}
        {BackendProjects.length > 0 && (
          <section className="mb-32">
            <h2 className="text-2xl font-figtree font-light text-white mb-12 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-pink-500"></span>
              Full-Stack Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20">
              {BackendProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index + BackendProjects.length + BackendProjects.length}
                />
              ))}
            </div>
          </section>
        )}

        {/* Freelance Section */}
        {MERNProjects.length > 0 && (
          <section className="mb-32">
            <h2 className="text-2xl font-figtree font-light text-white mb-12 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-pink-500"></span>
              Backend Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20">
              {MERNProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={
                    index +
                    FrontendProjects.length +
                    FullstackProjects.length +
                    BackendProjects.length
                  }
                />
              ))}
            </div>
          </section>
        )}

        {/* General Projects Section */}
        {/* {generalProjects.length > 0 && (
          <section className="mb-32">
            <h2 className="text-2xl font-figtree font-light text-white mb-12 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-pink-500"></span>
              Devops Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20">
              {generalProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={
                    index +
                    agencyProjects.length +
                    uiuxProjects.length +
                    fullstackProjects.length +
                    freelanceProjects.length
                  }
                />
              ))}
            </div>
          </section>
        )} */}

        <Contact />
        <Footer />
      </main>
    </div>
  );
}
