import { resumeData } from '../data/resume';

export const Education = () => {
  const { education, certifications, awards } = resumeData;

  return (
    <section id="education" className="section">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Education & Achievements
        </h2>

        <div className="max-w-5xl mx-auto space-y-16">
          {/* Education */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white mb-8">Education</h3>
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-dark-lighter p-6 rounded-lg border border-gray-800 hover:border-gray-600 transition-colors"
              >
                <h4 className="text-2xl font-bold text-white">{edu.degree}</h4>
                <p className="text-xl text-gray-300 mt-2">
                  {edu.institution}
                </p>
                <p className="text-gray-500 mt-1">
                  {edu.duration} • {edu.location}
                </p>
                {edu.gpa && (
                  <p className="text-gray-400 mt-2">GPA: {edu.gpa}</p>
                )}
                {edu.thesis && (
                  <p className="text-gray-400 mt-3 italic">
                    <span className="font-semibold">Thesis:</span> {edu.thesis}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Awards */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white mb-8">Awards</h3>
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-dark-lighter p-6 rounded-lg border-l-4 border-yellow-500"
              >
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div>
                    <h4 className="text-2xl font-bold text-white">
                      {award.name}
                    </h4>
                    <p className="text-xl text-gray-300 mt-2">
                      {award.organization}
                    </p>
                    {award.description && (
                      <p className="text-gray-400 mt-3">{award.description}</p>
                    )}
                  </div>
                  <span className="text-gray-500 font-mono">{award.date}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white mb-8">
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-dark-lighter p-6 rounded-lg border border-gray-800 hover:border-gray-600 transition-colors"
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-start gap-4">
                      {cert.logo && (
                        <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg p-2 flex items-center justify-center">
                          <img
                            src={cert.logo}
                            alt={`${cert.provider} logo`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      )}
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white">{cert.name}</h4>
                        <p className="text-gray-400 mt-2">{cert.provider}</p>
                        {cert.date && (
                          <p className="text-gray-500 text-sm mt-1">{cert.date}</p>
                        )}
                      </div>
                    </div>
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-dark-lighter border border-gray-700 rounded-lg text-gray-300 hover:border-gray-500 hover:text-white transition-colors text-sm w-fit"
                      >
                        Show credential
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
