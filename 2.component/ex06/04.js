import update from 'react-addons-update';
import fs from 'fs';

let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json' , 'utf-8'))
}

const updateOrder = update(state.order, {
    // 해당 패스의 값 변경1
    receive: {
        $set: '부산시 해운대구 우동...'
    },

    // 해당 패스의 값 변경2
    payment: {
        method: {
            $set: 'Mobile'
        }
    },

    // 배열 요소(객체)를 변경
    products: {
        0: {
            amount: {
                $set: 100
            }
        },
        // 배열 요소에 추가하기
        $push: [{
            no: 'c002-003',
            name: '블루양말',
            price: 2000,
            amount: 1
        }]
    }
});

console.log(updateOrder, state.order === updateOrder);