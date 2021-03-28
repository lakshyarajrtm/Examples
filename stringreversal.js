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
        this.size -= 1
        this.top -= 1
        return n
    }

}

s = "lakshya"

console.log()

console.log("Original string: "+s)

srev = ""

stk = new stack(10)
for(let c of s)
{
    stk.push(c)
}



while(stk.isEmpty() != true)
{
    let n = ''
    n = stk.pop()
    srev += n
    n = ''
}
console.log()

console.log("Reversed String: "+srev)
