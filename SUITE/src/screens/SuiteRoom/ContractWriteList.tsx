import React from 'react';
import { View, Text } from 'react-native';
const data = 
{
    "message": "스마트 컨트랙트 내역을 정상적으로 조회했습니다.",
    "txResults": [
        {
            "id": 3,
            "hashed_key": "17a8c336c958a81f91aec8e0ec899543df96163f8553420aaa66ccb4108d0bdb",
            "tx_action": "TX",
            "tx_hash": "0xd975a4d7e2a6c49398eca6fec1d7ccec9052f1e755b7c3b8eea8229e4ba4f7ff",
            "created_at": "2023-08-30T08:13:36.000Z",
            "tx_func_name": "startSuiteRoom",
            "tx_name": "계약서 내용 스마트 컨트랙트 이서",
            "tx_originator": "lopahn2",
            "tx_data": {
                "title": "test",
                "leader_id": "hwany",
                "signatures": [
                    "hwany는 hwany1 계약서의 모든 조항에 대해 동의합니다.",
                    "darren은 hwany1 계약서의 모든 조항에 대해 동의합니다.",
                    "mimo는 hwany1 계약서의 모든 조항에 대해 동의합니다."
                ],
                "group_period": 0,
                "suite_room_id": 7,
                "group_capacity": 3,
                "participant_ids": [
                    "hwany",
                    "darren",
                    "mimo"
                ],
                "minimum_attendance": 30,
                "recruitment_period": 0,
                "group_deposit_per_person": 10000,
                "minimum_mission_completion": 30
            },
            "contract_address": "0x2E006660Be5C3265B7A58Db4a0d4BD62c3Fe9fe5",
            "block_number": "4189872",
            "tx_fee": 1478921048416788
        }
    ]
}

const ContractWriteList = () => {
  return (
    <View>
      <Text>ContractWriteList page</Text>
    </View>
  );
};

export default ContractWriteList;
