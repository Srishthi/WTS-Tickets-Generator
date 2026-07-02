/**
 * ==========================================
 * WTS Ticket Generator
 * generator.js
 * Part 1 / 3
 * ==========================================
 */

/*
    Column Ranges

    C1 : 1-9
    C2 : 10-19
    C3 : 20-29
    C4 : 30-39
    C5 : 40-49
    C6 : 50-59
    C7 : 60-69
    C8 : 70-79
    C9 : 80-90
*/

const COLUMN_RANGES = [

    {min:1,max:9},

    {min:10,max:19},

    {min:20,max:29},

    {min:30,max:39},

    {min:40,max:49},

    {min:50,max:59},

    {min:60,max:69},

    {min:70,max:79},

    {min:80,max:90}

];



function random(min,max){

    return Math.floor(
        Math.random()*(max-min+1)
    )+min;

}



function shuffle(array){

    const arr=[...array];

    for(let i=arr.length-1;i>0;i--){

        const j=Math.floor(
            Math.random()*(i+1)
        );

        [arr[i],arr[j]]=[arr[j],arr[i]];

    }

    return arr;

}



function range(min,max){

    const arr=[];

    for(let i=min;i<=max;i++){

        arr.push(i);

    }

    return arr;

}



function createEmptyTicket(){

    return [

        [null,null,null,null,null,null,null,null,null],

        [null,null,null,null,null,null,null,null,null],

        [null,null,null,null,null,null,null,null,null]

    ];

}



function getColumnPool(column){

    const r=COLUMN_RANGES[column];

    return shuffle(
        range(r.min,r.max)
    );

}



function rowCount(ticket,row){

    let count=0;

    for(let c=0;c<9;c++){

        if(ticket[row][c]!==null)
            count++;

    }

    return count;

}



function columnCount(ticket,column){

    let count=0;

    for(let r=0;r<3;r++){

        if(ticket[r][column]!==null)
            count++;

    }

    return count;

}



/*
    Decide

    How many numbers
    each column gets.

    Total =15

*/

function generateColumnDistribution(){

    const distribution=

    [1,1,1,1,1,1,1,1,1];

    let remaining=6;

    while(remaining>0){

        const column=random(0,8);

        if(distribution[column]<3){

            distribution[column]++;

            remaining--;

        }

    }

    return distribution;

}
