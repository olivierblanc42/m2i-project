package fr.projet.manga_up.model;

import jakarta.persistence.*;

import java.time.Instant;

@Entity
@Table(name = "users", schema = "manga_up", uniqueConstraints = {
        @UniqueConstraint(name = "users_AK", columnNames = {"email"})
})
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id_users", nullable = false)
    private Integer id;

    @Column(name = "username", nullable = false, length = 50)
    private String username;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "fisrtname", length = 50)
    private String fisrtname;

    @Column(name = "lastname", length = 50)
    private String lastname;

    @Column(name = "created_at")
    private Instant createdAt;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "Id_addresses", nullable = false)
    private Address idAddresses;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "Id_genders", nullable = false)
    private Gender idGenders;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFisrtname() {
        return fisrtname;
    }

    public void setFisrtname(String fisrtname) {
        this.fisrtname = fisrtname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Instant createdAt) {
        this.createdAt = createdAt;
    }

    public Address getIdAddresses() {
        return idAddresses;
    }

    public void setIdAddresses(Address idAddresses) {
        this.idAddresses = idAddresses;
    }

    public Gender getIdGenders() {
        return idGenders;
    }

    public void setIdGenders(Gender idGenders) {
        this.idGenders = idGenders;
    }

}