package br.com.cleandev.repositories;

import br.com.cleandev.entities.UsuarioEntity;
import org.springframework.data.jpa.repository.JpaRepository;

/* Possui como objetivo gerenciar a classe de domínio assim como o tipo de dado 
do id da classe. */
public interface UsuarioRepository extends JpaRepository<UsuarioEntity, Long> {
    
}