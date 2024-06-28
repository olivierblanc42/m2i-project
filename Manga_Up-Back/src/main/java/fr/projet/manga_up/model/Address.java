package fr.projet.manga_up.model;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "addresses", schema = "manga_up")
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id_addresses", nullable = false)
    private Integer id;

    @Column(name = "line1", length = 50)
    private String line1;

    @Column(name = "line2", length = 50)
    private String line2;

    @Column(name = "line3", length = 50)
    private String line3;

    @Column(name = "city", length = 200)
    private String city;

    @Column(name = "postal_code", length = 5)
    private String postalCode;

    @ManyToMany
    @JoinTable(name = "addresses_carts",
            joinColumns = @JoinColumn(name = "address_Id_addresses"),
            inverseJoinColumns = @JoinColumn(name = "carts_Id_carts"))
    private Set<Cart> carts = new HashSet<>();

    @OneToMany
    private List<User> users;
    
    public Set<Cart> getCarts() {
        return carts;
    }

    public void setCarts(Set<Cart> carts) {
        this.carts = carts;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getLine1() {
        return line1;
    }

    public void setLine1(String line1) {
        this.line1 = line1;
    }

    public String getLine2() {
        return line2;
    }

    public void setLine2(String line2) {
        this.line2 = line2;
    }

    public String getLine3() {
        return line3;
    }

    public void setLine3(String line3) {
        this.line3 = line3;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }
    
    //Ajout d'une méthode qui permet d'afficher l'addresse
    @Override
    public String toString() {
        return "Address{" +
                "id=" + id +
                ", line1='" + line1 + '\'' +
                ", line2='" + line2 + '\'' +
                ", line3='" + line3 + '\'' +
                ", city='" + city + '\'' +
                ", postalCode='" + postalCode + '\'' +
                '}';
    }
}