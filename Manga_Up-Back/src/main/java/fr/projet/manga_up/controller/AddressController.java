package fr.projet.manga_up.controller;

import fr.projet.manga_up.model.Address;
import fr.projet.manga_up.service.AddressService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/addresses")
public class AddressController {

    private static final Logger LOGGER= LoggerFactory.getLogger(AddressController.class);


    @Autowired
    private AddressService addressService;

    @PostMapping
    public Address saveAddress(@RequestBody Address address) {
        LOGGER.info("Sauvegarde d'une addresse");
        return addressService.saveAddress(address);
    }

    @GetMapping("/{id}")
    public Address getAddressById(@PathVariable("id")Integer id) {
        LOGGER.info("Récupération d'une article avec l'id : " + id);
        return  addressService.getAddress(id);

    }


    @DeleteMapping("/{id}")
    public void deleteAddressById(@PathVariable("id")Integer id) {
        LOGGER.info("Suppression d'une " + id);
        addressService.deleteAddressById(id);
    }

}
