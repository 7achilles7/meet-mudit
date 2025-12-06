import { resumeData } from '../data/resume';

export const Contact = () => {
  const { personal } = resumeData;

  return (
    <section id="contact" className="section bg-dark-lighter">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Let's Connect
          </h2>

          <p className="text-xl text-gray-300 mb-12">
            Interested in collaborating or discussing data analytics opportunities?
            Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Email */}
            <a
              href={`mailto:${personal.email}`}
              className="group bg-dark p-6 rounded-lg border border-gray-800 hover:border-white transition-all"
            >
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-400 text-sm group-hover:text-white transition-colors break-all">
                {personal.email}
              </p>
            </a>

            {/* Phone */}
            <a
              href={`tel:${personal.phone}`}
              className="group bg-dark p-6 rounded-lg border border-gray-800 hover:border-white transition-all"
            >
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-400 text-sm group-hover:text-white transition-colors">
                {personal.phone}
              </p>
            </a>

            {/* LinkedIn */}
            <a
              href={`https://${personal.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-dark p-6 rounded-lg border border-gray-800 hover:border-white transition-all"
            >
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                LinkedIn
              </h3>
              <p className="text-gray-400 text-sm group-hover:text-white transition-colors">
                {personal.linkedin.replace('linkedin.com/in/', '@')}
              </p>
            </a>
          </div>

          {/* Location */}
          <div className="text-gray-500 font-mono">
            📍 Based in {personal.location}
          </div>
        </div>
      </div>
    </section>
  );
};
