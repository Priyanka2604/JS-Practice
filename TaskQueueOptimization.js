/**
 * Task queue optimization. 
 * You are designing a task scheduler for a cloud computing platform. 
 * The platform processes task in a queue but not all tasks are created equal. 
 * Each task has a priority level and an estimated processing time. 
 * To optimize resource utilization, you need to implement a function that reorders the task queue acccordinng to the following rules: 
 * 1. higher priority tasks should be processed first 
 * 2. if two tasks have the the same priority, the one with the shorter processing time should go first 
 * 3. if priority and processing time are both equal, maintain the original order (first-come-first-served). 
 * Each task is represented as an object/dictionary with three properties
 * - id: a unique identifier for the task (string) 
 * - priority: an integer from 1 to 5, where 5 is the highest priority 
 * - processing time: estimated time in milliseconds to complete the task. 
 * Your function should take an array of task objects and return a new array with the task reordered ccording to the rules.
 * 
 * @param {Array} tasks - An array of task objects, each with id, priority, and processingTime properties.
 * Example input:
 * [{"id": "task1", "priority": 3, "processingTime": 100},
 * {"id": "task2", "priority": 5, "processingTime": 50},
 * {"id": "task3", "priority": 3, "processingTime": 50},
 * {"id": "task4", "priority": 1, "processingTime": 10}]
 * @return {Array} - A new array of task objects reordered according to the specified rules
 * Example output:
 * [{"id": "task2", "priority": 5, "processingTime": 50},
 * {"id": "task3", "priority": 3, "processingTime": 50},
 * {"id": "task1", "priority": 3, "processingTime": 100},
 * {"id": "task4", "priority": 1, "processingTime": 10}]
 */

var optimizeTaskQueue = function(tasks) {
    // Step 1: Sort the tasks based on priority, processing time and original order
    const ans = tasks.sort((a, b) => {
        // Compare by priority (highger priority first)
        if(a.priority !== b.priority) {
            return b.priority - a.priority;
        }
        // If priority is the same, compare by processing time (shorter time first)
        else if(a.processingTime !== b.processingTime) {
            return a.processingTime - b.processingTime;
        }
        // If both priority and processing time are the same, maintain original order
        else {
            return 0; // No change in order
        }
    })
    
    return ans;
};

// Example usage:
const tasks = [
    {"id": "task1", "priority": 3, "processingTime": 100},
    {"id": "task2", "priority": 5, "processingTime": 50},
    {"id": "task3", "priority": 3, "processingTime": 50},
    {"id": "task4", "priority": 1, "processingTime": 10}
];

console.log("Optimized Task Queue:", optimizeTaskQueue(tasks));