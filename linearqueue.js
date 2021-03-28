class queue
{

    constructor(capacity)
    {
        this.arr = new Array(capacity)
        this.size = 0
        this.front = -1
        this.rear = -1

    }

    isEmpty()
    {
        if(this.front == -1)
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
        if(this.isEmpty())
        {
            this.front = this.rear = 0
        }
        this.size += 1
        this.arr[this.rear] = value
        this.rear += 1
    }

    deque()
    {

        
        var n = this.arr[this.front] 
        for(let i =0 ;i<this.rear; i++)
        {
            this.arr[i] = this.arr[i+1]
        }
        this.rear -= 1
        this.size -= 1
        return n
    }


}