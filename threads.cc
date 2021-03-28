#include<iostream>
#include<thread>

static bool s_Finished = false;

void DoWork() {

	using namespace std::literals::chrono_literals;
	std::cout << "started thread id " << std::this_thread::get_id() <<std::endl;
	while (!s_Finished) {

		std::cout << "working... \n" << std::endl;
		std::this_thread::sleep_for(1s);
	}
}

int main() {
	
	
	std::thread worker(DoWork); // passing pointer of DoWork. notice without paranthesis

	std::cin.get();
	s_Finished = true;

	worker.join();
	std::cout << "Finished" << std::endl;
	std::cout << "ending thread id " << std::this_thread::get_id();

	std::cin.get();


}