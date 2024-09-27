# Application de Gestion de  vie Étudiante

Une application web moderne conçue pour aider les étudiants à organiser leur vie académique. Elle offre une interface intuitive pour gérer l'emploi du temps, suivre les cours, et rester informé des événements du campus.

## Fonctionnalités principales

1. **Tableau de bord personnalisé**
   - Vue d'ensemble des prochains cours
   - Actualités et annonces importantes
   - Accès rapide aux fonctionnalités clés

2. **Emploi du temps interactif**
   - Visualisation hebdomadaire des cours
   - Détails des cours (salle, professeur, durée)
   - Navigation facile entre les semaines

3. **Profil étudiant**
   - Informations personnelles et académiques
   - Suivi des performances (crédits, moyennes)
   - Préférences personnalisables

4. **Gestion des événements**
   - Liste des événements du campus
   - Filtrage par type d'événement
   - Possibilité de s'inscrire aux événements
  
## Captures d'écran

### Page de connexion

### Page d'Acceuil

### Emploi du temps

### Profil

## Prérequis techniques

- Docker (version 20.10.0 ou supérieure)
- Docker Compose (version 1.29.0 ou supérieure)
- Un navigateur web moderne (Chrome, Firefox, Safari, Edge)

## Installation et lancement

1. Clonez le dépôt GitHub :
   ```
   git clone https://github.com/ClaudeK027/edudisgn-project
   cd edudisgn-project
   ```

2. Construisez et lancez les conteneurs Docker :
   ```
   docker-compose up --build
   ```
   Cette commande va construire les images Docker nécessaires et démarrer les services.

3. Une fois les conteneurs lancés, accédez à l'application :
   - Frontend : http://localhost:3000
   - API Backend : http://localhost:8000/api

   Note : Le premier lancement peut prendre quelques minutes le temps que toutes les dépendances soient installées.

## Structure du projet

- `backend/` : API Django
  - `student_app/` : Application principale Django
  - `requirements.txt` : Dépendances Python
- `web/` : Application frontend React
  - `src/` : Code source React
  - `public/` : Assets statiques
- `docker-compose.yml` : Configuration des services Docker
- `README.md` : Ce fichier

## Développement

Pour travailler sur le projet en mode développement :

1. Frontend (React) :
   - Les modifications dans `web/src/` sont automatiquement appliquées grâce au hot-reloading.
   - Pour ajouter de nouvelles dépendances : `docker-compose run web npm install <package-name>`

2. Backend (Django) :
   - Les changements dans `backend/` nécessitent parfois un redémarrage du conteneur :
     ```
     docker-compose restart backend
     ```
   - Pour appliquer les migrations : `docker-compose run backend python manage.py migrate`

3. Pour accéder au shell Django :
   ```
   docker-compose run backend python manage.py shell
   ```


## Support

Si vous rencontrez des problèmes ou avez des questions, n'hésitez pas à :
- Ouvrir une issue sur GitHub
- Contacter l'équipe de développement à 
