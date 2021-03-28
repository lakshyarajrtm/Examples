class node
{
    constructor(priority, value)
    {
        this.priority = priority
        this.value = value
        this.next = null
    }
}




class priorityQueue
{

    constructor(capacity)
    {
        this.capacity = capacity
        this.size = 0
        this.front = null
        this.rear = null

    }

    isEmpty()
    {
        if(this.size == 0)
        {
            return true;
        }
        else
        {
            return false
        }
    }

    isFull()
    {
        if(this.size >= this.capacity)
        {
            return true
        }
        else
        {
            return false
        }
    }

    enque(queue, value, priority)
    {
        if(this.isFull())
        {
            console.log("the priority queue is full")
            return
        }

        if(queue.front == null)
        {
            queue.front = new node(value, priority)
            this.size += 1
            return
        }

        trav = queue.front
        insert = new node(value, priority)

        while(trav.next.priority >= insert.priority)
        {
            trav = trav.next
        }
        insert.next = trav.next
        trav.next = insert
        this.size += 1
        return

    }

    deque()
    {
        if(this.isEmpty())
        {
            console.log("queue is empty")
            return 
        }
        this.front = this.front.next
        this.size -= 1

    }


}