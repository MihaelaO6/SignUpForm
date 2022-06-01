function validate() {
    let input= document.querySelector('#email');
    let value = input.value;
    if(value.includes('@') && value.includes('.')){
        let between =value.substring((value.indexOf('@') + 1),value.indexOf('.'));
        console.log(between);
        let after = value.substring((value.indexOf('.'))+1,value.length);
        let before = value.substring(0, value.indexOf('@'));
        if (between.length > 1 && before.length > 2 && after.length >1) {
            console.log('validna email adresa!');
        }else{
            console.log('nevalidna adresa!');
        }
    }else{
        console.log('nevalidna adresa!!');
    }
    console.log(value);
}
