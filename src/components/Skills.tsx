import { resumeData } from '../data/resume';

export const Skills = () => {
  const { skills } = resumeData;

  return (
    <section id="skills" className="section bg-dark-lighter">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Skills & Expertise
        </h2>

        <div className="max-w-6xl mx-auto space-y-12">
          {skills.map((skillCategory, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-2xl font-bold text-white border-b border-gray-700 pb-2">
                {skillCategory.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {skillCategory.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-dark border border-gray-700 rounded-lg text-gray-300 hover:border-white hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
