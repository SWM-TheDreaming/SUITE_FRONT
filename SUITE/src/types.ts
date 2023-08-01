export type RootStackParamList = {
  Mainpage: { selectedCategories: string[] };
  CategoryFilter: undefined;
  Studylist: { selectedCategories: string[] };
  SignUp: undefined;
};

export interface Category {
  filterCategory:
    | {
        selectedCategories: string[] | undefined;
      }
    | undefined;
}
