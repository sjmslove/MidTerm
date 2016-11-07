/**
 *   @author Smith, Sierra (sjsmith8147@gmail.com)
 *   @version 0.0.2
 /*   @summary MidTerm || created: 11/07/2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let continueResponse;
let initialCheck = 1000, initialSavings = 1000;
let account=[];

function main() {
    while (continueResponse == null || continueResponse === 1) {
        populateAccount();
        printAccount();
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

function populateAccount() {
    const COLUMNS = 8,
        ONE = 1;
    for (let i = 0; i < ONE; i++) {
        account[i] = [];
        for (let j = 0; j < COLUMNS; j++) {
            if (j === 0) {
                while (typeof account[i][j] === 'undefined' || !/(^[a-z]+$){1,30}/i.test(account[i][j])) {
                    account[i][j] = PROMPT.question(`\nPlease enter last name: `);
                    process.stdout.write('\x1Bc');
                }
            } else if (j === 1) {
                while (typeof account[i][j] === 'undefined' || !/(^[a-z]+$){1,30}/i.test(account[i][j])) {
                    account[i][j] = PROMPT.question(`\nPlease enter First name: `);
                    process.stdout.write('\x1Bc');
                }
            } else if (j === 2) {
                while (typeof account[i][j] === 'undefined') {
                    account [i][j] = PROMPT.question('\n please enter your middle initial: ');
                    process.stdout.write('\x1Bc');
                }
            } else if (j === 3) {
                while (typeof account[i][j] === 'undefined') {
                    account[i][j] = PROMPT.question('\n please enter your card number: ');
                   process.stdout.write('\x1Bc');
                }
            } else if (j === 4) {
                while (typeof account [i][j] === 'undefined') {
                   account[i][j] = PROMPT.question('\n please enter your pin number: ');
                    process.stdout.write('\x1Bc');
                }
            } else if (j === 5) {
                let action;
                let withdrawCheck;
                let depositCheck;
                while (typeof account [i][j] === 'undefined'){
                    action = PROMPT.question('\n Do you want to withdraw or deposit money into your checking account? (0 to withdraw, 1 to deposit): ');
                    process.stdout.write('\x1Bc');
                    if (action == 0){
                        withdrawCheck = Number(PROMPT.question('\n How much money would you like to withdraw from your checking account? '));
                        process.stdout.write('\x1Bc');
                    } else {
                        depositCheck = Number(PROMPT.question('\n How much money would you like to deposit into your checking account? '));
                        process.stdout.write('\x1Bc');
                    }
                    account[i][j] = Number(initialCheck - withdrawCheck + depositCheck);
                }
        } else if (j === 6) {
                let action;
                let withdrawSavings;
                let depositSavings;
                while (typeof account [i][j] === 'undefined'){
                    action = PROMPT.question('\n do you want to withdraw or deposit money into your savings account? (0 to withdraw, 1 to deposit): ');
                    process.stdout.write('\x1Bc');
                    if (action == 0) {
                        withdrawSavings = Number(PROMPT.question('\n how much money would you like to withdraw from your savings account? '));
                    } else {
                        depositSavings = Number(PROMPT.question('\n how much money would you like to deposit into your savings account? '));
                    }
                    account[i][j] = Number(initialSavings - withdrawSavings + depositSavings);
                }

            }else if (j === 7 || j === 8) {
                let action;
                let transferChecking;
                let transferSavings;
                while (typeof account [i][j] === 'undefined'){
                    action = Number(PROMPT.question('\n press 0 to transfer money FROM your CHECKING account, press 1 to transfer money FROM your SAVINGS account '));
                    if (action == 0) {
                        transferChecking = Number(PROMPT.question('\n how much money would you like to move to your savings account? '));
                    } else {
                        transferSavings = Number(PROMPT.question('\n how much money would you like to move to your checking account? '));
                    }
                    account[i][7] = Number(account[i][6] + transferChecking - transferSavings);
                    account[i][8] = Number(account[i][5] + transferSavings - transferChecking);
                }

            } else if (j === 9) {
                while (typeof account [i][j] == 'undefined'){
                    console.log(`\n your checking balance is ${account[i][7]}`);
                    console.log(`\n your savings balance is ${account[i][8]}`);
                }
            }
        }
    }
}

function printAccount(){
    const COLUMNS = 9;
    for (let i = 0; i < account.length; i++) {
        for (let j = 0; j < COLUMNS; j++){
            console.log(account[i][j]);
        }
    }
}