const projects = [
  {
    title: "Postagram",
    description: "A full-stack social media app using React, Node, and MongoDB.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/jackmp18/Postagram",
  },
  {
    title: "FreightPop Story Grader",
    description: "Internal GPT-powered tool for evaluating Jira stories.",
    tech: ["C#", ".NET", "OpenAI API"],
    link: "https://github.com/jackmp18/Jira-GPT-Story-grader",
  },
];

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-6">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
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
      </div>
    </section>
  );
}
