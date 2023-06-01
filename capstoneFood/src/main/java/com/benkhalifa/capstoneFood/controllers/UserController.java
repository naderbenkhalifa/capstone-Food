package com.benkhalifa.capstoneFood.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.benkhalifa.capstoneFood.controllers.api.UserApi;
import com.benkhalifa.capstoneFood.model.User;
import com.benkhalifa.capstoneFood.service.UserService;
@CrossOrigin(origins = "*")
@RestController
public class UserController implements UserApi{
	@Autowired
	private UserService service;
	
	 @Override
	public User save(User user) {
		return service.save(user);
	}
	 
	 @Override 
	public List<User> findAll(){
		  return service.getAll();
	  }
	 
	 @Override 
	public User findByPassword(String password) {
		return service.getUserByPassword(password);
	}
	 
	 @Override
	public  User findByEmail(String email) {
		return service.getUserByEmail(email);
	}
	 
	 @Override
	public  void delete( Integer id) {
		 service.deleteUserById(id);
	}
	 
	 @Override 
	 public User findById(Integer id) {
		  return service.getUserById(id);
	  }
	 
	 public User findByEmailAndPassword( String email, String password) {
		 return service.getUserByEmailAndPassword(email, password);
	 }
	 
	 
	 public  User addUserLogin(User user) throws Exception {
		 String email=user.getEmail();
			String password=user.getPassword();
			User userobj=null;
			
			
			if(email!=null && password!=null)
			{
				userobj=service.getUserByEmailAndPassword(email, password);
			}
			if(userobj==null)
			{
				throw new Exception("Bad credentials ");
			}
				return userobj;
			}
	 }
	
	


