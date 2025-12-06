import { resumeData } from '../data/resume';

export const About = () => {
  const { personal } = resumeData;

  return (
    <section id="about" className="section bg-dark-lighter">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            About Me
          </h2>

          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>{personal.summary}</p>

            <div className="grid md:grid-cols-2 gap-6 pt-6">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">Location</h3>
                <p className="text-gray-400">{personal.location}</p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">Expertise</h3>
                <p className="text-gray-400">
                  Generative AI & LLMs, AI Agents, Data Engineering, MLOps/LLMOps, LangChain, Machine Learning, Python
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
