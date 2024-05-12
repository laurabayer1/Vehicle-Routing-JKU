package com.example.routing.controller;

import com.example.routing.entity.Person;
import com.example.routing.entity.TransportProvider;
import com.example.routing.service.PersonService;
import com.example.routing.service.TransportProviderService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "TransportProvider API", description = "")
@RestController
@CrossOrigin(origins = "*")
public class TransportProviderController {

    @Autowired
    private TransportProviderService providerService;

    @GetMapping("/transportProvider")
    @Operation(summary = "", description = "")
    public List<TransportProvider> getAllTransportProvider() {
        return providerService.getTransportProvider();
    }

    @GetMapping("/transportProvider/{id}")
    @Operation(summary = "", description = "")
    public TransportProvider getTransportProviderById(
            @Parameter(description = "", example = "123")
            @PathVariable int id
    ) {
        return providerService.getTransportProviderById(id);
    }

    @PutMapping("/transportProvider/{id}")
    public TransportProvider updateTransportProvider(
            @RequestBody TransportProvider transportProvider,
            @PathVariable int id
    ) {
        return providerService.updateTransportProvider(id, transportProvider);
    }

    @PostMapping("/transportProvider")
    public TransportProvider addTransportProvider(@RequestBody TransportProvider transportProvider) {
        return providerService.saveTransportProvider(transportProvider);
    }

    @DeleteMapping("/transportProviders/{id}")
    public void deleteTransportProvider(
            @PathVariable int id
    ) {
        providerService.deleteTransportProvider(id);
    }
}