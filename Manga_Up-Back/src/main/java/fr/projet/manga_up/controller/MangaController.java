package fr.projet.manga_up.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.projet.manga_up.models.Manga;
import fr.projet.manga_up.services.MangaService;

@CrossOrigin(origins ="*")
@RestController
@RequestMapping("/api/mangas")
public class MangaController {

	private static final Logger LOGGER=LoggerFactory.getLogger(MangaController.class);
	
	@Autowired
	private MangaService mangaService;
	
	@GetMapping(value="/{id}", produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Manga> getMangaId(@PathVariable Integer id){
		LOGGER.info("Obtenir un manga");
		Manga manga=mangaService.getManga(id);
		return ResponseEntity.ok(manga);
	}
}
