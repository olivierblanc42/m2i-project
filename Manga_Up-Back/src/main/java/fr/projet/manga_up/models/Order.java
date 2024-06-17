package fr.projet.manga_up.models;

import jakarta.persistence.*;

import java.time.Instant;

@Entity
@Table(name = "orders")
public class Order {
    @Id
    @Column(name = "Id_orders", nullable = false)
    private Integer id;

    @Column(name = "created_at")
    private Instant createdAt;

    @Column(name = "validation_date")
    private Instant validationDate;

    @Column(name = "invoice_date", length = 50)
    private String invoiceDate;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "Id_orders_status", nullable = false)
    private OrdersStatus idOrdersStatus;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "Id_carts", nullable = false)
    private Cart idCarts;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "Id_addresses", nullable = false)
    private Address idAddresses;

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

    public Instant getValidationDate() {
        return validationDate;
    }

    public void setValidationDate(Instant validationDate) {
        this.validationDate = validationDate;
    }

    public String getInvoiceDate() {
        return invoiceDate;
    }

    public void setInvoiceDate(String invoiceDate) {
        this.invoiceDate = invoiceDate;
    }

    public OrdersStatus getIdOrdersStatus() {
        return idOrdersStatus;
    }

    public void setIdOrdersStatus(OrdersStatus idOrdersStatus) {
        this.idOrdersStatus = idOrdersStatus;
    }

    public Cart getIdCarts() {
        return idCarts;
    }

    public void setIdCarts(Cart idCarts) {
        this.idCarts = idCarts;
    }

    public Address getIdAddresses() {
        return idAddresses;
    }

    public void setIdAddresses(Address idAddresses) {
        this.idAddresses = idAddresses;
    }

}