import React, { useEffect, useRef, useState } from 'react';
import { FaTrophy, FaUserTie, FaCalendarAlt, FaCalendarCheck, FaShieldAlt, FaCode, FaUsers, FaLightbulb } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';
import '../styles/Achievements.css';

const achievements = [
  {
    title: 'Finalist — SPEAKATHON 2024 & 2025',
    description: 'Competed in a public speaking competition showcasing communication, persuasion, and presentation skills. Reached the final stages both years.',
    date: '2024 - 2025',
    tags: ['Public Speaking', 'Competition']
  },
  {
    title: 'Participant — DFIR212 (N7SEC)',
    description: 'Engaged in a digital forensics and incident response competition, enhancing skills in cybersecurity investigation, log analysis, and threat mitigation.',
    date: '2024',
    tags: ['Cybersecurity', 'Competition']
  }
];

const leadership = [
  {
    title: 'Team Leader — ENACTUS ENSET-M',
    description: 'Led a multidisciplinary team to develop sustainable community projects using entrepreneurial action. Focused on social impact through innovation and business principles.',
    date: '2023 – 2024',
    tags: ['Leadership', 'Project Management']
  },
  {
    title: 'Treasurer — ROTARACT ENSET-M',
    description: 'Managed financial planning, budgeting, and reporting for club activities. Ensured transparency and accountability in all financial operations.',
    date: '2024 – 2025',
    tags: ['Finance', 'Leadership']
  }
];

const events = [
  {
    title: 'Organizer — IDEATHON – GEIW 2024',
    description: 'Played a key role in organizing this innovation event that brought together students and professionals to solve real-world challenges through creative thinking and teamwork.',
    date: '2024',
    tags: ['Event Planning', 'Teamwork']
  },
  {
    title: 'Organizer — IDEATHON – GEIW 2025',
    description: 'Continued involvement in organizing one of the largest student-led events in engineering, promoting innovation, leadership, and collaboration among participants.',
    date: '2025',
    tags: ['Event Planning', 'Leadership']
  },
  {
    title: 'Participant — GITEX 2025',
    description: 'Participated in this leading technology event.',
    date: '2025',
    tags: ['Event Planning', 'Teamwork']
  },
];

const AchievementCard = ({ item, index, icon: Icon, accentColor }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <motion.div 
      ref={ref}
      className="achievement-card"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="achievement-card__icon" style={{ backgroundColor: `${accentColor}15` }}>
        <Icon style={{ color: accentColor }} />
      </div>
      <div className="achievement-card__content">
        <h3>{item.title}</h3>
        <div className="achievement-card__meta">
          <span className="date">
            <FaCalendarAlt className="meta-icon" /> {item.date}
          </span>
        </div>
        <p>{item.description}</p>
        <div className="achievement-tags">
          {item.tags.map((tag, i) => (
            <span 
              key={`tag-${index}-${i}`} 
              className="achievement-tag"
              style={{ 
                backgroundColor: `${accentColor}15`,
                color: accentColor,
                borderColor: accentColor
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Achievements = () => {
  const sectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState('all');
  
  const allItems = [
    ...achievements.map(item => ({ ...item, category: 'achievements' })),
    ...leadership.map(item => ({ ...item, category: 'leadership' })),
    ...events.map(item => ({ ...item, category: 'events' }))
  ];
  
  const filteredItems = activeTab === 'all' 
    ? allItems 
    : allItems.filter(item => item.category === activeTab);

  return (
    <section className="achievements section" id="achievements" ref={sectionRef}>
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">
            <span className="text-gradient">Achievements</span> & Leadership
          </h2>
          <p className="section__subtitle">
            A showcase of my academic achievements, leadership roles, and event participation
          </p>
        </div>

        <div className="achievements__tabs">
          <button 
            className={`achievements__tab ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            <FaTrophy className="tab-icon" /> All
          </button>
          <button 
            className={`achievements__tab ${activeTab === 'achievements' ? 'active' : ''}`}
            onClick={() => setActiveTab('achievements')}
          >
            <FaShieldAlt className="tab-icon" /> Achievements
          </button>
          <button 
            className={`achievements__tab ${activeTab === 'leadership' ? 'active' : ''}`}
            onClick={() => setActiveTab('leadership')}
          >
            <FaUserTie className="tab-icon" /> Leadership
          </button>
          <button 
            className={`achievements__tab ${activeTab === 'events' ? 'active' : ''}`}
            onClick={() => setActiveTab('events')}
          >
            <FaCalendarCheck className="tab-icon" /> Events
          </button>
        </div>

        <div className="achievements-grid">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => {
              let Icon, color;
              switch(item.category) {
                case 'achievements':
                  Icon = FaTrophy;
                  color = 'var(--neon-cyan)';
                  break;
                case 'leadership':
                  Icon = FaUserTie;
                  color = 'var(--neon-blue)';
                  break;
                case 'events':
                  Icon = FaCalendarCheck;
                  color = 'var(--neon-green)';
                  break;
                default:
                  Icon = FaTrophy;
                  color = 'var(--accent-primary)';
              }
              
              return (
                <AchievementCard 
                  key={`${item.category}-${index}`}
                  item={item}
                  index={index}
                  icon={Icon}
                  accentColor={color}
                />
              );
            })
          ) : (
            <div className="achievements__empty">
              <FaLightbulb className="empty-icon" />
              <p>No items found in this category</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
