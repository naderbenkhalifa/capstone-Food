package com.benkhalifa.capstoneFood.repo;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.benkhalifa.capstoneFood.model.Food;

@Repository
public interface FoodRepository extends JpaRepository<Food, Integer> {
	

	    List<Food> findByNameContaining(String name);
	
		

}
