class Node {
    constructor(data, next) {
        // Data stored in the node
        this.data = data;   
        // Pointer to the next node in the list
        this.next = next;    
    }
}

// Function to delete the
// middle node of a linked list
function deleteMiddle(head) {
    /* If the list is empty or has only,
     * one node return null as there is no
     * middle node to delete */
    if (head === null || head.next === null) {
        return null;
    }

    // Initialize slow and fast pointers
    let slow = head;
    let fast = head;
    fast = head.next.next;

    // Move 'fast' pointer twice as fast as 'slow'
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Delete the middle node by skipping it
    slow.next = slow.next.next;
    return head;
}

function printLL(head) {
    let temp = head;
    while (temp !== null) {
        console.log(temp.data + " ");
        temp = temp.next;
    }
    console.log("\n");
}

// Creating a sample linked list
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

// Display the original linked list
console.log("Original Linked List: ");
printLL(head);

// Deleting the middle node
head = deleteMiddle(head);

// Displaying the updated linked list
console.log("Updated Linked List: ");
printLL(head);

