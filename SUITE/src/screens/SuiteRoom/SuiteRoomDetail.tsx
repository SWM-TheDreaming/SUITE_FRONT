import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../types';
import { Header } from '../../hook/header';
import SuiteRoomStyleSheet from '../../style/SuiteRoom';
import TagComponent from '../../components/presents/TagComponent';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ProgressCircle from 'react-native-progress-circle';
import mainPageStyleSheet from '../../style/style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import convertStudyValueFromEngish from '../../data/ChangeCategoryFromEnglish';
import Clipboard from '@react-native-clipboard/clipboard';
import ModalPopup from '../../hook/modal';
import SignModalPopup from '../../components/presents/SignmodalPopup';
import { SuiteRoomDetailView } from '../../api/SuiteRoom/SuiteroomDetail';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { tokenState, depositAmountState, suiteRoomIdState } from '../../../recoil/atoms';
import { StackNavigationProp } from '@react-navigation/stack';
import { useIsFocused } from '@react-navigation/native';
import { SuiteRoomDeleteApi } from '../../api/SuiteRoom/SutieRoomDeleteApi';
import CheckCancelModal from '../../hook/checkCancelModal';
import { ScrabSuiteRoomApi } from '../../api/SuiteRoom/ScrabSuiteRoomApi';
export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

type SuiteRoomDetailRouteProp = RouteProp<RootStackParamList, 'SuiteRoomDetail'>;

interface SuiteRoomDetailProps {
  route: SuiteRoomDetailRouteProp;
}
const SuiteRoomDetail: React.FunctionComponent<SuiteRoomDetailProps> = ({ route }) => {
  const today = new Date();
  const { SuiteRoomid } = route.params;
  const isFocused = useIsFocused();
  const navigation = useNavigation<RootStackNavigationProp>();
  const [visible, setVisible] = useState(false);
  const [cancelVisible, setCancelVisible] = useState(false);
  const storedToken = useRecoilValue(tokenState);
  const [channelLink, setChannelLink] = useState('');
  const [content, setContent] = useState('');
  const [contractAddress, setContractAddress] = useState('');
  const [depositAmount, setDepositAmount] = useState('');
  const [host, setHost] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isPublic, setIsPublic] = useState(false);
  const [markCount, setMarkCount] = useState(0);
  const [minAttendanceRate, setMinAttendanceRate] = useState(0);
  const [minMissionCompleteRate, setMinMissionCompleteRate] = useState(0);
  const [participantCount, setParticipantCount] = useState(0);
  const [password, setPassword] = useState(0);
  const [recruitmentDeadLine, setRecruitmentDeadLine] = useState<string>('');
  const [recruitmentLimit, setRecruitmentLimit] = useState(0);
  const [studyDeadLine, setStudyDeadline] = useState<string>('');
  const [studyMethod, setStudyMethod] = useState('');
  const [subject, setSubject] = useState('');
  const [title, setTitle] = useState('');
  const [dday, setDday] = useState('');
  const [mark, setMark] = useState(false);
  const [markChange, setMarkChange] = useState(false);
  const [checkInVisible, setcheckInVisible] = useState(false);

  const setMoney = useSetRecoilState(depositAmountState);
  const setRoomId = useSetRecoilState(suiteRoomIdState);
  const fetchData = async () => {
    try {
      const datalist = await SuiteRoomDetailView(storedToken, SuiteRoomid);
      console.log(datalist);
      setChannelLink(datalist.channelLink);
      setContent(datalist.content);
      setContractAddress(datalist.contractAddress);
      setDepositAmount(datalist.depositAmount);
      setHost(datalist.host);
      setIsOpen(datalist.isOpen);
      setIsPublic(datalist.isPublic);
      setMarkCount(datalist.markCount);
      setMinAttendanceRate(datalist.minAttendanceRate);
      setMinMissionCompleteRate(datalist.minMissionCompleteRate);
      setParticipantCount(datalist.participantCount);
      setPassword(datalist.password);
      setRecruitmentDeadLine(datalist.recruitmentDeadline);
      setRecruitmentLimit(datalist.recruitmentLimit);
      setStudyDeadline(datalist.studyDeadline);
      setStudyMethod(datalist.studyMethod);
      setSubject(datalist.subject);
      setTitle(datalist.title);
      setMark(datalist.mark);
      // 받은 데이터 활용하기
    } catch (error) {
      console.log('Error occurred:', error);
    }
  };

  const handleCopyToClipboard = () => {
    Clipboard.setString(channelLink);
  };
  const deletebuttonHandler = () => {
    SuiteRoomDeleteApi(storedToken, SuiteRoomid);
    setVisible(false);
    setCancelVisible(true);
  };
  const cancelCheckButtonHandler = () => {
    setCancelVisible(false);
    navigation.navigate('Studylist');
  };
  const GoAttendancePay = () => {
    setcheckInVisible(false);
    setRoomId(SuiteRoomid.toString());
    setMoney(parseInt(depositAmount));
    navigation.navigate('SuiteRoomUserAttendPay');
  };
  const scrabButtonHandle = () => {
    setMarkChange(true);
    setMark(!mark);
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    if (markChange == true) {
      ScrabSuiteRoomApi(storedToken, SuiteRoomid);
    }
  }, [mark]);
  useEffect(() => {
    const today = new Date();
    const recruitmentDeadline = new Date(recruitmentDeadLine);
    const timeDiff = recruitmentDeadline.getTime() - today.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    setDday(daysDiff < 0 ? `D+${daysDiff.toString().slice(1, daysDiff.toString().length)}` : `D-${daysDiff}`);
  }, [recruitmentDeadLine]);
  useEffect(() => {
    //페이지 새로고침시 다시 리렌더링 가능
    fetchData();
  }, [isFocused]);
  return (
    <ScrollView bounces={false}>
      <View style={SuiteRoomStyleSheet.SuiteRoomDetailContainer}>
        <Header title={'스터디 상세'} />
        <View style={SuiteRoomStyleSheet.SuiteRoomDetailupperBox}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TagComponent
              dDay={dday}
              category={convertStudyValueFromEngish(subject)}
              depositAmount={`${depositAmount.toString().slice(0, depositAmount.toString().length - 3)}K`}
              isPublic={isPublic}
            />
            {host === true ? (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('SuiteRoomEdit', { roomId: SuiteRoomid, content: content, url: channelLink });
                }}
              >
                <FontAwesome5 name="edit" size={15} color={'#686868'}></FontAwesome5>
              </TouchableOpacity>
            ) : null}
          </View>
          <Text style={SuiteRoomStyleSheet.SuiteRoomDetailTitle}>{title}</Text>
          <View style={SuiteRoomStyleSheet.SuiteRoomDetailUpperBox}>
            <View style={SuiteRoomStyleSheet.SuiteRoomBoxIconContainer}>
              <Feather name="users" size={20} color={'#686868'} />
              <Text style={SuiteRoomStyleSheet.SuiteRoomBoxText}>참여인원</Text>
              <Text style={SuiteRoomStyleSheet.SuiteRoomBoxData}>
                {participantCount}/{recruitmentLimit}
              </Text>
            </View>
            <View style={SuiteRoomStyleSheet.SuiteRoomBoxIconContainer}>
              <MaterialCommunityIcons name="timer-outline" size={20} color={'#686868'} />
              <Text style={SuiteRoomStyleSheet.SuiteRoomBoxText}>모집기간</Text>
              <Text style={SuiteRoomStyleSheet.SuiteRoomBoxData}>{recruitmentDeadLine.slice(0, 10)}</Text>
            </View>
            <View style={SuiteRoomStyleSheet.SuiteRoomBoxIconContainer}>
              <MaterialCommunityIcons name="calendar-clock-outline" size={20} color={'#686868'} />
              <Text style={SuiteRoomStyleSheet.SuiteRoomBoxText}>스터디기간</Text>
              <Text style={SuiteRoomStyleSheet.SuiteRoomBoxData}>{studyDeadLine?.slice(0, 10)}</Text>
            </View>
            <View style={SuiteRoomStyleSheet.SuiteRoomBoxIconContainer}>
              <MaterialIcons name="payment" size={20} color={'#686868'} />
              <Text style={SuiteRoomStyleSheet.SuiteRoomBoxText}>보증금</Text>
              <Text style={SuiteRoomStyleSheet.SuiteRoomBoxData}>{depositAmount}원</Text>
            </View>
          </View>
          <View style={SuiteRoomStyleSheet.SuiteRoomDetailContentContainer}>
            <Text style={SuiteRoomStyleSheet.SuiteRoomDetailContent}>{content}</Text>
          </View>
          <View style={SuiteRoomStyleSheet.SuiteRoomLinkContainer}>
            <View style={SuiteRoomStyleSheet.SuiteRoomLinkBox}>
              <TouchableOpacity onPress={handleCopyToClipboard}>
                <Feather name="clipboard" size={20} color={'black'} />
              </TouchableOpacity>
              <Text numberOfLines={1} style={SuiteRoomStyleSheet.SuiteRoomLinkText}>
                {channelLink}
              </Text>
            </View>
          </View>
          <Text style={SuiteRoomStyleSheet.SuiteRoomDepositRuleText}>보증금 반환 조건</Text>
          <View style={SuiteRoomStyleSheet.SuiteRoomDetailCircularBarContainer}>
            <View style={SuiteRoomStyleSheet.SuiteRoomDetailCircularBar}>
              <ProgressCircle
                percent={minAttendanceRate}
                radius={65}
                borderWidth={45}
                color="#4CADA8"
                shadowColor="#E2FFFE"
                bgColor="white"
              >
                <Text style={SuiteRoomStyleSheet.SuiteRoomDetailCircularBarText}>{minAttendanceRate}%</Text>
              </ProgressCircle>
              <View style={SuiteRoomStyleSheet.SuiteRoomCirculaBarInfoContainer}>
                <Text style={SuiteRoomStyleSheet.SuiteRoomCircularBarInfoText}>최소 출석률</Text>
                <Text style={SuiteRoomStyleSheet.SuiteRoomDetailInfoText}>
                  <Text style={SuiteRoomStyleSheet.SuiteRoomDetailminAttendanceText}>{minAttendanceRate}%</Text> 이상
                  이상 달성
                </Text>
              </View>
            </View>
            <View style={SuiteRoomStyleSheet.SuiteRoomDetailCircularBar}>
              <ProgressCircle
                percent={minMissionCompleteRate}
                radius={65}
                borderWidth={45}
                color="#A38AE7"
                shadowColor="#F0EBFF"
                bgColor="white"
              >
                <Text style={SuiteRoomStyleSheet.SuiteRoomDetailCircularBarText}>{minMissionCompleteRate}%</Text>
              </ProgressCircle>
              <View style={SuiteRoomStyleSheet.SuiteRoomCirculaBarInfoContainer}>
                <Text style={SuiteRoomStyleSheet.SuiteRoomCircularBarInfoText}>미션 달성률</Text>
                <Text style={SuiteRoomStyleSheet.SuiteRoomDetailInfoText}>
                  <Text style={SuiteRoomStyleSheet.SuiteRoomDetailminMissionCompleteRate}>
                    {minMissionCompleteRate}%
                  </Text>{' '}
                  이상 달성
                </Text>
              </View>
            </View>
          </View>

          <View style={SuiteRoomStyleSheet.SuiteRoomDetailInformationContainer}>
            <View style={mainPageStyleSheet.depositInformationTextContainer}>
              <FontAwesome
                name="exclamation-circle"
                size={15}
                color={'#F14A4A'}
                style={mainPageStyleSheet.depositInformationIcon}
              />
              <Text style={mainPageStyleSheet.depositInformationText}>주의사항</Text>
            </View>
            <Text style={SuiteRoomStyleSheet.SuiteRoomDetailInformationText}>
              전체 출석과 미션에 대해 최소 수치 이상 완료해야 보증금을 반환 받으실 수 있습니다.
            </Text>
            <Text style={SuiteRoomStyleSheet.SuiteRoomDetailInformationText}>
              환급되지 못한 금액은 다른 스터디원들에게 나누어 집니다.
            </Text>
          </View>
        </View>
        <View style={SuiteRoomStyleSheet.SuiteRoomDetailReaderButtonContainer}>
          {host === true ? (
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                style={SuiteRoomStyleSheet.SuiteRoomDetailScrabButton}
                onPress={() => {
                  setVisible(true);
                }}
              >
                <Text style={mainPageStyleSheet.categortFilterResetText}>취소</Text>
              </TouchableOpacity>
              <TouchableOpacity style={SuiteRoomStyleSheet.SutieRoomDetailCheckinButton}>
                <Text style={mainPageStyleSheet.categortFilterApplyText}>스터디 시작</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                style={SuiteRoomStyleSheet.SuiteRoomDetailScrabButton}
                onPress={() => scrabButtonHandle()}
              >
                <FontAwesome name="star-o" size={20} color={mark == true ? '#FEDE35' : '#888888'} />
              </TouchableOpacity>
              <TouchableOpacity
                style={SuiteRoomStyleSheet.SutieRoomDetailCheckinButton}
                onPress={() => setcheckInVisible(true)}
              >
                <Text style={mainPageStyleSheet.categortFilterApplyText}>체크인하기</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <ModalPopup visible={visible}>
          <CheckCancelModal
            visible={visible}
            onClose={() => setVisible(false)}
            onConfirm={() => deletebuttonHandler()}
            text={'스터디를 취소하시겠습니까?'}
          />
        </ModalPopup>
        <ModalPopup visible={cancelVisible}>
          <SignModalPopup
            visible={cancelVisible}
            onClose={() => cancelCheckButtonHandler()}
            text={'취소가 완료되었습니다!'}
          />
        </ModalPopup>
        <ModalPopup visible={checkInVisible}>
          <CheckCancelModal
            visible={checkInVisible}
            onClose={() => setcheckInVisible(false)}
            text={'보증금을 납부하러 가시겠습니까?'}
            onConfirm={GoAttendancePay}
          />
        </ModalPopup>
      </View>
    </ScrollView>
  );
};

export default SuiteRoomDetail;
