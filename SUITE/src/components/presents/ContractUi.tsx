import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import mainPageStyleSheet from '../../style/style';
import { RootStackParamList } from '../../types';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import SuiteRoomStyleSheet from '../../style/SuiteRoom';
import ContractLogo from '../../Icons/ContractLogo.png';
import ContractCheckModal from '../../hook/ContractCheckModal';
import ContractContentModalPopup from './ContractContentModal';
export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;
interface GroupContractInfo {
  title: string;
  user_id: string;
  isRunning: boolean;
  group_period: string;
  group_capacity: string;
  minimum_attendance: string;
  recruitment_period: string;
  group_deposit_per_person: string;
  minimum_mission_completion: string;
}

interface ParticipantDeposit {
  user_id: string;
  signature: string;
  kicked_flag: boolean;
  deposit_amount: string;
  payment_timestamp: string;
}

interface TxData {
  groupContractInfo: GroupContractInfo;
  finalGroupDeposits: Array<string>;
  participantDeposits: Array<ParticipantDeposit>;
}
export interface ContractContentProps {
  id: number;
  hashed_key: string;
  tx_name: string;
  created_at: string;
  tx_originator: string;
  tx_func_name: string;
  tx_data: TxData;
  contract_address: string;
  block_number: string;
  tx_fee: number;
}
const ContractUi = (props: ContractContentProps) => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const [visible, setVisible] = useState(false);
  return (
    <View>
      <TouchableOpacity style={SuiteRoomStyleSheet.ContractBox} onPress={() => setVisible(true)}>
        <View style={mainPageStyleSheet.innerbox}>
          <Text style={SuiteRoomStyleSheet.ContractTxNameText}>{props.tx_name}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View>
              <Text style={SuiteRoomStyleSheet.detailtext}>
                {'발생시간 : ' + props.created_at.slice(0, 10) + '/' + props.created_at.slice(11, 13) + '시'}
              </Text>
              <Text style={SuiteRoomStyleSheet.detailtext}>{'계약서 함수 : ' + props.tx_func_name}</Text>
              <Text style={SuiteRoomStyleSheet.detailtext}>{'요청자 : ' + props.tx_originator}</Text>
            </View>
            <View style={{ alignItems: 'flex-end', marginRight: 20, marginTop: 15 }}>
              <Image source={ContractLogo} style={SuiteRoomStyleSheet.ContainerLogoStyle} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <ContractCheckModal visible={visible}>
        <ContractContentModalPopup
          visible={visible}
          onClose={() => setVisible(false)}
          text={props.tx_data}
          contract_address={props.contract_address}
          block_number={props.block_number}
          tx_fee={props.tx_fee}
          hashed_key={props.hashed_key}
        />
      </ContractCheckModal>
    </View>
  );
};

export default ContractUi;
