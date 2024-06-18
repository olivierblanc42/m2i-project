package fr.projet.manga_up.models;

import jakarta.persistence.*;

@Entity
@Table(name = "mangas_genres")
public class MangasGenre {
    @EmbeddedId
    private MangasGenreId id;

    @MapsId("idMangas")
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "Id_mangas", nullable = false)
    private Manga manga;

    @MapsId("idGenres")
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "Id_genres", nullable = false)
    private Genre genre;

    public MangasGenreId getId() {
        return id;
    }

	public Manga getManga() {
		return manga;
	}

	public void setManga(Manga manga) {
		this.manga = manga;
	}

	public Genre getGenre() {
		return genre;
	}

	public void setGenre(Genre genre) {
		this.genre = genre;
	}
}