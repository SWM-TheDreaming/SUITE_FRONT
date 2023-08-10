export type RootStackParamList = {
  Mainpage: { selectedCategories: string[] };
  CategoryFilter: undefined;
  Studylist: { selectedCategories: string[] };
  Login: undefined;
  SignUp: undefined;
  EmailAuthentication: undefined;
  Profile: undefined;
  SignupComplete: undefined;
  TermOfUse: undefined;
  UserInformation: undefined;
  AuthenticateCode: undefined;
  OauthTermOfUse: undefined;
  SuiteRoomurl: undefined;
  SuiteRoomInfo: undefined;
  SuiteRoompay: undefined;
  SuiteRoomRule: undefined;
};

export interface Category {
  filterCategory:
    | {
        selectedCategories: string[] | undefined;
      }
    | undefined;
}
