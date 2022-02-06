interface obj {
  name: string;
  id: number;
}

export default abstract class Model {
  static setObj: obj[] = [];
  static nextID: number = 0;

  public static makePropertySet (name: string) {
    Model.makeNewID();
    const id: number = Model.nextID;
    const Obj: obj = {
      name,
      id
    }
    Model.setObj.push(Obj);
  }

  private static makeNewID () {
    Model.nextID += 1;
  }
}
