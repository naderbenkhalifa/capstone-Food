package com.benkhalifa.capstoneFood.service;

import java.util.List;

import com.benkhalifa.capstoneFood.model.PurchaseItem;

public interface PurchaseItemService {
	public List<PurchaseItem> getAll();
	public PurchaseItem save (PurchaseItem purchaseItem );
	

}
