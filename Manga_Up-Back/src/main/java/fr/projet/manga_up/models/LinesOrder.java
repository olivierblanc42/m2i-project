package fr.projet.manga_up.models;

import jakarta.persistence.*;

@Entity
@Table(name = "lines_orders")
public class LinesOrder {
    @Id
    @Column(name = "Id_lines_orders", nullable = false)
    private Integer id;

    @Column(name = "number_articles", nullable = false)
    private Integer numberArticles;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "Id_mangas", nullable = false)
    private Manga manga;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "Id_carts", nullable = false)
    private Cart cart;

    public Integer getId() {
        return id;
    }

    public Integer getNumberArticles() {
        return numberArticles;
    }

    public void setNumberArticles(Integer numberArticles) {
        this.numberArticles = numberArticles;
    }

	public Manga getManga() {
		return manga;
	}

	public void setManga(Manga manga) {
		this.manga = manga;
	}

	public Cart getCart() {
		return cart;
	}

	public void setCart(Cart cart) {
		this.cart = cart;
	}


}