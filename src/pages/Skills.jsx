export default function Skills() {
  return (
    <section className="mt-10">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold text-lg mb-2 text-gray-800">Technical</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>React, JavaScript, HTML, CSS</li>
            <li>.NET Core, C#, SQL Server</li>
            <li>Node.js, MongoDB</li>
            <li>Python, Java, C++</li>
            <li>Git, Agile, CI/CD, Jira</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2 text-gray-800">Soft Skills</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Team Leadership</li>
            <li>Project Management</li>
            <li>Effective Communication</li>
            <li>Creative Problem-Solving</li>
            <li>Adaptability</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
