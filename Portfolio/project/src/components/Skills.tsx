import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  Database, 
  Brain, 
  Cloud, 
  BarChart3, 
  Smartphone,
  Server,
  GitBranch,
  Palette,
  Zap
} from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: <Code />,
    skills: ['Python', 'JavaScript', 'Java', 'C++', 'R', 'SQL'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Frontend Development',
    icon: <Smartphone />,
    skills: ['React', 'Next.js', 'Redux', 'HTML/CSS', 'Tailwind CSS', 'TypeScript'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Backend Development',
    icon: <Server />,
    skills: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT Authentication'],
    color: 'from-green-500 to-teal-500'
  },
  {
    title: 'Databases',
    icon: <Database />,
    skills: ['MongoDB', 'MySQL', 'PostgreSQL'],
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Machine Learning & AI',
    icon: <Brain />,
    skills: ['TensorFlow', 'PyTorch', 'Pandas', 'Scikit-learn', 'Data Science'],
    color: 'from-indigo-500 to-purple-500'
  },
  {
    title: 'Big Data & Analytics',
    icon: <BarChart3 />,
    skills: ['Apache Spark', 'Apache Hadoop', 'Tableau', 'Power BI', 'MS Excel'],
    color: 'from-yellow-500 to-orange-500'
  },
  {
    title: 'Cloud & DevOps',
    icon: <Cloud />,
    skills: ['AWS', 'Docker', 'Git', 'GitHub Actions', 'CI/CD'],
    color: 'from-cyan-500 to-blue-500'
  },
  {
    title: 'Tools & Others',
    icon: <Zap />,
    skills: ['Postman', 'Git', 'VS Code', 'Jupyter Notebook'],
    color: 'from-pink-500 to-rose-500'
  }
];

const SkillCard: React.FC<{ category: SkillCategory; index: number }> = ({ category, index }) => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateY: -90 }}
      animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.05, 
        rotateY: 10,
        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
      }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="text-center mb-6">
        <motion.div
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.6 }}
          className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center text-white shadow-lg`}
        >
          {category.icon}
        </motion.div>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{category.title}</h3>
      </div>
      
      <div className="space-y-2">
        {category.skills.map((skill, skillIndex) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 + skillIndex * 0.1 }}
            whileHover={{ x: 5, scale: 1.02 }}
            className="px-3 py-2 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-lg text-gray-700 dark:text-gray-300 text-sm font-medium hover:shadow-md transition-all duration-200"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">
            Technical Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive skill set spanning full-stack development, machine learning, data science,
            and modern cloud technologies for building scalable solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>

        {/* Skill Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
          >
            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">50+</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">Technologies</div>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
          >
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">5⭐</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">CodeChef</div>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
          >
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">92.4%</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">ML Accuracy</div>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
          >
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">4+</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">Years Coding</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;