export type RootStackParamList = {
  Mainpage: { selectedCategories: string[] };
  TabBarNavigation: undefined;
  ContractTabNavigation: undefined;
  LeaderTabBarNavigation: undefined;
  PhoneAuthentication: undefined;
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
  FindId: undefined;
  FindPW: undefined;
  NewPW: undefined;
  SuiteRoomurl: undefined;
  SuiteRoomInfo: undefined;
  SuiteRoompay: undefined;
  SuiteRoomRule: undefined;
  SuiteRoompayCheck: undefined;
  SuiteRoomDetail: { SuiteRoomid: number };
  SuiteRoomCanbanBoard: undefined;
  SuiteRoomDashboard: undefined;
  SuiteRoomMyAttendance: undefined;
  SuiteRoomDetailStart: undefined;
  SuiteRoomEdit: { roomId: number; content: string; url: string };
  SuiteRoomUserAttendPay: undefined;
  CreateMission: undefined;
  CreateAttendance: undefined;
  Alarm: undefined;
  SuiteRoomCreateComplete: undefined;
};

export interface Category {
  selectedCategories: string[] | undefined;
}
export interface SuiteRoomId {
  SuiteRoomid: string;
}
