package com.benkhalifa.capstoneFood.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.benkhalifa.capstoneFood.model.PurchaseItem;
@Repository
public interface PurchaseItemRepository extends JpaRepository<PurchaseItem,Integer> {

}
