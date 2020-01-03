
const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 17;
const HEAL_VALUE = 20;

const enteredValue = prompt('MAX life value for you and monster: ','100');//get a dialog for user to enter the value of life.
let chosenMaxLife = parseInt(enteredValue);

if(isNaN(chosenMaxLife) || chosenMaxLife <= 0){
    chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife;
let currentHumanHealth = chosenMaxLife;
let hasBonusLife = true;

let battleLog = [];
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYERSTRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

adjustHealthBars(chosenMaxLife);

function writeToLog(event1,value1,monsterHealth,playerHealth){
    let logEntery;
    if(event1 == LOG_EVENT_PLAYER_ATTACK){
        logEntery = {
            event: event1,
            value: value1,
            target: 'MONSTER',
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        };
        //battleLog.push(logEntery);
    }else if(event1 == LOG_EVENT_PLAYERSTRONG_ATTACK){
        logEntery = {
            event: event1,
            value: value1,
            target: 'MONSTER',
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        };
        //battleLog.push(logEntery);
    }else if(LOG_EVENT_MONSTER_ATTACK){
        logEntery = {
            event: event1,
            value: value1,
            target: 'PLAYER',
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        };
        //battleLog.push(logEntery);
    }else if(LOG_EVENT_PLAYER_HEAL){
        logEntery = {
            event: event1,
            value: value1,
            target: 'PLAYER',
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        };
        //battleLog.push(logEntery);
    }else if(LOG_EVENT_GAME_OVER){
        logEntery = {
            event: event1,
            value: value1,
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        };
        //battleLog.push(logEntery);
    }
    battleLog.push(logEntery);
}

function attackHandler(){
    // const damage = dealMonsterDamage(ATTACK_VALUE);//generate damge number and 
    // currentMonsterHealth -= damage;
    // //after we attack,the monster should attack back
    // const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    // currentHumanHealth -= playerDamage;
    // //when to win
    // if(currentMonsterHealth <= 0 && currentHumanHealth > 0){
    //     alert('You won!');
    // }else if(currentHumanHealth <= 0 && currentMonsterHealth > 0){
    //     alert('You lose!');
    // }else if (currentHumanHealth <= 0 && currentMonsterHealth <= 0){
    //     alert('You have a draw.')
    // }
    attackMonster('ATTACK');
}

function attackMonster(mode){
    let maxDamage;
    let logEvent;
    if(mode == "ATTACK"){
        maxDamage = ATTACK_VALUE;
        logEvent = LOG_EVENT_PLAYER_ATTACK;
    } else if (mode == 'STRONG_ATTACK'){
        maxDamage = STRONG_ATTACK_VALUE;
        logEvent = LOG_EVENT_PLAYERSTRONG_ATTACK;
    }
    const damage = dealMonsterDamage(maxDamage);//generate damge number and 
    currentMonsterHealth -= damage;
    //write to log
    writeToLog(logEvent,damage,currentMonsterHealth,currentHumanHealth);
    // //after we attack,the monster should attack back
    // const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    // currentHumanHealth -= playerDamage;
    // //when to win
    // if(currentMonsterHealth <= 0 && currentHumanHealth > 0){
    //     alert('You won!');
    // }else if(currentHumanHealth <= 0 && currentMonsterHealth > 0){
    //     alert('You lose!');
    // }else if (currentHumanHealth <= 0 && currentMonsterHealth <= 0){
    //     alert('You have a draw.')
    // }
    endRound();
}

function strongAttack(){
    // const damage = dealMonsterDamage(STRONG_ATTACK_VALUE);//generate damge number and 
    // currentMonsterHealth -= damage;
    // //after we attack,the monster should attack back
    // const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    // currentHumanHealth -= playerDamage;
    // //when to win
    // if(currentMonsterHealth <= 0 && currentHumanHealth > 0){
    //     alert('You won!');
    // }else if(currentHumanHealth <= 0 && currentMonsterHealth > 0){
    //     alert('You lose!');
    // }else if (currentHumanHealth <= 0 && currentMonsterHealth <= 0){
    //     alert('You have a draw.')
    // }
    attackMonster('STRONG_ATTACK');
}

function printLogHandler(){
    console.log(battleLog);
}

attackBtn.addEventListener('click',attackHandler);
strongAttackBtn.addEventListener('click',strongAttack);
healBtn.addEventListener('click',healPlayerHandler)
logBtn.addEventListener('click',printLogHandler);
restartButton.addEventListener('click',reset);

function healPlayerHandler(){
    let healValue;
    if (currentHumanHealth >= chosenMaxLife - HEAL_VALUE){
        alert("You cannot heal more than you max initial life.");
        healValue = chosenMaxLife - currentHumanHealth;
    }else{
        healValue = HEAL_VALUE;
    }
    increasePlayerHealth(healValue);
    currentHumanHealth += healValue;
    writeToLog(LOG_EVENT_PLAYER_HEAL,healValue,currentMonsterHealth,currentHumanHealth);
    endRound();
}

function endRound(){
    //bouns life
    const initialPlayerHealth = currentHumanHealth;
    //after we attack,the monster should attack back
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentHumanHealth -= playerDamage;
    //bonus life
    if(currentHumanHealth <= 0 && hasBonusLife){
        hasBonusLife = false;
        removeBonusLife();
        currentHumanHealth = initialPlayerHealth;
        alert('you saved by bonus life');
        setPlayerHealth(currentHumanHealth);
    }

    //write to log
    writeToLog(LOG_EVENT_MONSTER_ATTACK,playerDamage,currentMonsterHealth,currentHumanHealth);

    //when to win
    if(currentMonsterHealth <= 0 && currentHumanHealth > 0){
        alert('You won!');
        writeToLog(LOG_EVENT_GAME_OVER,'YOU WON',currentMonsterHealth,currentHumanHealth);
        //reset();
    }else if(currentHumanHealth <= 0 && currentMonsterHealth > 0){
        alert('You lose!');
        writeToLog(LOG_EVENT_GAME_OVER,'YOU LOSE',currentMonsterHealth,currentHumanHealth);
        //reset();
    }else if (currentHumanHealth <= 0 && currentMonsterHealth <= 0){
        alert('You have a draw.');
        writeToLog(LOG_EVENT_GAME_OVER,'A DRAW!!',currentMonsterHealth,currentHumanHealth);
        //reset();
    }

}

function reset(){
    currentMonsterHealth = chosenMaxLife;
    currentHumanHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}