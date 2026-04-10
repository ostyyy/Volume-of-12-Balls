'use strict';

const NUM = 12;
const THICKNESS = 0.01;
const R0_OUTER  = 0.25;

let totalVolume = 0;

for (let i = 0; i < NUM; i++) {
    let outerR = R0_OUTER  + i * THICKNESS;
    let innerR = outerR - THICKNESS;

    let innerVolume = (4 / 3) * Math.PI * innerR ** 3;
    totalVolume += innerVolume;
}

console.log(`Total inner volume of 12 balls: ${totalVolume} m^3`);