export declare class profile {
    id: number;
    photo: string;
    nom: string;
    prenom: string;
    dateNaissance: string;
    adresse: string;
    mail: string;
    tel: string;
    linkedin: string;
    github: string;
    codingGame: string;
    statu: string;
    password: string;
    disponibilite: string;
    textDescriptif: string;
    contrat: string;
    solde: string;
    nbConnectionCv: number;
}
export declare class formations {
    id: number;
    lien: string;
    name: string;
    photo: string;
    niveau: string;
    debut: string;
    fin: string;
    text: string;
    idProfile: number;
}
export declare class competances {
    id: number;
    category: string;
    name: string;
    photo: string;
    text: string;
    idProfile: number;
}
export declare class portfolio {
    id: number;
    name: string;
    photo: string;
    audio: string;
    lien: string;
    text: string;
    idProfile: number;
}
