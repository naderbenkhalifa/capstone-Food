package com.benkhalifa.capstoneFood.service.impl;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.benkhalifa.capstoneFood.model.Food;
import com.benkhalifa.capstoneFood.repo.FoodRepository;
import com.benkhalifa.capstoneFood.service.FoodService;






@Service
public class FoodServiceImpl implements FoodService {
	@Autowired
	private FoodRepository repo;
	
	@Override
	public Food save(Food food) {
		return repo.save(food);
	}
	@Override
	public List<Food> getAll() {
		return repo.findAll();
		
	}
	@Override
	public Food getFoodById(int id) {
		return repo.findById(id).get();
	}
	
	@Override
	public void deleteFoodById(int id) {
		repo.deleteById(id);
	}
	@Override
	
	public Food updateFood(int id,Food food) {
		Food x=repo.findById(id).get();
			x.setName(food.getName());
			x.setAvailability(food.isAvailability());
			x.setAvatar(food.getAvatar());
			x.setDescription(food.getDescription());
			x.setPrice(food.getPrice());
			return repo.save(x);
	}
	@Override
	public List<Food> findByNameContaining(String name) {
		return repo.findByNameContaining(name);
		
	}
	
			
			
		
		
		
		
			

		
		
	
	
}
	
	


