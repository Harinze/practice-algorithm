/* A number sequence is as follows:
5, 100, 6, 200, 7, 400, 8, 800, 9, 1600, 10, 3200, ....

#### Given that 5 is at position 1, create a function that returns the found in postion 28

littleBig(4) = 200
littleBig(5) = 7
littleBig(28) = 819200 */


### Solution

function littleBig(positionOfNumberInSequence) {
const isEvenSequence = positionOfNumberInSequence % 2 === 0;
 if(isEvenSequence){
 return 100 * 2 ** (positionOfNumberInSequence / 2 - 1);
 }else{
 return 5 + Math.ceil(positionOfNumberInSequence / 2) -1;
 }
}
littleBig(28);
