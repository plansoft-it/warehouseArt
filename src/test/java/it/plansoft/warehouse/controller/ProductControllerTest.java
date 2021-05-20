package it.plansoft.warehouse.controller;

import static org.hamcrest.CoreMatchers.is;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Optional;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
//import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import it.plansoft.warehouse.model.Product;
import it.plansoft.warehouse.service.ProductService;

@RunWith(SpringRunner.class)
@WebMvcTest(ProductController.class)
public class ProductControllerTest {

	@Autowired
	private MockMvc mvc;
	@MockBean
	ProductService productService;

	@Test
	public void testGetById() throws Exception {
		final int productId = 1;
		Product product = new Product("test", 1.0f, 10);

		when(this.productService.findById(productId)).thenReturn(Optional.of(product));
		mvc.perform(get("/products/" + productId)).andExpect(status().isOk())
				.andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
				.andExpect(jsonPath("$.description", is(product.getDescription())))
				.andExpect(jsonPath("$.price", is((double)product.getPrice())))
				.andExpect(jsonPath("$.amount", is(product.getAmount())));
	}
}
