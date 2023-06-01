package com.benkhalifa.capstoneFood.service;

import java.util.List;

import com.benkhalifa.capstoneFood.model.Food;

public interface FoodService {
	public Food save(Food food); 		
	public Food updateFood(int id,Food food);
	public void deleteFoodById(int id);						
	public Food getFoodById(int id);
	public List<Food> getAll();
	public List <Food>findByNameContaining(String name);


}
