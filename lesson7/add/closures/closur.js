let date = new Date();
let year = date.getFullYear()
let month = date.getMonth() + 1
let day = date.getDate()
let hours = date.getHours()
let minutes = date.getMinutes()
let seconds = date.getSeconds()
if (month <= 9) {
    month = '0' + month
}
if (day <= 9) {
    day = '0' + day
}
if (hours <= 9) {
    hours = '0' + hours
}
if (minutes <= 9) {
    minutes = '0' + minutes
}
if (seconds <= 9) {
    seconds = '0' + seconds
}
let userCard=(n)=>{
    let card={
        balance: 100,
        transactionLimit: 100,
        historyLogs: [],
        key: n
    }
    return{
        getCardOptions: function () {
            return card
        },
        setTransactionLimit: function (limit){
                card.transactionLimit=limit;
            let transactionTime={
                operation: 'Изменение лимита',
                credits: limit,
                operationTime: `${year}/${month}/${day} - ${hours}:${minutes}:${seconds}`
            }
            card.historyLogs.push(transactionTime);
            return card.transactionLimit
        },
        putCredits:function (money){
            card.balance+=money;
            let transactionTime={
                operation: 'Зачисление денег',
                credits: money,
                operationTime: `${year}/${month}/${day} - ${hours}:${minutes}:${seconds}`
            }
            card.historyLogs.push(transactionTime);
            return card.balance
        },
        takeCredits:function (money){
            if ((money<card.transactionLimit+1)&&(money<=card.balance)){
                card.balance-=money;
                let transactionTime={
                    operation: 'Снятие денег',
                    credits: money,
                    operationTime: `${year}/${month}/${day} - ${hours}:${minutes}:${seconds}`
                }
                card.historyLogs.push(transactionTime);
                return card.balance;
            }else if(money>=card.transactionLimit+1){
                console.log(`Ошибка! Лимит снятия для вашей карты составляет ${card.transactionLimit}`)

            }else if (money>card.balance){
                console.log(`На вашем счету есть всего ${card.balance}`)
            }

        },
        sendMoney:function (money,destination) {
            if (money<=card.balance){
                let transactionTime={
                    operation: `Перевод денег с этой карты на карту ${destination.getCardOptions().key}`,
                        credits: money,
                        operationTime: `${year}/${month}/${day} - ${hours}:${minutes}:${seconds}`

                }
                card.historyLogs.push(transactionTime);
                let transactionTime1={
                    operation: `Перевод денег на эту карту с карты ${card.key}`,
                    credits: money,
                    operationTime: `${year}/${month}/${day} - ${hours}:${minutes}:${seconds}`
                }
                destination.getCardOptions().historyLogs.push(transactionTime1);
                card.balance-=money;
                let tax=money/200;
                money-=tax;
                destination.getCardOptions().balance+=money;
            }else {
                console.log(`Отказано. Ваш баланс${card.balance}`)
            }
        }

    }
}
let card1 = userCard(1)
let card2 = userCard(2)
card1.setTransactionLimit(30);
card1.takeCredits(50);
card1.putCredits(300);
card1.sendMoney(50,card2);
console.log(card1.getCardOptions());
console.log(card2.getCardOptions());

class UserAccount{
    constructor(name) {
        this.name = name;
        this.cards = [];
    }

    addCard=function (numCard) {
        for (const card of this.cards) {
            if (card.key===numCard){
                console.log('У тебя уже есть карта с таким номером');
                return
            }
        }
        if (numCard>0&&numCard<4){
            let card=userCard(numCard);
            this.cards.push(card.getCardOptions())
        }else{
            console.log('У вас не может быть столько карт')
        }
    }
}
let stas = new UserAccount(`Bob`)
stas.addCard(1)
console.log(stas)
stas.addCard(1)
console.log(stas)
stas.addCard(2)
console.log(stas)