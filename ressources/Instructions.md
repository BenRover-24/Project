### Instructions pour Modifier le Fichier `members.json`

Bienvenue dans le projet BenRover-24 ! Ce fichier contient les instructions pour modifier le fichier `members.json` afin d'ajouter ou de mettre à jour les informations des membres de l'équipe sur le site. Suivez les étapes ci-dessous pour garantir une mise à jour correcte et cohérente des informations.

### Étape 1: Ajouter une Photo

1. **Prenez une photo claire de votre visage** :
   - Assurez-vous que votre visage est bien visible au milieu de la photo.
   - La photo doit être de bonne qualité et clairement identifiable.

2. **Nommer la photo correctement** :
   - Le nom de la photo doit suivre le format : `prenom_nom.extension`
   - Exemple : `prudence_ayivi.jpg`

3. **Uploader la photo** :
   - Placez la photo dans le dossier `members`, qui est un sous-dossier du dossier `images`, situé dans le dossier `ressources`.
   - Chemin du dossier : `ressources/images/members/`

### Étape 2: Modifier le Fichier `members.json`

1. **Ouvrir le fichier `members.json`** :
   - Utilisez un éditeur de texte pour ouvrir le fichier `members.json`.

2. **Ajouter ou mettre à jour vos informations** :
   - Utilisez le format suivant pour ajouter vos informations. Si vous mettez à jour vos informations, assurez-vous de modifier les valeurs existantes.

```json
{
  "image": "ressources/images/members/prenom_nom.extension",
  "name": "Votre Nom Complet",
  "title": "Votre Titre",
  "description": "Une courte description (maximum 25 mots).",
  "social": {
    "linkedin": "https://www.linkedin.com/in/votreprofil",
    "instagram": "https://www.instagram.com/votreprofil",
    "github": "https://www.github.com/votreprofil"
  }
}
```

### Exemple

Voici un exemple complet pour référence :

```json
{
  "image": "ressources/images/members/prudence_ayivi.jpg",
  "name": "Mohamed SALIFOU",
  "title": "Maker & Fablab Manager",
  "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  "social": {
    "linkedin": "https://www.linkedin.com/in/mohamedsalifou",
    "instagram": "https://www.instagram.com/mohamedsalifou",
    "github": "https://www.github.com/mohamedsalifou"
  }
}
```

### Étape 3: Sauvegarder et Vérifier

1. **Sauvegardez le fichier `members.json`** :
   - Assurez-vous que le fichier est bien sauvegardé après vos modifications.

2. **Vérifiez le site** :
   - Ouvrez le site et vérifiez que vos informations s'affichent correctement dans la section des membres de l'équipe.

### Remarques Importantes

- **Respectez le format JSON** : Assurez-vous que chaque entrée est correctement formatée. Une erreur dans le format JSON peut empêcher le site de s'afficher correctement.
- **Descriptions courtes** : La description ne doit pas dépasser 25 mots.
- **Chemins des images** : Vérifiez que le chemin de l'image est correct et que l'image est bien uploadée dans le dossier approprié.

Merci de suivre ces instructions attentivement pour maintenir une présentation cohérente et professionnelle de l'équipe sur le site du projet BenRover-24.