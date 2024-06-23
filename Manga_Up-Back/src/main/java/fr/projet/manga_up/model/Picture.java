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
    @Column(name = "Blob_img", columnDefinition="blob")
    private Byte[] img;

    @Column(name = "isPoster", nullable = false)
    private Boolean isPoster = false;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "Id_mangas", nullable = false)
    private Manga idMangas;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Byte[] getImg() {
		return img;
	}

	public void setImg(Byte[] img) {
		this.img = img;
	}

	public Boolean getIsPoster() {
        return isPoster;
    }

    public void setIsPoster(Boolean isPoster) {
        this.isPoster = isPoster;
    }

    public Manga getIdMangas() {
        return idMangas;
    }

    public void setIdMangas(Manga idMangas) {
        this.idMangas = idMangas;
    }

}