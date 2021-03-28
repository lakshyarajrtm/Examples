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

firstll = new linklist(3)

firstll.insertNode(firstll, 5)

firstll.insertNode(firstll, 7)
firstll.displayValue(7)
firstll.deleteNode(7)
firstll.deleteNode(5)

console.log(firstll)

