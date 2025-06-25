import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Calendar, MapPin, Star, Trophy, Users, GraduationCap, School, Medal } from 'lucide-react';

interface TimelineItem {
  id: number;
  title: string;
  organization: string;
  date: string;
  location: string;
  description: string;
  type: 'education' | 'certification' | 'achievement';
  icon: React.ReactNode;
  details?: string[];
}

const timelineItems: TimelineItem[] = [
  // Education
  {
    id: 1,
    title: 'Bachelor of Technology - Computer Science and Engineering',
    organization: 'Lovely Professional University',
    date: 'August 2022 – August 2026',
    location: 'Punjab, India',
    description: 'Currently pursuing B.Tech in Computer Science and Engineering with focus on software development, data structures, algorithms, and machine learning.',
    type: 'education',
    icon: <GraduationCap className="w-6 h-6" />,
  },
  {
    id: 2,
    title: 'Intermediate (12th Grade)',
    organization: 'GSSS Phagli School',
    date: 'April 2020 - March 2022',
    location: 'Phagli, Shimla',
    description: 'Completed higher secondary education with 79% marks, focusing on Science stream with Mathematics and Computer Science.',
    type: 'education',
    icon: <School className="w-6 h-6" />,
  },
  {
    id: 3,
    title: 'Matriculation (10th Grade)',
    organization: 'Swaran Public School',
    date: 'April 2017 - March 2020',
    location: 'Tutikandi, Shimla',
    description: 'Completed secondary education with 81% marks, establishing strong foundation in mathematics and sciences.',
    type: 'education',
    icon: <School className="w-6 h-6" />,
  },
  // Certifications
  {
    id: 4,
    title: 'Cloud Computing Certification',
    organization: 'NPTEL (IIT Kharagpur)',
    date: '2024',
    location: 'Online',
    description: 'Comprehensive certification covering cloud computing fundamentals, AWS services, and distributed systems architecture.',
    type: 'certification',
    icon: <Award className="w-6 h-6" />,
  },
  {
    id: 5,
    title: 'Complete Machine Learning & Data Science Program',
    organization: 'GeeksforGeeks',
    date: '2024',
    location: 'Online',
    description: 'Intensive program covering machine learning algorithms, data preprocessing, model evaluation, and real-world applications.',
    type: 'certification',
    icon: <Award className="w-6 h-6" />,
  },
  {
    id: 6,
    title: 'Object Oriented Programming in C++',
    organization: 'iamneo (Formerly Examly)',
    date: '2023',
    location: 'Online',
    description: 'Advanced C++ programming certification focusing on OOP concepts, design patterns, and software engineering principles.',
    type: 'certification',
    icon: <Award className="w-6 h-6" />,
  },
  {
    id: 7,
    title: 'Algorithms & Data Structures',
    organization: 'Stanford Online',
    date: '2023',
    location: 'Online',
    description: 'Comprehensive course on algorithms, data structures, complexity analysis, and algorithmic problem-solving techniques.',
    type: 'certification',
    icon: <Award className="w-6 h-6" />,
  },
  // Achievements
  {
    id: 8,
    title: '5 Star Coder on CodeChef',
    organization: 'CodeChef',
    date: '2024',
    location: 'Global Rank 10,000',
    description: 'Achieved 5-star rating on CodeChef competitive programming platform, demonstrating exceptional problem-solving skills.',
    type: 'achievement',
    icon: <Star className="w-6 h-6" />,
  },
  {
    id: 9,
    title: 'Global Rank 269th - LeetCode Biweekly Contest 152',
    organization: 'LeetCode',
    date: '2024',
    location: 'Among 30k+ participants',
    description: 'Secured top 1% ranking in highly competitive programming contest, showcasing algorithmic expertise and speed.',
    type: 'achievement',
    icon: <Trophy className="w-6 h-6" />,
  },
  {
    id: 10,
    title: 'Global Rank 117th - LeetCode Biweekly Contest 150',
    organization: 'LeetCode',
    date: '2024',
    location: 'Among 34k+ participants',
    description: 'Exceptional performance in competitive programming, ranking in top 0.3% among global participants.',
    type: 'achievement',
    icon: <Trophy className="w-6 h-6" />,
  },
  {
    id: 11,
    title: 'Global Rank 4th - CodeChef Starters 172 Div4',
    organization: 'CodeChef',
    date: '2024',
    location: 'Among 4k+ participants',
    description: 'Outstanding achievement securing 4th position globally, demonstrating exceptional competitive programming skills.',
    type: 'achievement',
    icon: <Medal className="w-6 h-6" />,
  },
  {
    id: 12,
    title: 'Global Rank 311th - CodeChef Starters 171 Div4',
    organization: 'CodeChef',
    date: '2024',
    location: 'Among 37k+ participants',
    description: 'Consistent high performance in competitive programming contests, maintaining top percentile rankings.',
    type: 'achievement',
    icon: <Trophy className="w-6 h-6" />,
  },
  {
    id: 13,
    title: 'Campus Ambassador',
    organization: 'DevTown',
    date: '2023-2024',
    location: 'Lovely Professional University',
    description: 'Represented DevTown on campus, promoting tech events and opportunities to fellow students, building community engagement.',
    type: 'achievement',
    icon: <Users className="w-6 h-6" />,
  },
];

const TimelineItemComponent: React.FC<{ item: TimelineItem; index: number; isLast: boolean }> = ({ 
  item, 
  index, 
  isLast 
}) => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const isEven = index % 2 === 0;

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'education':
        return 'from-blue-600 to-cyan-500';
      case 'certification':
        return 'from-green-600 to-teal-500';
      case 'achievement':
        return 'from-purple-600 to-pink-500';
      default:
        return 'from-indigo-600 to-pink-500';
    }
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'education':
        return { label: 'Education', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' };
      case 'certification':
        return { label: 'Certification', color: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' };
      case 'achievement':
        return { label: 'Achievement', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300' };
      default:
        return { label: 'Other', color: 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300' };
    }
  };

  const typeBadge = getTypeBadge(item.type);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`relative flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'} mb-12`}
    >
      {/* Timeline line */}
      {!isLast && (
        <motion.div
          initial={{ height: 0 }}
          animate={inView ? { height: '100%' } : {}}
          transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
          className="absolute left-1/2 top-16 w-0.5 h-24 bg-gradient-to-b from-indigo-600 to-pink-500 transform -translate-x-1/2 z-0"
        />
      )}

      {/* Content */}
      <div className={`w-5/12 ${isEven ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
        >
          <div className={`flex items-center mb-3 ${isEven ? 'justify-end' : 'justify-start'}`}>
            <span className={`px-3 py-1 text-xs font-medium rounded-full ${typeBadge.color} mr-3`}>
              {typeBadge.label}
            </span>
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <Calendar className="w-4 h-4" />
              <span>{item.date}</span>
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
            {item.title}
          </h3>
          
          <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-2">
            {item.organization}
          </p>

          <div className="flex items-center mb-3 text-sm text-gray-500 dark:text-gray-400">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{item.location}</span>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {item.description}
          </p>
        </motion.div>
      </div>

      {/* Center icon */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={inView ? { scale: 1, rotate: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
        whileHover={{ scale: 1.2, rotate: 360 }}
        className="absolute left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className={`w-16 h-16 bg-gradient-to-r ${getTypeColor(item.type)} rounded-full flex items-center justify-center text-white shadow-lg`}>
          {item.icon}
        </div>
      </motion.div>

      {/* Empty space for opposite side */}
      <div className="w-5/12" />
    </motion.div>
  );
};

const Timeline: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  // Group items by type for statistics
  const educationItems = timelineItems.filter(item => item.type === 'education');
  const certificationItems = timelineItems.filter(item => item.type === 'certification');
  const achievementItems = timelineItems.filter(item => item.type === 'achievement');

  return (
    <section id="timeline" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">
            Education, Certifications & Achievements
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive journey of academic excellence, professional certifications, and competitive programming achievements
            that showcase continuous learning and growth in technology.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main timeline line */}
          <motion.div
            initial={{ height: 0 }}
            animate={inView ? { height: '100%' } : {}}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute left-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-indigo-600 via-purple-500 to-pink-500 transform -translate-x-1/2 z-0"
          />

          {timelineItems.map((item, index) => (
            <TimelineItemComponent
              key={item.id}
              item={item}
              index={index}
              isLast={index === timelineItems.length - 1}
            />
          ))}
        </div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Academic & Professional Highlights
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <GraduationCap className="w-12 h-12 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{educationItems.length}</div>
              <div className="text-gray-600 dark:text-gray-300">Educational Qualifications</div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <Award className="w-12 h-12 mx-auto mb-4 text-green-600 dark:text-green-400" />
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">{certificationItems.length}</div>
              <div className="text-gray-600 dark:text-gray-300">Professional Certifications</div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <Trophy className="w-12 h-12 mx-auto mb-4 text-purple-600 dark:text-purple-400" />
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">{achievementItems.length}</div>
              <div className="text-gray-600 dark:text-gray-300">Major Achievements</div>
            </motion.div>
          </div>

          {/* Competitive Programming Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-4 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl border border-yellow-100 dark:border-yellow-800"
            >
              <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400 mb-1">5⭐</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">CodeChef Rating</div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-4 bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-xl border border-red-100 dark:border-red-800"
            >
              <div className="text-2xl font-bold text-red-600 dark:text-red-400 mb-1">4th</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Global Rank</div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl border border-blue-100 dark:border-blue-800"
            >
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">117th</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">LeetCode Best</div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-100 dark:border-purple-800"
            >
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">81%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Academic Score</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;