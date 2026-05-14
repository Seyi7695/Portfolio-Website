export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">About Me</h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Hi, I’m a <span className="font-bold">UI/UX</span> and{" "}
                <span className="font-bold">Graphics Designer</span> with
                frontend development skills, focused on creating clean,
                functional, visually engaging, and easy to use.
              </p>
              <p>
                I enjoy turning ideas into designs that not only look good but also feel natural and intuitive for users. 
                From wireframes and visual design to responsive frontend implementation, 
                I focus on creating experiences that solve real problems and leave a lasting impression.
              </p>
              <p>
              I have a strong understanding of design principles and modern web technologies, which helps me create products that balance creativity, 
              usability, and performance. Whether I’m designing interfaces, refining user experiences, or bringing layouts to life on the frontend, 
              my focus is always on building seamless and meaningful digital experiences..
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/level4class.jpg"
                alt="Designer workspace"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 top-8 -right-8 w-full h-full border-2 border-purple-500/20 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
