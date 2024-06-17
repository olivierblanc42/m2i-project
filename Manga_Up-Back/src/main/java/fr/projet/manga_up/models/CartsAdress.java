package fr.projet.manga_up.models;

import jakarta.persistence.*;

@Entity
@Table(name = "carts_adresses")
public class CartsAdress {
    @EmbeddedId
    private CartsAdressId id;

    @MapsId("idCarts")
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "Id_carts", nullable = false)
    private Cart idCarts;

    @MapsId("idAddresses")
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "Id_addresses", nullable = false)
    private Address idAddresses;

    public CartsAdressId getId() {
        return id;
    }

    public void setId(CartsAdressId id) {
        this.id = id;
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