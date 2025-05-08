import resumePDF from '/Users/jackmp18/Github/Personal-Website/Assets/Jack-Page-Resume.pdf';

export default function About() {
  return (
    <section className="mt-10 space-y-4">
      <h2 className="text-3xl font-bold">About Me</h2>
      <p>
        I'm a senior Computer Science student at Cal State Fullerton with a passion for full-stack development,
        AI, and software engineering. I enjoy building projects that solve real-world problems and showcase creative design.
      </p>
      <p>
        I have experience with React, .NET Core, C#, SQL Server, and Agile development practices.
        I'm currently working on a portfolio website and a geospatial clustering tool using Vite + React.
      </p>
      <a
        href={resumePDF}
        target="_blank"
        className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        View Resume
      </a>
    </section>
  );
}
