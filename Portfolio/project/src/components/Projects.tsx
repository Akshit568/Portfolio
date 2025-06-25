import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Play, Database, Brain, Video, BarChart3, TrendingUp, Palette, Briefcase } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  duration: string;
  highlights: string[];
  icon: React.ReactNode;
  type: 'project' | 'internship';
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Netflix Clone (MERN Stack)',
    description: 'A fully-featured Netflix-like streaming platform with dynamic interface, video previews, genre-based categorization, and secure payment processing.',
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Stripe', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    duration: 'Jan 2025 - Feb 2025',
    highlights: [
      'Dynamic Netflix-like interface with video previews',
      'JWT-based authentication & Stripe payment integration',
      'RESTful API with MongoDB for scalable content management',
      'CI/CD pipeline with GitHub Actions & comprehensive testing'
    ],
    icon: <Video className="w-6 h-6" />,
    type: 'project'
  },
  {
    id: 2,
    title: 'Predictive Analysis on Wine Quality',
    description: 'Advanced machine learning project using multiple algorithms to predict wine quality based on physicochemical properties with 92.4% accuracy.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['R Programming', 'Decision Tree', 'KNN', 'Naive Bayes', 'SVM', 'Linear Regression', 'Data Analysis'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    duration: 'Sep 2025 - Dec 2025',
    highlights: [
      'Implemented 4 classification algorithms (Decision Tree, KNN, Naive Bayes, SVM)',
      'Developed regression models (Linear, Polynomial, Multiple)',
      'Advanced data preprocessing with normalization & feature selection',
      'Achieved 92.4% accuracy through correlation analysis optimization'
    ],
    icon: <Brain className="w-6 h-6" />,
    type: 'project'
  },
  {
    id: 3,
    title: 'Black Friday Data Analysis',
    description: 'Comprehensive analysis of 550,000+ customer purchasing behaviors across demographics, revealing key insights for business strategy optimization.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'Pandas', 'Seaborn', 'Machine Learning', 'Linear Regression', 'Data Visualization'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    duration: 'Jan 2025 - Apr 2025',
    highlights: [
      'Analyzed 550,000+ customer records across gender, age, and city categories',
      'Created comprehensive visualizations (pie charts, histograms, bar charts)',
      'Discovered married customers spend 12% more than unmarried ones',
      'Product Category 1 drives over 50% of total revenue'
    ],
    icon: <TrendingUp className="w-6 h-6" />,
    type: 'project'
  },
  {
    id: 4,
    title: 'Sample Superstore Data Analysis with Tableau',
    description: 'Interactive Tableau dashboards analyzing 10,000+ sales records with dynamic filters, reducing manual analysis time by 40%.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Tableau', 'Data Analysis', 'Dashboard Design', 'Business Intelligence', 'SQL'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    duration: 'Aug 2024 - Oct 2024',
    highlights: [
      'Built 5+ interactive dashboards with dynamic filters',
      'Identified strong discount-profit correlation (r=-0.89)',
      'Revealed 15% profit erosion at >20% discounts',
      'Projected 8% profit increase through data-driven pricing'
    ],
    icon: <BarChart3 className="w-6 h-6" />,
    type: 'project'
  },
  {
    id: 5,
    title: 'Generative Avatar Creator',
    description: 'Advanced Generative AI system for avatar creation using ComfyUI, SDXL, and LoRA for high-quality image generation.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['ComfyUI', 'SDXL', 'LoRA', 'Python', 'RESTful APIs', 'Generative AI', 'GPU Optimization'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    duration: 'Jan 2025 - Apr 2025',
    highlights: [
      'Built Generative AI system using ComfyUI and SDXL',
      'Integrated Low-Rank Adaptation (LoRA) for efficient fine-tuning',
      'Engineered custom workflows for training and model merging',
      'Implemented techniques from Flux.1 and Fooocus'
    ],
    icon: <Palette className="w-6 h-6" />,
    type: 'project'
  },
  {
    id: 6,
    title: 'Machine Learning & Data Science Internship',
    description: 'Summer internship at GeeksforGeeks focusing on data processing, visualization, and predictive modeling with real-world datasets.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Seaborn', 'Data Processing', 'Machine Learning'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    duration: 'June 2024 - July 2024',
    highlights: [
      'Processed 540K+ transactional records with 69% missing data resolution',
      'Optimized memory usage by 22% through dtype conversion',
      'Created 15+ interactive visualizations revealing key trends',
      'Achieved 18% higher accuracy in purchase forecasts'
    ],
    icon: <Briefcase className="w-6 h-6" />,
    type: 'internship'
  }
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      whileHover={{ 
        y: -10, 
        rotateX: 5,
        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
      }}
      className={`group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 ${
        project.featured ? 'md:col-span-2 md:row-span-2' : ''
      }`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Glass morphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Type badge */}
      <div className="absolute top-2 left-2 z-20">
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
          project.type === 'internship' 
            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' 
            : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
        }`}>
          {project.type === 'internship' ? 'Internship' : 'Project'}
        </span>
      </div>
      
      <div className="relative overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
          src={project.image}
          alt={project.title}
          className={`w-full object-cover ${project.featured ? 'h-64 md:h-80' : 'h-48'}`}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Project icon */}
        <div className="absolute top-4 left-4">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
            {project.icon}
          </div>
        </div>
        
        {/* Duration badge */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
            {project.duration}
          </span>
        </div>
        
        {/* Action buttons */}
        <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={project.liveUrl}
            className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
          >
            <ExternalLink size={16} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={project.githubUrl}
            className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
          >
            <Github size={16} />
          </motion.a>
        </div>

        {/* Play button for featured projects */}
        {project.featured && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Play size={24} className="text-white ml-1" />
            </div>
          </motion.div>
        )}
      </div>

      <div className="p-6">
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
        >
          {project.title}
        </motion.h3>
        
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.1 + 0.1 }}
          className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed"
        >
          {project.description}
        </motion.p>

        {/* Key Highlights for featured projects */}
        {project.featured && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
            className="mb-4"
          >
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Highlights:</h4>
            <ul className="space-y-1">
              {project.highlights.slice(0, 3).map((highlight, idx) => (
                <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  {highlight}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
          className="flex flex-wrap gap-2"
        >
          {project.technologies.slice(0, project.featured ? 8 : 4).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-gradient-to-r from-indigo-100 to-pink-100 dark:from-indigo-900/30 dark:to-pink-900/30 text-indigo-700 dark:text-indigo-300 rounded-full border border-indigo-200 dark:border-indigo-700"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > (project.featured ? 8 : 4) && (
            <span className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full">
              +{project.technologies.length - (project.featured ? 8 : 4)} more
            </span>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">
            Projects & Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive showcase of full-stack applications, machine learning projects, data analysis,
            and professional internship experience delivering real-world solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Project Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="text-center p-6 bg-gradient-to-br from-indigo-50 to-pink-50 dark:from-indigo-900/20 dark:to-pink-900/20 rounded-xl border border-indigo-100 dark:border-indigo-800"
          >
            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">550K+</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">Records Analyzed</div>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-100 dark:border-purple-800"
          >
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">92.4%</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">ML Accuracy</div>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="text-center p-6 bg-gradient-to-br from-pink-50 to-red-50 dark:from-pink-900/20 dark:to-red-900/20 rounded-xl border border-pink-100 dark:border-pink-800"
          >
            <div className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-2">40%</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">Time Reduction</div>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="text-center p-6 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-xl border border-green-100 dark:border-green-800"
          >
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">15+</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">Visualizations</div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Akshit568"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-pink-500 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Github size={20} />
            <span>View All Projects on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;