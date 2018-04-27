export class Publication {
  constructor(
    public id_publication: string = "",
    public description: string = "",
    public create_at: string = "",
    public public_path: string = "",
    public id_user: string = "",
    public location: string = "",
    public dataBase64Photo: string = ""
  ) {
  }
}
