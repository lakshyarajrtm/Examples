
#include<iostream>
#include<thread>
#include<chrono>

struct Timer {

	std::chrono::time_point<std::chrono::steady_clock> start, end;
	std::chrono::duration<float> duration;

	Timer() {
		start = std::chrono::high_resolution_clock::now();
	}

	~Timer() {
		end = std::chrono::high_resolution_clock::now();
		duration = end - start;

		float ms = duration.count() * 1000.0f;
		std::cout << "Timer took " << ms << "ms" << std::endl;
	}
};

void hello() {

	Timer timer;

	for(int i=0;i<100;i++)
		std::cout << "hello" << std::endl;
}
int main() {

	hello();
}