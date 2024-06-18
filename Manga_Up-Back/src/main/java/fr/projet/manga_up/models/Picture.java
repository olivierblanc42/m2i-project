package fr.projet.manga_up.models;

import jakarta.persistence.*;

@Entity
@Table(name = "pictures")
public class Picture {
    @Id
    @Column(name = "Id_pictures", nullable = false)
    private Integer id;

    @Lob
    @Column(name = "Blob_img")
    private String blobImg;

    @Column(name = "isPoster", nullable = false)
    private Boolean isPoster = false;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "Id_mangas", nullable = false)
    private Manga manga;

    public Integer getId() {
        return id;
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

	public Manga getManga() {
		return manga;
	}

	public void setManga(Manga manga) {
		this.manga = manga;
	}

}