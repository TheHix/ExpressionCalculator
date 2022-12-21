import { ListOfTransformations } from "../models/listOfTransformations";

export const sessionStorage = {
  getListOfTransformations(): ListOfTransformations[] {
    try {
      const listOfTransformations: ListOfTransformations[] = (() => {
        const item = window.sessionStorage.getItem("listOfTransformations");
        return item ? JSON.parse(item) : [];
      })();

      return listOfTransformations;
    } catch (error) {
      console.error(error);
      return [];
    }
  },

  setListOfTransformations(listOfTransformations: ListOfTransformations[]): void {
    window.sessionStorage.setItem("listOfTransformations", JSON.stringify(listOfTransformations));
  },
};
