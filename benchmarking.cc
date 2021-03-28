#include<iostream>
#include<memory>
#include<chrono>


class Timer {

private:

    std::chrono::time_point<std::chrono::high_resolution_clock>  m_StartTimepoint;
	
public:
    Timer(){
		
		m_StartTimepoint = std::chrono::high_resolution_clock::now();
	}

	~Timer() {

		stop();
	}
 

	void stop() {
		
		auto endTimePoint = std::chrono::high_resolution_clock::now();

		auto start = std::chrono::time_point_cast<std::chrono::microseconds>(m_StartTimepoint).time_since_epoch().count();
		auto end = std::chrono::time_point_cast<std::chrono::microseconds>(endTimePoint).time_since_epoch().count();

		auto duration = end - start;
		std::cout << duration << "ms" << std::endl;
	}
};

int main() {

	{
		Timer timer;
		
		for (int i = 0;i++;i < 100)
			std::cout << "hello world";
	}

	std::cin.get();
	__debugbreak();    // set breakpoint for debugging

}