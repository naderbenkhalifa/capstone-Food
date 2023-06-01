package com.benkhalifa.capstoneFood.controllers.api;




import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.benkhalifa.capstoneFood.model.Food;

import com.benkhalifa.capstoneFood.util.Constants;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@Api("foods")
public interface FoodApi {
	@PostMapping(value =Constants.APP_ROOT + "/foods/create", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	  @ApiOperation(value = "Enregistrer un aliment", notes = "Cette methode permet d'enregistrer un aliment", response = Food.class)
	  @ApiResponses(value = {
	      @ApiResponse(code = 200, message = "L'objet aliment crée"),
	      @ApiResponse(code = 400, message = "L'objet aliment n'est pas valide")
	  })
	 Food save(@RequestBody Food food);
	@GetMapping(value = Constants.APP_ROOT + "/foods/all", produces = MediaType.APPLICATION_JSON_VALUE)
	  @ApiOperation(value = "Renvoi la liste des aliments", notes = "Cette methode permet de chercher et renvoyer la liste des aliments qui existent "
	      + "dans la BDD", responseContainer = "List<Food>")
	  @ApiResponses(value = {
	      @ApiResponse(code = 200, message = "La liste des aliments / Une liste vide")
	  })
	  List<Food> findAll();
	 @DeleteMapping(value = Constants.APP_ROOT + "/foods/delete/{idfood}")
	  @ApiOperation(value = "Supprimer un aliment", notes = "Cette methode permet de supprimer un aliment par ID")
	  @ApiResponses(value = {
	      @ApiResponse(code = 200, message = "l'aliment a été supprimé")
	  })
	  void delete(@PathVariable("idfood") Integer id);
	 @PutMapping(value = Constants.APP_ROOT + "/foods/update/{id}", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	  @ApiOperation(value = "modifier un aliment", notes = "Cette methode permet de modifier un aliment", response = Food.class)
	  @ApiResponses(value = {
	      @ApiResponse(code = 200, message = "L'objet aliment a été modifié"),
	      @ApiResponse(code = 400, message = "L'objet aliment n'est pas valide")
	  })
	 Food updateFood(@PathVariable("id") Integer id, @RequestBody Food food);
	 
	 @GetMapping(value = Constants.APP_ROOT + "/foods/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	  @ApiOperation(value = "Rechercher un aliment par ID", notes = "Cette methode permet de chercher un aliment par son ID", response = Food.class)
	  @ApiResponses(value = {
	      @ApiResponse(code = 200, message = "L'aliment a ete trouve dans la BDD"),
	      @ApiResponse(code = 404, message = "Aucun aliment n'existe dans la BDD avec l'ID fourni")
	  })
	  Food findById(@PathVariable("id") Integer id);
	 
	 
	 
	 @GetMapping(value = Constants.APP_ROOT + "/foods/findByNameContaining/{name}", produces = MediaType.APPLICATION_JSON_VALUE)
	  @ApiOperation(value = "Renvoi la liste des alimentsByContaining name", notes = "Cette methode permet de chercher et renvoyer la liste des alimentsByContainingname qui existent "
	      + "dans la BDD", responseContainer = "List<Food>")
	  @ApiResponses(value = {
	      @ApiResponse(code = 200, message = "La liste des aliments / Une liste vide")
	  })
	 List <Food>findByNameContaining(@PathVariable("name") String name);





	
	
	

}
