#include<iostream>
#include<string>
#include<memory>

class Entity {

public:

	Entity() {
		std::cout << "Create Entity" << std::endl;
	}

	~Entity() {
		std::cout << "Destroy Entity" << std::endl;
	}
	void print() {};

};

int main() 
{
	
	std::shared_ptr<Entity> s_e;
	std::weak_ptr<Entity> w_e;
	{
		std::unique_ptr<Entity> unique = std::make_unique<Entity>(); // only one pointer can exist to a unique entity
		unique->print();

		std::shared_ptr<Entity> shared = std::make_shared<Entity>(); // keep count of refrences and each reference dies if it goes
																	// out of scope , underlying object gets deleted when all references go out of scope
		s_e = shared;

		w_e = std::make_shared<Entity>(); // can point to shared ptr but do not increase reference count
		

	}
}