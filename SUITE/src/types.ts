export type RootStackParamList = {
  Mainpage: { selectedCategories: string[] };
  TabBarNavigation: undefined;
  ContractTabNavigation : undefined;
  LeaderTabBarNavigation : undefined;
  CategoryFilter: undefined;
  Studylist: { selectedCategories: string[] };
  Mystudy: undefined;
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
  SuiteRoompayCheck: undefined;
  SuiteRoomDetail: { SuiteRoomid: string };
  SuiteRoomCanbanBoard: undefined;
  SuiteRoomDashboard: undefined;
  SuiteRoomMyAttendance: undefined;
  SuiteRoomDetailStart: undefined;
  CreateMission : undefined;
};

export interface Category {
  filterCategory:
    | {
        selectedCategories: string[] | undefined;
      }
    | undefined;
}
export interface SuiteRoomId {
  SuiteRoomid: string;
}
