package fr.projet.manga_up.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "orders_status")
public class OrdersStatus {
    @Id
    @Column(name = "Id_orders_status", nullable = false)
    private Integer id;

    @Column(name = "label", length = 50)
    private String label;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

}