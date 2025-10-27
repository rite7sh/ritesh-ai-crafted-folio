import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-gradient-primary bg-clip-text text-transparent">
          Experience
        </h2>
        <Card className="border-border/50 hover-scale">
          <CardHeader>
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div>
                <CardTitle className="flex items-center gap-2 text-xl mb-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  Machine Learning Intern
                </CardTitle>
                <CardDescription className="text-base font-medium">
                  Bharat Intern
                </CardDescription>
              </div>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Jun 2023 – Jul 2023
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Remote
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary mt-1">•</span>
                <span>
                  Built an end-to-end supervised learning pipeline to classify Iris flowers into three species (Setosa, Versicolor, Virginica) using key features like petal and sepal dimensions; utilized the UCI Iris dataset for model development and experimentation.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1">•</span>
                <span>
                  Implemented and compared multiple algorithms including Logistic Regression, K-Nearest Neighbors (KNN), and Support Vector Machine (SVM). Performed hyperparameter tuning and model evaluation using accuracy, confusion matrix, and cross-validation techniques.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1">•</span>
                <span>
                  Achieved over 95 percent test accuracy visualized data distributions and decision boundaries using Matplotlib and Seaborn.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
