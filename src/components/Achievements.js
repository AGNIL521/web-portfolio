import React from 'react';
import '../styles/Achievements.css';

const achievements = [
  {
    title: 'Top Student — ENSET',
    description: 'Recognized as one of the top students in the Cybersecurity and Digital Trust specialization.',
    date: '2024',
    tags: ['Academic Excellence']
  },
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
  }
];

const Achievements = () => (
  <section className="achievements" id="achievements">
    <h2>Achievements & Leadership</h2>
    
    <div className="achievements-grid">
      <div className="achievement-category">
        <h3>Achievements</h3>
        <div className="achievement-items">
          {achievements.map((item, idx) => (
            <div key={`ach-${idx}`} className="achievement-card">
              <h3>{item.title}</h3>
              <span className="date">{item.date}</span>
              <p>{item.description}</p>
              <div className="achievement-tags">
                {item.tags.map((tag, i) => (
                  <span key={`tag-${idx}-${i}`} className="achievement-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="achievement-category">
        <h3>Leadership</h3>
        <div className="achievement-items">
          {leadership.map((item, idx) => (
            <div key={`lead-${idx}`} className="achievement-card">
              <h3>{item.title}</h3>
              <span className="date">{item.date}</span>
              <p>{item.description}</p>
              <div className="achievement-tags">
                {item.tags.map((tag, i) => (
                  <span key={`tag-${idx}-${i}`} className="achievement-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="achievement-category">
        <h3>Events & Activities</h3>
        <div className="achievement-items">
          {events.map((item, idx) => (
            <div key={`event-${idx}`} className="achievement-card">
              <h3>{item.title}</h3>
              <span className="date">{item.date}</span>
              <p>{item.description}</p>
              <div className="achievement-tags">
                {item.tags.map((tag, i) => (
                  <span key={`tag-${idx}-${i}`} className="achievement-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Achievements;
