package fr.projet.manga_up.models;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import org.hibernate.Hibernate;

import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class MangasGenreId implements Serializable {
    private static final long serialVersionUID = 6239417477304998479L;
    @Column(name = "Id_mangas", nullable = false)
    private Integer idMangas;

    @Column(name = "Id_genres", nullable = false)
    private Integer idGenres;

    public Integer getIdMangas() {
        return idMangas;
    }

    public Integer getIdGenres() {
        return idGenres;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        MangasGenreId entity = (MangasGenreId) o;
        return Objects.equals(this.idMangas, entity.idMangas) &&
                Objects.equals(this.idGenres, entity.idGenres);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idMangas, idGenres);
    }

}