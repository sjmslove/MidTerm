/**
 *   @author Smith, Sierra (sjsmith8147@gmail.com)
 *   @version 0.0.2
 *   @summary MidTerm2 demo code || created: 11.07.2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let lastName, firstName, middleInitial;
let cardNumber, cardPin;
let checkingAccount, savingsAccount;
let checking, savings;
let initialCheck = 10000;
let initialSavings = 1000;
let continueResponse;

function main(){
    while (continueResponse == null || continueResponse === 1){
        setlastName();
        setfirstName();
        setmiddleInitial();
        setCardPin();
        setCardNumber();
        setChecking();
        setSavings();
        setTransferFunds();
        setPrintTotal();
        setcontinueResponse();
    }
}

main();

function setcontinueResponse() {
    continueResponse = Number(PROMPT.question('\nDo you want to continue? 0 = no, 1=yes '));
    if (continueResponse !== 0 && continueResponse !== 1) {
        console.log(`${continueResponse} is an incorrect value. Please try again.`);
        setContinueResponse();
    }
}

function setlastName(){
    while (typeof lastName === 'undefined' || !/(^[a-z]+$){1,30}/i.test(lastName)) {
        lastName = PROMPT.question('\n please enter your last name: ');
    }
}

function setfirstName(){
    while (typeof firstName === 'undefined' || !/(^[a-z]+$){1,30}/i.test(firstName)) {
        firstName = PROMPT.question('\n please enter your first name: ');
    }
}

function setmiddleInitial(){
    while (typeof middleInitial === 'undefined' || !/(^[a-z]+$){1,30}/i.test(middleInitial)) {
        middleInitial = PROMPT.question('\n please enter your middle initial: ');
    }
}
function setCardNumber(){
    let j = 0;
    let answered = 0;
    const MAX = 3;
   cardNumber = Number(PROMPT.question('\n please enter your 16 digit card number: '));
    while ( j < MAX || answered !=1){
        if (cardNumber !== 417555551234567){
            console.log(`${cardNumber} is incorrect please try again`);
            j++;
        }else {
            answered = 1;
        }
    }
}

function setCardPin() {
    let j = 0;
    let answered = 0;
    const MAX = 3;
    cardPin = Number(PROMPT.question('\n please enter your 4 digit pin number: '));
    while (j < MAX || answered != 1) {
        cardPin = Number(PROMPT.question('\n please enter your 4 digit pin number: '));
        if (cardPin !== 1647) {
            console.log(`${cardPin} is incorrect please try again`);
            j++;
        } else {
            answered = 1;
        }

    }
}

function setChecking(){
    let action;
    let withdrawCheck;
    let depositCheck;
    action = PROMPT.question ('\n Do you want to withdraw or deposit money into your checking account? (0 to withdraw, 1 to deposit): ');
    if (action == 0){
        withdrawCheck = Number(PROMPT.question ('\n How much money would you like to withdraw from your checking account? '));
    } else {
        depositCheck = Number(PROMPT.question ('\n How much money would you like to deposit into your checking account? '));
    }
    checking = initialCheck - withdrawCheck + depositCheck;
}

function setSavings(){
    let action;
    let withdrawSavings;
    let depositSavings;
    action = PROMPT.question ('\n do you want to withdraw or deposit money into your savings account? (0 to withdraw, 1 to deposit): ');
    if (action == 0){
        withdrawSavings = Number(PROMPT.question ('\n how much money would you like to withdraw from your savings account? '));
    } else {
        depositSavings = Number(PROMPT.question ('\n how much money would you like to deposit into your savings account? '));
    }
    savings = initialSavings - withdrawSavings + depositSavings;
}

function setTransferFunds(){
    let action;
    let transferChecking;
    let transferSavings;
    action = Number(PROMPT.question('\n press 0 to transfer money FROM your CHECKING account, press 1 to transfer money FROM your SAVINGS account '));
    if (action = 0){
        transferChecking = Number(PROMPT.question('\n how much money would you like to move to your savings account? '));
    } else {
        transferSavings = Number(PROMPT.question ('\n how much money would you like to move to your checking account? '));
    }
    savingsAccount = savings + transferChecking - transferSavings;
    checkingAccount = checking + transferSavings - transferChecking;
}

function setPrintTotal(){
    console.log(`${checkingAccount} `);
    console.log(`${savingsAccount} `);
}