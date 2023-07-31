export type RootStackParamList = {
  Mainpage: { selectedCategories: string[] };
  CategoryFilter: undefined;
  Studylist: { selectedCategories: string[] };
};

export interface Category {
  filterCategory: {
    selectedCategories: string[] | undefined;
  } | undefined;
}