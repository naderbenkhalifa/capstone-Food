package com.benkhalifa.capstoneFood.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.benkhalifa.capstoneFood.controllers.api.FoodApi;
import com.benkhalifa.capstoneFood.model.Food;
import com.benkhalifa.capstoneFood.service.FoodService;




@CrossOrigin(origins = "*")
@RestController
public class FoodController implements FoodApi {
	@Autowired
	private FoodService service;
	
	public Food save(Food food) {
		return service.save(food);
	}
		
	
	public List<Food> findAll(){
		return service.getAll();
			  
	}
		
		
	public void delete( Integer id){
		service.deleteFoodById(id);
			 
	}
		  
		   public Food updateFood( Integer id,  Food food) {
			  return service.updateFood(id,food);
		  }
		   
		   
		   public Food findById(Integer id) {
			   return service.getFoodById(id);
			   
		   }


		@Override
		public List<Food> findByNameContaining(String name) {
			return service.findByNameContaining(name);
		
		}

	}
	
	
	
	


