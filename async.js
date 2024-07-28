function applyDamage(damage, currentHP){
    return new Promise((resolve, reject)=> {
        const result = currentHP - damage;
        setTimeout(()=> {
            resolve(`The player with ${currentHP} hit points suffer ${damage} and the result is ${result}`);
        }, 2000)
    })
}
const message = await applyDamage(25, 70);

console.log(message)
