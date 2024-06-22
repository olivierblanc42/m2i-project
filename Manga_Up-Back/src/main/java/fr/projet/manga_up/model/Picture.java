package fr.projet.manga_up.model;

import jakarta.persistence.*;

@Entity
@Table(name = "pictures", schema = "manga_up")
public class Picture {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id_pictures", nullable = false)
    private Integer id;

    @Lob
    @Column(name = "Blob_img")
    private String blobImg;

    @Column(name = "isPoster", nullable = false)
    private Boolean isPoster = false;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "Id_mangas", nullable = false)
    private Mangas idMangas;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getBlobImg() {
        return blobImg;
    }

    public void setBlobImg(String blobImg) {
        this.blobImg = blobImg;
    }

    public Boolean getIsPoster() {
        return isPoster;
    }

    public void setIsPoster(Boolean isPoster) {
        this.isPoster = isPoster;
    }

    public Mangas getIdMangas() {
        return idMangas;
    }

    public void setIdMangas(Mangas idMangas) {
        this.idMangas = idMangas;
    }

}