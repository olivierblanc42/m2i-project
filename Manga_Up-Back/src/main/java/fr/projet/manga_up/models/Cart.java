package fr.projet.manga_up.models;

import jakarta.persistence.*;

import java.time.Instant;

@Entity
@Table(name = "carts")
public class Cart {
    @Id
    @Column(name = "Id_carts", nullable = false)
    private Integer id;

    @Column(name = "created_at")
    private Instant createdAt;

    @Column(name = "status", nullable = false, length = 50)
    private String status;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "Id_Payment_cart", nullable = false)
    private PaymentCart paymentCart;

    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "Id_users", nullable = false)
    private User user;

    public Integer getId() {
        return id;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Instant createdAt) {
        this.createdAt = createdAt;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

	public PaymentCart getPaymentCart() {
		return paymentCart;
	}

	public void setPaymentCart(PaymentCart paymentCart) {
		this.paymentCart = paymentCart;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}


}