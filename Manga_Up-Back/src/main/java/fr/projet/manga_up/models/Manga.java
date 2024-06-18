package fr.projet.manga_up.models;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.time.Instant;

@Entity
@Table(name = "mangas")
public class Manga {
    @Id
    @Column(name = "Id_mangas", nullable = false)
    private Integer id;

    @Column(name = "title", length = 500)
    private String title;

    @Column(name = "release_date")
    private Instant releaseDate;

    @Lob
    @Column(name = "summary")
    private String summary;

    @Column(name = "created_at")
    private Instant createdAt;

    @Column(name = "price", precision = 10, scale = 2)
    private BigDecimal price;

    @Column(name = "point_fidelity")
    private Integer pointFidelity;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "Id_categories", nullable = false)
    private Category category;

    public Integer getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Instant getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(Instant releaseDate) {
        this.releaseDate = releaseDate;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Instant createdAt) {
        this.createdAt = createdAt;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public Integer getPointFidelity() {
        return pointFidelity;
    }

    public void setPointFidelity(Integer pointFidelity) {
        this.pointFidelity = pointFidelity;
    }

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

}