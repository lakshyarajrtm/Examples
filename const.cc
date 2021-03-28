
#include <iostream>

class Entity {
private:
    int x;
     
public:
    void GetX() const 
    {   
        // const in class method means it can't change data members 
        std::cout << x;
    }

    void SetX(int a) 
    {
        x = a;
    }
};

void printable(const Entity& a) 
{  
    // here if GetX would not have been const it would give error
    a.GetX();
}

int main()
{  
    std::cin.get();
}

