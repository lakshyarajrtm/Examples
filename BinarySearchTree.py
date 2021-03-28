class node:

    def __init__(self, h, x):
        self.h = h
        self.x = x
        self.left = None
        self.right = None


def insert(root,key):

    if root is none:
        return node((root.h+1),key)

    if root.x < key:
        root.left = insert(root.left, key)
        
    else:
        root.right = insert(root.rigtht, key)

    

def inorder(root):

    parent = 0
    

    while(root):

        if(root.left != None or root.right != None):
            parent = root
        
        if(root.left):
            root = root.left

        elif(root.right):
            root = root.right
        
        else:
            print(parent.x)



