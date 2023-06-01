package com.benkhalifa.capstoneFood.controllers.api;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.benkhalifa.capstoneFood.model.Payment;
import com.benkhalifa.capstoneFood.util.Constants;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@Api("payments")
public interface PaymentApi {
	@PostMapping(value =Constants.APP_ROOT + "/payment/create", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	  @ApiOperation(value = "Enregistrer un paiement", notes = "Cette methode permet d'enregistrer un paiement", response = Payment.class)
	  @ApiResponses(value = {
	      @ApiResponse(code = 200, message = "L'objet paiement crée"),
	      @ApiResponse(code = 400, message = "L'objet paiement n'est pas valide"),
	  })
	Payment save(@RequestBody Payment payment);

}
