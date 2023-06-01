package com.benkhalifa.capstoneFood.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.benkhalifa.capstoneFood.controllers.api.PurchaseItemApi;
import com.benkhalifa.capstoneFood.model.PurchaseItem;
import com.benkhalifa.capstoneFood.service.PurchaseItemService;
@CrossOrigin(origins = "*")
@RestController
public class PurchaseItemController implements PurchaseItemApi {
	@Autowired
	private PurchaseItemService service;
	
	public PurchaseItem save(PurchaseItem purchaseItem) {
		return service.save(purchaseItem);
	}
	public List<PurchaseItem>findAll(){
		return service.getAll();
	}
	
	

}
