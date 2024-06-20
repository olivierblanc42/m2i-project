package fr.projet.manga_up.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

import fr.projet.manga_up.dao.MangaDao;
import fr.projet.manga_up.models.Manga;

@Component
public class MangaService {

	@Autowired
	private MangaDao mangaDao;
	
	public Manga getManga(Integer id) {
		Optional<Manga> mangaOptional=mangaDao.findById(id);
		if(mangaOptional.isEmpty()) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Ce manga n'a pas été trouvé");
		}else {
			return mangaOptional.get();
		}
	}
}
