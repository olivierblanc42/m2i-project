package fr.projet.manga_up.dao;

import org.springframework.data.repository.CrudRepository;

import fr.projet.manga_up.model.User;

public interface UserDao extends CrudRepository<User, Integer> {

}
