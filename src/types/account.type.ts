// Définition de l'interface des données
interface Proprietaire {
  id: string;
  nom: string;
  telephone: string;
  nomEntreprise: string;
  siege: string;
  statut: string;
}
export const StatusLabel: Record<string, string> = {
  Actif: 'Actif',
  NonActif: 'Non actif'
}

// Données simulées
const proprietaires: Proprietaire[] = [
  {
    id: "#123",
    nom: "Jean Luc",
    telephone: "(123) 456-7890",
    nomEntreprise: "Jean's Jeans",
    siege: "Paris, FR",
    statut: "Actif",
  },
  {
    id: "#123",
    nom: "Jean Luc",
    telephone: "(123) 456-7890",
    nomEntreprise: "Jean's Jeans",
    siege: "Paris, FR",
    statut: "Actif",
  },
  {
    id: "#123",
    nom: "Jean Luc",
    telephone: "(123) 456-7890",
    nomEntreprise: "Jean's Jeans",
    siege: "Paris, FR",
    statut: "Actif",
  },
  {
    id: "#123",
    nom: "Jean Luc",
    telephone: "(123) 456-7890",
    nomEntreprise: "Jean's Jeans",
    siege: "Paris, FR",
    statut: "Actif",
  },
  {
    id: "#123",
    nom: "Jean Luc",
    telephone: "(123) 456-7890",
    nomEntreprise: "Jean's Jeans",
    siege: "Paris, FR",
    statut: "Actif",
  },
  {
    id: "#123",
    nom: "Jean Luc",
    telephone: "(123) 456-7890",
    nomEntreprise: "Jean's Jeans",
    siege: "Paris, FR",
    statut: "Actif",
  },
];

export default proprietaires;
