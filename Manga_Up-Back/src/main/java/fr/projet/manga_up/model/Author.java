package fr.projet.manga_up.model;

import jakarta.persistence.*;

import java.time.Instant;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Table(name = "authors", schema = "manga_up")
public class Author {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id_authors", nullable = false)
    private Integer id;

    @Column(name = "lastname", nullable = false, length = 100)
    private String lastname;

    @Column(name = "firstname", length = 50)
    private String firstname;

    @Lob
    @Column(name = "description")
    private String description;

    @Column(name = "created_at")
    private Instant createdAt;

    @ManyToMany
    @JoinTable(name = "authors_mangases",
            joinColumns = @JoinColumn(name = "author_Id_authors"),
            inverseJoinColumns = @JoinColumn(name = "mangases_Id_mangas"))
    private Set<Manga> mangases = new HashSet<>();

    public Set<Manga> getMangases() {
        return mangases;
    }

    public void setMangases(Set<Manga> mangases) {
        this.mangases = mangases;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Instant createdAt) {
        this.createdAt = createdAt;
    }

}