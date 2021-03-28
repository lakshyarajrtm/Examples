class node
{
    constructor(value)
    {
        this.value = value
        this.prev = null
        this.next = null
        
    }
}

class linklist
{
    constructor(value)
    {
        this.root = new node(value)
        this.size = 1
        
    }

    insertNode(element, value)
    {
        var insert = new node(value)
        var current = element.root

        if(element.root == null)
        {
            this.root = insert
            this.size += 1
            return
        }

        while(current.next)
        {
            current = current.next    
        }

        current.next = insert
        current.next.prev = current
        this.size += 1    
    }

    deleteNode(delvalue)
    {
        var n = this.root

        if(this.size == 0)
        {
            console.log("list is empty")
            return
        }

        if(this.size == 1)
        {
            this.root = null
            this.size = 0
            return
        }

        if(delvalue == this.root.value)
        {
            this.root = this.root.next
            this.root.prev = null
            this.size -= 1
            return
        }
        
        while(n.next.value != delvalue)
        {
            n = n.next
            if(n.next == null)
            {
                console.log("value not present in node")
                return
            }
        }

        if(!n)
        {
            console.log("value not present so not deleted")
            return
        }
        else
        {
            if(n.next.next == null)
            {
                n.next = null
                return
            }
            n.next.next.prev = n
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
firstll.insertNode(firstll, 6)
firstll.insertNode(firstll, 8)
firstll.deleteNode(3)
firstll.deleteNode(8)
firstll.insertNode(firstll, 8)
firstll.displayValue(5)
firstll.displayValue(6)
firstll.displayValue(8)
firstll.displayValue(3)



console.log(firstll)