#include<iostream>
#include<any>

using namespace std;

int main(){

    any data;
    data=2;
    data="laksh";    
    string str = any_cast<string>(data);
    cin.get();
   
    
}