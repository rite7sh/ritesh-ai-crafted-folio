import { Code2, Globe, Brain, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    icon: Code2,
    title: "Programming Languages",
    skills: ["C++", "Python", "JavaScript", "SQL"],
  },
  {
    icon: Globe,
    title: "Web Development",
    skills: ["React.js", "FastAPI", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    icon: Brain,
    title: "Machine Learning",
    skills: ["OpenAI API", "Pinecone", "Neo4j", "Sentence Transformers", "OpenCV"],
  },
  {
    icon: Wrench,
    title: "Tools & Technologies",
    skills: ["MySQL", "Git", "GitHub", "Docker", "Qdrant", "FastAPI"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-gradient-primary bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="animate-fade-in-up hover-scale border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <category.icon className="h-5 w-5 text-primary" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
