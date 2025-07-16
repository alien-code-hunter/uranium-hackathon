import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ChevronLeft, ChevronRight, CheckCircle, Book, Video, Users, Award } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  description: string;
  modules: Module[];
  level: string;
  duration: string;
}

interface Module {
  id: string;
  title: string;
  content: string;
  type: 'text' | 'video' | 'quiz';
  completed: boolean;
  videoUrl?: string;
  quiz?: {
    question: string;
    options: string[];
    correctAnswer: number;
  };
}

const CoursePage = ({ courseId, onBack }: { courseId: string; onBack: () => void }) => {
  const [currentModule, setCurrentModule] = useState(0);
  const [userAnswers, setUserAnswers] = useState<{ [key: string]: number }>({});

  const courses: { [key: string]: Course } = {
    'beginner-path': {
      id: 'beginner-path',
      title: 'Uranium Mining Fundamentals',
      description: 'Complete introduction to uranium, mining processes, and industry basics.',
      level: 'Beginner',
      duration: '6-8 weeks',
      modules: [
        {
          id: 'intro-uranium',
          title: 'Introduction to Uranium',
          type: 'text',
          completed: false,
          content: `
            <h3>What is Uranium?</h3>
            <p>Uranium is a naturally occurring radioactive element with the chemical symbol U and atomic number 92. It is the heaviest naturally occurring element and is found in small amounts in rock, soil, and water.</p>
            
            <h4>Key Properties:</h4>
            <ul>
              <li>Silvery-white metallic appearance</li>
              <li>Highly dense (19.1 g/cm³)</li>
              <li>Radioactive with a half-life of 4.5 billion years</li>
              <li>Three main isotopes: U-234, U-235, and U-238</li>
            </ul>

            <h4>Nuclear Properties:</h4>
            <p>Uranium-235 is fissile, meaning it can sustain a nuclear chain reaction. This property makes it valuable for nuclear power generation and nuclear weapons. Only 0.7% of natural uranium is U-235, while 99.3% is U-238.</p>

            <h4>Discovery and History:</h4>
            <p>Uranium was discovered in 1789 by German chemist Martin Heinrich Klaproth. The radioactive properties were discovered by Antoine Henri Becquerel in 1896, leading to the development of nuclear physics.</p>
          `
        },
        {
          id: 'geology-deposits',
          title: 'Geology of Uranium Deposits',
          type: 'text',
          completed: false,
          content: `
            <h3>Formation of Uranium Deposits</h3>
            <p>Uranium deposits form through various geological processes over millions of years. Understanding these processes is crucial for exploration and mining.</p>

            <h4>Primary Deposits:</h4>
            <ul>
              <li><strong>Unconformity-related:</strong> High-grade deposits found at geological unconformities</li>
              <li><strong>Intrusive:</strong> Associated with granite intrusions</li>
              <li><strong>Volcanic:</strong> Related to volcanic activity and caldera formations</li>
            </ul>

            <h4>Secondary Deposits:</h4>
            <ul>
              <li><strong>Sandstone-hosted:</strong> Roll fronts in permeable sandstone</li>
              <li><strong>Surficial:</strong> Near-surface concentrations in arid environments</li>
              <li><strong>Metasomatite:</strong> Altered host rocks with uranium concentration</li>
            </ul>

            <h4>Namibian Context:</h4>
            <p>Namibia hosts significant uranium deposits in the Namib Desert, primarily in alaskite intrusions and surficial deposits. The Erongo region contains some of the world's largest uranium mines.</p>
          `
        },
        {
          id: 'quiz-1',
          title: 'Module 1 Quiz',
          type: 'quiz',
          completed: false,
          content: '',
          quiz: {
            question: 'What percentage of natural uranium is the fissile isotope U-235?',
            options: ['0.7%', '7%', '70%', '99.3%'],
            correctAnswer: 0
          }
        }
      ]
    },
    'strategic-locations': {
      id: 'strategic-locations',
      title: 'Strategic Mining Locations',
      description: 'Detailed analysis of strategic uranium mining locations in Namibia.',
      level: 'Intermediate',
      duration: '4 weeks',
      modules: [
        {
          id: 'erongo-region',
          title: 'Erongo Region Analysis',
          type: 'text',
          completed: false,
          content: `
            <h3>Erongo Region: Heart of Namibian Uranium Mining</h3>
            <p>The Erongo Region is Namibia's primary uranium mining hub, hosting the Rössing and Husab mines, two of the world's largest uranium operations.</p>

            <h4>Geological Advantages:</h4>
            <ul>
              <li>Rich alaskite intrusions with uranium mineralization</li>
              <li>Favorable geological structures for large-scale mining</li>
              <li>Proven reserves exceeding 500,000 tonnes of uranium</li>
            </ul>

            <h4>Infrastructure Benefits:</h4>
            <ul>
              <li>Proximity to Swakopmund port (60km)</li>
              <li>Existing road and rail networks</li>
              <li>Established power supply infrastructure</li>
              <li>Skilled workforce availability</li>
            </ul>

            <h4>Environmental Considerations:</h4>
            <p>The region operates in the sensitive Namib Desert ecosystem, requiring careful environmental management and water conservation strategies.</p>
          `
        }
      ]
    }
  };

  const course = courses[courseId];
  const module = course?.modules[currentModule];
  const completedModules = course?.modules.filter(m => m.completed).length || 0;
  const progressPercentage = (completedModules / (course?.modules.length || 1)) * 100;

  if (!course) {
    return <div>Course not found</div>;
  }

  const handleAnswerSubmit = (answer: number) => {
    if (module?.quiz) {
      setUserAnswers({ ...userAnswers, [module.id]: answer });
      const isCorrect = answer === module.quiz.correctAnswer;
      if (isCorrect) {
        module.completed = true;
      }
    }
  };

  const nextModule = () => {
    if (currentModule < course.modules.length - 1) {
      setCurrentModule(currentModule + 1);
    }
  };

  const prevModule = () => {
    if (currentModule > 0) {
      setCurrentModule(currentModule - 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <Button variant="outline" onClick={onBack} className="mb-4">
          <ChevronLeft className="h-4 w-4 mr-2" />
          Back to Courses
        </Button>
        
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
            <p className="text-muted-foreground">{course.description}</p>
          </div>
          <div className="flex gap-2">
            <Badge>{course.level}</Badge>
            <Badge variant="outline">{course.duration}</Badge>
          </div>
        </div>

        {/* Progress */}
        <div className="bg-card p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Course Progress</span>
            <span className="text-sm text-muted-foreground">
              {completedModules}/{course.modules.length} modules completed
            </span>
          </div>
          <Progress value={progressPercentage} className="mb-2" />
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Award className="h-4 w-4" />
            <span>Certificate available upon completion</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Module Navigation */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Course Modules</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {course.modules.map((mod, index) => (
                  <button
                    key={mod.id}
                    onClick={() => setCurrentModule(index)}
                    className={`w-full text-left p-3 rounded-lg border transition-all ${
                      index === currentModule 
                        ? 'border-primary bg-primary/10' 
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {mod.completed && <CheckCircle className="h-4 w-4 text-green-500" />}
                      {mod.type === 'video' && <Video className="h-4 w-4" />}
                      {mod.type === 'text' && <Book className="h-4 w-4" />}
                      {mod.type === 'quiz' && <Users className="h-4 w-4" />}
                      <span className="text-sm font-medium">{mod.title}</span>
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Module Content */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{module?.title}</CardTitle>
                <Badge variant="outline">{module?.type}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              {module?.type === 'text' && (
                <div 
                  className="prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: module.content }}
                />
              )}

              {module?.type === 'quiz' && module.quiz && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">{module.quiz.question}</h3>
                  <div className="space-y-2">
                    {module.quiz.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswerSubmit(index)}
                        className={`w-full p-3 text-left border rounded-lg transition-all ${
                          userAnswers[module.id] === index
                            ? index === module.quiz!.correctAnswer
                              ? 'border-green-500 bg-green-50'
                              : 'border-red-500 bg-red-50'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                  {userAnswers[module.id] !== undefined && (
                    <div className={`p-3 rounded-lg ${
                      userAnswers[module.id] === module.quiz.correctAnswer
                        ? 'bg-green-50 text-green-800'
                        : 'bg-red-50 text-red-800'
                    }`}>
                      {userAnswers[module.id] === module.quiz.correctAnswer
                        ? 'Correct! Well done.'
                        : 'Incorrect. Please try again.'}
                    </div>
                  )}
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between mt-8 pt-4 border-t">
                <Button
                  variant="outline"
                  onClick={prevModule}
                  disabled={currentModule === 0}
                >
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Previous
                </Button>

                <Button
                  onClick={nextModule}
                  disabled={currentModule === course.modules.length - 1}
                >
                  Next
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;