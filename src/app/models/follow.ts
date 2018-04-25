export class Follow {
  constructor(
    public id_connection: string,
    public id_follower: string,
    public id_to_follow: string,
    public public_path: string,
  ) {
  }
}
