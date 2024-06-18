package fr.projet.manga_up.models;

import jakarta.persistence.*;

@Entity
@Table(name = "mangas_authors")
public class MangasAuthor {
    @EmbeddedId
    private MangasAuthorId id;

    @MapsId("idAuthors")
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "Id_authors", nullable = false)
    private Author idAuthors;

    @MapsId("idMangas")
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "Id_mangas", nullable = false)
    private Manga idMangas;

    public MangasAuthorId getId() {
        return id;
    }

    public void setId(MangasAuthorId id) {
        this.id = id;
    }

    public Author getIdAuthors() {
        return idAuthors;
    }

    public void setIdAuthors(Author idAuthors) {
        this.idAuthors = idAuthors;
    }

    public Manga getIdMangas() {
        return idMangas;
    }

    public void setIdMangas(Manga idMangas) {
        this.idMangas = idMangas;
    }

}