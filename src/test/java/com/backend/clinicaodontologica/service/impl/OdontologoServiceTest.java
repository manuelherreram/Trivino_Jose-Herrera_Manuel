package com.backend.clinicaodontologica.service.impl;

import com.backend.clinicaodontologica.dto.entrada.odontologo.OdontologoEntradaDto;
import com.backend.clinicaodontologica.dto.salida.odontologo.OdontologoSalidaDto;
import com.backend.clinicaodontologica.exceptions.BadRequestException;
import com.backend.clinicaodontologica.exceptions.ResourceNotFoundException;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class OdontologoServiceTest {

    @Autowired
    private OdontologoService odontologoService;

    @Test
    @Order(1)
    void deberiaRegistrarUnNuevoOdontologoYDevolverId() throws BadRequestException {
        // Arrange
        OdontologoEntradaDto odontologoEntradaDto = new OdontologoEntradaDto("1234567890", "Juan", "Perez");

        // Act
        OdontologoSalidaDto odontologoSalidaDto = odontologoService.registrarOdontologo(odontologoEntradaDto);

        // Assert
        assertNotNull(odontologoSalidaDto.getId());
        assertEquals("Juan", odontologoSalidaDto.getNombre());
        assertEquals("Perez", odontologoSalidaDto.getApellido());
    }

    @Test
    @Order(2)
    void deberiaObtenerUnOdontologoPorIdExistente() {
        // Arrange (Setup)
        Long idExistente = 1L;

        // Act
        OdontologoSalidaDto odontologoSalidaDto = odontologoService.buscarOdontologoPorId(idExistente);

        // Assert
        assertNotNull(odontologoSalidaDto);
    }

    @Test
    @Order(3)
    void deberiaLanzarResourceNotFoundExceptionAlBuscarPorIdInexistente() {
        // Arrange (Setup)
        Long idInexistente = 1000L;

        // Act & Assert
        assertThrows(ResourceNotFoundException.class, () -> {
            odontologoService.buscarOdontologoPorId(idInexistente);
        });
    }
}
