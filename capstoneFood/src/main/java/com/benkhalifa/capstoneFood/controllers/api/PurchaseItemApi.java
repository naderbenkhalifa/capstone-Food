package com.benkhalifa.capstoneFood.controllers.api;

import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.benkhalifa.capstoneFood.model.PurchaseItem;
import com.benkhalifa.capstoneFood.util.Constants;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@Api("purchaseitems")
public interface PurchaseItemApi {
	@PostMapping(value =Constants.APP_ROOT + "/purchaseitems/create", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	  @ApiOperation(value = "Enregistrer un achat", notes = "Cette methode permet d'enregistrer un achat", response = PurchaseItem.class)
	  @ApiResponses(value = {
	      @ApiResponse(code = 200, message = "L'objet achat crée"),
	      @ApiResponse(code = 400, message = "L'objet achat n'est pas valide")
	  })
	 PurchaseItem save(@RequestBody PurchaseItem purchaseItem);
	@GetMapping(value = Constants.APP_ROOT + "/purchaseitems/all", produces = MediaType.APPLICATION_JSON_VALUE)
	  @ApiOperation(value = "Renvoi la liste des achats", notes = "Cette methode permet de chercher et renvoyer la liste des achats qui existent "
	      + "dans la BDD", responseContainer = "List<PurchaseItem>")
	  @ApiResponses(value = {
	      @ApiResponse(code = 200, message = "La liste des achats / Une liste vide")
	  })
	  List<PurchaseItem> findAll();
	

}
