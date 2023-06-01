package com.benkhalifa.capstoneFood.service;

import java.util.List;

import com.benkhalifa.capstoneFood.model.Purchase;

public interface PurchaseService {
	public List<Purchase> getAll();
	public Purchase save (Purchase purchase );


}
