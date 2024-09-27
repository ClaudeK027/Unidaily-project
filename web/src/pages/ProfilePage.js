import React, { useState } from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';

const ProfileContainer = styled.div`
  max-width: 1200px;
  margin: 80px auto 0;
  padding: 2rem;
  display: flex;
  gap: 2rem;
  font-family: 'Poppins', sans-serif;
`;

const Sidebar = styled.div`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.borderRadius};
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  height: fit-content;
`;

const ProfileImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  display: block;
  object-fit: cover;
  border: 4px solid ${props => props.theme.colors.primary};
`;

const ProfileName = styled.h2`
  text-align: center;
  color: ${props => props.theme.colors.text};
  margin-bottom: 0.5rem;
  font-size: 1.8rem;
  font-weight: 600;
`;

const ProfileRole = styled.p`
  text-align: center;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  font-weight: 500;
`;

const DetailItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const DetailLabel = styled.span`
  color: ${props => props.theme.colors.text};
  font-weight: 500;
`;

const DetailValue = styled.span`
  color: ${props => props.theme.colors.primary};
  font-weight: 600;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1.5rem;

  &:hover {
    background-color: ${props => props.theme.colors.secondary};
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

const MainContent = styled.div`
  flex: 2;
  background-color: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.borderRadius};
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const TabContainer = styled.div`
  display: flex;
  border-bottom: 2px solid ${props => props.theme.colors.lightGrey};
  margin-bottom: 2rem;
`;

const Tab = styled.button`
  padding: 0.75rem 1.5rem;
  background: none;
  border: none;
  color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.text};
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  border-bottom: 3px solid ${props => props.active ? props.theme.colors.primary : 'transparent'};
  margin-bottom: -2px;
  transition: all 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.text};
  font-weight: 500;
  font-size: 1rem;
`;

const Input = styled.input`
  width: 95%;
  padding: 0.75rem;
  border: 2px solid ${props => props.theme.colors.lightGrey};
  border-radius: ${props => props.theme.borderRadius};
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid ${props => props.theme.colors.lightGrey};
  border-radius: ${props => props.theme.borderRadius};
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const EditButton = styled(Button)`
  width: auto;
  padding: 0.75rem 2rem;
  float: right;
`;

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('account');

  return (
    <>
      <Navigation />
      <ProfileContainer>
        <Sidebar>
          <ProfileImage src="/path/to/profile-image.jpg" alt="Profile" />
          <ProfileName>Jane Doe</ProfileName>
          <ProfileRole>Étudiante en Informatique</ProfileRole>
          <DetailItem>
            <DetailLabel>Année d'étude:</DetailLabel>
            <DetailValue>3ème année</DetailValue>
          </DetailItem>
          <DetailItem>
            <DetailLabel>Moyenne:</DetailLabel>
            <DetailValue>16.5/20</DetailValue>
          </DetailItem>
          <DetailItem>
            <DetailLabel>Crédits:</DetailLabel>
            <DetailValue>120/180</DetailValue>
          </DetailItem>
          <Button>VOIR PROFIL PUBLIC</Button>
        </Sidebar>
        <MainContent>
          <TabContainer>
            <Tab active={activeTab === 'account'} onClick={() => setActiveTab('account')}>COMPTE</Tab>
            <Tab active={activeTab === 'academic'} onClick={() => setActiveTab('academic')}>ACADÉMIQUE</Tab>
            <Tab active={activeTab === 'preferences'} onClick={() => setActiveTab('preferences')}>PRÉFÉRENCES</Tab>
          </TabContainer>
          {activeTab === 'account' && (
            <form>
              <FormGrid>
                <FormGroup>
                  <Label>Prénom</Label>
                  <Input type="text" value="Jane" />
                </FormGroup>
                <FormGroup>
                  <Label>Nom</Label>
                  <Input type="text" value="Doe" />
                </FormGroup>
                <FormGroup>
                  <Label>Email</Label>
                  <Input type="email" value="jane.doe@example.com" />
                </FormGroup>
                <FormGroup>
                  <Label>Numéro étudiant</Label>
                  <Input type="text" value="20210001" />
                </FormGroup>
              </FormGrid>
              <FormGroup>
                <Label>Mot de passe</Label>
                <Input type="password" value="********" />
              </FormGroup>
              <EditButton>MODIFIER</EditButton>
            </form>
          )}
          {activeTab === 'academic' && (
            <form>
              <FormGrid>
                <FormGroup>
                  <Label>Filière</Label>
                  <Select>
                    <option>Informatique</option>
                    <option>Mathématiques</option>
                    <option>Physique</option>
                  </Select>
                </FormGroup>
                <FormGroup>
                  <Label>Niveau d'étude</Label>
                  <Select>
                    <option>1ère année</option>
                    <option>2ème année</option>
                    <option>3ème année</option>
                    <option>Master 1</option>
                    <option>Master 2</option>
                  </Select>
                </FormGroup>
              </FormGrid>
              <FormGroup>
                <Label>Spécialisation</Label>
                <Input type="text" value="Développement Web" />
              </FormGroup>
              <EditButton>MODIFIER</EditButton>
            </form>
          )}
          {activeTab === 'preferences' && (
            <form>
              <FormGrid>
                <FormGroup>
                  <Label>Langue préférée</Label>
                  <Select>
                    <option>Français</option>
                    <option>English</option>
                  </Select>
                </FormGroup>
                <FormGroup>
                  <Label>Notifications par email</Label>
                  <Select>
                    <option>Activées</option>
                    <option>Désactivées</option>
                  </Select>
                </FormGroup>
              </FormGrid>
              <EditButton>ENREGISTRER</EditButton>
            </form>
          )}
        </MainContent>
      </ProfileContainer>
    </>
  );
};

export default ProfilePage;