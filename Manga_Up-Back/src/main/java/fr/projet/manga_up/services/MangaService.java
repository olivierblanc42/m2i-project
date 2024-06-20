package fr.projet.manga_up.services;

import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

import fr.projet.manga_up.controller.MangaController;
import fr.projet.manga_up.dao.MangaDao;
import fr.projet.manga_up.models.Manga;

@Component
public class MangaService {

	private static final Logger LOGGER=LoggerFactory.getLogger(MangaController.class);
	
	@Autowired
	private MangaDao mangaDao;
	
	public Manga getManga(Integer id) {
		Optional<Manga> mangaOptional=mangaDao.findById(id);
		LOGGER.debug("Récupération info manga : ", mangaOptional);
		if(mangaOptional.isEmpty()) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Ce manga n'a pas été trouvé");
		}else {
			return mangaOptional.get();
		}
	}
}
