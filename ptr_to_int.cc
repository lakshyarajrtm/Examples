#include<cstdint>
#include<iostream>

int ptr_to_integer(int* ptr)
{
	// function to convert a pointer to integer
	int b = reinterpret_cast<uintptr_t>(ptr);
	return b;
}


