#include<iostream>


int main(){
    
    
    for(int i=1;i<100;i++){
        
        if(!(i%15)){
            std::cout << "fizzbuzz" << std::endl;
        }
        else
        if(!(i%3)){
            std::cout << "fizz" << std::endl;
        }
        else
        if(!(i%5)){
            std::cout << "buzz" << std::endl;
        }
        else{
            std::cout << "i" << std::endl;
        }

      
     }
}
