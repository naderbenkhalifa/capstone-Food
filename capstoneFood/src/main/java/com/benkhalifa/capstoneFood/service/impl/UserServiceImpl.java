package com.benkhalifa.capstoneFood.service.impl;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.benkhalifa.capstoneFood.model.User;
import com.benkhalifa.capstoneFood.repo.UserRepository;
import com.benkhalifa.capstoneFood.service.UserService;


@Service
public class UserServiceImpl implements  UserService  {
	@Autowired
	private  UserRepository repo;
	
	@Override
	public User save(User user) {
		return repo.save(user);
	}

	@Override
	public List<User> getAll() {
		return repo.findAll();
	}

	

	@Override
	public User getUserByPassword(String password) {
		return repo.findByPassword(password);
	}

	@Override
	public User getUserByEmail(String email) {
		return repo.findUserByEmail(email);
	}


	

	@Override
	public User getUserByEmailAndPassword(String email, String password) {
		return repo.findByEmailAndPassword(email, password);
	}
	
	@Override
	public void deleteUserById(int id) {
		 repo.deleteById(id);
	}
	
	@Override
	public User getUserById(int id) {
		return repo.findById(id).get();
	}
	
	
	
	
	
	
	


}
