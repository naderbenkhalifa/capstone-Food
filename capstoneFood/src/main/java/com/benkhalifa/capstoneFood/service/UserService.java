package com.benkhalifa.capstoneFood.service;

import java.util.List;


import com.benkhalifa.capstoneFood.model.User;

public interface UserService {
	 public User save(User user);
	
	 public List<User> getAll();
	 public User getUserByPassword(String password);
	 public User getUserByEmail(String email);
	 public User getUserByEmailAndPassword(String email,String password);
	 public void deleteUserById(int id);
	 public User getUserById(int id);
	
	

}
