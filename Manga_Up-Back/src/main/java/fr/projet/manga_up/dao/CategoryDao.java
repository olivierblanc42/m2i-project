package fr.projet.manga_up.dao;

import org.springframework.data.repository.CrudRepository;

import fr.projet.manga_up.model.Category;

public interface CategoryDao extends CrudRepository<Category, Integer> {

}
