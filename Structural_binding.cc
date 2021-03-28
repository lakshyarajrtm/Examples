#include<iostream>
#include<string>
#include<tuple>

std::tuple<std::string, int> CreatePerson() {
	return { "lakshya",20 };
}

int main() {
	auto[name, age] = CreatePerson();
}