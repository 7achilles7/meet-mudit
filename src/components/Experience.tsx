import { resumeData } from '../data/resume';

export const Experience = () => {
  const { experience } = resumeData;

  return (
    <section id="experience" className="section">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Experience
        </h2>

        <div className="max-w-5xl mx-auto space-y-12">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="border-l-4 border-white pl-8 pb-12 relative group hover:border-gray-400 transition-colors"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-white rounded-full group-hover:scale-125 transition-transform" />

              {/* Company & Position */}
              <div className="mb-4 flex items-start gap-4">
                {exp.logo && (
                  <div className="flex-shrink-0 w-16 h-16 bg-white rounded-lg p-2 flex items-center justify-center">
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {exp.company}
                  </h3>
                  <p className="text-xl text-gray-300 font-mono mt-1">
                    {exp.position}
                  </p>
                  <p className="text-gray-500 mt-2">
                    {exp.duration} • {exp.location}
                  </p>
                </div>
              </div>

              {/* Achievements */}
              <ul className="space-y-3 text-gray-300">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-white mt-1">▸</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
