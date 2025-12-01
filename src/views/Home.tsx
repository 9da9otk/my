import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Download, Mail, Award, Code, GraduationCap } from 'lucide-react';
import Navbar from '../components/Navbar';
import RevealOnScroll from '../components/RevealOnScroll';
import FloatingBlobs from '../components/FloatingBlobs';
import { skillsData, experienceData, projectsData, aboutText, educationData } from '../data/constants';

const Home = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <>
      <Navbar />
      <div className="relative bg-gradient-to-b from-slate-50 to-white min-h-screen">
        <section id="home" className="relative flex flex-col items-center justify-center text-center py-20 px-4 overflow-hidden">
          <FloatingBlobs />
          <motion.div style={{ y }} className="relative z-10">
            <div className="relative w-48 h-48 mx-auto mb-8">
              <div className="absolute inset-0 bg-teal-700 rounded-full animate-pulse"></div>
              <img src="https://media.licdn.com/dms/image/D4D03AQHdGy0V5k4qFg/profile-displayphoto-shrink_800_800/0/1668563715426?e=1724889600&v=beta&t=3Yk6Jd8sQxL6J7qN9oWl8oL8sA6rF8oQ3dL7jK2fR8E" alt="صورة شخصية لسعد" className="relative z-10 w-full h-full rounded-full object-cover border-4 border-white shadow-xl"/>
            </div>
            <RevealOnScroll>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">سعد الدوسري</h1>
              <p className="text-xl md:text-2xl text-teal-700 font-medium">مدير التخطيط وتحليل البيانات والأمن | Power BI | ISO 31000 | SOPs</p>
            </RevealOnScroll>
            <RevealOnScroll>
              <div className="mt-8 flex gap-4 justify-center flex-wrap">
                <a href="#contact" className="bg-teal-700 text-white px-6 py-3 rounded-full hover:bg-teal-800 transition-colors flex items-center gap-2"><Mail size={20} /> تواصل معي</a>
                <a href="/path/to/your/cv.pdf" download className="border-2 border-teal-700 text-teal-700 px-6 py-3 rounded-full hover:bg-teal-700 hover:text-white transition-colors flex items-center gap-2"><Download size={20} /> تحميل السيرة الذاتية</a>
              </div>
            </RevealOnScroll>
          </motion.div>
        </section>
        <RevealOnScroll>
          <section id="about" className="py-20 px-4">
            <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">نبذة عني</h2>
            <p className="max-w-4xl mx-auto text-center text-lg text-gray-600 leading-relaxed whitespace-pre-line">{aboutText}</p>
          </section>
        </RevealOnScroll>
        <RevealOnScroll>
          <section id="education" className="py-20 px-4 bg-gray-100">
            <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">التعليم</h2>
            <div className="max-w-2xl mx-auto text-center">
                <GraduationCap className="mx-auto text-teal-700 mb-4" size={48} />
                <h3 className="text-2xl font-semibold">{educationData.degree}</h3>
                <p className="text-lg text-gray-600">{educationData.university}</p>
                <p className="text-teal-600">{educationData.period}</p>
            </div>
          </section>
        </RevealOnScroll>
        <RevealOnScroll>
          <section id="experience" className="py-20 px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">الخبرات العملية</h2>
            <div className="max-w-5xl mx-auto space-y-8">
              {experienceData.map((exp, index) => (
                <motion.div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-teal-700" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                  <h3 className="text-2xl font-semibold text-gray-800">{exp.title}</h3>
                  <p className="text-teal-600 font-medium">{exp.company}</p>
                  <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
                  <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </RevealOnScroll>
        <RevealOnScroll>
          <section id="skills" className="py-20 px-4 bg-gray-100">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">المهارات</h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div><h3 className="text-xl font-semibold mb-4 text-teal-700">المهارات التقنية</h3><div className="flex flex-wrap gap-2 justify-center">{skillsData.technical.map((skill, i) => (<span key={i} className="bg-white px-3 py-1 rounded-full text-sm shadow-sm">{skill}</span>))}</div></div>
              <div><h3 className="text-xl font-semibold mb-4 text-teal-700">المهارات التحليلية</h3><div className="flex flex-wrap gap-2 justify-center">{skillsData.analytical.map((skill, i) => (<span key={i} className="bg-white px-3 py-1 rounded-full text-sm shadow-sm">{skill}</span>))}</div></div>
              <div><h3 className="text-xl font-semibold mb-4 text-teal-700">الإدارة والجودة</h3><div className="flex flex-wrap gap-2 justify-center">{skillsData.management.map((skill, i) => (<span key={i} className="bg-white px-3 py-1 rounded-full text-sm shadow-sm">{skill}</span>))}</div></div>
            </div>
          </section>
        </RevealOnScroll>
        <RevealOnScroll>
          <section id="projects" className="py-20 px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">مشاريع مختارة</h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectsData.map((project, index) => (
                <motion.div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow" whileHover={{ scale: 1.05 }}>
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4"><Code className="text-teal-700" size={24} /></div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </RevealOnScroll>
        <RevealOnScroll>
          <section className="py-20 px-4 text-center bg-gray-100">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">هل تريد معرفة المزيد عن مؤهلاتي؟</h2>
            <p className="text-lg text-gray-600 mb-8">استعرض قائمة الدورات التدريبية والشهادات التي حصلت عليها</p>
            <Link to="/courses" className="bg-teal-700 text-white px-8 py-3 rounded-full hover:bg-teal-800 transition-colors inline-flex items-center gap-2"><Award size={20} /> عرض الدورات التدريبية</Link>
          </section>
        </RevealOnScroll>
      </div>
    </>
  );
};

export default Home;