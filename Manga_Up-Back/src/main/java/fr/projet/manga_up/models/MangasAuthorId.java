package fr.projet.manga_up.models;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import org.hibernate.Hibernate;

import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class MangasAuthorId implements Serializable {
    private static final long serialVersionUID = -4085840532237465356L;
    @Column(name = "Id_authors", nullable = false)
    private Integer idAuthors;

    @Column(name = "Id_mangas", nullable = false)
    private Integer idMangas;

    public Integer getIdAuthors() {
        return idAuthors;
    }

    public void setIdAuthors(Integer idAuthors) {
        this.idAuthors = idAuthors;
    }

    public Integer getIdMangas() {
        return idMangas;
    }

    public void setIdMangas(Integer idMangas) {
        this.idMangas = idMangas;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        MangasAuthorId entity = (MangasAuthorId) o;
        return Objects.equals(this.idMangas, entity.idMangas) &&
                Objects.equals(this.idAuthors, entity.idAuthors);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idMangas, idAuthors);
    }

}