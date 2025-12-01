import { useState } from 'react';
import Navbar from '../components/Navbar';
import RevealOnScroll from '../components/RevealOnScroll';
import { coursesData } from '../data/constants';

const Courses = () => {
  const [visibleCourses, setVisibleCourses] = useState(7);
  const showMoreCourses = () => setVisibleCourses(coursesData.length);
  const showLessCourses = () => setVisibleCourses(7);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <RevealOnScroll>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">الدورات التدريبية والشهادات</h1>
            <p className="text-center text-lg text-gray-600 mb-12">مجموعة من 52 دورة وشهادة في مجالات التحليل، الأمن، الجودة، والإدارة</p>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coursesData.slice(0, visibleCourses).map((course) => (
              <RevealOnScroll key={course.id}>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200">
                  <h3 className="text-xl font-semibold text-teal-700 mb-2">{course.title}</h3>
                  <p className="text-gray-500">{course.issuer}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
          <div className="text-center mt-8">
            {visibleCourses < coursesData.length && <button onClick={showMoreCourses} className="bg-teal-700 text-white px-6 py-3 rounded-full hover:bg-teal-800 transition-colors">عرض المزيد</button>}
            {visibleCourses > 7 && <button onClick={showLessCourses} className="border border-teal-700 text-teal-700 px-6 py-3 rounded-full hover:bg-teal-700 hover:text-white transition-colors">عرض أقل</button>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;