package com.backend.clinicaodontologica.dto.entrada.paciente;

import javax.validation.constraints.Digits;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;


public class DomicilioEntradaDto {


    @NotNull(message = "El campo calle no puede ser nulo")
    @NotBlank(message = "El campo calle no puede estar en blanco")
    private String calle;

    @NotNull(message = "El campo numero no puede ser nulo")
    @Digits(integer = 8, fraction = 0, message = "El número debe tener como máximo 8 dígitos")

    private int numero;

    public DomicilioEntradaDto() {
    }

    public DomicilioEntradaDto(String calle, int numero) {
        this.calle = calle;
        this.numero = numero;
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
