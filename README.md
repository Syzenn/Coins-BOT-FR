

```markdown
# AniFoBOT - Bot Discord d'Économie

Système de coins 

## Fonctionnalités

- Gagnez des coins en travaillant toutes les 15 minutes.
- Gagnez des coins en restant en vocal (1000 coins par heure).
- Gagnez des coins en restant en vocal en mode streaming (3000 coins par heure).
- Gagnez des coins en restant en vocal sans être en mode muet (2000 coins par heure).
- Gagnez des coins en envoyant des messages (1000 coins pour 50 messages).
- Jouez à la roulette pour tenter de doubler votre mise.
- Achetez des récompenses, des rôles spéciaux, et des permissions dans le magasin.

## Configuration et Installation

### Prérequis

- Node.js (version 14.x ou supérieure)
- npm (vérifiez que npm est installé avec `npm --version`)

### Étape 1: Clonez le dépôt

```
git clone https://github.com/Syzenn/AniFoBOT.git
```

### Étape 2: Naviguez dans le répertoire du projet

```
cd AniFoBOT
```

### Étape 3: Installez les dépendances

```
npm install
```

### Étape 4: Configuration

Avant de lancer le bot, assurez-vous de créer un fichier `config.json` à la racine du projet avec le contenu suivant :

```json
{
  "token": "VOTRE_TOKEN_DE_BOT"
}
```

Remplacez `"VOTRE_TOKEN_DE_BOT"` par le token réel de votre bot Discord.

## Utilisation

Lancez le bot avec la commande :

```
npm start
```

## Commandes

Toutes les commandes doivent être précédées du préfixe `/`. Voici la liste des commandes disponibles :

- `/work` : Gagnez des coins toutes les 15 minutes en effectuant un travail.
- `/vocal` : Gagnez des coins en restant en vocal.
- `/streaming` : Gagnez des coins en restant en vocal en mode streaming.
- `/unmuted` : Gagnez des coins en restant en vocal sans être en mode muet.
- `/messages` : Gagnez des coins en envoyant des messages.
- `/roulette <mise> <parie>` : Jouez à la roulette avec une mise et un pari.
- `/shop` : Affiche toutes les récompenses disponibles à l'achat.
- `/buy <recompense>` : Achetez une récompense dans le magasin.
- `/rankings` : Affiche le classement des utilisateurs par balance.
- `/help` : Affiche l'aide des commandes disponibles.

## Avertissement

Ce bot est fourni à titre d'exemple et pour des fins éducatives. Assurez-vous de respecter les règles de Discord et les conditions d'utilisation de l'API Discord lors de l'utilisation de ce bot. N'utilisez pas ce bot pour perturber, spammer ou violer les conditions d'utilisation de Discord.

## Auteur

Créé par [ayz3n.](https://github.com/Syzenn)

```

Assurez-vous de remplacer les parties en majuscules avec vos informations personnelles, y compris le token de votre bot Discord, votre nom d'utilisateur GitHub et tout autre détail spécifique à votre projet
