package fr.projet.manga_up.models;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import org.hibernate.Hibernate;

import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class CartsAdressId implements Serializable {
    private static final long serialVersionUID = -647195448113550697L;
    @Column(name = "Id_carts", nullable = false)
    private Integer idCarts;

    @Column(name = "Id_addresses", nullable = false)
    private Integer idAddresses;

    public Integer getIdCarts() {
        return idCarts;
    }

    public void setIdCarts(Integer idCarts) {
        this.idCarts = idCarts;
    }

    public Integer getIdAddresses() {
        return idAddresses;
    }

    public void setIdAddresses(Integer idAddresses) {
        this.idAddresses = idAddresses;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        CartsAdressId entity = (CartsAdressId) o;
        return Objects.equals(this.idAddresses, entity.idAddresses) &&
                Objects.equals(this.idCarts, entity.idCarts);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idAddresses, idCarts);
    }

}