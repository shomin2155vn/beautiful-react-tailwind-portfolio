import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Future AI Engineer
            </h3>

            <p className="text-muted-foreground">
              I'm a student of Bach Khoa University from Ho Chi Minh City (HCMUT). With a strong passion for technology, I am striving to become an AI Engineer.
            </p>

            <p className="text-muted-foreground">
              My research interests include Computer Vision, Natural Language Processing, Large Language Models and Generative AI.I am looking to join a company that values innovation, collaboration, and continuous learning and am confident that my enthusiasm and drive will help me succeed in any role that leverages my passion for technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> AI & Machine Learning</h4>
                  <p className="text-muted-foreground">
                    Designing and training intelligent systems using machine learning and deep learning techniques.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Science & Analytics</h4>
                  <p className="text-muted-foreground">
                    Analyzing complex datasets to uncover insights, build predictive models, and support data-driven decisions.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI Solutions Deployment</h4>
                  <p className="text-muted-foreground">
                    Deploying and scaling AI models into production, ensuring performance, reliability, and business impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
