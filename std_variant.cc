
#include<iostream>
#include<variant>


int main(){
    std::variant<std::string, int> data; // it can store either string or int
    data = "laksh";
    std::cout << std::get<std::string>(data); // this will get the string back 
    data = 2;
    std::cout << std::get<int>(data); // this will give integer value back
    // std::cout << std::ger<std::string>(data); uncommenting this will give error back as string data is no more stored

    // to error check if the data is what we expected we can use std:;get_if

    auto* value = std::get_if<std::string>(&data); // this gives a null ptr if data is not having a string value

    return;

}