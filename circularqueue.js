class CircularQueue
{

    constructor(capacity)
    {
        this.arr = new Array(capacity)
        this.size = 0
        this.front = 0
        this.rear = 0
        this.capacity = capacity

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

    enque(value)
    {

        if(this.isFull())
        {
            console.log("queue is full")
            return
        }
        
        this.arr[this.rear] = value
        
        this.rear = (this.rear + 1) % this.capacity
        this.size += 1
        
    }

    deque()
    {

        
        var n = this.arr[this.front] 
        this.arr[this.front] = null
        this.front = (this.front + 1 ) % this.capacity
        this.size -= 1
        return n
    }


}



q = new CircularQueue(10)

q.enque(10)
q.enque(20)
q.enque(30)
q.deque()
q.enque(3)
q.enque(3)
q.enque(3)
q.enque(3)
q.enque(3)
q.enque(3)
q.enque(5)
q.enque(6)
q.enque(6)



console.log(q)

