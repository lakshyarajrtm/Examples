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
            console.log("cannot peek")
            return
        }
        a = this.arr[this.top - 1]
        return a
    }

    push(value)
    {
        if(this.isFull())
        {
            console.log("stack is full")
            return
        }
        
        
        this.arr[this.top] = value
        this.size = this.size + 1
        this.top+=1
        return
    }

    pop()
    {
        var v = 0
        if(this.isEmpty())
        {
            console.log("stack is empty")
            return
        }
        
        this.top -= 1
        v = this.arr[ this.top]
        this.arr[this.top] = null
        this.size -= 1
        
        return v
    }

}


n = new stack(10)

n.push(1)
n.push(2)



console.log(n.peek())
console.log(n.arr)





