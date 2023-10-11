import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import mainPageStyleSheet from '../../style/style';
import SuiteRoomStyleSheet from '../../style/SuiteRoom';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Clipboard from '@react-native-clipboard/clipboard';

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

interface ModalPopupProps {
  visible: boolean;
  onClose: () => void;
  text: TxData;
  contract_address: string;
  block_number: string;
  tx_fee: number;
  hashed_key: string;
}

const ContractContentModalPopup: React.FC<ModalPopupProps> = ({
  visible,
  onClose,
  text,
  contract_address,
  block_number,
  tx_fee,
  hashed_key,
}) => {
  const handleCopyToClipboard = (props: string) => {
    Clipboard.setString(props);
  };
  if (!visible) {
    return null;
  } else
    return (
      <View style={{ marginTop: 20 }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={SuiteRoomStyleSheet.ContractModalDetailText} numberOfLines={1}>
            {'계약서 주소 : ' + contract_address}
          </Text>
          <TouchableOpacity
            style={SuiteRoomStyleSheet.ContractModalCopyIcon}
            onPress={() => handleCopyToClipboard(contract_address)}
          >
            <FontAwesome name="copy" size={16} color={'#050953'} />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={SuiteRoomStyleSheet.ContractModalDetailText} numberOfLines={1}>
            {'해시 키 : ' + hashed_key}
          </Text>
          <TouchableOpacity
            style={SuiteRoomStyleSheet.ContractModalCopyIcon}
            onPress={() => handleCopyToClipboard(hashed_key)}
          >
            <FontAwesome name="copy" size={16} color={'#050953'} />
          </TouchableOpacity>
        </View>
        <Text style={SuiteRoomStyleSheet.ContractModalDetailText}>{'block Num : ' + block_number}</Text>
        <Text style={SuiteRoomStyleSheet.ContractModalDetailText}>{'tx 가스비 : ' + tx_fee}</Text>
        <TouchableOpacity style={mainPageStyleSheet.SignmodalButton} onPress={onClose}>
          <Text style={mainPageStyleSheet.SignmodalButtonText}>확인</Text>
        </TouchableOpacity>
      </View>
    );
};

export default ContractContentModalPopup;
