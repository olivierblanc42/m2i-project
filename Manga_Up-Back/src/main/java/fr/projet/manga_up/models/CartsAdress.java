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
    private Cart cart;

    @MapsId("idAddresses")
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "Id_addresses", nullable = false)
    private Address address;

    public CartsAdressId getId() {
        return id;
    }

	public Cart getCart() {
		return cart;
	}

	public void setCart(Cart cart) {
		this.cart = cart;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}



}