const projects = [
    {
      title: "Postagram",
      description: "A full-stack social media app using React, Node, and MongoDB.",
      tech: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/jackpage/postagram",
    },
    {
      title: "FreightPop Story Grader",
      description: "Internal GPT-powered tool for evaluating Jira stories.",
      tech: ["C#", ".NET", "OpenAI API"],
      link: "https://github.com/jackpage/story-grader",
    },
  ];
  
  export default function Projects() {
    return (
      <section className="mt-10 space-y-6">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        {projects.map((project, index) => (
          <div key={index} className="border p-4 rounded shadow-sm">
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="text-gray-700">{project.description}</p>
            <p className="mt-2 text-sm text-gray-500">
              Tech: {project.tech.join(", ")}
            </p>
            <a
              href={project.link}
              className="inline-block mt-2 text-blue-600 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </section>
    );
  }
  