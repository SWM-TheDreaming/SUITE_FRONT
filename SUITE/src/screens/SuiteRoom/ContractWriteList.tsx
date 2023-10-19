import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import ContractUi from '../../components/presents/ContractUi';
import { useRecoilValue } from 'recoil';
import { TransactionWriteApi } from '../../api/BlockChain/TransactionWriteApi';
import { suiteRoomIdState, tokenState, suiteRoomState } from '../../../recoil/atoms';
const ContractWriteList = () => {
  const SuiteRoomId = useRecoilValue(suiteRoomIdState);
  const tokenId = useRecoilValue(tokenState);
  const SuiteRoomTitle = useRecoilValue(suiteRoomState);
  const [data, setData] = useState([]);
  const getReadList = async () => {
    try {
      const datalist = await TransactionWriteApi(tokenId, parseInt(SuiteRoomId), SuiteRoomTitle);
      setData(datalist);

      // 받은 데이터 활용하기
    } catch (error) {
      console.log('Error occurred:', error);
    }
  };
  useEffect(() => {
    getReadList();
  }, []);
  return (
    <View>
      <View style={{ alignItems: 'center' }}>
        {data.map((item) => (
          <ContractUi key={item.id} {...item} />
        ))}
      </View>
    </View>
  );
};

export default ContractWriteList;
