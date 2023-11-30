package com.backend.clinicaodontologica.entity;

import javax.persistence.*;

@Entity
@Table(name = "DOMICILIOS")
public class Domicilio {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(length = 50)
    private String calle;

    @Column(length = 8)
    private int numero;

    public Domicilio() {
    }

    public Domicilio(String calle, int numero) {
        this.calle = calle;
        this.numero = numero;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCalle() {
        return calle;
    }

    public void setCalle(String calle) {
        this.calle = calle;
    }

    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

}
