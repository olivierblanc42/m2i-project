package fr.projet.manga_up.models;

import java.time.Instant;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "payment_cart")
public class PaymentCart {
    @Id
    @Column(name = "Id_Payment_cart", nullable = false)
    private Integer id;

    @Column(name = "label", length = 50)
    private String label;

    @Column(name = "created_at")
    private Instant createdAt;

    @OneToMany(mappedBy="paymentCart")
    private List<Cart> carts;
    
    public List<Cart> getCarts() {
		return carts;
	}

	public void setCarts(List<Cart> carts) {
		this.carts = carts;
	}

	public Integer getId() {
        return id;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Instant createdAt) {
        this.createdAt = createdAt;
    }

}