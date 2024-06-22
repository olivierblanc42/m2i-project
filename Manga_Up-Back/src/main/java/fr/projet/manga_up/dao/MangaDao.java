package fr.projet.manga_up.dao;

import org.springframework.data.repository.CrudRepository;

import fr.projet.manga_up.model.Manga;

public interface MangaDao extends CrudRepository<Manga, Integer> {

}
