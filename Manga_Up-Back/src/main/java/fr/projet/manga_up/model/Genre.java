package fr.projet.manga_up.model;

import jakarta.persistence.*;

import java.time.Instant;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Table(name = "genres", schema = "manga_up")
public class Genre {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id_genres", nullable = false)
    private Integer id;

    @Column(name = "label", length = 50)
    private String label;

    @Column(name = "created_date")
    private Instant createdDate;

    @ManyToMany
    @JoinTable(name = "genres_mangases",
            joinColumns = @JoinColumn(name = "genre_Id_genres"),
            inverseJoinColumns = @JoinColumn(name = "mangases_Id_mangas"))
    private Set<Mangas> mangases = new HashSet<>();

    public Set<Mangas> getMangases() {
        return mangases;
    }

    public void setMangases(Set<Mangas> mangases) {
        this.mangases = mangases;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public Instant getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Instant createdDate) {
        this.createdDate = createdDate;
    }

}