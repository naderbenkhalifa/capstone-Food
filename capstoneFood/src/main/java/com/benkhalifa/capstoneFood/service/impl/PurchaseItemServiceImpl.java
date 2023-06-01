package com.benkhalifa.capstoneFood.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.benkhalifa.capstoneFood.model.PurchaseItem;
import com.benkhalifa.capstoneFood.repo.PurchaseItemRepository;
import com.benkhalifa.capstoneFood.service.PurchaseItemService;

@Service
public class PurchaseItemServiceImpl implements PurchaseItemService  {
	@Autowired
	private PurchaseItemRepository repo;

	public List<PurchaseItem> getAll() {
		return repo.findAll();
	}
	
	public PurchaseItem save (PurchaseItem purchaseItem ) {
		return  repo.save(purchaseItem);
		
	}
	
	

}
