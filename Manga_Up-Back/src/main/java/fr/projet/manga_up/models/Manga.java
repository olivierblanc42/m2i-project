package fr.projet.manga_up.models;

import java.math.BigDecimal;
import java.time.Instant;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

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
    @JsonBackReference
    private Category category;

    @OneToMany(mappedBy="manga")
    private List<Comment> comments;
    
    @OneToMany(mappedBy="manga")
    private List<LinesOrder> linesOrder;
    
    @OneToMany(mappedBy="manga")
    private List<Picture> pictures;
    
    public List<LinesOrder> getLinesOrder() {
		return linesOrder;
	}

	public void setLinesOrder(List<LinesOrder> linesOrder) {
		this.linesOrder = linesOrder;
	}

	public List<Comment> getComments() {
		return comments;
	}

	public void setComments(List<Comment> comments) {
		this.comments = comments;
	}

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

	public List<Picture> getPictures() {
		return pictures;
	}

	public void setPictures(List<Picture> pictures) {
		this.pictures = pictures;
	}
}