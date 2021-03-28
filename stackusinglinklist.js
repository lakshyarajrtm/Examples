class node
{
    constructor(value)
    {
        this.value = value
        this.next = null
        
    }


}

class linklist
{
    constructor(value)
    {
        this.root = new node(value)
        this.size = 0
        
    }

    insertNode(element, value)
    {
        var insert = new node(value)
        
        var current = element.root

        if(element.root == null)
        {
            this.root = insert
        }
        

        while(current.next)
        {
            current = current.next
            
        }
        current.next = insert
        this.size += 1
        
    }

    deleteNode(delvalue)
    {
        var n = this.root
        while(n.next.value != delvalue)
        {
            n = n.next
        }

        if(!n)
        {
            console.log("value not present so not deleted")
        }
        else
        {
            n.next = n.next.next
            this.size -= 1
            
        }
       
    }

    displayValue(value)
    {
        var n = this.root
        if(n == null)
        {
            console.log("link list is empty")
            return
        }
        
        while(n)
        {
            
            if(n.value == value)
            {
                console.log(n.value)
                return
            }

            n = n.next
        }
        console.log("value not present in list")
        return
        
    }
}




class stack
{
    constructor(capacity)
    {
        
        this.base = new node()
        this.top = this.base
        this.size = 0
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

    ifFull()
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

    push(value)
    {
        
        if(this.size == 0)
        {
            this.base.value = value
            this.size += 1
            return
        }

        var n = new node(value)

        n.next = this.top
        this.top = n
        this.size += 1
        return


    }

    pop()
    {
        if(this.isEmpty())
        {
            console.log("stack is empty")
            return
        }

        var n = this.top
        this.top = this.top.next
        return n.value

    }

    peek()
    {
        if(this.isEmpty())
        {
            console.log("stack is empty")
            return
        }

        return this.top.value

    }
    
}