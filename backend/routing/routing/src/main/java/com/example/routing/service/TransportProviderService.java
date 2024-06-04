package com.example.routing.service;

import com.example.routing.entity.TransportProvider;
import com.example.routing.repository.TransportProviderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TransportProviderService {

    @Autowired
    private TransportProviderRepository providerRepository;

    public TransportProvider saveTransportProvider(TransportProvider transportProvider) {
        return providerRepository.saveAndFlush(transportProvider);
    }

    public List<TransportProvider> getTransportProvider() {
        return providerRepository.findAll();
    }

    public TransportProvider getTransportProviderById(int id) {
        return providerRepository.findById(id).orElse(null);
    }

    public void deleteTransportProvider(int id) {
        TransportProvider p = getTransportProviderById(id);

        if (p != null) {
            providerRepository.deleteById(p.getId());
        }
    }

    public TransportProvider updateTransportProvider(int id, TransportProvider transportProvider) {
        return providerRepository
                .findById(id)
                .map(value -> {
                    value.setCompanyName(transportProvider.getCompanyName());
                    value.setReview(transportProvider.getReview());
                    value.setCompanyAddress(transportProvider.getCompanyAddress());
                    value.setCompanyCoordinates(transportProvider.getCompanyCoordinates());

                    return providerRepository.save(value);
                })
                .orElseGet(() -> {
                    return providerRepository.save(transportProvider);
                });
    }
}
