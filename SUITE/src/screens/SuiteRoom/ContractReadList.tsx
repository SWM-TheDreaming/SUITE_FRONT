import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ContractUi from '../../components/presents/ContractUi';
import SuiteRoomStyleSheet from '../../style/SuiteRoom';
const data = 
    {
    "message": "스마트 컨트랙트 내역을 정상적으로 조회했습니다.",
    "txResults": [
        {
            "id": 5,
            "hashed_key": "17a8c336c958a81f91aec8e0ec899543df96163f8553420aaa66ccb4108d0bdb",
            "tx_action": "READ",
            "tx_hash": "READ CONTRACT",
            "created_at": "2023-08-30T08:14:17.000Z",
            "tx_func_name": "getGroupContract",
            "tx_name": "계약서 내용 및 스터디 참여자 장부 조회",
            "tx_originator": "lopahn2",
            "tx_data": {
                "groupContractInfo": {
                    "title": "test",
                    "user_id": "hwany",
                    "isRunning": true,
                    "group_period": "1693383228",
                    "group_capacity": "3",
                    "minimum_attendance": "30",
                    "recruitment_period": "1693383228",
                    "group_deposit_per_person": "10000",
                    "minimum_mission_completion": "30"
                },
                "finalGroupDeposits": [''],
                "participantDeposits": [
                    {
                        "user_id": "hwany",
                        "signature": "hwany는 hwany1 계약서의 모든 조항에 대해 동의합니다.",
                        "kicked_flag": false,
                        "deposit_amount": "10000",
                        "payment_timestamp": "1693383228"
                    },
                    {
                        "user_id": "darren",
                        "signature": "darren은 hwany1 계약서의 모든 조항에 대해 동의합니다.",
                        "kicked_flag": false,
                        "deposit_amount": "10000",
                        "payment_timestamp": "1693383228"
                    },
                    {
                        "user_id": "mimo",
                        "signature": "mimo는 hwany1 계약서의 모든 조항에 대해 동의합니다.",
                        "kicked_flag": false,
                        "deposit_amount": "10000",
                        "payment_timestamp": "1693383228"
                    }
                ]
            },
            "contract_address": "0x2E006660Be5C3265B7A58Db4a0d4BD62c3Fe9fe5",
            "block_number": "4189874",
            "tx_fee": 0
        },
        {
            "id": 6,
            "hashed_key": "17a8c336c958a81f91aec8e0ec899543df96163f8553420aaa66ccb4108d0bdb",
            "tx_action": "READ",
            "tx_hash": "READ CONTRACT",
            "created_at": "2023-08-30T08:14:17.000Z",
            "tx_func_name": "getGroupContract",
            "tx_name": "계약서 내용 및 스터디 참여자 장부 조회",
            "tx_originator": "lopahn2",
            "tx_data": {
                "groupContractInfo": {
                    "title": "test",
                    "user_id": "hwany",
                    "isRunning": true,
                    "group_period": "1693383228",
                    "group_capacity": "3",
                    "minimum_attendance": "30",
                    "recruitment_period": "1693383228",
                    "group_deposit_per_person": "10000",
                    "minimum_mission_completion": "30"
                },
                "finalGroupDeposits": [''],
                "participantDeposits": [
                    {
                        "user_id": "hwany",
                        "signature": "hwany는 hwany1 계약서의 모든 조항에 대해 동의합니다.",
                        "kicked_flag": false,
                        "deposit_amount": "10000",
                        "payment_timestamp": "1693383228"
                    },
                    {
                        "user_id": "darren",
                        "signature": "darren은 hwany1 계약서의 모든 조항에 대해 동의합니다.",
                        "kicked_flag": false,
                        "deposit_amount": "10000",
                        "payment_timestamp": "1693383228"
                    },
                    {
                        "user_id": "mimo",
                        "signature": "mimo는 hwany1 계약서의 모든 조항에 대해 동의합니다.",
                        "kicked_flag": false,
                        "deposit_amount": "10000",
                        "payment_timestamp": "1693383228"
                    }
                ]
            },
            "contract_address": "0x2E006660Be5C3265B7A58Db4a0d4BD62c3Fe9fe5",
            "block_number": "4189874",
            "tx_fee": 0
        },
        {
            "id": 7,
            "hashed_key": "17a8c336c958a81f91aec8e0ec899543df96163f8553420aaa66ccb4108d0bdb",
            "tx_action": "READ",
            "tx_hash": "READ CONTRACT",
            "created_at": "2023-08-30T08:14:17.000Z",
            "tx_func_name": "getGroupContract",
            "tx_name": "참여자장부 조회",
            "tx_originator": "lopahn2",
            "tx_data": {
                "groupContractInfo": {
                    "title": "test",
                    "user_id": "hwany",
                    "isRunning": true,
                    "group_period": "1693383228",
                    "group_capacity": "3",
                    "minimum_attendance": "30",
                    "recruitment_period": "1693383228",
                    "group_deposit_per_person": "10000",
                    "minimum_mission_completion": "30"
                },
                "finalGroupDeposits": [''],
                "participantDeposits": [
                    {
                        "user_id": "hwany",
                        "signature": "hwany는 hwany1 계약서의 모든 조항에 대해 동의합니다.",
                        "kicked_flag": false,
                        "deposit_amount": "10000",
                        "payment_timestamp": "1693383228"
                    },
                    {
                        "user_id": "darren",
                        "signature": "darren은 hwany1 계약서의 모든 조항에 대해 동의합니다.",
                        "kicked_flag": false,
                        "deposit_amount": "10000",
                        "payment_timestamp": "1693383228"
                    },
                    {
                        "user_id": "mimo",
                        "signature": "mimo는 hwany1 계약서의 모든 조항에 대해 동의합니다.",
                        "kicked_flag": false,
                        "deposit_amount": "10000",
                        "payment_timestamp": "1693383228"
                    }
                ]
            },
            "contract_address": "0x2E006660Be5C3265B7A58Db4a0d4BD62c3Fe9fe5",
            "block_number": "4189874",
            "tx_fee": 0
        },
    ]
}
const ContractReadList = () => {
  return (
      <ScrollView>
        <View style={{alignItems : 'center'}}>
            {data.txResults.map((item) => (
                <ContractUi key={item.id} {...item}/>
            ))}
        </View>
    </ScrollView>
  );
};

export default ContractReadList;
