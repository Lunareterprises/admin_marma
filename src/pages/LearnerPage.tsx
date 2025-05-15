import React, { useState } from 'react';
import { BookOpen, CheckCircle, Clock, AlertTriangle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import Badge from '../components/ui/Badge';

const LearnerPage = () => {
  const [currentLesson, setCurrentLesson] = useState(1);
  const totalLessons = 15;
  const progress = (currentLesson / totalLessons) * 100;
  
  const lessons = [
    { id: 1, title: 'Introduction to CP\'s Reflex Marma', duration: '10 mins', completed: true },
    { id: 2, title: 'Basic Principles and Concepts', duration: '10 mins', completed: true },
    { id: 3, title: 'Understanding Body Energy Points', duration: '10 mins', completed: false },
    { id: 4, title: 'Therapeutic Techniques - Part 1', duration: '10 mins', completed: false },
    { id: 5, title: 'Therapeutic Techniques - Part 2', duration: '10 mins', completed: false },
    // Add remaining lessons...
  ];

  const courseCompleted = progress === 100;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Learning Dashboard</h1>
        <p className="text-gray-500 mt-1">Track your progress in CP's Reflex Marma course</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Course Progress</p>
                <h3 className="text-2xl font-bold mt-1">{Math.round(progress)}%</h3>
              </div>
              <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                <BookOpen size={24} />
              </div>
            </div>
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full transition-all duration-300" 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Completed Lessons</p>
                <h3 className="text-2xl font-bold mt-1">{currentLesson} of {totalLessons}</h3>
              </div>
              <div className="p-3 rounded-full bg-green-100 text-green-600">
                <CheckCircle size={24} />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Time Remaining</p>
                <h3 className="text-2xl font-bold mt-1">{(totalLessons - currentLesson) * 10} mins</h3>
              </div>
              <div className="p-3 rounded-full bg-amber-100 text-amber-600">
                <Clock size={24} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {courseCompleted && (
        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 rounded-full">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-900">Course Completed!</h3>
                <p className="text-green-700">You can now book your three-day residential Professional Training session.</p>
                <Button className="mt-4" variant="success">
                  Book Residential Training
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Course Lessons</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {lessons.map((lesson) => (
              <div 
                key={lesson.id}
                className="flex items-center justify-between p-4 bg-white border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-full ${lesson.completed ? 'bg-green-100' : 'bg-gray-100'}`}>
                    {lesson.completed ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <Clock className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{lesson.title}</h4>
                    <p className="text-sm text-gray-500">Duration: {lesson.duration}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge variant={lesson.completed ? 'success' : 'secondary'}>
                    {lesson.completed ? 'Completed' : 'Pending'}
                  </Badge>
                  <Button 
                    variant={lesson.completed ? 'outline' : 'primary'}
                    size="sm"
                    disabled={lesson.completed}
                  >
                    {lesson.completed ? 'Revisit' : 'Start Lesson'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Important Notice</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-start space-x-3 text-amber-800 bg-amber-50 p-4 rounded-lg">
            <AlertTriangle className="h-5 w-5 mt-0.5" />
            <div>
              <h4 className="font-medium">Residential Training Requirement</h4>
              <p className="mt-1">
                After completing all video lessons, you must attend a three-day residential Professional Training 
                session to become a certified CP's Reflex Marma therapist. The training includes hands-on practice, 
                advanced techniques, and final assessment.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LearnerPage;