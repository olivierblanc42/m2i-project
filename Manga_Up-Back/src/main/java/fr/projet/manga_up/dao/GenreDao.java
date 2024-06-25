package fr.projet.manga_up.dao;

import org.springframework.data.repository.CrudRepository;

import fr.projet.manga_up.model.Genre;

public interface GenreDao extends CrudRepository<Genre, Integer> {

}
