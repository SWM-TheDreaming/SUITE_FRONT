import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ContractUi from '../../components/presents/ContractUi';
import SuiteRoomStyleSheet from '../../style/SuiteRoom';
import { useRecoilValue } from 'recoil';
import { TransactionReadApi } from '../../api/BlockChain/TransactionReadApi';
import { suiteRoomIdState, tokenState, suiteRoomState } from '../../../recoil/atoms';
import { Text } from 'react-native-svg';

const ContractReadList = () => {
  const SuiteRoomId = useRecoilValue(suiteRoomIdState);
  const tokenId = useRecoilValue(tokenState);
  const SuiteRoomTitle = useRecoilValue(suiteRoomState);
  const [data, setData] = useState([]);

  const getReadList = async () => {
    try {
      const datalist = await TransactionReadApi(tokenId, parseInt(SuiteRoomId), SuiteRoomTitle);
      setData(datalist);

      // 받은 데이터 활용하기
    } catch (error) {
      console.log('Error occurred:', error);
    }
  };
  useEffect(() => {
    getReadList();
    console.log(data);
  }, []);
  return (
    <ScrollView>
      <View style={{ alignItems: 'center' }}>
        {data.map((item) => (
          <ContractUi key={item.id} {...item} />
        ))}
      </View>
    </ScrollView>
  );
};

export default ContractReadList;
