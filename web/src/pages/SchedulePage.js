import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Navigation from '../components/Navigation';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 80px auto 0;
  padding: 2rem;
  font-family: 'Arial', sans-serif;
  animation: ${fadeIn} 0.5s ease-out;
`;

const Header = styled.h1`
  color: ${props => props.theme.colors.primary};
  font-size: 32px;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 300;
  letter-spacing: 2px;
`;

const CalendarContainer = styled.div`
  background-color: #ffffff;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  animation: ${slideIn} 0.5s ease-out;
`;

const WeekNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const NavButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => props.theme.colors.primary};
  font-size: 18px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

const CurrentWeek = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: ${props => props.theme.colors.text};
`;

const WeekDays = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 2rem;
`;

const WeekDay = styled.div`
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

const Day = styled.div`
  font-size: 24px;
  font-weight: ${props => props.isSelected ? 'bold' : 'normal'};
  color: ${props => props.isSelected ? props.theme.colors.primary : props.theme.colors.text};
  background-color: ${props => props.isSelected ? props.theme.colors.lightGrey : 'transparent'};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 5px;
`;

const DayName = styled.div`
  font-size: 14px;
  color: #888;
`;

const ScheduleContainer = styled.div`
  margin-top: 2rem;
`;

const CourseCard = styled.div`
  background-color: #ffffff;
  border-left: 5px solid ${props => props.color};
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
`;

const CourseTime = styled.div`
  font-size: 16px;
  color: #888;
  margin-bottom: 0.5rem;
`;

const CourseName = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.theme.colors.text};
  margin-bottom: 0.5rem;
`;

const CourseDetails = styled.div`
  font-size: 14px;
  color: #666;
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
`;

const Icon = styled.span`
  margin-right: 0.5rem;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 20px;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => props.theme.colors.primary};
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const SchedulePage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [selectedCourse, setSelectedCourse] = useState(null);

  const weekDays = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
  const courses = [
    { name: 'NTIC', time: '11:35 - 13:05', color: '#007bff', room: 'Salle 101', professor: 'Dr. Smith', description: "Cours sur les nouvelles technologies de l'information et de la communication." },
    { name: 'GenIA', time: '13:15 - 14:45', color: '#28a745', room: 'Labo IA', professor: 'Prof. Johnson', description: "Introduction à l'intelligence artificielle générative." },
    { name: 'Freelance IT', time: '15:10 - 16:40', color: '#6f42c1', room: 'Salle Virtuelle', professor: 'Mme. Brown', description: "Stratégies pour réussir en tant que freelance dans l'IT." },
  ];

  const navigateWeek = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + direction * 7);
    setCurrentDate(newDate);
  };

  const formatWeekRange = (date) => {
    const start = new Date(date);
    start.setDate(date.getDate() - date.getDay());
    const end = new Date(start);
    end.setDate(start.getDate() + 6);
    return `${start.toLocaleDateString()} - ${end.toLocaleDateString()}`;
  };

  return (
    <PageContainer>
      <Header>Emploi du temps</Header>
      <CalendarContainer>
        <WeekNavigation>
          <NavButton onClick={() => navigateWeek(-1)}>❮ Semaine précédente</NavButton>
          <CurrentWeek>{formatWeekRange(currentDate)}</CurrentWeek>
          <NavButton onClick={() => navigateWeek(1)}>Semaine suivante ❯</NavButton>
        </WeekNavigation>
        <WeekDays>
          {weekDays.map((day, index) => {
            const date = new Date(currentDate);
            date.setDate(currentDate.getDate() - currentDate.getDay() + index);
            const isSelected = date.toDateString() === selectedDay.toDateString();

            return (
              <WeekDay key={index} onClick={() => setSelectedDay(date)}>
                <Day isSelected={isSelected}>{date.getDate()}</Day>
                <DayName>{day}</DayName>
              </WeekDay>
            );
          })}
        </WeekDays>
        <ScheduleContainer>
          {courses.map((course, index) => (
            <CourseCard key={index} color={course.color} onClick={() => setSelectedCourse(course)}>
              <CourseTime>{course.time}</CourseTime>
              <CourseName>{course.name}</CourseName>
              <CourseDetails>
                <Icon>📍</Icon> {course.room}
              </CourseDetails>
              <CourseDetails>
                <Icon>👨‍🏫</Icon> {course.professor}
              </CourseDetails>
            </CourseCard>
          ))}
        </ScheduleContainer>
      </CalendarContainer>
      {selectedCourse && (
        <Modal onClick={() => setSelectedCourse(null)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setSelectedCourse(null)}>×</CloseButton>
            <h2>{selectedCourse.name}</h2>
            <p><strong>Horaire:</strong> {selectedCourse.time}</p>
            <p><strong>Salle:</strong> {selectedCourse.room}</p>
            <p><strong>Professeur:</strong> {selectedCourse.professor}</p>
            <p><strong>Description:</strong> {selectedCourse.description}</p>
          </ModalContent>
        </Modal>
      )}
      <Navigation />
    </PageContainer>
  );
};

export default SchedulePage;