package it.plansoft.warehouse.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import it.plansoft.warehouse.model.Product;

public interface ProductRepository extends JpaRepository<Product, Integer>{

}
