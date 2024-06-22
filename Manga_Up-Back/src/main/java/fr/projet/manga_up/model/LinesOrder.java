package fr.projet.manga_up.model;

import jakarta.persistence.*;

@Entity
@Table(name = "lines_orders")
public class LinesOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id_lines_orders", nullable = false)
    private Integer id;

    @Column(name = "number_articles", nullable = false)
    private Integer numberArticles;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "Id_mangas", nullable = false)
    private Manga idMangas;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "Id_carts", nullable = false)
    private Cart idCarts;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getNumberArticles() {
        return numberArticles;
    }

    public void setNumberArticles(Integer numberArticles) {
        this.numberArticles = numberArticles;
    }

    public Manga getIdMangas() {
        return idMangas;
    }

    public void setIdMangas(Manga idMangas) {
        this.idMangas = idMangas;
    }

    public Cart getIdCarts() {
        return idCarts;
    }

    public void setIdCarts(Cart idCarts) {
        this.idCarts = idCarts;
    }

}