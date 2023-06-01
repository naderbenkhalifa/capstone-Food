package com.benkhalifa.capstoneFood.controllers;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.benkhalifa.capstoneFood.controllers.api.PurchaseApi;
import com.benkhalifa.capstoneFood.model.Purchase;
import com.benkhalifa.capstoneFood.service.PurchaseService;


@CrossOrigin(origins = "*")
@RestController
public class PurchaseController implements PurchaseApi {
	@Autowired
	private PurchaseService service;
	
	public Purchase save(Purchase purchase) {
		return service.save(purchase);
		
	}
	 
	public List<Purchase> findAll(){
		return service.getAll();
	}
	

}
