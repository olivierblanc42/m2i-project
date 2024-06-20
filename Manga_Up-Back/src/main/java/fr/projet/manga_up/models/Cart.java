package fr.projet.manga_up.models;

import java.time.Instant;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

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

    @OneToMany(mappedBy="cart")
    private List<LinesOrder> linesOrder;
    
	@OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "Id_users", nullable = false)
    private User user;

    public Integer getId() {
        return id;
    }

    public List<LinesOrder> getLinesOrder() {
		return linesOrder;
	}

	public void setLinesOrder(List<LinesOrder> linesOrder) {
		this.linesOrder = linesOrder;
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