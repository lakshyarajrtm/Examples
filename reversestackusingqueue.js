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
        for(let i =0 ;i<=this.rear; i++)
        {
            this.arr[i+1] = this.arr[i]
        }
        this.rear -= 1
        this.size -= 1
        return n
    }


}

class stack
{
    
    constructor(capacity)
    {
        
        this.arr = new Array(capacity)
        this.size = 0
        this.top = 0
        this.capacity = capacity
        
    }

    isEmpty()
    {
        if(this.size == 0)
        {
            return true
        }
        else
        {
            return false
        }
    }

    isFull()
    {
        if(this.size == this.capacity)
        {
            return true
        }
        else
        {
            return false
        }
    }

    peek()
    {
        var a = 0
        if(this.isEmpty())
        {
            console.log("stack is empty")
            return
        }
        a = this.arr[this.top]
        
        return a
    }

    push(value)
    {
        if(this.isFull())
        {
            console.log("stack is full")
            return
        }
        this.size+=1
        
        this.arr[this.top] = value
        this.top+=1
    }

    pop()
    {
        var n = ''
        if(this.isEmpty())
        {
            console.log("stack is empty")
            return
        }
        
        n = this.arr[this.top-1]
        this.arr[this.top-1] = null
        this.size -= 1
        this.top -= 1
        return n
    }

}

function reverseStack(inStack, size)
{
    var newStack = new stack(size)
    var q = new queue(size)

    while(!inStack.isEmpty())
    {
        
        q.enque(inStack.pop())
        newStack.push(q.deque())
        
    }

    
    return newStack

}

s = new stack(10)
s.push(3)
s.push(2)
s.push(4)


var reversed = new stack(10)

reversed = reverseStack(s, 10)

console.log(reversed)