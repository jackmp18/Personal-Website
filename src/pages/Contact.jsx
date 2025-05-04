export default function Contact() {
    return (
      <section className="mt-10">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <form className="space-y-4 max-w-lg">
          <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
          <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
          <textarea placeholder="Message" rows="5" className="w-full p-2 border rounded"></textarea>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send</button>
        </form>
  
        <div className="mt-6">
          <h3 className="text-xl font-semibold">Connect</h3>
          <div className="flex space-x-4 mt-2">
            <a href="https://github.com/jackpage" className="text-blue-600 hover:underline" target="_blank">GitHub</a>
            <a href="https://linkedin.com/in/jackpage" className="text-blue-600 hover:underline" target="_blank">LinkedIn</a>
          </div>
        </div>
      </section>
    );
  }
  