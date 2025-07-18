export default function About() {
  return (
    <div className="min-h-screen bg-base-100 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="avatar mx-auto md:mx-0 flex justify-center md:justify-start">
              <div className="w-48 h-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                     alt="Andrew Brough" />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Hello, I'm Andrew Brough</h2>
            <p className="text-lg leading-relaxed">
              I'm a passionate developer with a love for creating elegant solutions to complex problems. 
              My journey in technology has taken me through various domains, from web development to 
              mobile applications and beyond.
            </p>
            <p className="leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or sharing my knowledge through writing and speaking. I believe in the power of 
              technology to make a positive impact on the world.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card bg-base-200 shadow-lg">
              <div className="card-body text-center">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="card-title justify-center">Frontend</h3>
                <p>React, TypeScript, Tailwind CSS, Next.js</p>
              </div>
            </div>
            
            <div className="card bg-base-200 shadow-lg">
              <div className="card-body text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="card-title justify-center">Backend</h3>
                <p>Node.js, Python, PostgreSQL, Supabase</p>
              </div>
            </div>
            
            <div className="card bg-base-200 shadow-lg">
              <div className="card-body text-center">
                <div className="text-4xl mb-4">🛠️</div>
                <h3 className="card-title justify-center">Tools</h3>
                <p>Git, Docker, AWS, Vercel, VSCode</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <p className="text-lg mb-8">
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to work together!
          </p>
          <div className="flex justify-center gap-4">
            <a href="mailto:hello@andrewbrough.com" className="btn btn-primary">
              Get In Touch
            </a>
            <a href="/moonrakers-mobile/index.html" className="btn btn-outline">
              View Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}