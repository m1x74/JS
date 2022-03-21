// // callbackhell
// setTimeout(()=>{
//     console.log(' 9:00 Подъем!');
//     setTimeout(()=>{
//         console.log('9:15 Позалипал в тик-токе ');
//         setTimeout(()=>{
//             console.log('9:20 Почистил зубы');
//             setTimeout(()=>{
//                 console.log('9:35 Позавтракал');
//                 setTimeout(()=>{
//                     console.log('10:15 Решение ДЗ Октена');
//                     setTimeout(()=>{
//                         console.log('12:15 Работа');
//                         setTimeout(()=>{
//                             console.log('17:00 Обед');
//                             setTimeout(()=>{
//                                 console.log('19:00 Тренировка');
//                                 setTimeout(()=>{
//                                     console.log('21:00 Ужин');
//                                     setTimeout(()=>{
//                                         console.log('22:00 Работа');
//                                         setTimeout(()=>{
//                                             console.log('01:00 Спать');
//                                         },3000)
//                                     },1000)
//                                 },2000)
//                             },2000)
//                         },5000)
//                     },3000)
//                 },2000)
//             },2000)
//         },2000)
//     },1500)
// },1000)

// PROMISE
function wake(getUp) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (getUp){
                console.log('Подъем');
                resolve('Go next'); }
            else{
                reject('ВСТАВАЙ!')
            }

        },1000)
    })
}
function tik() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('Посмотрел тик-ток')
            resolve('Go next');

        },1500)
    })
}

function teeth(cleanteeth) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (cleanteeth){
                console.log('Почистил зубы');
                resolve('Go next'); }
            else{
                reject('Нужно почистить зубы')
            }

        },1000)
    })
}

function breakfast(eat) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (eat){
                console.log('Позавтракал');
                resolve('Go next'); }
            else{
                reject('Нужно поесть')
            }

        },1500)
    })
}

function dz(make) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (make){
                console.log('Сделал ДЗ');
                resolve('Go next'); }
            else{
                reject('Из тебя получится плохой программист')
            }

        },2000)
    })
}

function work(work) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (work){
                console.log('Работаю');
                resolve('Go next'); }
            else{
                reject('Нужно работать')
            }

        },2500)
    })
}

function dinner(eat) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (eat){
                console.log('Пообедал');
                resolve('Go next'); }
            else{
                reject('Нужно поесть')
            }

        },2000)
    })
}

function train() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
                console.log('Тренировка');
                resolve('Go next');

        },2000)
    })
}

function dinner2(eat) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (eat){
                console.log('Поужинал');
                resolve('Go next'); }
            else{
                reject('Нужно поесть')
            }

        },3000)
    })
}

function work2(work) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (work){
                console.log('Работаю');
                resolve('Go next'); }
            else{
                reject('Нужно работать!')
            }

        },1000)
    })
}

function sleep(getDown) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
                console.log('Иду спать');
                resolve('End');

        },1000)
    })
}

async function day(){
    const wayki = await wake(true);
    const tiktok = await tik();
    const clean= await teeth(true)
    const zavtrak = await breakfast(true);
    const okten = await dz(true);
    const rabota = await work(true);
    const obed = await dinner(true);
    const training = await train(true);
    const uzhin = await dinner2(true);
    const job = await work2(false);
    const spat = await sleep(false);
}
day()