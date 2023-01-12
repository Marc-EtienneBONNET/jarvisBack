import { ProfileService } from './myProfile.service';
export declare class ProfileControler {
    private readonly profileService;
    constructor(profileService: ProfileService);
    takeAllProfile(): Promise<any[]>;
    takeOneProfile(body: any): Promise<"Erreur de parametrage des argument donner a takeOneProfile(source, res)" | {
        formations: any[];
        competances: any[];
        portfolio: any[];
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
    }>;
    modifProfile(body: any): Promise<void>;
    supProfile(body: any): Promise<void>;
    addNewProfile(body: any): Promise<void>;
    CheckPassword(body: any): Promise<{
        formations: any[];
        competances: any[];
        portfolio: any[];
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
    }>;
    mouvProfileAll(body: any): Promise<void>;
    sendImage(res: any, name: any): Promise<void>;
    sendaddNewConnectionImage(body: any): Promise<void>;
}
