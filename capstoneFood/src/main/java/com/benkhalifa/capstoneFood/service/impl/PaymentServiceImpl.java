package com.benkhalifa.capstoneFood.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.benkhalifa.capstoneFood.model.Payment;
import com.benkhalifa.capstoneFood.repo.PaymentRepository;
import com.benkhalifa.capstoneFood.service.PaymentService;
@Service
public class PaymentServiceImpl implements PaymentService {
	@Autowired
	private PaymentRepository repo;
	public Payment save(Payment payment) {
		return repo.save(payment);
		
	}

}
