package com.benkhalifa.capstoneFood.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.benkhalifa.capstoneFood.controllers.api.PaymentApi;
import com.benkhalifa.capstoneFood.model.Payment;
import com.benkhalifa.capstoneFood.service.PaymentService;

@CrossOrigin(origins = "*")
@RestController
public class PaymentController implements PaymentApi {
	@Autowired
	private PaymentService service;
	public Payment save(Payment payment) {
		return service.save(payment);
	}

}
