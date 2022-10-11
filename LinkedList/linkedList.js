class ListNode {
    constructor(data) {
        this.head = {
            value: data,
            next: null
        }
        this.tail = this.head
        this.size = 1
    }
    appendNode(nodeData) {
        let newNode = {
            value: nodeData,
            next: null
        }
        this.tail.next = newNode
        this.tail = newNode
        this.size++
    }
    travesing() {
        let counter = 0;
        while (counter < this.size) {
            let currentNode = this.head
            console.log(currentNode)
            currentNode = currentNode.next
            counter++
        }
    }
    // delete node 
    deleteNode(index) {
        let counter = 1;
        let lead = this.head
        if (index === 1) {
            this.head = this.head.next
        }
        else {
            while (counter < index - 1) {
                lead = lead.next;
                counter++
            }
            let nextNode = lead.next.next;
            lead.next = nextNode
            console.log("lead>>>>>", lead)
            console.table(lead)
        }
    }
    // insert node
    insertNode(index, value) {
        let counter = 1;
        let currentNode = this.head
        while (counter > index) {
            counter++
            currentNode = currentNode.next
        }
        let nextNode = currentNode.next
        currentNode.next = {
            value: value,
            next: nextNode
        }
    }
    // search node
    searchNode(data) {

        let result = undefined
        let lead = this.head
        let loop = true
        while (loop) {
            lead = lead.next
            loop = !!lead

            if (loop && lead.value === data) {
                loop = false
                result = lead
            }
        }
        console.log("res", result)
    }

}
let list = new ListNode(300)
list.appendNode(400)
list.appendNode(500)
list.appendNode(600)
list.appendNode(700)
list.appendNode(800)
list.travesing()
list.searchNode(700)
list.deleteNode(2)
list.insertNode(2, 90000)
console.log(list)
