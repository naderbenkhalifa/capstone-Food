package com.benkhalifa.capstoneFood.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.benkhalifa.capstoneFood.model.Payment;


@Repository
public interface PaymentRepository extends JpaRepository< Payment, Integer> {

}
