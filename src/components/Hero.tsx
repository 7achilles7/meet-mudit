import { resumeData } from '../data/resume';

export const Hero = () => {
  const { personal } = resumeData;

  return (
    <section id="home" className="section">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                {personal.name}
              </h1>
              <p className="text-2xl md:text-3xl text-gray-400 font-mono">
                {personal.title}
              </p>
            </div>

            <p className="text-xl text-gray-300 max-w-2xl">
              {personal.tagline}
            </p>

            <div className="flex gap-4 pt-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="#experience"
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-colors"
              >
                View Work
              </a>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="flex-shrink-0">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-dark-lighter border-4 border-gray-700 overflow-hidden">
              <img
                src="/profile-photo.jpg"
                alt={personal.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
