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
        console.log(a)
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


const paranTable = { '{': 1, '}': 2, '(': 3, ')': 4, '[': 5, ']': 6 }


function paranCheck(paranString, table)
{
    stk = new stack(100)
   
    for(let i = 0; i< paranString.length; i++)
    {
        let found = false
    
        var k = 0
        

        for(var key in table)
        {
            
            
            if(paranString[i] == key)
            {
                found = true


                k = key
                break
            }   
            
        }

        if(found == false)
        {
            console.log("not a bracket")
            return
        }

        if((table[k] % 2) != 0)
            stk.push(k)  
    
        if((table[k] % 2) == 0)
        {
            if(stk.size == 0)
            {
                console.log("missing a opening paranthesis!")
                return
            }

            if((table[k] != table[stk.pop()] + 1))
            {
        
                console.log("mismatch paranthesis!")
                return
            }
        }

    }

    console.log("all brackets are matched")
    return

}

s = '[{{}}]'

console.log(s)
paranCheck(s, paranTable)



