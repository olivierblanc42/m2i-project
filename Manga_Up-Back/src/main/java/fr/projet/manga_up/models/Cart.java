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
    private PaymentCart idPaymentCart;

    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "Id_users", nullable = false)
    private User idUsers;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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

    public PaymentCart getIdPaymentCart() {
        return idPaymentCart;
    }

    public void setIdPaymentCart(PaymentCart idPaymentCart) {
        this.idPaymentCart = idPaymentCart;
    }

    public User getIdUsers() {
        return idUsers;
    }

    public void setIdUsers(User idUsers) {
        this.idUsers = idUsers;
    }

}