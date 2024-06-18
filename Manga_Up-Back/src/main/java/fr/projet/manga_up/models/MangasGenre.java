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
    private Manga idMangas;

    @MapsId("idGenres")
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "Id_genres", nullable = false)
    private Genre idGenres;

    public MangasGenreId getId() {
        return id;
    }

    public void setId(MangasGenreId id) {
        this.id = id;
    }

    public Manga getIdMangas() {
        return idMangas;
    }

    public void setIdMangas(Manga idMangas) {
        this.idMangas = idMangas;
    }

    public Genre getIdGenres() {
        return idGenres;
    }

    public void setIdGenres(Genre idGenres) {
        this.idGenres = idGenres;
    }

}