package fr.projet.manga_up.model;

import jakarta.persistence.*;

import java.time.Instant;

@Entity
@Table(name = "comments", schema = "manga_up")
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id_comments", nullable = false)
    private Integer id;

    @Column(name = "rating")
    private Integer rating;

    @Column(name = "created_at")
    private Instant createdAt;

    @Lob
    @Column(name = "comment")
    private String comment;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Instant createdAt) {
        this.createdAt = createdAt;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

}