package fr.projet.manga_up.models;

import java.time.Instant;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "categories")
public class Category {
    @Id
    @Column(name = "Id_categories", nullable = false)
    private Integer id;

    @Column(name = "name", length = 50)
    private String name;

    @Lob
    @Column(name = "description")
    private String description;

    @Column(name = "created_at")
    private Instant createdAt;

    @OneToMany(mappedBy="category")
    @JsonManagedReference
    private List<Manga> mangas;

	public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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
    
    public List<Manga> getMangas() {
		return mangas;
	}

	public void setMangas(List<Manga> mangas) {
		this.mangas = mangas;
	}

}