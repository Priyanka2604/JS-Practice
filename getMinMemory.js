/**
 * Given n programs and n-1 servers, each program must run on its own server, and each server can only handle one program.
 * Every program has a memory requirement given by the array 'memoryRequirements'.
 * Every server has a fixed memory capacity given by the array 'memroryAvailable'.
 * Since there is one extra program, a new server must be added.
 * 
 * Implement a function to determine the smallest memory capacity required for the new server to ensure that all programs can be executed.
 * The function getMinMemory takes the following inputs:
 * - int memoryRequirement[n]: the memory requirements of each program.
 * - int memoryAvailable[n-1]: the memory capacities of the existing servers.
 * The function should return the minimum memory size required for the new server or -1 if allocation is impossible.
 * 
 * Example:
 *  memoryRequirement: [5, 2, 3, 7] ---> [7, 5, 3, 2]
 *  memoryAvailable: [6, 2, 8] ---> [2, 6, 8]
 * Output: 3
 */

const getMinMemory = (memoryRequirement, memoryAvailable) => {
    memoryRequirement.sort((a, b) => a - b); // ascending
    memoryAvailable.sort((a, b) => a - b);  // ascending

    const n = memoryRequirement.length;
    
    for(let skip=0; skip<n; skip++){
        let i=0, j=0;

        while(i<n && j<n-1){
            if(i===skip) {
                i++;
                continue;
            }

            if(memoryRequirement[i] <= memoryAvailable[j]){
                i++;
                j++;
            } else {
                break; // this skip doesn't work
            }
        }

        if(j===n-1){
            // As memoryRequirement is sorted ascending,
            // first valid skip gives us the smallest answer
            return memoryRequirement[skip];
        }
    }

    return -1; // No valid skip found
}

console.log(getMinMemory([5, 2, 3, 7], [6, 2, 8])); // Output: 3
// console.log(getMinMemory([3, 7, 2, 5], [8, 1, 6])); // Output: -1