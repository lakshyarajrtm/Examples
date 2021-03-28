#include <iostream>
#include<string>

using namespace std;

typedef struct node{
    
public:
    std::string name;
    struct node* pnode = nullptr;
    
    std::string getName(){
        std::cout << name << std::endl;
    }
    
    void getNode(struct node n){
        pnode = &n;
    }
} node ; 



typedef struct linklist{
    
public:
    node root;
    
    node* head = &root;
    node* prev = nullptr;
    
    
    
    void attachNode(node n){
        head->getNode(n);
        prev = head;
        head = &n;
        
    }
    
    void deleteNode(){
        head = prev;
    }
    
    void getNodeName(){
    
        head->getName();
        
    }

} linklist;

int main()
{
    node n1;
    n1.name="laksh";
    linklist ll;
    ll.attachNode(n1);
    ll.getNodeName();
    ll.deleteNode();
    
    

    return 0;
}
