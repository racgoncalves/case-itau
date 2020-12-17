package com.racgoncalves.controller;

import com.racgoncalves.entity.Colaborador;
import com.racgoncalves.repository.ColaboradorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ColaboradorController {

    @Autowired
    private ColaboradorRepository colaboradorRepository;

    @PostMapping("/colaborador")
    public Colaborador salvar(@RequestBody Colaborador colaborador) {
        return colaboradorRepository.save(colaborador);
    }

    @GetMapping("/colaborador")
    public List<Colaborador> obterTodos(){
        return colaboradorRepository.getAll();
    }

    @GetMapping("/colaborador/{id}")
    public Colaborador getColaboradorById(@PathVariable("id") String colaboradorId) {
        return colaboradorRepository.getColaboradorById(colaboradorId);
    }

    @DeleteMapping("/colaborador/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletar(@PathVariable("id") String colaboradorId) {
          colaboradorRepository.delete(colaboradorId);
    }

    @PutMapping("/colaborador/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void atualizar(@PathVariable("id") String colaboradorId, @RequestBody Colaborador colaborador) {
        colaboradorRepository.update(colaboradorId,colaborador);
    }
}
