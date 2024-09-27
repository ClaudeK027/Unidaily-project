import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Navigation from '../components/Navigation';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const DashboardContainer = styled.div`
  max-width: 1200px;
  margin: 60px auto 0;
  padding: 2rem;
  animation: ${fadeIn} 0.5s ease-out;
`;

const Section = styled.section`
  background-color: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.borderRadius};
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
`;

const SectionTitle = styled.h2`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSizes.large};
  margin-bottom: 1rem;
  border-bottom: 2px solid ${props => props.theme.colors.primary};
  padding-bottom: 0.5rem;
`;

const CourseInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: ${props => props.theme.colors.lightGrey};
  border-radius: ${props => props.theme.borderRadius};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CourseIcon = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  font-size: 24px;
  color: white;
`;

const CourseDetails = styled.div`
  flex: 1;
`;

const CourseName = styled.h3`
  margin: 0;
  color: ${props => props.theme.colors.text};
`;

const CourseTime = styled.p`
  margin: 0;
  color: ${props => props.theme.colors.primary};
`;

const EventsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
`;

const EventCard = styled.div`
  background-color: ${props => props.theme.colors.lightGrey};
  border-radius: ${props => props.theme.borderRadius};
  padding: 1rem;
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const EventIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  font-size: 20px;
  color: white;
`;

const EventDetails = styled.div`
  flex: 1;
`;

const EventTitle = styled.h3`
  margin: 0 0 0.5rem;
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes.medium};
`;

const EventDate = styled.p`
  margin: 0;
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSizes.small};
`;

const ArticlesContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding-bottom: 1rem;
  scrollbar-width: thin;
  scrollbar-color: ${props => props.theme.colors.primary} ${props => props.theme.colors.lightGrey};

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.lightGrey};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.primary};
    border-radius: 20px;
  }
`;

const ArticleCard = styled.div`
  flex: 0 0 300px;
  margin-right: 1rem;
  background-color: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.borderRadius};
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ArticleImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const ArticleContent = styled.div`
  padding: 1rem;
`;

const ArticleTitle = styled.h3`
  margin: 0 0 0.5rem;
  color: ${props => props.theme.colors.text};
`;

const ArticleExcerpt = styled.p`
  margin: 0;
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes.small};
`;

const ReadMoreButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: ${props => props.theme.borderRadius};
  margin-top: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.colors.secondary};
  }
`;

const DashboardPage = () => {
  const [events] = useState([
    { id: 1, title: "Soirée d'intégration", date: "15 Oct", icon: "🎉" },
    { id: 2, title: "Tournoi de foot inter-promos", date: "22 Oct", icon: "⚽" },
    { id: 3, title: "Hackathon IA", date: "5 Nov", icon: "💻" },
    { id: 4, title: "Journée portes ouvertes", date: "12 Nov", icon: "🚪" },
  ]);

  const [articles] = useState([
    { id: 1, title: "NTIC", excerpt: "Nouvelles technologies de l'information et de la communication...", image: "/images/article1.jpg" },
    { id: 2, title: "GenIA", excerpt: "Générer et utiliser l'intelligence artificielle...", image: "/images/article2.jpg" },
    { id: 3, title: "Cybersécurité", excerpt: "Protéger les systèmes informatiques contre les menaces...", image: "/images/article3.jpg" },
    { id: 4, title: "Big Data", excerpt: "Analyser et interpréter de grandes quantités de données...", image: "/images/article4.jpg" },
    { id: 5, title: "IoT", excerpt: "L'Internet des objets et ses applications dans la vie quotidienne...", image: "/images/article5.jpg" },
  ]);

  return (
    <DashboardContainer>
      <Section>
        <SectionTitle>Prochains Cours</SectionTitle>
        <CourseInfo>
          <CourseIcon>P</CourseIcon>
          <CourseDetails>
            <CourseName>PHP Avancé</CourseName>
            <CourseTime>14:30 - 16:30</CourseTime>
          </CourseDetails>
        </CourseInfo>
        <CourseInfo>
          <CourseIcon>J</CourseIcon>
          <CourseDetails>
            <CourseName>JavaScript ES6+</CourseName>
            <CourseTime>16:45 - 18:45</CourseTime>
          </CourseDetails>
        </CourseInfo>
      </Section>
      
      <Section>
        <SectionTitle>Événements</SectionTitle>
        <EventsContainer>
          {events.map(event => (
            <EventCard key={event.id}>
              <EventIcon>{event.icon}</EventIcon>
              <EventDetails>
                <EventTitle>{event.title}</EventTitle>
                <EventDate>{event.date}</EventDate>
              </EventDetails>
            </EventCard>
          ))}
        </EventsContainer>
      </Section>
      
      <Section>
        <SectionTitle>À la Une</SectionTitle>
        <ArticlesContainer>
          {articles.map(article => (
            <ArticleCard key={article.id}>
              <ArticleImage src={article.image} alt={article.title} />
              <ArticleContent>
                <ArticleTitle>{article.title}</ArticleTitle>
                <ArticleExcerpt>{article.excerpt}</ArticleExcerpt>
                <ReadMoreButton>Lire la suite</ReadMoreButton>
              </ArticleContent>
            </ArticleCard>
          ))}
        </ArticlesContainer>
      </Section>
      
      <Navigation />
    </DashboardContainer>
  );
};

export default DashboardPage;