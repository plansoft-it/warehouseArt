package it.plansoft.warehouse.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import it.plansoft.warehouse.model.Product;
import it.plansoft.warehouse.service.ProductService;

@CrossOrigin
@RestController
public class ProductController {
	
	@Autowired
	ProductService productService;
	
	@GetMapping("/products")
	public List<Product> getAll() {
		return productService.findAll();
	}
	
	@GetMapping("/products/{id}")
	public Optional<Product> getById(@PathVariable int id) {
		return productService.findById(id);
	}
	
	@PostMapping("/products")
	public Product add(@RequestBody Product product) {
		return productService.add(product);
	}
	
	@PutMapping("/products/{id}")
	public Product update(@RequestBody Product product, @PathVariable int id) {
		return productService.update(product, id);
	}
	
	@DeleteMapping("/products/{id}")
	public void deleteById(@PathVariable int id) {
		productService.deleteById(id);
	}
}
