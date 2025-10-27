import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

export const Education = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-gradient-primary bg-clip-text text-transparent">
          Education
        </h2>
        <Card className="border-border/50 hover-scale">
          <CardHeader>
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div>
                <CardTitle className="flex items-center gap-2 text-xl mb-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  Bachelor of Technology
                </CardTitle>
                <CardDescription className="text-base font-medium mb-2">
                  Artificial Intelligence and Machine Learning
                </CardDescription>
                <CardDescription>
                  Oriental Institute Of Science And Technology
                </CardDescription>
              </div>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  October 2021 – July 2025
                </div>
                <div className="font-medium text-primary">
                  CGPA: 7.91 (8th Sem)
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div>
              <h4 className="font-semibold mb-3 text-foreground">Relevant Coursework:</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Artificial Intelligence",
                  "Machine Learning",
                  "Data Structures",
                  "Distributed Computing",
                  "Database Management",
                  "Operating Systems",
                  "Computer Networking",
                  "Computer Architecture",
                ].map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
