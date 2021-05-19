package it.plansoft.warehouse.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import it.plansoft.warehouse.model.Product;
import it.plansoft.warehouse.repository.ProductRepository;

@Service
public class ProductService {
	
	@Autowired
	ProductRepository productRepository;
	
	public List<Product> findAll() {
		return productRepository.findAll();
	}
	
	public Optional<Product> findById(int id) {
		return productRepository.findById(id);
	}
	
	public Product add(Product product) {
		return productRepository.save(product);
	}
	
	public Product update(Product product, int id) {
		if(productRepository.existsById(id)) {
			return productRepository.save(product);
		} 
		else {
			throw new RuntimeException("Prodotto non presente!!!");
		}
	}
	
	public void deleteById(int id) {
		productRepository.deleteById(id);
	}
}
