export interface Comment {
    id: number;
    idFilm: number;
    idUser: number;
    idProfile: number;
    title: string;
    text: string;
    prevId: number | null;
    profile: {
      id: number;
      profileName: string;
      imageName: string;
      idUser: number;
    };
    childrenCount: number;
}
  