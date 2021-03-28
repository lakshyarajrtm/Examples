#include<iostream>
#include<vector>
#include<functional>

void PrintValue(int value) {
	
	std::cout << "value:" << value << std::endl;
}

void ForEach(const std::vector<int>& values , std::function<void(int)>& func) 
{
	for (int value : values) 
    {
		func(value);
    }
}



int main() 
{

	std::vector<int> values = { 1,2,3,4,5 };
	int a = 5;

	auto lamda = [=](int value) 
    {
		std::cout << "value:" << a << std::endl;
	};
	
	std::cin.get();
}