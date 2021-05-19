package it.plansoft.warehouse.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import it.plansoft.warehouse.model.Product;
import it.plansoft.warehouse.service.ProductService;

@CrossOrigin
@RestController
public class ProductController {
	
	@Autowired
	ProductService productService;
	
	@GetMapping("/products")
	List<Product> getAll() {
		return productService.findAll();
	}
}
