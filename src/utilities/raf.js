const add = (ke) => {
    let obj = { car: 2, sir: 34, 'jar': 333 };

    const q = obj[ke];
    if (q) {
        const n = q + 1;
        obj[ke] = n;
    }
    else {
        obj[ke] = 1;
    }
    obj['huhuhu'] = 'u';
    obj['huhuhu'] = 1;
    console.log(obj);
}


const func = () => add('skurr');

func();
// func();
// func();